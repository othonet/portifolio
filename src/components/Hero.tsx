import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="início" className="min-h-screen flex items-center section-padding">
      <div className="container mx-auto">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Olá, eu sou um{' '}
            <span className="gradient-text">Desenvolvedor Web</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transformando ideias em experiências digitais excepcionais através de código limpo e design intuitivo.
          </p>
          <div className="flex gap-4">
            <a
              href="#contato"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Entre em contato
            </a>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:seu@email.com"
                className="p-3 rounded-full hover:bg-gray-100 transition-colors"
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