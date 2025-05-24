import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const { isDarkMode } = useTheme() // Add this line
  console.log('is dark mode? :', isDarkMode)
  return (
    <nav
      className={`bg-white shadow-md fixed w-full z-10 transition-colors duration-200`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-[#B80C09] dark:text-wite transition-colors duration-200">
                SoftExit
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-[#333] font-medium px-1 transition-colors duration-200 ${
                isDarkMode ? 'dark' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/history"
              className={`text-[#333] font-medium px-1 transition-colors duration-200 ${
                isDarkMode ? 'dark' : ''
              }`}
            >
              Progress Tracking
            </Link>
            <Link
              to="/study-group"
              className={`text-[#333] font-medium px-1 transition-colors duration-200 ${
                isDarkMode ? 'dark' : ''
              }`}
            >
              Study Group
            </Link>
            <Link
              to="/about"
              className={`text-[#333] font-medium px-1 transition-colors duration-200 ${
                isDarkMode ? 'dark' : ''
              }`}
            >
              About
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              className={`ml-4 inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none transition-colors duration-200 ${
                isDarkMode ? 'dark' : ''
              }`}
              aria-label="Open main menu"
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
