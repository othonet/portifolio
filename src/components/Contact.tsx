import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'; // Importando o SweetAlert2

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send('service_do25wpn', 'template_s35343j', {
        name: formData.name,
        email: formData.email,
        message: formData.message
      }, 'ExY4F-T9vyg1w7UtX')
      .then((response) => {
        console.log('Email enviado com sucesso!', response);
        Swal.fire({
          title: 'Sucesso!',
          text: 'Email enviado com sucesso!',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        setFormData({ name: '', email: '', message: '' }); // Limpa o formulário após o envio
      })
      .catch((err) => {
        console.error('Erro ao enviar o email:', err);
        Swal.fire({
          title: 'Erro!',
          text: 'Erro ao enviar o email. Tente novamente mais tarde.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      });
  };

  return (
    <section id="contato" className="section-padding bg-accent">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
          Entre em <span className="gradient-text">Contato</span>
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Vamos conversar!</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a href="mailto:ofbsantos@gmail.com" className="text-muted-foreground hover:text-primary">
                    ofbsantos@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Telefone/Whatsapp</p>
                  <a href="tel:+5574988099693" className="text-muted-foreground hover:text-primary">
                    +55 (74) 98809-9693
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Localização</p>
                  <p className="text-muted-foreground">Sobradinho, BA - Brasil</p>
                </div>
              </div>
            </div>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-background border border-input focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-background border border-input focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-background border border-input focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
