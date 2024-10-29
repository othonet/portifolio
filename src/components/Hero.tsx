import { Github, Linkedin, Mail } from 'lucide-react';
import StarryBackground from './StarryBackground';

const Hero = () => {
  return (
    <section id="início" className="relative min-h-screen flex items-center section-padding overflow-hidden">
      <StarryBackground /> {/* Efeito de fundo */}
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Othon Felipe, seu{' '}
            <span className="gradient-text">Desenvolvedor Web</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Transformando ideias em experiências digitais excepcionais através de código limpo e design intuitivo.
          </p>
          <div className="flex gap-4">
            <a
              href="#contato"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Entre em contato
            </a>
            <div className="flex gap-4">
              <a
                href="https://github.com/othonet"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:bg-accent transition-colors text-foreground"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/ofbsantos/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:bg-accent transition-colors text-foreground"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:ofbsantos@gmail.com"
                className="p-3 rounded-full hover:bg-accent transition-colors text-foreground"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
