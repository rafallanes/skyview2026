import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import logoSkyview from "@/assets/logo-skyview-alpha.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(0_0%_0%)] border-b border-[hsl(0_0%_15%)]">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={logoSkyview}
            alt="Skyview"
            className="h-[45px] w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <Link
            to="/que-hacemos"
            className="text-[hsl(0_0%_100%/0.8)] hover:text-[hsl(0_0%_100%)] text-xs font-medium tracking-widest uppercase transition-colors duration-300"
          >
            Qué Hacemos
          </Link>
          <Link
            to="/oficina-IA"
            className="text-[hsl(0_0%_100%/0.8)] hover:text-[hsl(0_0%_100%)] text-xs font-medium tracking-widest uppercase transition-colors duration-300"
          >
            Oficina IA
          </Link>
          <Link
            to="/casos-de-exito"
            className="text-[hsl(0_0%_100%/0.8)] hover:text-[hsl(0_0%_100%)] text-xs font-medium tracking-widest uppercase transition-colors duration-300"
          >
            Casos de Éxito
          </Link>
          {/* Recursos - oculto temporalmente */}
          <Link
            to="/contacto"
            className="text-[hsl(0_0%_100%/0.8)] hover:text-[hsl(0_0%_100%)] text-xs font-medium tracking-widest uppercase transition-colors duration-300"
          >
            Contacto
          </Link>
        </div>

        {/* Language Toggle */}
        <div className="hidden md:flex items-center">
          <Button
            variant="ghost"
            size="sm"
            className="text-[hsl(0_0%_100%/0.8)] hover:text-[hsl(0_0%_100%)] hover:bg-[hsl(0_0%_15%)] text-xs font-medium tracking-widest uppercase transition-colors duration-300 gap-1.5"
            disabled
          >
            <Globe className="h-3.5 w-3.5" />
            ES
          </Button>
        </div>

        {/* Mobile Toggle */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden text-[hsl(0_0%_100%)] hover:bg-[hsl(0_0%_15%)]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[hsl(0_0%_0%)] border-t border-[hsl(0_0%_15%)]">
          <div className="container mx-auto px-6 py-6 space-y-5">
            <Link
              to="/que-hacemos"
              onClick={() => setIsMenuOpen(false)}
              className="block text-[hsl(0_0%_100%/0.8)] hover:text-[hsl(0_0%_100%)] text-xs font-medium tracking-widest uppercase transition-colors duration-300"
            >
              Qué Hacemos
            </Link>
            <Link
              to="/oficina-IA"
              onClick={() => setIsMenuOpen(false)}
              className="block text-[hsl(0_0%_100%/0.8)] hover:text-[hsl(0_0%_100%)] text-xs font-medium tracking-widest uppercase transition-colors duration-300"
            >
              Oficina IA
            </Link>
            <Link
              to="/casos-de-exito"
              onClick={() => setIsMenuOpen(false)}
              className="block text-[hsl(0_0%_100%/0.8)] hover:text-[hsl(0_0%_100%)] text-xs font-medium tracking-widest uppercase transition-colors duration-300"
            >
              Casos de Éxito
            </Link>
            {/* Recursos - oculto temporalmente */}
            <Link
              to="/contacto"
              onClick={() => setIsMenuOpen(false)}
              className="block text-[hsl(0_0%_100%/0.8)] hover:text-[hsl(0_0%_100%)] text-xs font-medium tracking-widest uppercase transition-colors duration-300"
            >
              Contacto
            </Link>
            <div className="pt-4 border-t border-[hsl(0_0%_15%)]">
              <Button
                variant="ghost"
                size="sm"
                className="text-[hsl(0_0%_100%/0.8)] hover:text-[hsl(0_0%_100%)] hover:bg-[hsl(0_0%_15%)] text-xs font-medium tracking-widest uppercase transition-colors duration-300 gap-1.5"
                disabled
              >
                <Globe className="h-3.5 w-3.5" />
                ES
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
