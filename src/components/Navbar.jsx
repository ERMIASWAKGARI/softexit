import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav
      className={`bg-[#B80C09]  fixed w-full z-10 transition-colors duration-200 px-8 py-2`}
    >
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span
                className="font-bold text-white transition-colors duration-200"
                style={{
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', // 16px to 20px
                }}
              >
                SoftExit
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-white font-medium hover:text-[#B80C09] px-1 transition-colors duration-200 `}
            >
              Home
            </Link>
            <Link
              to="/history"
              className={`text-white font-medium hover:text-[#B80C09] px-1 transition-colors duration-200 `}
            >
              Progress Tracking
            </Link>
            <Link
              to="/study-group"
              className={`text-white font-medium hover:text-[#B80C09] px-1 transition-colors duration-200 `}
            >
              Study Group
            </Link>
            <Link
              to="/about"
              className={`text-white font-medium hover:text-[#B80C09] px-1 transition-colors duration-200 `}
            >
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className={`ml-4 inline-flex items-center justify-center p-2 rounded-md text-gray-700 focus:outline-none transition-colors duration-200 `}
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
