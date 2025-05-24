// src/components/ExamsSection.jsx
import { useState } from 'react'
import allExams from '../data/examIndex'
import ExamCard from './ExamCard'

export default function ExamsSection() {
  const [showAll, setShowAll] = useState(false)
  const displayedExams = showAll ? allExams : allExams.slice(0, 6)

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#2c3e50] mb-2">
            Practice Exams
          </h2>
          <p className="text-xl text-[#666]">
            Test your knowledge with real university model and exit exams
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {displayedExams.map((exam) => (
            <ExamCard key={exam.id} exam={exam} />
          ))}
        </div>

        {allExams.length > 6 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-[#B80C09] text-white rounded-lg hover:bg-[#e74c3c] transition-colors"
            >
              {showAll ? 'Show Less' : 'See All Exams'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
