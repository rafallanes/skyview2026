import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LogoCarousel from "@/components/LogoCarousel";

import logoOpenAI from "@/assets/logos/openai.png";
import logoAzure from "@/assets/logos/azure.png";
import logoGoogleCloud from "@/assets/logos/google-cloud.png";
import logoAnthropic from "@/assets/logos/anthropic.png";
import logoLangChain from "@/assets/logos/langchain.png";
import logoPinecone from "@/assets/logos/pinecone.png";
import aboutFilosofia from "@/assets/about-filosofia.jpg";
import ImpactAreas from "@/components/ImpactAreas";
import { Link } from "react-router-dom";

const timelineEvents = [
{ year: "2014", label: "EL ORIGEN", description: "Enfoque fundacional en el ahorro de tiempo y dinero gracias a la tecnología." },
{ year: "2016", label: "ECOSISTEMA SAAS", description: "Alianzas estratégicas para la agilidad operativa (Monday, Signaturit, Odoo, Zoho, Xeerpa, Captio)." },
{ year: "2017", label: "LA FÁBRICA RPA", description: "Especialización en automatización robótica de procesos como factoría para 'Big Four' del norte de Europa." },
{ year: "2022", label: "INTELIGENCIA\nARTIFICIAL", description: "Colaboración en proyectos de gran escala con líderes mundiales en visión artificial y ML (ML6, Robovision)." },
{ year: "2024", label: "INTELIGENCIA\nAUMENTADA", description: "Desarrollo de metodología propia para hacer la IA fácil y puesta en marcha de las primeras Oficinas IA." }];




const techLogos = [
{ src: logoOpenAI, alt: "OpenAI" },
{ src: logoAzure, alt: "Microsoft Azure" },
{ src: logoGoogleCloud, alt: "Google Cloud" },
{ src: logoAnthropic, alt: "Anthropic" },
{ src: logoLangChain, alt: "LangChain" },
{ src: logoPinecone, alt: "Pinecone" }];




const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* ─── HERO / HEADER ─── */}
      <section className="pt-32 pb-10 md:pb-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-minimal text-muted-foreground mb-6">MAKING AI EASY</h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-architectural max-w-4xl mb-10">15 años optimizando procesos, ahora potenciados por IA.

            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Nuestra historia no empieza con el auge de la IA generativa; llevamos una década eliminando fricciones operativas en grandes organizaciones. La IA es el motor que hemos integrado para que su empresa sea más inteligente y rentable.
            </p>
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="pt-8 md:pt-10 pb-12 md:pb-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Desktop */}
            <div className="hidden md:block overflow-x-auto">
              <div className="flex items-stretch min-w-[900px] border-t border-b border-border">
                {timelineEvents.map((event, index) =>
                <div
                  key={index}
                  className="flex-1 relative px-6 py-10 border-r border-border last:border-r-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms`, animationFillMode: "both" }}>
                  
                    <span className="text-4xl font-light text-foreground/30 block mb-3">{event.year}</span>
                    <span className="text-minimal text-foreground font-semibold block mb-3 whitespace-pre-line">{event.label}</span>
                    <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                  </div>
                )}
              </div>
            </div>
            {/* Mobile */}
            <div className="md:hidden space-y-0">
              {timelineEvents.map((event, index) =>
              <div
                key={index}
                className="py-8 border-t border-border animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}>
                
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="text-2xl font-light text-foreground/30">{event.year}</span>
                    <span className="text-minimal text-foreground font-semibold whitespace-pre-line">{event.label}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                </div>
              )}
              <div className="border-t border-border" />
            </div>

            {/* Reinforcement */}
            <div className="mt-16">
              <p className="text-base md:text-lg text-muted-foreground/50 italic max-w-3xl leading-relaxed">
                Nuestra experiencia nace de la eficiencia operativa y evoluciona hacia la inteligencia estratégica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STACK TECNOLÓGICO (after reinforcement text) ─── */}
      <section className="pt-8 md:pt-10 pb-12 md:pb-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-minimal text-muted-foreground mb-6 tracking-widest">STACK TECNOLÓGICO</h3>
            <h4 className="text-3xl md:text-5xl font-light text-architectural mb-16 max-w-3xl">
              Stack Tecnológico de Vanguardia
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 md:gap-12">
              {techLogos.map((logo, index) =>
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-3 py-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}>
                
                  <div className="h-20 w-full flex items-center justify-center">
                    <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-16 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-all duration-500"
                    loading="lazy" />
                  
                  </div>
                  <span className="text-xs text-muted-foreground/60 font-medium tracking-wide">{logo.alt}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ÁREAS DE IMPACTO ─── */}
      <ImpactAreas />

      {/* ─── FILOSOFÍA AUMENTADA ─── */}
      <section className="bg-background">
        <div className="grid md:grid-cols-2 min-h-[85vh]">
          {/* Left: Full-bleed photo */}
          <div className="relative overflow-hidden">
            <img
              src={aboutFilosofia}
              alt="Pasillo de hormigón con luz al fondo"
              className="w-full h-full object-cover min-h-[50vh] md:min-h-full"
              loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent" />
          </div>

          {/* Right: Philosophy text */}
          <div className="flex items-center py-12 md:py-16 px-8 md:px-16 lg:px-24">
            <div className="max-w-xl">
              <h4 className="text-minimal text-muted-foreground mb-4">TECNOLOGÍA AL SERVICIO DE LAS PERSONAS</h4>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-architectural mb-10">
                Filosofía<br />"Aumentada"
              </h3>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  No sustituimos personas, potenciamos su talento. Creamos Inteligencia Aumentada uniendo el criterio humano a la potencia tecnológica.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  El resultado son Equipos Aumentados y resultados multiplicados. Menos tareas manuales, más impacto estratégico. Así de sencillo.
                </p>
              </div>
              <div className="mt-12 pt-8 border-t border-border flex gap-12">
                <div>
                  <span className="text-minimal text-muted-foreground">FOUNDED</span>
                  <p className="text-2xl font-semibold mt-1">2012</p>
                </div>
                <div>
                  <span className="text-minimal text-muted-foreground">PROJECTS</span>
                  <p className="text-2xl font-semibold mt-1">200+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF / LOGO CAROUSEL ─── */}
      <section className="pt-8 md:pt-10 pb-12 md:pb-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-minimal text-muted-foreground mb-6 tracking-widest">CLIENTES</h3>
            <h4 className="text-3xl md:text-5xl font-light text-architectural mb-12 max-w-4xl">
              Empresas que ya simplifican su futuro con nosotros.
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
              ¿Está preparado para liderar el cambio?
            </h2>
            <p className="text-lg md:text-xl text-background/60 leading-relaxed max-w-2xl mx-auto mb-12">
              El riesgo no es implementar la IA, es quedarse atrás mientras su competencia lo hace.
            </p>
            <Link
              to="/contacto"
              className="inline-block bg-accent text-accent-foreground px-12 py-5 text-sm font-bold tracking-widest uppercase shadow-lg hover:shadow-xl hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300">
              
              Agendar sesión estratégica
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>);

};

export default Services;