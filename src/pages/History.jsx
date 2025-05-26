import { CheckCircle2, XCircle } from 'lucide-react'
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

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24">
        <div className="text-center py-8">
          <p>Loading your exam history...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <h1 className="text-2xl font-bold text-[#2c3e50] mb-8">
        Your Exam History
      </h1>

      {results.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <p className="text-gray-600">
            No exam results yet. Take some exams to see your history here.
          </p>
          <Link
            to="/"
            className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Browse Exams
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {results.map((result, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-[#2c3e50]">
                    {result.examTitle || 'Untitled Exam'}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {result.date
                      ? new Date(result.date).toLocaleDateString()
                      : 'Unknown date'}{' '}
                    at{' '}
                    {result.date
                      ? new Date(result.date).toLocaleTimeString()
                      : 'unknown time'}
                  </p>
                </div>
                <div
                  className={`flex items-center ${
                    result.score?.passed ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {result.score?.passed ? (
                    <CheckCircle2 className="mr-1" size={18} />
                  ) : (
                    <XCircle className="mr-1" size={18} />
                  )}
                  <span className="font-bold">
                    {result.score?.percentage || 0}%
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <span className="text-gray-700">
                    Score: {result.score?.correct || 0}/
                    {result.score?.total || '?'}
                  </span>
                </div>
                <Link
                  to={`/exam/${result.examId}`}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Retake Exam
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
