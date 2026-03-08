import { useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Globe, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";
import { switchLanguagePath, type SupportedLang } from "@/lib/i18n-routes";
import logoSkyview from "@/assets/logo-skyview-alpha.png";

const LANGUAGES: SupportedLang[] = ["es", "en", "pt"];

const getLangCode = (lang: string): string => {
  if (lang.startsWith("pt")) return "PT";
  if (lang.startsWith("en")) return "EN";
  return "ES";
};

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const lp = useLocalizedPath();

  const currentLang = getLangCode(i18n.language);

  const changeLanguage = (lang: SupportedLang) => {
    // Calculate the equivalent path in the target language
    const newPath = switchLanguagePath(location.pathname, lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang);
    setIsLangOpen(false);
    setIsMenuOpen(false);
    navigate(newPath);
  };

  const handleLangEnter = () => {
    if (langTimeoutRef.current) clearTimeout(langTimeoutRef.current);
    setIsLangOpen(true);
  };

  const handleLangLeave = () => {
    langTimeoutRef.current = setTimeout(() => setIsLangOpen(false), 150);
  };

  const linkClass =
    "text-[hsl(0_0%_100%/0.8)] hover:text-[hsl(0_0%_100%)] text-xs font-medium tracking-widest uppercase transition-colors duration-300";

  const dimClass =
    "text-[hsl(0_0%_100%/0.4)]";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(0_0%_0%)] border-b border-[hsl(0_0%_15%)]">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to={lp("home")} className="flex-shrink-0">
          <img
            src={logoSkyview}
            alt={t("imageAlt.logo", "SkyView 2026 - AI Consulting")}
            className="h-[45px] w-auto object-contain transition-all duration-300 hover:brightness-[1.15] hover:scale-[1.03]"
            width={140}
            height={45}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <Link to={lp("services")} className={linkClass}>{t("nav.whatWeDo")}</Link>
          <Link to={lp("about")} className={linkClass}>{t("nav.officeIA")}</Link>
          <Link to={lp("work")} className={linkClass}>{t("nav.caseStudies")}</Link>
          <Link to={lp("contact")} className={linkClass}>{t("nav.contact")}</Link>
        </div>

        {/* Desktop Language Dropdown */}
        <div
          className="hidden md:flex items-center relative"
          onMouseEnter={handleLangEnter}
          onMouseLeave={handleLangLeave}
        >
          <button
            className={`${linkClass} flex items-center gap-1.5 cursor-pointer`}
          >
            <Globe className="h-3.5 w-3.5" />
            {currentLang}
          </button>

          {/* Dropdown */}
          <div
            className={`absolute top-full right-0 mt-1 bg-[hsl(0_0%_0%)] border border-[hsl(0_0%_15%)] rounded-sm py-1 min-w-[48px] transition-opacity duration-200 ease-in-out ${
              isLangOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          >
            {LANGUAGES.map((lang) => {
              const code = getLangCode(lang);
              const isActive = code === currentLang;
              return (
                <button
                  key={lang}
                  onClick={() => changeLanguage(lang)}
                  className={`block w-full text-center px-3 py-1.5 text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${
                    isActive
                      ? dimClass
                      : "text-[hsl(0_0%_100%/0.8)] hover:text-[hsl(0_0%_100%)]"
                  }`}
                >
                  {code}
                </button>
              );
            })}
          </div>
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
              <Link to={lp("services")} onClick={() => setIsMenuOpen(false)} className={`block ${linkClass}`}>{t("nav.whatWeDo")}</Link>
              <Link to={lp("about")} onClick={() => setIsMenuOpen(false)} className={`block ${linkClass}`}>{t("nav.officeIA")}</Link>
              <Link to={lp("work")} onClick={() => setIsMenuOpen(false)} className={`block ${linkClass}`}>{t("nav.caseStudies")}</Link>
              <Link to={lp("contact")} onClick={() => setIsMenuOpen(false)} className={`block ${linkClass}`}>{t("nav.contact")}</Link>

              {/* Mobile Language Row */}
              <div className="pt-4 border-t border-[hsl(0_0%_15%)] w-full flex justify-end gap-4">
                {LANGUAGES.map((lang) => {
                  const code = getLangCode(lang);
                  const isActive = code === currentLang;
                  return (
                    <button
                      key={lang}
                      onClick={() => changeLanguage(lang)}
                      className={`text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${
                        isActive
                          ? dimClass
                          : "text-[hsl(0_0%_100%/0.8)] hover:text-[hsl(0_0%_100%)]"
                      }`}
                    >
                      {code}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navigation;
