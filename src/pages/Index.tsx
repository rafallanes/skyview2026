import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import { FileText } from "lucide-react";
import ImpactAreas from "@/components/ImpactAreas";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";
import AIMaturityChart from "@/components/AIMaturityChart";
import QueEsOficinaIA from "@/components/QueEsOficinaIA";
import LoQueIncluye from "@/components/LoQueIncluye";
import Velocidad from "@/components/Velocidad";
import ROIGarantizado from "@/components/ROIGarantizado";
import Desde2014 from "@/components/Desde2014";

import logoOpenAI from "@/assets/logos/openai.png";
import logoAzure from "@/assets/logos/azure.png";
import logoGoogleCloud from "@/assets/logos/google-cloud.png";
import logoAnthropic from "@/assets/logos/anthropic.png";
import logoLangChain from "@/assets/logos/langchain.png";
import logoPinecone from "@/assets/logos/pinecone.png";

const techLogos = [
  { src: logoOpenAI, alt: "OpenAI" },
  { src: logoAzure, alt: "Microsoft Azure" },
  { src: logoGoogleCloud, alt: "Google Cloud" },
  { src: logoAnthropic, alt: "Anthropic" },
  { src: logoLangChain, alt: "LangChain" },
  { src: logoPinecone, alt: "Pinecone" },
];

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <SEO titleKey="seo.home.title" descriptionKey="seo.home.description" routeKey="home" />
      <Navigation />

      {/* 1. HERO */}
      <Hero />

      {/* 2. QUÉ ES UNA OFICINA IA */}
      <QueEsOficinaIA />

      {/* 3. LO QUE INCLUYE */}
      <LoQueIncluye />

      {/* 4. VELOCIDAD */}
      <Velocidad />

      {/* 5. ROI GARANTIZADO */}
      <ROIGarantizado />

      {/* 6. DESDE 2014 */}
      <Desde2014 />

      {/* 7. INTELIGENCIA AUMENTADA */}
      <AIMaturityChart />

      {/* 8. TECH STACK */}
      <section className="py-10 md:py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h4 className="text-minimal text-muted-foreground mb-10 tracking-widest">{t("index.techStack")}</h4>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-8 md:gap-12">
              {techLogos.map((logo, index) => (
                <div key={index} className="flex flex-col items-center justify-center gap-3 py-4">
                  <div className="h-16 w-full flex items-center justify-center">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-12 w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-all duration-500"
                      loading="lazy"
                      width={120}
                      height={48}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground/60 font-medium tracking-wide">{logo.alt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. ÁREAS DE IMPACTO */}
      <ImpactAreas />

      {/* 10. SOCIAL PROOF */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="-mx-6 md:mx-0">
              <LogoCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* 11. CENTRO DE RECURSOS */}
      <section className="py-12 md:py-16 bg-foreground text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-minimal text-primary-foreground/40 mb-6">{t("index.resourcesLabel")}</h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-architectural mb-8 max-w-4xl" style={{ lineHeight: 1.1 }}>
              {t("index.resourcesTitle")}
            </h3>
            <p className="text-lg md:text-xl text-primary-foreground/50 leading-relaxed max-w-3xl mb-14 font-light">
              {t("index.resourcesDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-primary-foreground text-foreground px-8 py-5 text-sm font-semibold tracking-wide hover:bg-primary-foreground/90 transition-colors duration-300"
              >
                <FileText size={18} />
                {t("index.resourcesCta1")}
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-3 border border-primary-foreground/30 text-primary-foreground px-8 py-5 text-sm font-semibold tracking-wide hover:bg-primary-foreground/10 transition-colors duration-300"
              >
                <FileText size={18} />
                {t("index.resourcesCta2")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FOOTER */}
      <Footer />
    </div>
  );
};

export default Index;
