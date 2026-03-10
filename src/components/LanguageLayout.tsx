import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { parsePathname, detectLanguage, type SupportedLang } from "@/lib/i18n-routes";

/**
 * Layout wrapper that syncs URL language prefix with i18n.
 * - Sets i18n language from URL prefix
 * - Updates <html lang> attribute
 * - Handles first-visit redirect based on browser language
 */
const LanguageLayout = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const { lang, routeKey } = parsePathname(location.pathname);

    const currentI18nLang = (
      i18n.language?.startsWith("pt") ? "pt" :
      i18n.language?.startsWith("en") ? "en" : "es"
    ) as SupportedLang;

    if (lang !== currentI18nLang) {
      i18n.changeLanguage(lang);
    }

    document.documentElement.lang = lang;

    if (location.pathname === "/" && !routeKey) {
    }
  }, [location.pathname, i18n]);

  return <Outlet />;
};

/**
 * Component that handles first-visit language redirect.
 * Placed at the root "/" route, redirects to detected language if not ES.
 */
export const LanguageRedirect = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Only redirect from the exact root path on first visit
    if (location.pathname === "/") {
      const hasVisited = localStorage.getItem("i18nextLng");
      if (!hasVisited) {
        const detected = detectLanguage();
        if (detected !== "es") {
          localStorage.setItem("i18nextLng", detected);
          navigate(`/${detected}`, { replace: true });
          return;
        }
      } else {
        // Returning visitor — check if their stored lang needs a redirect
        const stored = localStorage.getItem("i18nextLng") || "es";
        let lang: SupportedLang = "es";
        if (stored.startsWith("pt")) lang = "pt";
        else if (stored.startsWith("en")) lang = "en";
        
        if (lang !== "es") {
          navigate(`/${lang}`, { replace: true });
          return;
        }
      }
    }
  }, [location.pathname, navigate]);

  return <>{children}</>;
};

export default LanguageLayout;
