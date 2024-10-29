import { Github, Linkedin, Mail, MessageCircleMoreIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Othon Felipe</h2>
            <p className="text-muted-foreground text-center md:text-left">
              Sou apaixonado por tecnologia e desenvolvimento web, e busco construir soluções que fazem a diferença.
              <br/>
              Me chame em um dos meus canais de contato, e vamos ter uma conversa mais próxima. 😁
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com/othonet"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/ofbsantos"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:ofbsantos@gmail.com"
              className="hover:text-primary transition-colors"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://wa.me/+5574988099693" // Substitua pelo seu número de telefone no formato internacional
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <MessageCircleMoreIcon size={24} />
            </a>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Othon Felipe. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
