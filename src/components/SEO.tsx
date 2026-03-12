import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { ROUTES, type SupportedLang } from "@/lib/i18n-routes";

const BASE_URL = "https://skyview.es";
const OG_IMAGE = `${BASE_URL}/og-image.png`;
const SITE_NAME = "SkyView";

const LOCALE_MAP: Record<SupportedLang, string> = {
  es: "es_ES",
  en: "en_GB",
  pt: "pt_PT",
};

interface SEOProps {
  titleKey: string;
  descriptionKey: string;
  routeKey: string;
  noIndex?: boolean;
  /** Additional JSON-LD structured data objects to inject */
  jsonLd?: Record<string, unknown>[];
  /** Breadcrumb items: [{ name, routeKey }] — auto-generates BreadcrumbList */
  breadcrumbs?: { name: string; routeKey: string }[];
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

/** Global Organization schema — injected on every page */
const ORGANIZATION_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SkyView 2026",
  "alternateName": "SkyView Iberia",
  "url": "https://skyview.es",
  "logo": "https://skyview.es/logo.png",
  "email": "hola@skyview.es",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "C/ Gemma Mengual, 2",
    "addressLocality": "Tres Cantos",
    "postalCode": "28760",
    "addressRegion": "Madrid",
    "addressCountry": "ES",
  },
  "slogan": "Making AI easy",
  "foundingDate": "2012",
  "areaServed": ["ES", "PT", "GB"],
};

function buildBreadcrumbJsonLd(
  items: { name: string; routeKey: string }[],
  lang: SupportedLang
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": getCanonicalForRoute(item.routeKey, lang),
    })),
  };
}

const SEO = ({ titleKey, descriptionKey, routeKey, noIndex, jsonLd, breadcrumbs }: SEOProps) => {
  const { t, i18n } = useTranslation();
  const lang = getCurrentLang(i18n.language);

  const title = t(titleKey);
  const description = t(descriptionKey);
  const canonical = getCanonicalForRoute(routeKey, lang);
  const alternates: SupportedLang[] = ["es", "en", "pt"];

  // Collect all JSON-LD blocks
  const allJsonLd: Record<string, unknown>[] = [ORGANIZATION_JSONLD];
  if (breadcrumbs) {
    allJsonLd.push(buildBreadcrumbJsonLd(breadcrumbs, lang));
  }
  if (jsonLd) {
    allJsonLd.push(...jsonLd);
  }

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

      {/* Hreflang alternates */}
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
        <link rel="alternate" hrefLang="x-default" href={getCanonicalForRoute(routeKey, "es")} />
      )}

      {/* JSON-LD Structured Data */}
      {allJsonLd.map((ld, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(ld)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;

/** Reusable canonical helper for external use */
export { getCanonicalForRoute, getCurrentLang, BASE_URL };
