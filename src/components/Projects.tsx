import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'A modern web application built with Next.js and TypeScript',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      github: '#',
      live: '#',
      image: '/project1.jpg'
    },
    {
      title: 'Project 2',
      description: 'Full-stack e-commerce platform with real-time features',
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: '#',
      live: '#',
      image: '/project2.jpg'
    },
    {
      title: 'Project 3',
      description: 'Responsive dashboard with data visualization',
      technologies: ['React', 'D3.js', 'Material UI'],
      github: '#',
      live: '#',
      image: '/project3.jpg'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="animate-fadeIn">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2"
              >
                <div className="h-48 bg-gray-200">
                  {/* Add project image here */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href={project.live}
                      className="text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
