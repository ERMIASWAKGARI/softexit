const resources = [
  {
    title: 'Textbooks',
    description:
      'Comprehensive textbooks covering all exam topics from various universities.',
    icon: '📚',
    count: '15+ books',
  },
  {
    title: 'Video Lectures',
    description:
      'Recorded lectures from top professors explaining key concepts.',
    icon: '🎥',
    count: '50+ videos',
  },
  {
    title: 'Study Notes',
    description:
      'Condensed notes summarizing important topics for quick review.',
    icon: '📝',
    count: '100+ notes',
  },
  {
    title: 'Past Papers',
    description:
      "Collections of previous years' exam questions with solutions.",
    icon: '📄',
    count: '200+ papers',
  },
]

export default function Resources() {
  return (
    <section className="py-12 bg-[#f5f6fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#2c3e50] mb-2">
            Study Resources
          </h2>
          <p className="text-xl text-[#333]">
            Access a variety of materials to enhance your preparation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{resource.icon}</div>
                <h3 className="text-xl font-semibold text-[#2c3e50] mb-2">
                  {resource.title}
                </h3>
                <p className="text-[#333] mb-4">{resource.description}</p>
                <span className="inline-block px-3 py-1 bg-[#f5f6fa] text-[#B80C09] rounded-full text-sm">
                  {resource.count}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
