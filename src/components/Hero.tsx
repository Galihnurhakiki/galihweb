import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-yellow-300 px-4 relative">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="animate-fadeIn md:w-2/3">
            <p className="text-xl mb-2 text-gray-800">HI, I'M A FREELANCER</p>
            <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-6">
              GALIH
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              based in Indonesia
            </p>
            
            <div className="flex space-x-4">
              <a
                href="#projects"
                className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition-colors"
              >
                View My Works
              </a>
              <a
                href="#contact"
                className="bg-white text-gray-800 px-6 py-2 rounded hover:bg-gray-100 transition-colors flex items-center"
              >
                Contact Me <span className="ml-2">®</span>
              </a>
            </div>
          </div>
          
          <div className="md:w-1/3 mt-12 md:mt-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/profile.jpg"
                  alt="Galih"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <span className="block w-6 h-6 border-b-2 border-r-2 border-gray-800 transform rotate-45"></span>
        </div>
      </div>
    </section>
  )
}
