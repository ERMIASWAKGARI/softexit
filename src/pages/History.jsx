import { CheckCircle2, Clock, XCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getExamResults } from '../utils/examStorage'

export default function History() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      const examResults = getExamResults()
      setResults(Array.isArray(examResults) ? examResults : [])
    } catch (error) {
      console.error('Error loading exam results:', error)
      setResults([])
    } finally {
      setLoading(false)
    }
  }, [])

  const formatTime = (seconds) => {
    if (!seconds && seconds !== 0) return '--:--'
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`
  }

  const formatDate = (isoString) => {
    if (!isoString) return 'Unknown date'
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }
    return new Date(isoString).toLocaleDateString(undefined, options)
  }

  const getProgressColor = (percentage) => {
    if (percentage < 50) return 'bg-red-500'
    if (percentage < 75) return 'bg-yellow-400'
    return 'bg-green-500'
  }

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="text-center py-8">
          <div className="animate-pulse flex justify-center">
            <div className="h-8 w-64 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="mb-8 md:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Your Exam History
        </h1>
        <p className="mt-2 text-sm sm:text-base text-gray-600">
          Review your past exam attempts and track your progress
        </p>
      </div>

      {results.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-8 text-center max-w-2xl mx-auto">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 mb-4">
            <Clock className="h-6 w-6 text-gray-500" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No exam history yet
          </h3>
          <p className="text-gray-600 mb-6">
            Complete some exams to see your results here.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Browse Exams
          </Link>
        </div>
      ) : (
        <div className="space-y-4 sm:space-y-6">
          {[...results].reverse().map((result, index) => {
            const percentage = result.score?.percentage ?? 0
            const progressColor = getProgressColor(percentage)
            const passed = result.score?.passed ?? false

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                <div className="p-4">
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900 line-clamp-2">
                      {result.examTitle || 'Untitled Exam'}
                    </h2>
                    <div
                      className={`flex items-center gap-2 text-sm font-medium ${
                        passed ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {passed ? (
                        <CheckCircle2 className="h-5 w-5" />
                      ) : (
                        <XCircle className="h-5 w-5" />
                      )}
                      <span>{passed ? 'Passed' : 'Failed'}</span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        Score
                      </span>
                      <span
                        className={`text-sm font-semibold ${
                          percentage < 50
                            ? 'text-red-600'
                            : percentage < 75
                            ? 'text-yellow-600'
                            : 'text-green-600'
                        }`}
                      >
                        {percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full ${progressColor}`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span>
                        <span className="font-medium">Time:</span>{' '}
                        {formatTime(result.timeTaken)}
                      </span>
                    </div>
                    <div className="text-gray-600">
                      <span className="font-medium">Date:</span>{' '}
                      {formatDate(result.date)}
                    </div>
                    <div className="text-gray-600">
                      <span className="font-medium">Score:</span>{' '}
                      {result.score?.correct ?? 0}/{result.score?.total ?? '?'}{' '}
                      correct
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
