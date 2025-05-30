import { CircleCheck, FileText } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { getExamResults } from '../utils/examStorage'

export default function ExamCard({ exam }) {
  const [showModal, setShowModal] = useState(false)
  const [userScore, setUserScore] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef(null)

  const modalRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false)
      }
    }

    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showModal])

  useEffect(() => {
    const allResults = getExamResults()
    const examResults = allResults
      .filter((result) => result.examId === exam.id)
      .sort((a, b) => new Date(b.date) - new Date(a.date)) // get the most recent

    if (examResults.length > 0) {
      const latest = examResults[0]
      setUserScore(latest.score.percentage) // or the whole score if you want more info
    } else {
      setUserScore(null)
    }
  }, [exam.id])

  return (
    <>
      <div
        ref={cardRef}
        onClick={() => setShowModal(true)}
        className={`relative overflow-hidden rounded-2xl shadow-lg cursor-pointer w-full max-w-sm mx-auto bg-white border border-gray-200
          transition-all duration-500 ease-out transform
          hover:shadow-xl hover:scale-105 hover:border-red-200
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}
      >
        <div className="h-36 flex items-center justify-center border-b border-gray-100 bg-red-50 overflow-hidden">
          <img
            src={`/${exam.image}`}
            alt={exam.title}
            className="max-h-full max-w-full object-contain transform transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="p-4 text-gray-800 bg-red-50 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-12 translate-x-full group-hover:translate-x-0" />
          <h3 className="text-lg font-semibold truncate relative hover:text-red-600 transition-colors duration-300">
            {exam.title}
          </h3>
          <p className="text-sm text-gray-500 mt-1 relative">
            {exam.questions.length} Questions
          </p>
          <p className="text-sm text-gray-500 mt-1 relative">
            {userScore !== null ? (
              <span className="inline-flex items-center">
                Score:
                <span className="ml-1 font-medium text-green-600 animate-fadeIn">
                  {userScore}% (latest)
                </span>
              </span>
            ) : (
              <span className="inline-block relative">
                Not Taken
                <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-gray-300 transition-all duration-300" />
              </span>
            )}
          </p>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div
            ref={modalRef}
            className="bg-red-50 rounded-xl max-w-md w-full p-6 shadow-2xl animate-slideUp"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Select Exam Mode
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              How do you want to take the <strong>{exam.title}</strong> exam?
            </p>

            <div className="space-y-4 mb-5">
              <Link
                to={`/exam/instant/${exam.id}`}
                state={{ mode: 'instant' }}
                className="flex items-start gap-3 w-full p-4 border border-gray-300 rounded-lg hover:border-red-400 transition cursor-pointer"
              >
                <CircleCheck className="text-[#B80C09] mt-1" size={28} />
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    Immediate Feedback Mode
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Get feedback after each question
                  </p>
                </div>
              </Link>

              <Link
                to={`/exam/review/${exam.id}`}
                state={{ mode: 'review' }}
                className="flex items-start gap-3 w-full p-4 border border-gray-300 rounded-lg hover:border-red-400 transition cursor-pointer"
              >
                <FileText className="text-[#B80C09] mt-1" size={28} />
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    Review Mode
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    See results at the end of the exam
                  </p>
                </div>
              </Link>
            </div>

            <button
              onClick={() => setShowModal(false)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:border-red-400 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  )
}
