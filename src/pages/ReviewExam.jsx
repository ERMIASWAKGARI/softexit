import { CheckCircle2, X, XCircle } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ExamTimer from '../components/ExamTimer'
import allExams from '../data/examIndex'
import { saveExamResult } from '../utils/examStorage'

export default function ReviewExam() {
  const { examId } = useParams()
  const navigate = useNavigate()
  const exam = allExams.find((e) => e.id === examId)

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState({})
  const [examCompleted, setExamCompleted] = useState(false)
  const [isReviewOpen, setIsReviewOpen] = useState(false)
  const [timeTaken, setTimeTaken] = useState(0)

  const questionRef = useRef(null)

  // Scroll to question when it changes
  useEffect(() => {
    questionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [currentQuestionIndex])

  useEffect(() => {
    if (examCompleted) {
      const score = calculateScore()
      saveExamResult(examId, exam.title, {
        correct: score.correct,
        total: score.total,
        percentage: score.percentage,
        passed: score.percentage >= 50,
        timeTaken,
      })
    }
  }, [examCompleted, examId, exam?.title])

  const currentQuestion = exam?.questions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === exam?.questions.length - 1
  const answeredCount = Object.keys(userAnswers).length

  const handleAnswerSelect = (answerIndex) => {
    if (examCompleted) return

    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: answerIndex,
    }))
  }

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      setExamCompleted(true)
      setIsReviewOpen(false) // Close review when submitting
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
    const correctAnswers = exam.questions.reduce((count, question) => {
      return userAnswers[question.id] === question.correctAnswerIndex
        ? count + 1
        : count
    }, 0)

    return {
      correct: correctAnswers,
      total: exam.questions.length,
      percentage: Math.round((correctAnswers / exam.questions.length) * 100),
    }
  }

  // Add this inside your component

  const handleRetakeExam = () => {
    setUserAnswers({})
    setCurrentQuestionIndex(0)
    setExamCompleted(false)
    setIsReviewOpen(false)
  }

  if (!exam) return <div className="p-4 text-center">Exam not found</div>

  // Results View - Shows after exam completion
  // Results View - Shows after exam completion
  if (examCompleted) {
    const score = calculateScore()
    const passed = score.percentage >= 50

    return (
      <div className="max-w-3xl mx-auto px-4 py-24">
        {/* Summary Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div
            className={`h-2 ${passed ? 'bg-green-500' : 'bg-red-500'}`}
          ></div>

          <div className="p-8 text-center">
            {/* Circular progress indicator */}
            <div className="relative inline-flex items-center justify-center mb-6">
              <svg className="w-32 h-32">
                <circle
                  className="text-gray-200"
                  strokeWidth="8"
                  stroke="currentColor"
                  fill="transparent"
                  r="56"
                  cx="64"
                  cy="64"
                />
                <circle
                  className={`${passed ? 'text-green-500' : 'text-red-500'}`}
                  strokeWidth="8"
                  strokeDasharray={`${score.percentage * 3.14}, 314`}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="56"
                  cx="64"
                  cy="64"
                />
              </svg>
              <div className="absolute text-3xl font-bold">
                {score.percentage}%
              </div>
            </div>

            {/* Result title */}
            <h1
              className={`text-3xl font-bold mb-2 ${
                passed ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {passed ? 'Congratulations!' : 'Keep Practicing!'}
            </h1>

            <p className="text-gray-600 mb-6">
              {passed
                ? 'You have successfully passed the exam.'
                : 'Review your answers to improve next time.'}
            </p>

            {/* Score breakdown */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">
                    {score.correct}
                  </div>
                  <div className="text-sm text-gray-500">Correct Answers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">
                    {score.total - score.correct}
                  </div>
                  <div className="text-sm text-gray-500">Incorrect Answers</div>
                </div>
              </div>
              <div className="text-sm text-gray-500 mt-2">
                Time Taken: {Math.floor(timeTaken / 60)}m {timeTaken % 60}s
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/')}
                className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Back to Home
              </button>
              <button
                onClick={() => setIsReviewOpen(true)}
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Review Answers
              </button>

              {!passed && (
                <button
                  onClick={handleRetakeExam}
                  className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
                >
                  Retake Exam
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Question Review Section - Only shown when isReviewOpen is true */}
        {isReviewOpen && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-[#2c3e50]">
                Exam Review: {exam.title}
              </h1>
              <button
                onClick={() => setIsReviewOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            {/* Question Navigation Grid */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Question Overview</h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                {exam.questions.map((q, idx) => {
                  const isCorrect = userAnswers[q.id] === q.correctAnswerIndex
                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentQuestionIndex(idx)}
                      className={`p-3 rounded-md text-center font-medium ${
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

            {/* Current Question Review */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold mb-4">
                Q{currentQuestionIndex + 1}: {currentQuestion.text}
              </h3>

              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = userAnswers[currentQuestion.id] === index
                  const isCorrect = index === currentQuestion.correctAnswerIndex
                  const optionLetters = ['A', 'B', 'C', 'D']

                  let optionClasses = 'p-3 border rounded-lg flex items-start'

                  if (isCorrect) {
                    optionClasses += ' bg-green-50 border-green-300'
                  }
                  if (isSelected) {
                    optionClasses += isCorrect
                      ? ' bg-green-100 border-green-500'
                      : ' bg-red-100 border-red-500'
                  }

                  return (
                    <div key={index} className={optionClasses}>
                      <span className="font-medium mr-2">
                        {optionLetters[index]}.
                      </span>
                      <span>{option}</span>
                      {isSelected && isCorrect && (
                        <CheckCircle2
                          className="ml-2 text-green-500"
                          size={18}
                        />
                      )}
                      {isSelected && !isCorrect && (
                        <XCircle className="ml-2 text-red-500" size={18} />
                      )}
                      {isCorrect && !isSelected && (
                        <span className="ml-2 text-sm text-green-600">
                          (Correct Answer)
                        </span>
                      )}
                    </div>
                  )
                })}
              </div>

              {currentQuestion.explanation && (
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="font-medium text-blue-800">Explanation:</p>
                  <p className="text-blue-700">{currentQuestion.explanation}</p>
                </div>
              )}
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between gap-4 mt-6">
              <button
                onClick={() => handlePreviousQuestion()}
                disabled={currentQuestionIndex === 0}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md disabled:opacity-50"
              >
                Previous Question
              </button>
              <button
                onClick={() => handleNextQuestion()}
                disabled={currentQuestionIndex === exam.questions.length - 1}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md disabled:opacity-50"
              >
                Next Question
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }

  // Exam Taking View
  return (
    <div className="max-w-4xl mx-auto px-4 py-24" ref={questionRef}>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        {/* Header with progress */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h1 className="text-xl font-bold text-[#2c3e50]">
            {exam.title} - Review Mode
          </h1>

          <div className="flex items-center gap-4">
            <span className="text-sm bg-gray-100 px-3 py-1 rounded">
              Question {currentQuestionIndex + 1} of {exam.questions.length}
            </span>
            <ExamTimer
              duration={120}
              onTimeUp={() => setExamCompleted(true)}
              onTick={(elapsed) => setTimeTaken(elapsed)}
            />
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Progress</span>
            <span>
              {Math.round((answeredCount / exam.questions.length) * 100)}%
            </span>
          </div>
          <div className="bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-[#B80C09] h-2.5 rounded-full"
              style={{
                width: `${(answeredCount / exam.questions.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Current Question */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">
            Q{currentQuestionIndex + 1}: {currentQuestion.text}
          </h2>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = userAnswers[currentQuestion.id] === index
              const optionLetters = ['A', 'B', 'C', 'D']

              return (
                <div
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`p-3 border rounded-lg flex items-start cursor-pointer ${
                    isSelected
                      ? 'bg-blue-100 border-blue-500'
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <span className="font-medium mr-2">
                    {optionLetters[index]}.
                  </span>
                  <span>{option}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <button
          onClick={handlePreviousQuestion}
          disabled={currentQuestionIndex === 0}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md disabled:opacity-50"
        >
          Previous Question
        </button>

        <button
          onClick={handleNextQuestion}
          disabled={userAnswers[currentQuestion.id] === undefined}
          className={`px-4 py-2 rounded-md bg-[#B80C09] hover:bg-[#e74c3c] text-white disabled:opacity-50`}
        >
          {isLastQuestion ? 'Submit Exam' : 'Next Question'}
        </button>
      </div>
    </div>
  )
}
