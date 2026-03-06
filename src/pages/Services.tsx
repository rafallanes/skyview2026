import Navigation from "@/components/Navigation";
import LogoCarousel from "@/components/LogoCarousel";
import servicesArch from "@/assets/about-cta.png";
import logoOpenAI from "@/assets/logos/openai.png";
import logoAzure from "@/assets/logos/azure.png";
import logoGoogleCloud from "@/assets/logos/google-cloud.png";
import logoAnthropic from "@/assets/logos/anthropic.png";
import logoLangChain from "@/assets/logos/langchain.png";
import logoPinecone from "@/assets/logos/pinecone.png";
import { Cog, TrendingUp, BarChart3, Users } from "lucide-react";
import { Link } from "react-router-dom";

const timelineEvents = [
  { year: "2014", label: "EL ORIGEN", description: "Enfoque fundacional en el ahorro de tiempo y dinero gracias a la tecnología." },
  { year: "2016", label: "ECOSISTEMA SAAS", description: "Alianzas estratégicas para la agilidad operativa (Monday, Signaturit, Odoo, Zoho, Xeerpa, Captio)." },
  { year: "2017", label: "LA FÁBRICA RPA", description: "Especialización en automatización robótica de procesos como factoría para 'Big Four' del norte de Europa." },
  { year: "2022", label: "INTELIGENCIA\nARTIFICIAL", description: "Colaboración en proyectos de gran escala con líderes mundiales en visión artificial y ML (ML6, Robovision)." },
  { year: "2024", label: "INTELIGENCIA\nAUMENTADA", description: "Desarrollo de metodología propia para hacer la IA fácil y puesta en marcha de las primeras Oficinas IA." },
];

const methodologySteps = [
  { number: "01", title: "START", subtitle: "DIAGNÓSTICO", description: "PRIMERAS DOS SEMANAS - Consultoría Intensiva. Asignamos Comité IA, definimos objetivos y planificamos primer trimestre con casos de uso." },
  { number: "02", title: "SPRINT", subtitle: "ESTRATEGIA", description: "PRIMER TRIMESTRE - Ejecución intensiva. Reuniones periódicas, objetivos medibles y automatización con evaluación de impacto real." },
  { number: "03", title: "OFICINA IA AS A SERVICE", subtitle: "IMPLEMENTACIÓN", description: "PRIMER AÑO - Gestión profesional continua. Procesos automatizados de forma regular y evolución constante del modelo." },
  { number: "04", title: "OFICINA IA PROPIA (OPCIONAL)", subtitle: "CONSOLIDACIÓN", description: "Paso opcional y final. Transferimos nuestras capacidades a tu personal propio para que la oficina sea 100% autónoma e independiente." },
];

const techLogos = [
  { src: logoOpenAI, alt: "OpenAI" },
  { src: logoAzure, alt: "Microsoft Azure" },
  { src: logoGoogleCloud, alt: "Google Cloud" },
  { src: logoAnthropic, alt: "Anthropic" },
  { src: logoLangChain, alt: "LangChain" },
  { src: logoPinecone, alt: "Pinecone" },
];

const impactAreas = [
  { icon: Cog, title: "Operaciones y Procesos", description: "Automatización de tareas críticas y optimización de flujos para reducir costes operativos." },
  { icon: TrendingUp, title: "Ventas y Marketing", description: "Modelos predictivos de demanda y personalización de la experiencia de cliente para acelerar el crecimiento." },
  { icon: BarChart3, title: "Departamento Financiero (CFO)", description: "Optimización de flujos de caja, detección de anomalías y proyecciones inteligentes para decisiones basadas en datos." },
  { icon: Users, title: "Talento Humano", description: "Herramientas de IA para multiplicar la productividad de sus equipos y facilitar la gestión del cambio." },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* ─── HERO / HEADER ─── */}
      <section className="pt-32 pb-10 md:pb-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-minimal text-muted-foreground mb-6">MAKING AI EASY</h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-architectural max-w-4xl mb-10">
              10 años optimizando procesos, ahora potenciados por IA.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Nuestra historia no empieza con el auge de la IA generativa; llevamos una década eliminando fricciones operativas en grandes organizaciones. La IA es el motor que hemos integrado para que su empresa sea más inteligente y rentable.
            </p>
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="pt-10 md:pt-12 pb-20 md:pb-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Desktop */}
            <div className="hidden md:block overflow-x-auto">
              <div className="flex items-stretch min-w-[900px] border-t border-b border-border">
                {timelineEvents.map((event, index) => (
                  <div
                    key={index}
                    className="flex-1 relative px-6 py-10 border-r border-border last:border-r-0 animate-fade-in-up"
                    style={{ animationDelay: `${index * 150}ms`, animationFillMode: "both" }}
                  >
                    <span className="text-4xl font-light text-foreground/30 block mb-3">{event.year}</span>
                    <span className="text-minimal text-foreground font-semibold block mb-3 whitespace-pre-line">{event.label}</span>
                    <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Mobile */}
            <div className="md:hidden space-y-0">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className="py-8 border-t border-border animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
                >
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="text-2xl font-light text-foreground/30">{event.year}</span>
                    <span className="text-minimal text-foreground font-semibold whitespace-pre-line">{event.label}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                </div>
              ))}
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
      <section className="pt-10 md:pt-12 pb-20 md:pb-28 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-minimal text-muted-foreground mb-6 tracking-widest">STACK TECNOLÓGICO</h3>
            <h4 className="text-3xl md:text-5xl font-light text-architectural mb-16 max-w-3xl">
              Stack Tecnológico de Vanguardia
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 md:gap-12">
              {techLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-3 py-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
                >
                  <div className="h-16 w-full flex items-center justify-center">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-14 w-auto object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
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

      {/* ─── FULL-BLEED PHOTO ─── */}
      <section className="bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto -mx-6 md:mx-0">
            <div className="aspect-[21/9] overflow-hidden">
              <img
                src={servicesArch}
                alt="Arcos geométricos de hormigón en blanco y negro"
                className="w-full h-full object-cover object-center grayscale"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── ÁREAS DE IMPACTO ─── */}
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
                  className="group relative border-t border-border lg:border-r lg:last:border-r-0 py-12 px-6 lg:px-8 animate-fade-in-up hover:bg-muted/30 transition-colors duration-500"
                  style={{ animationDelay: `${index * 120}ms`, animationFillMode: "both" }}
                >
                  <area.icon
                    className="text-foreground/20 group-hover:text-foreground/50 transition-colors duration-500 mb-6"
                    size={36}
                    strokeWidth={1.5}
                  />
                  <h5 className="text-lg font-semibold text-architectural mb-3 group-hover:text-muted-foreground transition-colors duration-500">
                    {area.title}
                  </h5>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="border-t border-border" />
          </div>
        </div>
      </section>

      {/* ─── METODOLOGÍA ─── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-minimal text-muted-foreground mb-6">METODOLOGÍA</h3>
            <h2 className="text-3xl md:text-5xl font-light text-architectural mb-16 max-w-3xl">
              Tu Oficina IA en 4 pasos.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {methodologySteps.map((step, index) => (
                <div
                  key={index}
                  className="group relative border-t border-border py-12 md:py-16 md:pr-16 md:odd:pr-16 md:even:pl-16 md:even:pr-0 overflow-hidden"
                >
                  <span className="absolute top-4 right-4 md:top-6 md:right-8 text-7xl md:text-8xl font-bold text-foreground/[0.12] select-none pointer-events-none leading-none">
                    {step.number}
                  </span>
                  <div className="relative z-10">
                    <h4 className="text-xl md:text-2xl font-semibold text-architectural mb-1 group-hover:text-muted-foreground transition-colors duration-500">
                      {step.title}
                    </h4>
                    <span className="text-minimal text-muted-foreground/60 block mb-4">
                      {step.subtitle}
                    </span>
                    <p className="text-muted-foreground leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-border" />
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF / LOGO CAROUSEL ─── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-minimal text-muted-foreground mb-6 tracking-widest text-center">SOCIAL PROOF</h3>
            <h4 className="text-3xl md:text-5xl font-light text-architectural mb-16 max-w-4xl mx-auto text-center">
              Empresas que ya simplifican su futuro con nosotros.
            </h4>
            <div className="-mx-6 md:mx-0">
              <LogoCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="py-20 md:py-28 bg-foreground text-background">
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
              className="inline-block border border-background/30 px-10 py-4 text-sm tracking-widest uppercase hover:bg-background hover:text-foreground transition-all duration-500"
            >
              Agendar sesión estratégica
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
