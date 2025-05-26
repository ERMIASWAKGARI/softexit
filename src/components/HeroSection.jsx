import { useEffect, useState } from 'react'

const universities = [
  { name: 'Addis Ababa University', logo: './amu.png' },
  {
    name: 'Addis Ababa Science and Technology University',
    logo: './aastu.png',
  },
  { name: 'Bahir Dar University', logo: './bdu.png' },
  { name: 'Ministry of Education', logo: './moe.png' },
  { name: 'Jimma University', logo: './ju.png' },
  { name: 'Arba Minch University', logo: './amu.png' },
]

export default function HeroSection() {
  const [rotationAngle, setRotationAngle] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check screen size on mount and resize
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  useEffect(() => {
    let animationFrameId
    let lastTimestamp = 0
    const rotationSpeed = isMobile ? 0.1 : 0.2 // Slower on mobile

    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp
      setRotationAngle((prev) => (prev + rotationSpeed) % 360)
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrameId)
  }, [isMobile])

  return (
    <section
      className="text-[#2c3e50] bg-white py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
      style={{
        // background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        minHeight: isMobile ? 'auto' : 'calc(100vh - 80px)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          {/* Left side - Welcome text */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1
              className="font-bold mb-4 sm:mb-6"
              style={{
                fontSize: 'clamp(1.6rem, 5vw, 3rem)', // 28px to 56px
                lineHeight: 1.2,
              }}
            >
              Prepare for Your Exit Exam
            </h1>

            <p
              className="text-[#666] mb-6 md:mb-8 max-w-[500px] mx-auto lg:mx-0"
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', // 16px to 22px
                lineHeight: 1.6,
              }}
            >
              Access model exams from top Ethiopian universities and boost your
              preparation with these comprehensive resources.
            </p>

            <a
              href="/#exam-section"
              className="bg-[#B80C09] text-white px-6 py-3 rounded-lg font-semibold hover:-translate-y-1 transition-transform duration-200"
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', // 16px to 20px
              }}
            >
              Start Practicing Now
            </a>
          </div>

          {/* Right side - Rotating circle of logos */}
          <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px]">
              {/* Container for rotating circle */}
              <div
                className="absolute inset-0"
                style={{ transform: `rotate(${rotationAngle}deg)` }}
              >
                {/* Position each logo in a circle */}
                {universities.map((uni, index) => {
                  // Calculate position on circle (evenly spaced)
                  const angle = index * (360 / universities.length) - 90
                  const radius = isMobile ? 90 : 120 // Smaller radius on mobile
                  const x = radius * Math.cos((angle * Math.PI) / 180)
                  const y = radius * Math.sin((angle * Math.PI) / 180)

                  return (
                    <div
                      key={uni.name}
                      className={`absolute flex items-center justify-center p-2 bg-white rounded-full shadow-lg ${
                        isMobile ? 'w-20 h-20' : 'w-24 h-24 md:w-28 md:h-28'
                      }`}
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
                      }}
                    >
                      <img
                        src={uni.logo}
                        alt={uni.name}
                        className="w-full h-full object-contain p-1 md:p-2"
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
