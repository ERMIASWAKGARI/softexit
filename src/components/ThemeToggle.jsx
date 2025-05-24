import { useTheme } from '../contexts/ThemeContext'

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full focus:outline-none transition-colors duration-200"
      aria-label="Toggle dark mode"
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        {/* Moon icon for dark mode (shown when in light mode) */}
        <span
          className={`absolute text-gray-700 transition-opacity duration-300 ${
            isDarkMode ? 'opacity-0' : 'opacity-100'
          }`}
        >
          🌙
        </span>

        {/* Sun icon for light mode (shown when in dark mode) */}
        <span
          className={`absolute text-yellow-300 transition-opacity duration-300 ${
            isDarkMode ? 'opacity-100' : 'opacity-0'
          }`}
        >
          ☀️
        </span>
      </div>
    </button>
  )
}
