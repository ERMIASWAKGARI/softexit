import { useEffect, useRef, useState } from 'react'

function ExamTimer({ duration, onTimeUp, onTick }) {
  const [timeLeft, setTimeLeft] = useState(duration)
  const endTimeRef = useRef(null)

  useEffect(() => {
    if (!endTimeRef.current) {
      endTimeRef.current = Date.now() + duration * 1000
    }

    const intervalId = setInterval(() => {
      const now = Date.now()
      const remaining = Math.max(
        0,
        Math.floor((endTimeRef.current - now) / 1000)
      )

      setTimeLeft(remaining)

      if (onTick) {
        const elapsed = duration - remaining
        onTick(elapsed)
      }

      if (remaining <= 0) {
        clearInterval(intervalId)
        if (onTimeUp) onTimeUp()
      }
    }, 1000)

    return () => clearInterval(intervalId)
  }, [duration, onTimeUp, onTick])

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  return (
    <div className="text-sm font-bold text-[#B80C09] px-3 py-1 rounded-md w-fit">
      {formatTime(timeLeft)}
    </div>
  )
}

export default ExamTimer
