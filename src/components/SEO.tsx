import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { ROUTES, type SupportedLang } from "@/lib/i18n-routes";

const BASE_URL = "https://skyview.es";
const OG_IMAGE = `${BASE_URL}/og-image.png`;
const SITE_NAME = "SkyView 2026";

const LOCALE_MAP: Record<SupportedLang, string> = {
  es: "es_ES",
  en: "en_GB",
  pt: "pt_PT",
};

interface SEOProps {
  titleKey: string;
  descriptionKey: string;
  /** Route key from i18n-routes (e.g. "home", "services") */
  routeKey: string;
  /** If true, adds noindex/nofollow */
  noIndex?: boolean;
}

function getCurrentLang(lang: string): SupportedLang {
  if (lang?.startsWith("pt")) return "pt";
  if (lang?.startsWith("en")) return "en";
  return "es";
}

function getCanonicalForRoute(routeKey: string, lang: SupportedLang): string {
  const route = ROUTES.find((r) => r.key === routeKey);
  if (!route) return lang === "es" ? BASE_URL + "/" : `${BASE_URL}/${lang}`;

  const slug = route.slugs[lang];
  if (lang === "es") return slug ? `${BASE_URL}/${slug}` : `${BASE_URL}/`;
  return slug ? `${BASE_URL}/${lang}/${slug}` : `${BASE_URL}/${lang}`;
}

const SEO = ({ titleKey, descriptionKey, routeKey, noIndex }: SEOProps) => {
  const { t, i18n } = useTranslation();
  const lang = getCurrentLang(i18n.language);

  const title = t(titleKey);
  const description = t(descriptionKey);
  const canonical = getCanonicalForRoute(routeKey, lang);

  const alternates: SupportedLang[] = ["es", "en", "pt"];

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content={LOCALE_MAP[lang]} />
      <meta property="og:site_name" content={SITE_NAME} />
      {!noIndex && <meta property="og:image" content={OG_IMAGE} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {!noIndex && <meta name="twitter:image" content={OG_IMAGE} />}

      {/* Hreflang alternates (only for indexable pages) */}
      {!noIndex &&
        alternates.map((altLang) => (
          <link
            key={altLang}
            rel="alternate"
            hrefLang={altLang}
            href={getCanonicalForRoute(routeKey, altLang)}
          />
        ))}
      {!noIndex && (
        <link
          rel="alternate"
          hrefLang="x-default"
          href={getCanonicalForRoute(routeKey, "es")}
        />
      )}
    </Helmet>
  );
};

export default SEO;
