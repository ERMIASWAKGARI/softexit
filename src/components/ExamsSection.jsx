// import { useState } from 'react'
// import { useExam } from '../contexts/ExamContext'

export default function ExamsSection() {
  // const { exams } = useExam()
  // const [showAll, setShowAll] = useState(false)

  // // Get first 6 exams for initial display
  // const displayedExams = showAll ? exams : exams.slice(0, 6)

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Practice Exams
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Test your knowledge with real university model and exit exams
          </p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedExams.map((exam) => (
            <ExamCard key={exam.id} exam={exam} />
          ))}
        </div> */}

        {/* {exams.length > 6 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {showAll ? 'Show Less' : 'See All Exams'}
            </button>
          </div>
        )} */}
      </div>
    </section>
  )
}
