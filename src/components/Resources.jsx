import { BookOpen, StickyNote, Video } from 'lucide-react'

export default function Resources() {
  const telegramLink = 'https://t.me/ermiwak2'

  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#2c3e50] mb-2">Resources</h2>
          <p className="text-xl text-[#333]">
            Access a variety of materials to enhance your preparation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Textbooks */}
          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-50 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col items-center text-center gap-4 cursor-pointer"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-[#B80C09] text-white rounded-full">
              <BookOpen size={24} />
            </div>
            <h3 className="text-lg font-semibold text-[#2c3e50]">Textbooks</h3>
          </a>

          {/* Video Lectures */}
          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-50 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col items-center text-center gap-4 cursor-pointer"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-[#B80C09] text-white rounded-full">
              <Video size={24} />
            </div>
            <h3 className="text-lg font-semibold text-[#2c3e50]">Videos</h3>
          </a>

          {/* Study Notes */}
          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-50 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col items-center text-center gap-4 cursor-pointer"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-[#B80C09] text-white rounded-full">
              <StickyNote size={24} />
            </div>
            <h3 className="text-lg font-semibold text-[#2c3e50]">
              Study Notes
            </h3>
          </a>
        </div>
      </div>
    </section>
  )
}
