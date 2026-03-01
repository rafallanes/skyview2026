import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import servicesArch1 from "@/assets/services-architecture-1.jpg";

const diagnosisItems = [
  {
    title: "Valor Inexistente",
    stat: "78% vs 5%",
    description: "El 78% usa GenAI, pero solo el 5% extrae valor sustancial.",
  },
  {
    title: "El Vacío del EBIT",
    stat: "80%",
    description: "El 80% de las empresas no perciben impacto en EBIT tras 12 meses.",
  },
  {
    title: "Shadow AI",
    stat: "78% / 57%",
    description: "El 78% de empleados usa IA 'informal'. El 57% lo oculta, arriesgando datos corporativos.",
  },
  {
    title: "Gobernanza 'Tarde'",
    stat: "15%",
    description: "Solo el 15% se siente preparado en riesgos. Se acelera sin guardrails o se frena por miedo.",
  },
  {
    title: "POCs Atrapadas",
    stat: "80-85%",
    description: "El 80-85% de los pilotos nunca llegan a producción.",
  },
  {
    title: "Resistencias Invisibles",
    stat: "—",
    description: "Miedo al empleo y formación genérica que no cambia hábitos.",
  },
];

const roadmapSteps = [
  {
    number: "01",
    title: "START",
    duration: "2 Semanas",
    subtitle: "La Brújula",
    description: "Plan, priorización (S/M/L) y Gobernanza. Asignamos tu Core Team, definimos objetivos y planificamos tu primer trimestre.",
  },
  {
    number: "02",
    title: "SPRINT",
    duration: "90 Días",
    subtitle: "El Motor",
    description: "Squads, automatización real y medición de ROI (OPEX/CAPEX). Ejecución intensiva con objetivos medibles y evaluación de impacto.",
  },
  {
    number: "03",
    title: "OFICINA IA",
    duration: "Continuo",
    subtitle: "La Consolidación",
    description: "AI Office as a Service (FaaS) o Transferencia total al cliente. Gestión profesional continua y evolución constante del modelo.",
  },
];

const pillars = [
  { label: "Squads", description: "Equipos dedicados y especializados" },
  { label: "Priorities", description: "Casos priorizados por impacto" },
  { label: "Numbers", description: "ROI medible desde el día uno" },
  { label: "Trust", description: "Gobernanza y seguridad integradas" },
];

function RevealSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const About = () => {
  return (
    <section id="about">
      {/* ── SECTION 1: HEADER ── */}
      <div className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <RevealSection>
              <h2 className="text-minimal text-muted-foreground mb-6">OFICINA IA</h2>
            </RevealSection>
            <RevealSection delay={0.1}>
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold text-architectural max-w-5xl mb-10">
                De la incertidumbre al Sistema Operativo de la IA.
              </h3>
            </RevealSection>
            <RevealSection delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                El 85% de los proyectos de IA fallan por falta de método. Diseñamos la estructura que garantiza el impacto real en tu cuenta de resultados.
              </p>
            </RevealSection>
          </div>
        </div>
      </div>

      {/* ── SECTION 2: DIAGNOSIS (THE PAIN) ── */}
      <div className="py-24 md:py-32" style={{ backgroundColor: "hsl(0 0% 97%)" }}>
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <RevealSection>
              <h4 className="text-minimal text-muted-foreground mb-6">EL DIAGNÓSTICO</h4>
              <h3 className="text-3xl md:text-5xl font-bold text-architectural mb-16 md:mb-20 max-w-4xl">
                El Laberinto de la IA:<br />¿Por qué no avanzas?
              </h3>
            </RevealSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
              {diagnosisItems.map((item, index) => (
                <RevealSection key={index} delay={index * 0.1}>
                  <div className="group relative border-t border-border py-10 md:py-12 pr-8 overflow-hidden">
                    <span className="text-5xl md:text-6xl font-bold text-foreground/[0.06] absolute top-4 right-4 select-none pointer-events-none leading-none">
                      {item.stat}
                    </span>
                    <div className="relative z-10">
                      <h5 className="text-lg md:text-xl font-semibold text-architectural mb-3 group-hover:text-muted-foreground transition-colors duration-500">
                        {item.title}
                      </h5>
                      <p className="text-muted-foreground leading-relaxed font-light text-sm md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </RevealSection>
              ))}
            </div>
            <div className="border-t border-border" />
          </div>
        </div>
      </div>

      {/* ── SECTION 3: PHILOSOPHY (kept as-is) ── */}
      <div className="py-32 bg-background relative overflow-hidden">
        {/* B&W background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={servicesArch1}
            alt=""
            className="w-full h-full object-cover grayscale opacity-[0.04]"
            aria-hidden="true"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-start">
              <div>
                <RevealSection>
                  <h4 className="text-minimal text-muted-foreground mb-4">TECNOLOGÍA AL SERVICIO DE LAS PERSONAS</h4>
                  <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                    Filosofía "Aumentada"
                  </h3>
                </RevealSection>
                <RevealSection delay={0.15}>
                  <div className="space-y-8">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Creemos que la inteligencia natural y la artificial son plenamente compatibles, y que la combinación perfecta de las dos origina la inteligencia aumentada.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Fundada en 2012, nuestra compañía ha acometido más de 200 proyectos para poner la tecnología al servicio de las personas. Cada proyecto empieza con una escucha activa y continúa con una ejecución rápida y efectiva orientada a mejorar tu forma de trabajar.
                    </p>
                  </div>
                </RevealSection>
              </div>

              <div className="space-y-12">
                <RevealSection delay={0.2}>
                  <div>
                    <h4 className="text-minimal text-muted-foreground mb-6">METODOLOGIA SPRINT</h4>
                    <div className="space-y-6">
                      <div className="border-l-2 border-foreground pl-6">
                        <h5 className="text-lg font-medium mb-2">Rigor Metodológico</h5>
                        <p className="text-muted-foreground">Aplicamos un marco operativo desde el primer día. No Improvisamos.</p>
                      </div>
                      <div className="border-l-2 border-foreground pl-6">
                        <h5 className="text-lg font-medium mb-2">Personalización Radical</h5>
                        <p className="text-muted-foreground">Entendemos tus resistencias invisibles. Adaptamos la IA a tu cultura, no al revés.</p>
                      </div>
                      <div className="border-l-2 border-foreground pl-6">
                        <h5 className="text-lg font-medium mb-2">Foco en Producción</h5>
                        <p className="text-muted-foreground">Nuestro objetivo no es el piloto, es el escalado. Sino llega a producción, no es éxito.</p>
                      </div>
                    </div>
                  </div>
                </RevealSection>

                <RevealSection delay={0.3}>
                  <div className="pt-8 border-t border-border">
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-minimal text-muted-foreground mb-2">FOUNDED</h4>
                        <p className="text-xl">2014</p>
                      </div>
                      <div>
                        <h4 className="text-minimal text-muted-foreground mb-2">PROJECTS</h4>
                        <p className="text-xl">200+</p>
                      </div>
                    </div>
                  </div>
                </RevealSection>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 4: METHODOLOGY ROADMAP ── */}
      <div className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <RevealSection>
              <h4 className="text-minimal text-muted-foreground mb-6">METODOLOGÍA</h4>
              <h3 className="text-3xl md:text-5xl font-bold text-architectural mb-6 max-w-4xl">
                Tu hoja de ruta hacia la IA productiva.
              </h3>
              <p className="text-lg text-muted-foreground mb-16 md:mb-20 max-w-2xl">
                Tres fases. Un solo objetivo: impacto medible en tu cuenta de resultados.
              </p>
            </RevealSection>

            {/* Roadmap Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {roadmapSteps.map((step, index) => (
                <RevealSection key={index} delay={index * 0.15}>
                  <div className="group relative border-t border-border py-12 md:py-16 md:pr-10 overflow-hidden h-full">
                    <span className="absolute top-4 right-4 md:top-6 md:right-6 text-7xl md:text-8xl font-bold text-foreground/[0.08] select-none pointer-events-none leading-none">
                      {step.number}
                    </span>
                    <div className="relative z-10">
                      <span className="text-minimal text-muted-foreground/60 block mb-3">
                        {step.duration}
                      </span>
                      <h4 className="text-2xl md:text-3xl font-bold text-architectural mb-1 group-hover:text-muted-foreground transition-colors duration-500">
                        {step.title}
                      </h4>
                      <span className="text-minimal text-muted-foreground/50 block mb-5">
                        {step.subtitle}
                      </span>
                      <p className="text-muted-foreground leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </RevealSection>
              ))}
            </div>
            <div className="border-t border-border" />

            {/* Pillars */}
            <RevealSection delay={0.2}>
              <div className="mt-16 md:mt-20">
                <h4 className="text-minimal text-muted-foreground mb-8">PILARES</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
                  {pillars.map((pillar, index) => (
                    <div key={index} className="border-t border-border py-8 pr-6">
                      <h5 className="text-lg md:text-xl font-semibold text-architectural mb-2">{pillar.label}</h5>
                      <p className="text-sm text-muted-foreground font-light">{pillar.description}</p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border" />
              </div>
            </RevealSection>
          </div>
        </div>
      </div>

      {/* ── SECTION 5: RESOURCES & CTA ── */}
      <div className="py-24 md:py-32 bg-foreground text-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start">
              {/* Featured Resource */}
              <RevealSection>
                <div>
                  <h4 className="text-minimal text-background/50 mb-6">RECURSO DESTACADO</h4>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{ lineHeight: 1.1 }}>
                    Descarga el Paper:<br />El Laberinto de la IA
                  </h3>
                  <p className="text-background/60 leading-relaxed mb-8 font-light">
                    Todo lo que necesitas saber sobre por qué fallan los proyectos de IA y cómo evitarlo. Datos, frameworks y casos reales.
                  </p>
                  <Button
                    variant="outline"
                    className="border-background/30 text-background hover:bg-background hover:text-foreground transition-all duration-300 rounded-none px-8 py-6 text-sm tracking-wide"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    DESCARGAR PAPER
                  </Button>
                </div>
              </RevealSection>

              {/* CTA */}
              <RevealSection delay={0.15}>
                <div>
                  <h4 className="text-minimal text-background/50 mb-6">SIGUIENTE PASO</h4>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{ lineHeight: 1.1 }}>
                    Agenda tu sesión START de 25 minutos.
                  </h3>
                  <p className="text-background/60 leading-relaxed mb-8 font-light">
                    Sin compromiso. Te mostramos cómo aplicar nuestra metodología a tu caso concreto y qué resultados puedes esperar.
                  </p>
                  <Button
                    className="bg-background text-foreground hover:bg-background/90 transition-all duration-300 rounded-none px-8 py-6 text-sm tracking-wide font-semibold"
                  >
                    AGENDAR SESIÓN START
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
