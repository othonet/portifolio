import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="bg-background">
        <Header />
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;