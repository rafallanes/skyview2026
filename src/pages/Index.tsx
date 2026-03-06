import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import { Link } from "react-router-dom";
import { Cog, TrendingUp, BarChart3, Users, ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const impactAreas = [
  { icon: Cog, title: "Operaciones y Procesos", department: "Operaciones", description: "Automatización de tareas críticas y optimización de flujos para reducir costes operativos." },
  { icon: TrendingUp, title: "Ventas y Marketing", department: "Ventas", description: "Modelos predictivos de demanda y personalización de la experiencia de cliente para acelerar el crecimiento." },
  { icon: BarChart3, title: "Departamento Financiero (CFO)", department: "Financiero", description: "Optimización de flujos de caja, detección de anomalías y proyecciones inteligentes para decisiones basadas en datos." },
  { icon: Users, title: "Talento Humano", department: "Talento", description: "Herramientas de IA para multiplicar la productividad de sus equipos y facilitar la gestión del cambio." },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />

      {/* ─── TECH STACK ─── */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h4 className="text-minimal text-muted-foreground mb-10 text-center tracking-widest">STACK TECNOLÓGICO</h4>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-8 md:gap-12">
              {techLogos.map((logo, index) => (
                <div key={index} className="flex flex-col items-center justify-center gap-3 py-4">
                  <div className="h-16 w-full flex items-center justify-center">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-12 w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-all duration-500"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs text-muted-foreground/60 font-medium tracking-wide">{logo.alt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCIA (Simplificado) ─── */}
      <section className="py-28 md:py-36 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-minimal text-muted-foreground mb-6">EXPERIENCIA</h2>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-light text-architectural max-w-4xl mb-10">
              15 años diseñando eficiencia.
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Más de una década optimizando procesos corporativos. No solo implementamos IA; aplicamos toda nuestra experiencia en eficiencia operativa para garantizar que la tecnología genere retorno desde el primer día.
            </p>
          </div>
        </div>
      </section>

      {/* ─── ÁREAS DE IMPACTO (Router de Personas) ─── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-minimal text-muted-foreground mb-6 tracking-widest">ÁREAS DE IMPACTO</h3>
            <h4 className="text-3xl md:text-5xl font-light text-architectural mb-16 max-w-4xl">
              Soluciones con impacto real en su organización.
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
              {impactAreas.map((area, index) => (
                <div
                  key={index}
                  className="group relative border-t border-border lg:border-r lg:last:border-r-0 py-12 px-6 lg:px-8 hover:bg-muted/30 transition-colors duration-500"
                >
                  <area.icon
                    className="text-foreground/20 group-hover:text-foreground/50 transition-colors duration-500 mb-6"
                    size={36}
                    strokeWidth={1.5}
                  />
                  <h5 className="text-lg font-semibold text-architectural mb-3 group-hover:text-muted-foreground transition-colors duration-500">
                    {area.title}
                  </h5>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light mb-6">
                    {area.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-muted-foreground transition-colors duration-300 border-b border-foreground/30 hover:border-foreground/60 pb-0.5"
                  >
                    <FileText size={14} />
                    Descargar Caso de Uso: {area.department}
                  </a>
                </div>
              ))}
            </div>
            <div className="border-t border-border" />
          </div>
        </div>
      </section>

      {/* ─── METODOLOGÍA SPRINT (Teaser) ─── */}
      <section className="py-28 md:py-36 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-minimal text-muted-foreground mb-6">METODOLOGÍA</h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-light text-architectural max-w-4xl mb-8">
              Metodología SPRINT: Resultados en semanas.
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-12">
              Un proceso de alto rendimiento diseñado para la gran empresa. Sin esperas, sin incertidumbre.
            </p>
            <Button asChild variant="outline" className="rounded-none px-10 py-6 text-sm tracking-wide font-semibold">
              <Link to="/oficina-IA">
                Ver nuestra metodología
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── CENTRO DE RECURSOS (Inbound / Lead Magnet) ─── */}
      <section className="py-28 md:py-36 bg-foreground text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-minimal text-primary-foreground/40 mb-6">RECURSOS ESTRATÉGICOS</h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-architectural mb-8 max-w-4xl" style={{ lineHeight: 1.1 }}>
              Centro de Recursos Estratégicos
            </h3>
            <p className="text-lg md:text-xl text-primary-foreground/50 leading-relaxed max-w-3xl mb-14 font-light">
              Datos, no promesas. Acceda a nuestra biblioteca de implementaciones reales y descubra el impacto de la Inteligencia Aumentada en su sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-primary-foreground text-foreground px-8 py-5 text-sm font-semibold tracking-wide hover:bg-primary-foreground/90 transition-colors duration-300"
              >
                <FileText size={18} />
                Guía para CEOs: El ROI de la IA en 2026
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-3 border border-primary-foreground/30 text-primary-foreground px-8 py-5 text-sm font-semibold tracking-wide hover:bg-primary-foreground/10 transition-colors duration-300"
              >
                <FileText size={18} />
                Radiografía del CFO: Automatización y Control Financiero
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF / LOGO CAROUSEL ─── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="-mx-6 md:mx-0">
              <LogoCarousel />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
