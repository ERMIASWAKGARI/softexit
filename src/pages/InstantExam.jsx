import { CheckCircle2, XCircle } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ExamTimer from '../components/ExamTimer'
import allExams from '../data/examIndex'
import { saveExamResult } from '../utils/examStorage'

export default function InstantExam() {
  const { examId } = useParams()
  const navigate = useNavigate()
  const exam = allExams.find((e) => e.id === examId)

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [examCompleted, setExamCompleted] = useState(false)
  const [hasAnswered, setHasAnswered] = useState(false)
  const [timeTaken, setTimeTaken] = useState(0)

  const questionRef = useRef(null)

  useEffect(() => {
    questionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [currentQuestionIndex])

  const currentQuestion = exam?.questions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === exam?.questions.length - 1
  const answeredCount = currentQuestionIndex + (showResults ? 1 : 0)

  const handleAnswerSelect = (answerIndex) => {
    if (examCompleted || showResults) return

    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: answerIndex,
    }))
    setHasAnswered(true)
  }

  const handleShowFeedback = () => {
    setShowResults(true)
  }

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      setExamCompleted(true)
    } else {
      setCurrentQuestionIndex((prev) => prev + 1)
      setHasAnswered(false)
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

  const calculateCurrentCorrect = () => {
    return exam.questions.slice(0, answeredCount).reduce((count, question) => {
      if (userAnswers[question.id] !== undefined) {
        return userAnswers[question.id] === question.correctAnswerIndex
          ? count + 1
          : count
      }
      return count
    }, 0)
  }

  if (!exam) return <div className="p-4 text-center">Exam not found</div>

  if (examCompleted) {
    const score = calculateScore()
    const { count, percentage } = score
    const passed = percentage >= 50

    if (!userAnswers.__resultSaved) {
      saveExamResult(examId, exam.title, {
        correct: count,
        total: exam.questions.length,
        percentage,
        passed,
        timeTaken,
      })

      setUserAnswers((prev) => ({ ...prev, __resultSaved: true }))
    }

    return (
      <div className="max-w-2xl max-h-2xl mx-auto px-4 py-24">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div
            className={`h-2 ${passed ? 'bg-green-500' : 'bg-red-500'}`}
          ></div>

          <div className="p-8 text-center ">
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
                  strokeDasharray={`${percentage * 3.14}, 314`}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="56"
                  cx="64"
                  cy="64"
                />
              </svg>
              <div className="absolute text-3xl font-bold">{percentage}%</div>
            </div>

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
                : 'You were close! Review the material and try again.'}
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">
                    {count}
                  </div>
                  <div className="text-sm text-gray-500">Correct Answers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">
                    {exam.questions.length - count}
                  </div>
                  <div className="text-sm text-gray-500">Incorrect Answers</div>
                </div>
              </div>
              <div className="text-sm text-gray-500 mt-2">
                Time Taken: {Math.floor(timeTaken / 60)}m {timeTaken % 60}s
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/')}
                className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Back to Home
              </button>
              <button
                onClick={() => {
                  setCurrentQuestionIndex(0)
                  setUserAnswers({})
                  setExamCompleted(false)
                  setShowResults(false)
                }}
                className={`flex-1 px-6 py-3 rounded-lg font-medium text-white transition-colors ${
                  passed
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-[#B80C09] hover:bg-[#e74c3c]'
                }`}
              >
                {passed ? 'Retake Exam' : 'Try Again'}
              </button>
            </div>
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
        <ExamTimer
          duration={60 * 60 * 3}
          onTimeUp={() => setExamCompleted(true)}
          onTick={(elapsed) => setTimeTaken(elapsed)}
        />
      </div>

      <div className="">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Progress</span>
          <span>
            {Math.round((answeredCount / exam.questions.length) * 100)}%
          </span>
        </div>

        <div className="bg-gray-200 rounded-full h-2.5 mb-4">
          <div
            className="bg-[#B80C09] h-2.5 rounded-full"
            style={{
              width: `${(answeredCount / exam.questions.length) * 100}%`,
            }}
          ></div>
        </div>

        <div className="flex items-center justify-end gap-6">
          <span className="text-sm">
            Question {currentQuestionIndex + 1} of {exam.questions.length}
          </span>
          <span className="text-sm bg-gray-200 px-2 py-1 rounded">
            Correct: {calculateCurrentCorrect()}/{answeredCount}
          </span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">{currentQuestion.text}</h2>

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

      <div className="flex justify-end mt-4">
        {hasAnswered && !showResults && (
          <button
            onClick={handleShowFeedback}
            className="px-4 py-2 bg-[#B80C09] text-white rounded-md hover:bg-[#e74c3c]"
          >
            Next
          </button>
        )}

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
