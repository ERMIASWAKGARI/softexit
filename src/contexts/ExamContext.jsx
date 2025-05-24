import localforage from 'localforage'
import { createContext, useContext, useEffect, useState } from 'react'

const ExamContext = createContext()

export function ExamProvider({ children }) {
  const [exams, setExams] = useState([])
  const [currentExam, setCurrentExam] = useState(null)
  const [answers, setAnswers] = useState([])
  const [mode, setMode] = useState('review') // 'instant' or 'review'
  const [history, setHistory] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const savedHistory = await localforage.getItem('examHistory')
        if (savedHistory) setHistory(savedHistory)
      } catch (error) {
        console.error('Failed to load history:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [])

  const startExam = (examId, mode) => {
    const exam = exams.find((e) => e.id === examId)
    if (exam) {
      setCurrentExam(exam)
      setAnswers(Array(exam.questions.length).fill(null))
      setMode(mode)
    }
  }

  const submitAnswer = (questionIndex, answerIndex) => {
    const newAnswers = [...answers]
    newAnswers[questionIndex] = answerIndex
    setAnswers(newAnswers)
  }

  const finishExam = async () => {
    const score = calculateScore()
    const examResult = {
      examId: currentExam.id,
      examTitle: currentExam.title,
      date: new Date().toISOString(),
      score,
      totalQuestions: currentExam.questions.length,
      answers: [...answers],
    }

    const newHistory = [examResult, ...history]
    setHistory(newHistory)

    try {
      await localforage.setItem('examHistory', newHistory)
    } catch (error) {
      console.error('Failed to save history:', error)
    }

    return examResult
  }

  const calculateScore = () => {
    return currentExam.questions.reduce((score, question, index) => {
      return answers[index] === question.correctAnswerIndex ? score + 1 : score
    }, 0)
  }

  return (
    <ExamContext.Provider
      value={{
        exams,
        currentExam,
        answers,
        mode,
        history,
        isLoading,
        startExam,
        submitAnswer,
        finishExam,
        calculateScore,
        setExams,
      }}
    >
      {children}
    </ExamContext.Provider>
  )
}

export function useExam() {
  return useContext(ExamContext)
}
