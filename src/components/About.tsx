export default function About() {
  const personalInfo = {
    name: 'Galih Nurhakiki',
    email: 'your.email@example.com',
    dateOfBirth: '11 November, 1997',
    from: 'Indonesia'
  }

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-yellow-300 text-gray-800 px-4 py-1 rounded-full text-sm mb-4">
            About Me
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Know Me More
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Hi, I'm <span className="text-yellow-500">Galih Nurhakiki</span>
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets client's requirements is our motto.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="text-6xl font-bold text-yellow-400 mb-2">22</div>
            <p className="text-gray-600">Years of Experience</p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-12 border-t pt-12">
          <div>
            <p className="text-gray-500 mb-1">Name:</p>
            <p className="font-medium">{personalInfo.name}</p>
          </div>
          <div>
            <p className="text-gray-500 mb-1">Email:</p>
            <p className="font-medium">{personalInfo.email}</p>
          </div>
          <div>
            <p className="text-gray-500 mb-1">Date of birth:</p>
            <p className="font-medium">{personalInfo.dateOfBirth}</p>
          </div>
          <div>
            <p className="text-gray-500 mb-1">From:</p>
            <p className="font-medium">{personalInfo.from}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
