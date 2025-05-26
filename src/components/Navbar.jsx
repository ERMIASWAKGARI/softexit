import { Activity, Download, Home, Info, Menu, Users, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close on escape or click outside
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }

    const handleClickOutside = (e) => {
      const menu = document.getElementById('mobile-menu')
      if (menu && !menu.contains(e.target)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <nav className="bg-[#B80C09] fixed w-full z-50 transition-colors duration-200 px-8 py-2">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="flex items-center"
              onClick={() => window.scrollTo(0, 0)}
            >
              <span
                className="font-bold text-white transition-colors duration-200"
                style={{
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                }}
              >
                SoftExit
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white font-medium px-1 transition-colors duration-200"
              onClick={() => window.scrollTo(0, 0)}
            >
              Home
            </Link>

            <Link
              to="/history"
              className="text-white font-medium transition-colors duration-200"
            >
              Progress Tracking
            </Link>
            <a
              href="/#join-group"
              className="text-white font-medium px-1 transition-colors duration-200"
            >
              Study Group
            </a>
            <a
              href="/#about"
              className="text-white font-medium px-1 transition-colors duration-200"
            >
              About
            </a>

            <a
              href="/SoftExit.apk"
              download
              className="ml-4 flex items-center justify-center bg-white text-[#B80C09] font-semibold px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition-all duration-200"
            >
              <Download className="inline-block mr-2" size={16} />
              Download APK
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="ml-4 inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none transition-colors duration-200"
              aria-label="Open main menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && <div className="fixed inset-0 z-40 bg-opacity-40" />}

      {/* Slide-in menu */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 h-auto w-64 bg-[#B80C09] shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ minHeight: '100vh' }}
      >
        <div className="flex justify-between items-center px-4 py-5 border-b border-white">
          <span className="font-bold text-lg text-white ">Menu</span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white p-2 focus:outline-none hover:cursor-pointer transition-colors duration-200"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col px-6 py-4 space-y-4">
          <Link
            to="/"
            onClick={() => {
              setIsMenuOpen(false)
              window.scrollTo(0, 0)
            }}
            className="flex items-center space-x-2 text-white font-medium"
          >
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link
            to="/history"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center space-x-2 text-white font-medium"
          >
            <Activity size={18} />
            <span>Progress Tracking</span>
          </Link>
          <a
            href="/#join-group"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center space-x-2 text-white font-medium"
          >
            <Users size={18} />
            <span>Study Group</span>
          </a>
          <a
            href="/#about"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center space-x-2 text-white font-medium"
          >
            <Info size={18} />
            <span>About</span>
          </a>
          <a
            href="/SoftExit.apk"
            download
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center justify-center bg-white text-[#B80C09] font-semibold px-4 py-2 rounded-md shadow"
          >
            <Download className="inline-block mr-2" size={16} />
            Download APK
          </a>
        </div>
      </div>
    </nav>
  )
}
