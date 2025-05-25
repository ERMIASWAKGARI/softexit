import { useState } from 'react'
import allExams from '../data/examIndex'
import ExamCard from './ExamCard'

export default function ExamsSection() {
  const [showAll, setShowAll] = useState(false)
  const displayedExams = showAll ? allExams : allExams.slice(0, 6)

  return (
    <section className="py-10 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2c3e50] mb-2">
            Practice Exams
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#666]">
            Test your knowledge with real university model and exit exams
          </p>
        </div>

        {/* Grid of Exams */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 mb-6 sm:mb-8">
          {displayedExams.map((exam) => (
            <ExamCard key={exam.id} exam={exam} />
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {allExams.length > 6 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-5 sm:px-6 py-2 sm:py-3 bg-[#B80C09] text-sm sm:text-base text-white rounded-lg hover:bg-[#e74c3c] transition-colors"
            >
              {showAll ? 'Show Less' : 'See All Exams'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
