import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Plantal",
    description: "Site institucional.",
    image: "https://i.ibb.co/z2VV1ZZ/914-F0-B1-B-2-AAD-48-DF-9-B65-2-F4-C840-B523-D.png",
    tech: ["HTML5", "CSS3", "Bootstrap CSS", "Javascript", "PHP", "MySQL"],
    github: "",
    live: "https://plantal.com.br/"
  },
  {
    title: "SRAD - RJ",
    description: "Portal institucional.",
    image: "https://i.ibb.co/Nnqr8M7/EDD3-AC4-B-1177-4-F5-F-AD55-C92-F3-D8-F5-E7-B.png",
    tech: ["HTML5", "CSS3", "Bootstrap CSS", "Javascript", "PHP", "MySQL"],
    github: "",
    live: "https://srad-rj.org.br/"
  },
  {
    title: "Bios",
    description: "Site institucional.",
    image: "https://i.ibb.co/SBqXNHg/D7882455-66-F7-4-BE4-94-D6-E257-C96837-F1.png",
    tech: ["HTML5", "CSS3", "Bootstrap CSS", "Javascript", "PHP", "MySQL", "Laravel"],
    github: "",
    live: "https://www.site.biosaprova.com.br/"
  }
];

const Projects = () => {
  return (
    <section id="projetos" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
          Projetos <span className="gradient-text">Mais Recentes</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="gradient-border bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gradient-to-r from-primary/10 to-secondary/10 text-foreground px-3 py-1 rounded-full text-sm hover:from-primary/20 hover:to-secondary/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                      Código
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                      Demo
                    </a>
                  )}
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
