import { CheckCircle2, XCircle } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import allExams from '../data/examIndex'

export default function ReviewExam() {
  const { examId } = useParams()
  const navigate = useNavigate()
  const exam = allExams.find((e) => e.id === examId)

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState({})
  const [examCompleted, setExamCompleted] = useState(false)
  const questionRef = useRef(null)

  useEffect(() => {
    questionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [currentQuestionIndex])

  const currentQuestion = exam?.questions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === exam?.questions.length - 1
  const answeredCount = Object.keys(userAnswers).length

  const handleAnswerSelect = (answerIndex) => {
    if (examCompleted) return

    const newAnswers = {
      ...userAnswers,
      [currentQuestion.id]: answerIndex,
    }
    setUserAnswers(newAnswers)
  }

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      setExamCompleted(true)
    } else {
      setCurrentQuestionIndex((prev) => prev + 1)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1)
    }
  }

  const calculateScore = () => {
    const correct = exam.questions.reduce((score, question) => {
      return userAnswers[question.id] === question.correctAnswerIndex
        ? score + 1
        : score
    }, 0)
    return {
      count: correct,
      percentage: Math.round((correct / exam.questions.length) * 100),
    }
  }

  if (!exam) return <div className="p-4 text-center">Exam not found</div>

  if (examCompleted) {
    const score = calculateScore()
    return (
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold text-[#2c3e50] mb-6">
          Exam Results: {exam.title}
        </h1>
        <div className="mb-6 bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Your Score</h2>
            <span className="text-2xl font-bold">
              {score.count} / {exam.questions.length} ({score.percentage}%)
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {exam.questions.map((q, idx) => {
              const isCorrect = userAnswers[q.id] === q.correctAnswerIndex
              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentQuestionIndex(idx)}
                  className={`p-2 rounded-md text-center ${
                    isCorrect
                      ? 'bg-green-100 text-green-800 hover:bg-green-200'
                      : 'bg-red-100 text-red-800 hover:bg-red-200'
                  }`}
                >
                  Q{idx + 1}
                </button>
              )
            })}
          </div>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-[#B80C09] text-white rounded-md hover:bg-[#e74c3c]"
          >
            Back to Exams
          </button>
          <button
            onClick={() => {
              setCurrentQuestionIndex(0)
              setUserAnswers({})
              setExamCompleted(false)
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Retake Exam
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-4" ref={questionRef}>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-[#2c3e50]">
          {exam.title} - Review Mode
        </h1>
        <div className="flex items-center gap-4">
          <span className="text-sm">
            Question {currentQuestionIndex + 1} of {exam.questions.length}
          </span>
          <span className="text-sm bg-gray-200 px-2 py-1 rounded">
            Answered: {answeredCount}/{exam.questions.length}
          </span>
        </div>
      </div>

      <div className="mb-4">
        <div className="text-sm text-gray-700 mb-1">
          Progress: {Math.round((answeredCount / exam.questions.length) * 100)}%
        </div>
        <div className="bg-gray-200 rounded-full h-2">
          <div
            className="bg-[#B80C09] h-2 rounded-full"
            style={{
              width: `${(answeredCount / exam.questions.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">
          Q{currentQuestionIndex + 1}: {currentQuestion.text}
        </h2>

        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            const isSelected = userAnswers[currentQuestion.id] === index
            const isCorrect = index === currentQuestion.correctAnswerIndex
            const optionLetters = ['A', 'B', 'C', 'D']

            let optionClasses = 'p-3 border rounded-lg flex items-start'

            if (isSelected) {
              optionClasses += isCorrect
                ? ' bg-green-100 border-green-500'
                : ' bg-red-100 border-red-500'
            } else {
              optionClasses += ' border-gray-300 hover:bg-gray-50'
            }

            return (
              <div
                key={index}
                className={optionClasses}
                onClick={() => !examCompleted && handleAnswerSelect(index)}
              >
                <span className="font-medium mr-2">
                  {optionLetters[index]}.
                </span>
                <span>{option}</span>
                {isSelected && isCorrect && (
                  <CheckCircle2
                    className="ml-2 text-green-500 flex-shrink-0"
                    size={18}
                  />
                )}
                {isSelected && !isCorrect && (
                  <XCircle
                    className="ml-2 text-red-500 flex-shrink-0"
                    size={18}
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={handlePreviousQuestion}
          disabled={currentQuestionIndex === 0}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNextQuestion}
          disabled={userAnswers[currentQuestion.id] === undefined}
          className="px-4 py-2 bg-[#B80C09] text-white rounded-md hover:bg-[#e74c3c] disabled:opacity-50"
        >
          {isLastQuestion ? 'Submit Exam' : 'Next Question'}
        </button>
      </div>
    </div>
  )
}
