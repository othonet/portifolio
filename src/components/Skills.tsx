import { Code, Database, Layout, Server } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="w-6 h-6" />,
    skills: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Backend",
    icon: <Server className="w-6 h-6" />,
    skills: ["Node.js", "Express", "REST APIs"]
  },
  {
    title: "Banco de Dados",
    icon: <Database className="w-6 h-6" />,
    skills: ["MongoDB", "PostgreSQL", "MySQL"]
  },
  {
    title: "Ferramentas",
    icon: <Code className="w-6 h-6" />,
    skills: ["Git", "BitBucket", "Docker", "VS Code"]
  }
];

const Skills = () => {
  return (
    <section id="habilidades" className="section-padding gradient-bg">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
          Minhas <span className="gradient-text">Habilidades</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="gradient-border p-6 bg-card/50 backdrop-blur-sm rounded-xl hover:shadow-xl transition-all duration-300 animate-fade-in hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg text-primary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gradient-to-r from-primary/10 to-secondary/10 text-foreground px-3 py-1 rounded-full text-sm hover:from-primary/20 hover:to-secondary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;