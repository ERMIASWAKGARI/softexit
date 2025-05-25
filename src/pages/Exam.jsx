import { CheckCircle2, XCircle } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import allExams from '../data/examIndex'

export default function Exam() {
  const { examId } = useParams()
  const { state } = useLocation()
  const navigate = useNavigate()
  const mode = state?.mode || 'review'
  const isInstant = mode === 'instant'
  const isReview = mode === 'review'

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
  const answeredCount = Object.keys(userAnswers).length

  const handleAnswerSelect = (answerIndex) => {
    if (examCompleted) return
    const newAnswers = {
      ...userAnswers,
      [currentQuestion.id]: answerIndex,
    }
    setUserAnswers(newAnswers)

    if (isInstant) {
      setShowResults(true)
    }
  }

  const handleNextQuestion = () => {
    if (isInstant && showResults) {
      setShowResults(false)
      if (isLastQuestion) {
        setExamCompleted(true)
      } else {
        setCurrentQuestionIndex((prev) => prev + 1)
      }
    } else if (!isInstant) {
      if (isLastQuestion) {
        setExamCompleted(true)
      } else {
        setCurrentQuestionIndex((prev) => prev + 1)
      }
    }
  }

  const handlePreviousQuestion = () => {
    if (isInstant) return
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1)
      setShowResults(false)
    }
  }

  const calculateScore = () => {
    return exam.questions.reduce((score, question) => {
      return userAnswers[question.id] === question.correctAnswerIndex
        ? score + 1
        : score
    }, 0)
  }

  if (!exam) return <div className="p-4 text-center">Exam not found</div>

  if (examCompleted) {
    const score = calculateScore()
    const percentage = ((score / exam.questions.length) * 100).toFixed(0)

    return (
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold text-[#2c3e50] mb-6">
          Exam Results: {exam.title}
        </h1>

        <div className="mb-6 bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Your Score</h2>
            <span className="text-2xl font-bold">{percentage}%</span>
          </div>

          {isReview && (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {exam.questions.map((q, idx) => {
                const isCorrect = userAnswers[q.id] === q.correctAnswerIndex
                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      if (examCompleted && isReview) {
                        setCurrentQuestionIndex(idx)
                      }
                    }}
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
          )}
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-[#B80C09] text-white rounded-md hover:bg-[#e74c3c]"
          >
            Back to Exams
          </button>

          {isReview ||
            (isInstant && (
              <button
                onClick={() => {
                  setCurrentQuestionIndex(0)
                  setUserAnswers({})
                  setExamCompleted(false)
                  setShowResults(false)
                  questionRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  })
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Retake Exam
              </button>
            ))}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-4" ref={questionRef}>
      <div className="flex justify-between items-center mb-4 mt-20">
        <h1 className="text-xl font-bold text-[#2c3e50]">
          {exam.title} - {isInstant ? 'Instant Feedback' : 'Review Mode'}
        </h1>
        <div className="flex items-center gap-4 text-sm">
          <span>
            Question {currentQuestionIndex + 1} of {exam.questions.length}
          </span>
          <span className="bg-gray-200 px-2 py-1 rounded">
            Answered: {answeredCount}/{exam.questions.length}
          </span>
        </div>
      </div>

      {/* Question Block */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">
          Q{currentQuestionIndex + 1}: {currentQuestion.text}
        </h2>

        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            const isSelected = userAnswers[currentQuestion.id] === index
            const isCorrect = index === currentQuestion.correctAnswerIndex
            const optionLetters = ['A', 'B', 'C', 'D']

            let optionClasses =
              'p-3 border rounded-lg cursor-pointer flex items-start'

            if (examCompleted || showResults) {
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
                onClick={() => {
                  if (!examCompleted && (!showResults || !isInstant)) {
                    handleAnswerSelect(index)
                  }
                }}
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

      {isReview && examCompleted && currentQuestion && (
        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          <h2 className="text-lg font-semibold mb-4">
            Q{currentQuestionIndex + 1}: {currentQuestion.text}
          </h2>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = userAnswers[currentQuestion.id] === index
              const isCorrect = index === currentQuestion.correctAnswerIndex
              const optionLetters = ['A', 'B', 'C', 'D']

              let optionClasses = 'p-3 border rounded-lg flex items-start'

              if (isCorrect) {
                optionClasses += ' bg-green-100 border-green-500'
              } else if (isSelected && !isCorrect) {
                optionClasses += ' bg-red-100 border-red-500'
              } else {
                optionClasses += ' border-gray-300'
              }

              return (
                <div key={index} className={optionClasses}>
                  <span className="font-medium mr-2">
                    {optionLetters[index]}.
                  </span>
                  <span>{option}</span>
                  {isCorrect && (
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

          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="font-medium text-blue-800">Explanation:</p>
            <p className="text-blue-700">{currentQuestion.explanation}</p>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={handlePreviousQuestion}
          disabled={currentQuestionIndex === 0 || isInstant}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md disabled:opacity-50"
        >
          Previous
        </button>

        {/* Button Logic for Modes */}
        {isInstant ? (
          showResults && (
            <button
              onClick={handleNextQuestion}
              className="px-4 py-2 bg-[#B80C09] text-white rounded-md hover:bg-[#e74c3c]"
            >
              {isLastQuestion ? 'Finish Exam' : 'Next Question'}
            </button>
          )
        ) : (
          <button
            onClick={handleNextQuestion}
            disabled={userAnswers[currentQuestion.id] === undefined}
            className="px-4 py-2 bg-[#B80C09] text-white rounded-md hover:bg-[#e74c3c] disabled:opacity-50"
          >
            {isLastQuestion ? 'Submit Exam' : 'Next Question'}
          </button>
        )}
      </div>
    </div>
  )
}
