import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoSkyview from "@/assets/logo-skyview.png";

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
            className="h-20 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <Link
            to="/"
            className="text-[hsl(0_0%_100%/0.8)] hover:text-[hsl(0_0%_100%)] text-xs font-medium tracking-widest uppercase transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/que-hacemos"
            className="text-[hsl(0_0%_100%/0.8)] hover:text-[hsl(0_0%_100%)] text-xs font-medium tracking-widest uppercase transition-colors duration-300"
          >
            What We Do
          </Link>
          <Link
            to="/oficina-IA"
            className="text-[hsl(0_0%_100%/0.8)] hover:text-[hsl(0_0%_100%)] text-xs font-medium tracking-widest uppercase transition-colors duration-300"
          >
            AI Office
          </Link>
          <Link
            to="/contacto"
            className="text-[hsl(0_0%_100%/0.8)] hover:text-[hsl(0_0%_100%)] text-xs font-medium tracking-widest uppercase transition-colors duration-300"
          >
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <Link to="/contacto">
            <Button
              className="bg-[hsl(0_0%_100%)] text-[hsl(0_0%_0%)] hover:bg-[hsl(0_0%_90%)] text-xs font-semibold tracking-widest uppercase rounded-sm px-6 py-2 transition-colors duration-300"
            >
              Get Started
            </Button>
          </Link>
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
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block text-[hsl(0_0%_100%/0.8)] hover:text-[hsl(0_0%_100%)] text-xs font-medium tracking-widest uppercase transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/que-hacemos"
              onClick={() => setIsMenuOpen(false)}
              className="block text-[hsl(0_0%_100%/0.8)] hover:text-[hsl(0_0%_100%)] text-xs font-medium tracking-widest uppercase transition-colors duration-300"
            >
              What We Do
            </Link>
            <Link
              to="/oficina-IA"
              onClick={() => setIsMenuOpen(false)}
              className="block text-[hsl(0_0%_100%/0.8)] hover:text-[hsl(0_0%_100%)] text-xs font-medium tracking-widest uppercase transition-colors duration-300"
            >
              AI Office
            </Link>
            <Link
              to="/contacto"
              onClick={() => setIsMenuOpen(false)}
              className="block text-[hsl(0_0%_100%/0.8)] hover:text-[hsl(0_0%_100%)] text-xs font-medium tracking-widest uppercase transition-colors duration-300"
            >
              Contact
            </Link>
            <div className="pt-4 border-t border-[hsl(0_0%_15%)]">
              <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-[hsl(0_0%_100%)] text-[hsl(0_0%_0%)] hover:bg-[hsl(0_0%_90%)] text-xs font-semibold tracking-widest uppercase rounded-sm px-6 py-2">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
