import { CheckCircle2, XCircle } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import allExams from '../data/examIndex'

export default function InstantExam() {
  const { examId } = useParams()
  const navigate = useNavigate()
  const exam = allExams.find((e) => e.id === examId)

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [examCompleted, setExamCompleted] = useState(false)
  const questionRef = useRef(null)

  useEffect(() => {
    questionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [currentQuestionIndex])

  const currentQuestion = exam?.questions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === exam?.questions.length - 1

  const handleAnswerSelect = (answerIndex) => {
    if (examCompleted) return

    const newAnswers = {
      ...userAnswers,
      [currentQuestion.id]: answerIndex,
    }
    setUserAnswers(newAnswers)
    setShowResults(true)
  }

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      setExamCompleted(true)
    } else {
      setCurrentQuestionIndex((prev) => prev + 1)
      setShowResults(false)
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
    const { count, percentage } = score
    const passed = percentage >= 50 // Adjust this threshold as needed

    return (
      <div className="max-w-3xl mx-auto px-4 py-24">
        <div className="bg-white shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold text-[#2c3e50] mb-4 text-center">
            🎉 Exam Completed!
          </h1>

          <p className="text-center text-lg text-gray-700 mb-8">
            {passed
              ? "Great job! You've shown strong understanding of the material."
              : 'Don’t sweat it. Use this as fuel to level up and try again!'}
          </p>

          <div className="bg-gray-100 rounded-md p-6 flex flex-col sm:flex-row justify-between items-center mb-8">
            <div className="text-center sm:text-left">
              <h2 className="text-lg font-semibold text-gray-800">
                Your Score
              </h2>
              <p className="text-2xl font-bold text-[#B80C09]">
                {count} / {exam.questions.length}
              </p>
            </div>

            <div className="mt-4 sm:mt-0 text-center sm:text-right">
              <h2 className="text-lg font-semibold text-gray-800">
                Percentage
              </h2>
              <p
                className={`text-2xl font-bold ${
                  passed ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {percentage}%
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-[#B80C09] text-white font-semibold rounded-md hover:bg-[#e74c3c] transition-colors"
            >
              ⬅ Back to Exams
            </button>

            <button
              onClick={() => {
                setCurrentQuestionIndex(0)
                setUserAnswers({})
                setExamCompleted(false)
                setShowResults(false)
              }}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
            >
              🔁 Retake Exam
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-24" ref={questionRef}>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-[#2c3e50]">
          {exam.title} - Instant Feedback
        </h1>
        <div className="text-sm font-medium">
          Question {currentQuestionIndex + 1} of {exam.questions.length}
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

            if (showResults) {
              if (isCorrect) {
                optionClasses += ' bg-green-100 border-green-500'
              } else if (isSelected && !isCorrect) {
                optionClasses += ' bg-red-100 border-red-500'
              } else {
                optionClasses += ' border-gray-300'
              }
            } else {
              optionClasses += isSelected
                ? ' bg-blue-100 border-blue-500'
                : ' border-gray-300 hover:bg-gray-50'
            }

            return (
              <div
                key={index}
                className={optionClasses}
                onClick={() => !showResults && handleAnswerSelect(index)}
              >
                <span className="font-medium mr-2">
                  {optionLetters[index]}.
                </span>
                <span>{option}</span>
                {showResults && isCorrect && (
                  <CheckCircle2
                    className="ml-2 text-green-500 flex-shrink-0"
                    size={18}
                  />
                )}
                {showResults && isSelected && !isCorrect && (
                  <XCircle
                    className="ml-2 text-red-500 flex-shrink-0"
                    size={18}
                  />
                )}
              </div>
            )
          })}
        </div>

        {showResults && (
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="font-medium text-blue-800">Explanation:</p>
            <p className="text-blue-700">{currentQuestion.explanation}</p>
          </div>
        )}
      </div>

      <div className="flex justify-end">
        {showResults && (
          <button
            onClick={handleNextQuestion}
            className="px-4 py-2 bg-[#B80C09] text-white rounded-md hover:bg-[#e74c3c]"
          >
            {isLastQuestion ? 'Finish Exam' : 'Next Question'}
          </button>
        )}
      </div>
    </div>
  )
}
