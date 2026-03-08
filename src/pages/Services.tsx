import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LogoCarousel from "@/components/LogoCarousel";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";

import logoOpenAI from "@/assets/logos/openai.png";
import logoAzure from "@/assets/logos/azure.png";
import logoGoogleCloud from "@/assets/logos/google-cloud.png";
import logoAnthropic from "@/assets/logos/anthropic.png";
import logoLangChain from "@/assets/logos/langchain.png";
import logoPinecone from "@/assets/logos/pinecone.png";
import aboutFilosofia from "@/assets/about-filosofia.jpg";
import ImpactAreas from "@/components/ImpactAreas";
import { Link } from "react-router-dom";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";

const techLogos = [
  { src: logoOpenAI, alt: "OpenAI" },
  { src: logoAzure, alt: "Microsoft Azure" },
  { src: logoGoogleCloud, alt: "Google Cloud" },
  { src: logoAnthropic, alt: "Anthropic" },
  { src: logoLangChain, alt: "LangChain" },
  { src: logoPinecone, alt: "Pinecone" },
];

const Services = () => {
  const { t } = useTranslation();
  const lp = useLocalizedPath();

  const timelineYears = ["2014", "2016", "2017", "2022", "2024"];


  return (
    <div className="min-h-screen">
      <SEO
        titleKey="seo.services.title"
        descriptionKey="seo.services.description"
        routeKey="services"
        breadcrumbs={[
          { name: t("nav.home", "Home"), routeKey: "home" },
          { name: t("nav.whatWeDo"), routeKey: "services" },
        ]}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "START — Diagnóstico IA",
            "description": "Consultoría intensiva de 2 semanas. Diagnóstico de madurez IA, mapa de oportunidades y roadmap ejecutivo de 90 días.",
            "provider": { "@type": "Organization", "name": "SkyView 2026" },
            "areaServed": "ES",
            "serviceType": "AI Strategy Consulting",
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "SPRINT — Implementación IA",
            "description": "Ejecución intensiva por trimestres. Automatización de procesos con evaluación de impacto real en KPIs financieros.",
            "provider": { "@type": "Organization", "name": "SkyView 2026" },
            "areaServed": "ES",
            "serviceType": "AI Implementation Consulting",
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Oficina de IA as a Service",
            "description": "Gestión profesional continua de la inteligencia artificial en tu organización. Procesos automatizados y evolución constante del modelo.",
            "provider": { "@type": "Organization", "name": "SkyView 2026" },
            "areaServed": "ES",
            "serviceType": "AI Managed Services",
          },
        ]}
      />
      <Navigation />

      {/* ─── HERO ─── */}
      <section className="pt-32 pb-10 md:pb-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-minimal text-muted-foreground mb-6">{t("services.heroLabel")}</h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-architectural max-w-4xl mb-10">
              {t("services.heroTitle")}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              {t("services.heroDesc")}
            </p>
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="pt-8 md:pt-10 pb-12 md:pb-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="hidden md:block overflow-x-auto">
              <div className="flex items-stretch min-w-[900px] border-t border-b border-border">
                {timelineYears.map((year, index) => (
                  <div
                    key={index}
                    className="flex-1 relative px-6 py-10 border-r border-border last:border-r-0 animate-fade-in-up"
                    style={{ animationDelay: `${index * 150}ms`, animationFillMode: "both" }}
                  >
                    <span className="text-4xl font-light text-foreground/30 block mb-3">{year}</span>
                    <span className="text-minimal text-foreground font-semibold block mb-3 whitespace-pre-line">{t(`timeline.${year}.label`)}</span>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t(`timeline.${year}.desc`)}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:hidden space-y-0">
              {timelineYears.map((year, index) => (
                <div
                  key={index}
                  className="py-8 border-t border-border animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
                >
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="text-2xl font-light text-foreground/30">{year}</span>
                    <span className="text-minimal text-foreground font-semibold whitespace-pre-line">{t(`timeline.${year}.label`)}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(`timeline.${year}.desc`)}</p>
                </div>
              ))}
              <div className="border-t border-border" />
            </div>
            <div className="mt-16">
              <p className="text-base md:text-lg text-muted-foreground/50 italic max-w-3xl leading-relaxed">
                {t("services.reinforcement")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FILOSOFÍA AUMENTADA ─── */}
      <section className="bg-background">
        <div className="grid md:grid-cols-2 min-h-[85vh]">
          <div className="relative overflow-hidden">
            <img src={aboutFilosofia} alt="" className="w-full h-full object-cover min-h-[50vh] md:min-h-full" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent" />
          </div>
          <div className="flex items-center py-12 md:py-16 px-8 md:px-16 lg:px-24">
            <div className="max-w-xl">
              <h4 className="text-minimal text-muted-foreground mb-4">{t("services.philosophyLabel")}</h4>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-architectural mb-10">
                {t("services.philosophyTitle1")}<br />{t("services.philosophyTitle2")}
              </h3>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed font-light">{t("services.philosophyP1")}</p>
                <p className="text-lg text-muted-foreground leading-relaxed font-light">{t("services.philosophyP2")}</p>
              </div>
              <div className="mt-12 pt-8 border-t border-border flex gap-12">
                <div>
                  <span className="text-minimal text-muted-foreground">{t("services.founded")}</span>
                  <p className="text-2xl font-semibold mt-1">2012</p>
                </div>
                <div>
                  <span className="text-minimal text-muted-foreground">{t("services.projects")}</span>
                  <p className="text-2xl font-semibold mt-1">200+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STACK TECNOLÓGICO ─── */}
      <section className="pt-8 md:pt-10 pb-12 md:pb-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-minimal text-muted-foreground mb-6 tracking-widest">{t("services.techStackLabel")}</h3>
            <h4 className="text-3xl md:text-5xl font-light text-architectural mb-16 max-w-3xl">
              {t("services.techStackTitle")}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 md:gap-12">
              {techLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-3 py-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
                >
                  <div className="h-20 w-full flex items-center justify-center">
                    <img src={logo.src} alt={logo.alt} className="max-h-16 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-all duration-500" loading="lazy" />
                  </div>
                  <span className="text-xs text-muted-foreground/60 font-medium tracking-wide">{logo.alt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ImpactAreas />

      {/* ─── SOCIAL PROOF ─── */}
      <section className="pt-8 md:pt-10 pb-12 md:pb-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-minimal text-muted-foreground mb-6 tracking-widest">{t("services.clientsLabel")}</h3>
            <h4 className="text-3xl md:text-5xl font-light text-architectural mb-12 max-w-4xl">
              {t("services.clientsTitle")}
            </h4>
            <div className="-mx-6 md:mx-0">
              <LogoCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="py-12 md:py-16 bg-foreground text-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight">
              {t("services.ctaTitle")}
            </h2>
            <p className="text-lg md:text-xl text-background/60 leading-relaxed max-w-2xl mx-auto mb-12">
              {t("services.ctaDesc")}
            </p>
            <Link
              to={lp("contact")}
              className="inline-block bg-accent text-accent-foreground px-12 py-5 text-sm font-bold tracking-widest uppercase shadow-lg hover:shadow-xl hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300"
            >
              {t("services.ctaCta")}
            </Link>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Services;
