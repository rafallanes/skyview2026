import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/LanguageToggle";
import logoSkyview from "@/assets/logo-skyview.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border transition-colors duration-500 ${isScrolled ? "bg-background/95" : "bg-background/80"}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex-shrink-0">
          <img
            src={logoSkyview}
            alt="SkyView - Making AI Easy"
            className={`h-7 md:h-8 w-auto object-contain transition-all duration-500 ${isScrolled ? "brightness-0" : "brightness-0 invert"}`}
          />
        </Link>
        
        <div className="hidden md:flex items-center space-x-12">
          <a href="/que-hacemos" className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">QUÉ HACEMOS</a>
          <a href="/oficina-IA" className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">OFICINA IA</a>
          <a href="/proyectos" className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">CLIENTES</a>
          <a href="/blog" className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">RECURSOS</a>
          <a href="/contacto" className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">CONTACTO</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <LanguageToggle />
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'}
        </Button>
      </div>

      {isMenuOpen &&
      <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-6 py-6 space-y-4">
            <a href="/que-hacemos" className="block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">QUÉ HACEMOS</a>
            <a href="/oficina-IA" className="block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">OFICINA IA</a>
            <a href="/proyectos" className="block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">CLIENTES</a>
            <a href="/blog" className="block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">RECURSOS</a>
            <a href="/contacto" className="block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">CONTACTO</a>
            <div className="pt-4 border-t border-border">
              <LanguageToggle />
            </div>
          </div>
        </div>
      }
    </nav>
  );
};

export default Navigation;
