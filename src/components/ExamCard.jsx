import { CircleCheck, FileText } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ExamCard({ exam }) {
  const [showModal, setShowModal] = useState(false)
  const modalRef = useRef(null)

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

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-transform hover:scale-105 hover:shadow-xl w-full max-w-sm mx-auto bg-white border border-gray-200"
      >
        <div className="h-36 flex items-center justify-center border-b border-gray-100 bg-red-50">
          <img
            src={`/${exam.image}`}
            alt={exam.title}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <div className="p-4 text-gray-800 bg-red-50">
          <h3 className="text-lg font-semibold truncate">{exam.title}</h3>
          <p className="text-sm text-gray-500 mt-1">
            {exam.questions.length} Questions
          </p>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div
            ref={modalRef}
            className="bg-red-50 rounded-xl max-w-md w-full p-6 shadow-2xl"
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
