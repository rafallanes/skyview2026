import { useState } from "react";
import { Link } from "react-router-dom";
import { Globe, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import logoSkyview from "@/assets/logo-skyview-alpha.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  const currentLang = i18n.language?.startsWith("en") ? "EN" : "ES";

  const linkClass =
    "text-[hsl(0_0%_100%/0.8)] hover:text-[hsl(0_0%_100%)] text-xs font-medium tracking-widest uppercase transition-colors duration-300";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(0_0%_0%)] border-b border-[hsl(0_0%_15%)]">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={logoSkyview}
            alt="Skyview"
            className="h-[45px] w-auto object-contain transition-all duration-300 hover:brightness-[1.15] hover:scale-[1.03]"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <Link to="/que-hacemos" className={linkClass}>{t("nav.whatWeDo")}</Link>
          <Link to="/oficina-IA" className={linkClass}>{t("nav.officeIA")}</Link>
          <Link to="/casos-de-exito" className={linkClass}>{t("nav.caseStudies")}</Link>
          <Link to="/contacto" className={linkClass}>{t("nav.contact")}</Link>
        </div>

        {/* Language Toggle */}
        <div className="hidden md:flex items-center">
          <button
            onClick={toggleLanguage}
            className={`${linkClass} flex items-center gap-1.5 cursor-pointer`}
          >
            <Globe className="h-3.5 w-3.5" />
            {currentLang}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex items-center justify-center w-11 h-11 text-[hsl(0_0%_100%)] hover:bg-[hsl(0_0%_15%)] rounded-sm transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-0 bg-[hsl(0_0%_0%/0.3)] z-[-1] md:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="md:hidden bg-[hsl(0_0%_0%)] border-t border-[hsl(0_0%_15%)]">
            <div className="container mx-auto px-6 py-6 space-y-5 flex flex-col items-end">
              <Link to="/que-hacemos" onClick={() => setIsMenuOpen(false)} className={`block ${linkClass}`}>{t("nav.whatWeDo")}</Link>
              <Link to="/oficina-IA" onClick={() => setIsMenuOpen(false)} className={`block ${linkClass}`}>{t("nav.officeIA")}</Link>
              <Link to="/casos-de-exito" onClick={() => setIsMenuOpen(false)} className={`block ${linkClass}`}>{t("nav.caseStudies")}</Link>
              <Link to="/contacto" onClick={() => setIsMenuOpen(false)} className={`block ${linkClass}`}>{t("nav.contact")}</Link>
              <div className="pt-4 border-t border-[hsl(0_0%_15%)] w-full flex justify-end">
                <button
                  onClick={toggleLanguage}
                  className={`${linkClass} flex items-center gap-1.5 cursor-pointer`}
                >
                  <Globe className="h-3.5 w-3.5" />
                  {currentLang}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navigation;
