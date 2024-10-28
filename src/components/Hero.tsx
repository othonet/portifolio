import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="início" className="min-h-screen flex items-center section-padding">
      <div className="container mx-auto">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Olá, eu sou um{' '}
            <span className="gradient-text">Desenvolvedor Web</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Transformando ideias em experiências digitais excepcionais através de código limpo e design intuitivo.
          </p>
          <div className="flex gap-4">
            <a
              href="#contato"
              className="gradient-border relative overflow-hidden px-6 py-3 rounded-lg group transition-all duration-300 hover:-translate-y-1 bg-background/50 backdrop-blur-sm"
            >
              <span className="relative z-10 text-foreground font-medium">Entre em contato</span>
            </a>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-border p-3 rounded-full hover:bg-accent transition-all duration-300 hover:-translate-y-1 bg-background/50 backdrop-blur-sm"
              >
                <Github size={24} className="text-foreground" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-border p-3 rounded-full hover:bg-accent transition-all duration-300 hover:-translate-y-1 bg-background/50 backdrop-blur-sm"
              >
                <Linkedin size={24} className="text-foreground" />
              </a>
              <a
                href="mailto:seu@email.com"
                className="gradient-border p-3 rounded-full hover:bg-accent transition-all duration-300 hover:-translate-y-1 bg-background/50 backdrop-blur-sm"
              >
                <Mail size={24} className="text-foreground" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;