import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Projeto 1",
    description: "Uma aplicação web moderna construída com React e TypeScript",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tech: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com",
    live: "https://exemplo.com"
  },
  {
    title: "Projeto 2",
    description: "Sistema de gerenciamento com dashboard interativo",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tech: ["Next.js", "Node.js", "MongoDB"],
    github: "https://github.com",
    live: "https://exemplo.com"
  },
  {
    title: "Projeto 3",
    description: "E-commerce com integração de pagamentos",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tech: ["React", "Stripe", "Firebase"],
    github: "https://github.com",
    live: "https://exemplo.com"
  }
];

const Projects = () => {
  return (
    <section id="projetos" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Meus <span className="gradient-text">Projetos</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                    Código
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                  >
                    <ExternalLink size={20} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;