import { FaPalette, FaLaptopCode, FaCode } from 'react-icons/fa'

export default function Services() {
  const services = [
    {
      icon: <FaPalette className="text-4xl text-yellow-400" />,
      title: 'Graphic Design',
      description: 'Creating visually appealing designs that communicate your message effectively.'
    },
    {
      icon: <FaLaptopCode className="text-4xl text-yellow-400" />,
      title: 'Web Design',
      description: 'Designing modern and responsive websites that provide great user experience.'
    },
    {
      icon: <FaCode className="text-4xl text-yellow-400" />,
      title: 'Web Development',
      description: 'Building robust and scalable web applications using modern technologies.'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-yellow-300 text-gray-800 px-4 py-1 rounded-full text-sm mb-4">
            What I Do?
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            How I can help your next project
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-block mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
