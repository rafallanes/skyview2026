/**
 * Centralized route configuration for all three languages.
 * Each route has a unique "key" and per-language slug.
 * ES is the default language (no URL prefix).
 */

export const SUPPORTED_LANGS = ["es", "en", "pt"] as const;
export type SupportedLang = (typeof SUPPORTED_LANGS)[number];

export interface RouteEntry {
  key: string;
  slugs: Record<SupportedLang, string>;
}

/** All app routes with their localized slugs (without language prefix) */
export const ROUTES: RouteEntry[] = [
  { key: "home",        slugs: { es: "",                 en: "",                 pt: "" } },
  { key: "services",    slugs: { es: "que-hacemos",      en: "what-we-do",       pt: "o-que-fazemos" } },
  { key: "about",       slugs: { es: "oficina-IA",       en: "ai-office",        pt: "escritorio-ia" } },
  { key: "work",        slugs: { es: "casos-de-exito",   en: "case-studies",     pt: "casos-de-sucesso" } },
  { key: "contact",     slugs: { es: "contacto",         en: "contact",          pt: "contacto" } },
  { key: "blog",        slugs: { es: "recursos",         en: "resources",        pt: "recursos" } },
  { key: "blogPost",    slugs: { es: "recursos/:id",     en: "resources/:id",    pt: "recursos/:id" } },
  { key: "avisoLegal",  slugs: { es: "aviso-legal",      en: "legal-notice",     pt: "aviso-legal" } },
  { key: "privacidad",  slugs: { es: "privacidad",       en: "privacy",          pt: "privacidade" } },
  { key: "sow",         slugs: { es: "sow",              en: "sow",              pt: "sow" } },
];

/**
 * Get the full path for a route key in a given language.
 * @param key - The route key (e.g. "services", "contact")
 * @param lang - Target language
 * @param params - Optional params to replace (e.g. { id: "some-post" })
 */
export function getLocalizedPath(
  key: string,
  lang: SupportedLang,
  params?: Record<string, string>
): string {
  const route = ROUTES.find((r) => r.key === key);
  if (!route) return lang === "es" ? "/" : `/${lang}`;

  let slug = route.slugs[lang];

  // Replace params like :id
  if (params) {
    Object.entries(params).forEach(([k, v]) => {
      slug = slug.replace(`:${k}`, v);
    });
  }

  // ES has no prefix
  if (lang === "es") {
    return slug ? `/${slug}` : "/";
  }

  return slug ? `/${lang}/${slug}` : `/${lang}`;
}

/**
 * Detect language and route key from a pathname.
 * Returns { lang, routeKey, params }
 */
export function parsePathname(pathname: string): {
  lang: SupportedLang;
  routeKey: string | null;
  params: Record<string, string>;
} {
  const clean = pathname.replace(/\/+$/, "") || "/";
  const segments = clean.split("/").filter(Boolean);

  // Check if first segment is a language prefix (en or pt)
  let lang: SupportedLang = "es";
  let remainingSegments = segments;

  if (segments[0] === "en" || segments[0] === "pt") {
    lang = segments[0] as SupportedLang;
    remainingSegments = segments.slice(1);
  }

  const remainingPath = remainingSegments.join("/");

  // Try to match against routes for detected language
  for (const route of ROUTES) {
    const slug = route.slugs[lang];
    
    // Handle parameterized routes
    if (slug.includes(":")) {
      const slugParts = slug.split("/");
      const pathParts = remainingPath.split("/");
      if (slugParts.length === pathParts.length) {
        const params: Record<string, string> = {};
        let match = true;
        for (let i = 0; i < slugParts.length; i++) {
          if (slugParts[i].startsWith(":")) {
            params[slugParts[i].substring(1)] = pathParts[i];
          } else if (slugParts[i] !== pathParts[i]) {
            match = false;
            break;
          }
        }
        if (match) return { lang, routeKey: route.key, params };
      }
    } else if (slug === remainingPath) {
      return { lang, routeKey: route.key, params: {} };
    }
  }

  return { lang, routeKey: null, params: {} };
}

/**
 * Given the current pathname, get equivalent path in another language.
 */
export function switchLanguagePath(
  currentPathname: string,
  targetLang: SupportedLang
): string {
  const { routeKey, params } = parsePathname(currentPathname);
  if (!routeKey) return targetLang === "es" ? "/" : `/${targetLang}`;
  return getLocalizedPath(routeKey, targetLang, params);
}

/**
 * Detect preferred language from browser or localStorage.
 */
export function detectLanguage(): SupportedLang {
  // Check localStorage first (manual override)
  const stored = localStorage.getItem("i18nextLng");
  if (stored) {
    if (stored.startsWith("pt")) return "pt";
    if (stored.startsWith("en")) return "en";
    if (stored.startsWith("es")) return "es";
  }

  // Browser detection
  const browserLangs = navigator.languages || [navigator.language];
  for (const bl of browserLangs) {
    if (bl.startsWith("pt")) return "pt";
    if (bl.startsWith("en")) return "en";
    if (bl.startsWith("es")) return "es";
  }

  return "es"; // fallback
}
