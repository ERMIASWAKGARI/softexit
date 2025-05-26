import { Users } from 'lucide-react'

export default function JoinGroup() {
  return (
    <section id="join-group" className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-red-50 rounded-2xl p-6 sm:p-10 md:p-12 shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-2/3 w-full flex flex-col gap-6">
              {/* Icon + Text */}
              <div className="flex items-center gap-4">
                <div className=" p-2 rounded-full flex items-center justify-center">
                  <Users className="text-[#B80C09] " size={32} />
                </div>
                <div>
                  <h2 className="sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                    Join Our Study Group
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                    Connect with other students, share resources, and study
                    together!
                  </p>
                </div>
              </div>

              <a
                href="https://t.me/ermiwak2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center w-full px-4 sm:px-6 py-3 bg-[#B80C09] hover:-translate-y-1 text-white rounded-lg font-semibold hover:bg-red-700 transition text-sm sm:text-base md:text-lg"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                Join Telegram Group
              </a>
            </div>

            <div className="md:w-1/3 w-full flex justify-center">
              <div className="text-center">
                <img
                  src="./qrcode.png"
                  alt="Join via QR Code"
                  className="h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40 object-contain border border-gray-300 p-2 bg-white rounded-lg shadow-sm"
                />
                <p className="text-xs sm:text-sm text-gray-500 mt-2">
                  Scan to join on mobile
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
