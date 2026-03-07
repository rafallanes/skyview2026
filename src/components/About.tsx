import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Download, Mail, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import aboutLaberinto from "@/assets/about-laberinto.jpg";
import aboutFilosofia from "@/assets/about-filosofia.jpg";
import aboutCta from "@/assets/about-cta.jpg";

/* ── DATA ── */

const diagnosisItems = [
{
  ghost: "01",
  title: "Valor Inexistente",
  stat: "BOSTON CONSULTING GROUP\nTHE WIDENING AI VALUE GAP, 2025",
  description: "El 78% usa GenAI, pero solo el 5% extrae valor sustancial."
},
{
  ghost: "02",
  title: "El Vacío del EBIT",
  stat: "STANFORD HAI\nAI INDEZ REPORT 2025, 2025",
  description: "El 80% de las empresas no perciben impacto en EBIT tras 12 meses."
},
{
  ghost: "03",
  title: "Shadow AI",
  stat: "KPMG & UNIVERSITY OF MELBOURNE\nTRUST, ATTITUDES AND USE OF AI, 2025",
  description: "El 78% de empleados usa IA 'informal'. El 57% lo oculta, arriesgando datos corporativos."
},
{
  ghost: "04",
  title: "Gobernanza llega 'Tarde'",
  stat: "DELOITTE\nTHE STATE OF GENERATIVE AI IN ENTERPRISE, 2024",
  description: "Solo el 15% se siente preparado en riesgos. Se acelera sin guardrails o se frena por miedo."
},
{
  ghost: "05",
  title: "\"Pruebas eternas\" que no avanzan",
  stat: "MCKINSEY\nTHE STATE OF AI: HOW ORGANIZATIONS ARE REWRITING, 2025",
  description: "El 80-85% de los pilotos nunca llegan a producción. Sólo el 10% reporta usar agentes en alguna función."
},
{
  ghost: "06",
  title: "Resistencias Invisibles",
  stat: "KPMG 6 UNIVERSITY OF MELBOURNE\nTRUST, ATTITUDES AND USE OF AI, 2025",
  description: "Miedo al empleo y formación genérica que no cambia hábitos."
}];


const sprintPillars = [
{
  letter: "S",
  title: "Squads",
  description: "Especialización por equipos (squads) para aterrizar casos reales del día a día. Nada de demos genéricas."
},
{
  letter: "P",
  title: "Priorities",
  description: "El negocio decide y prioriza qué cambiar primero. Siempre está al volante. Y tiene la Oficina IA activa desde el minuto uno."
},
{
  letter: "R",
  title: "Roadmap",
  description: "Mapa de ruta claro y 'fast tracks' o periodos cortos para replicar lo que funciona."
},
{
  letter: "I",
  title: "Impact",
  description: "Equilibrio entre formación, consultoría y automatización para procesos eficientes."
},
{
  letter: "N",
  title: "Numbers",
  description: "Objetivos medibles y ROI (OPEX y CAPEX). Claridad y objetividad total."
},
{
  letter: "T",
  title: "Trust",
  description: "Gobernanza, ética y seguridad desde el inicio para garantizar la integridad de la información."
}];


/* ── REVEAL WRAPPER ── */

function Reveal({ children, className = "", delay = 0 }: {children: React.ReactNode;className?: string;delay?: number;}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}>
      
      {children}
    </motion.div>);

}

/* ── COMPONENT ── */

const About = () => {
  return (
    <section id="about">

      {/* ═══════════════════════════════════════════════
                                                                                                                                                                                                                                                                                                                         SECTION 1 — EL LABERINTO (Dark Mode Impact)
                                                                                                                                                                                                                                                                                                                         ═══════════════════════════════════════════════ */}
      <div className="relative overflow-hidden">
        {/* Background architectural image */}
        <div className="absolute inset-0 z-0">
          <img
            src={aboutLaberinto}
            alt=""
            className="w-full h-full object-cover grayscale contrast-[1.1] brightness-[1.05] opacity-[0.15]"
            aria-hidden="true" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(244,244,245,0.85) 100%)' }} />
        </div>

        <div className="relative z-10 py-12 md:py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <Reveal>
                <h4 className="text-minimal text-zinc-500 mb-6">EL DIAGNÓSTICO</h4>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-architectural text-zinc-900 max-w-5xl mb-8">
                  El Laberinto de la IA:<br />¿Por qué no avanzas?
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-lg md:text-xl text-zinc-600 max-w-3xl mb-20 font-light leading-relaxed">
                  El 85% de los proyectos de IA fallan por falta de método. Diseñamos la estructura que garantiza el impacto real en tu cuenta de resultados.
                </p>
              </Reveal>

              {/* Pain-point grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                {diagnosisItems.map((item, i) =>
                <Reveal key={i} delay={i * 0.08}>
                    <div className="group relative border-t border-zinc-300/50 py-10 md:py-14 pr-8 overflow-hidden">
                      {/* Ghost number */}
                      <span className="absolute top-3 right-3 text-[5rem] md:text-[6rem] font-bold text-zinc-900/[0.08] select-none pointer-events-none leading-none">
                        {item.ghost}
                      </span>
                      <div className="relative z-10">
                        <span className="text-minimal text-zinc-400 block mb-2 whitespace-pre-line">{item.stat}</span>
                        <h5 className="text-xl font-semibold text-zinc-900 mb-3 group-hover:text-zinc-600 transition-colors duration-500">
                          {item.title}
                        </h5>
                        <p className="text-zinc-500 leading-relaxed font-light text-sm md:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                )}
              </div>
              <div className="border-t border-zinc-300/50" />
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
                                                                                                                                                                                                                                                                                                                         SECTION 2 — FILOSOFÍA AUMENTADA (Split Screen)
                                                                                                                                                                                                                                                                                                                         ═══════════════════════════════════════════════ */}
      <div className="bg-background">
        <div className="grid md:grid-cols-2 min-h-[85vh]">
          {/* Left: Full-bleed photo */}
          <Reveal className="relative overflow-hidden">
            <img
              src={aboutFilosofia}
              alt="Pasillo de hormigón con luz al fondo"
              className="w-full h-full object-cover min-h-[50vh] md:min-h-full" />
            
            <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent" />
          </Reveal>

          {/* Right: Philosophy text */}
          <div className="flex items-center py-12 md:py-16 px-8 md:px-16 lg:px-24">
            <div className="max-w-xl">
              <Reveal>
                <h4 className="text-minimal text-muted-foreground mb-4">TECNOLOGÍA AL SERVICIO DE LAS PERSONAS</h4>
              </Reveal>
              <Reveal delay={0.1}>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-architectural mb-10">
                  Filosofía<br />"Aumentada"
                </h3>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed font-light">No sustituimos personas, potenciamos su talento. Creamos Inteligencia Aumentada uniendo el criterio humano a la potencia tecnológica.

                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed font-light">El resultado son Equipos Aumentados y resultados multiplicados. Menos tareas manuales, más impacto estratégico. Así de sencillo.

                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-12 pt-8 border-t border-border flex gap-12">
                  <div>
                    <span className="text-minimal text-muted-foreground">FOUNDED</span>
                    <p className="text-2xl font-semibold mt-1">2012

                    </p>
                  </div>
                  <div>
                    <span className="text-minimal text-muted-foreground">PROJECTS</span>
                    <p className="text-2xl font-semibold mt-1">200+</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
                                                                                                                                                                                                                                                                                                                         SECTION 3 — EL MODELO OPERATIVO (S-P-R-I-N-T)
                                                                                                                                                                                                                                                                                                                         ═══════════════════════════════════════════════ */}
      <div className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <h4 className="text-minimal text-muted-foreground mb-6">NUESTRO MODELO</h4>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-architectural mb-6 max-w-5xl">
                Metodología S-P-R-I-N-T
              </h3>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-lg text-muted-foreground mb-20 max-w-2xl font-light leading-relaxed">
                Seis pilares que transforman la incertidumbre en un sistema operativo de IA productivo y medible.
              </p>
            </Reveal>

            {/* SPRINT 6-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-0">
              {sprintPillars.map((pillar, i) => <Reveal key={i} delay={i * 0.08}>
                  <div className="group relative border-t xl:border-t-0 xl:border-l border-border py-10 xl:py-0 xl:pl-6 xl:pr-4 xl:min-h-[320px] flex flex-col justify-start">
                    {/* Large ghost letter */}
                    <span className="text-[6rem] xl:text-[7rem] font-bold text-foreground/[0.12] leading-none select-none pointer-events-none -mb-6 xl:-mb-4">
                      {pillar.letter}
                    </span>
                    <div className="relative z-10">
                      <h5 className="text-lg font-semibold text-architectural mb-3 group-hover:text-muted-foreground transition-colors duration-500">
                        {pillar.title}
                      </h5>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </Reveal>)}
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
                                                                                                                                                                                                                                                                                                                         SECTION 4 — LEAD MAGNET & CTA
                                                                                                                                                                                                                                                                                                                         ═══════════════════════════════════════════════ */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={aboutCta}
            alt=""
            className="w-full h-full object-cover grayscale contrast-[1.1] brightness-[1.05] opacity-[0.15]"
            aria-hidden="true" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(244,244,245,0.85) 100%)' }} />
        </div>

        <div className="relative z-10 py-12 md:py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

                {/* Lead Magnet — Paper */}
                <Reveal>
                  <div>
                    <h4 className="text-minimal text-zinc-500 mb-6">RECURSO DESTACADO</h4>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-6" style={{ lineHeight: 1.1 }}>
                      Descarga el Paper:<br />El Laberinto de la IA
                    </h3>
                    <p className="text-zinc-500 leading-relaxed mb-10 font-light text-lg">
                      Todo lo que necesitas saber sobre por qué fallan los proyectos de IA y cómo evitarlo. Datos, frameworks y casos reales.
                    </p>

                    {/* Mini PDF mockup */}
                    <div className="border border-zinc-300/50 p-8 mb-10 max-w-xs">
                      <div className="border border-zinc-300 aspect-[3/4] flex flex-col items-center justify-center p-6 text-center">
                        <span className="text-minimal text-zinc-400 mb-4">WHITE PAPER</span>
                        <h5 className="text-lg font-semibold leading-tight mb-2 text-zinc-900">El Laberinto<br />de la IA</h5>
                        <span className="text-xs text-zinc-400 mt-auto">SKYVIEW · 2026</span>
                      </div>
                    </div>

                    {/* Lead form */}
                    <div className="space-y-4 max-w-sm">
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                        <Input
                          placeholder="Email corporativo"
                          className="bg-white/50 border-zinc-300 text-zinc-900 placeholder:text-zinc-400 rounded-none pl-10 h-12 focus-visible:ring-zinc-400" />
                      </div>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                        <Input
                          placeholder="Empresa"
                          className="bg-white/50 border-zinc-300 text-zinc-900 placeholder:text-zinc-400 rounded-none pl-10 h-12 focus-visible:ring-zinc-400" />
                      </div>
                      <Button className="w-full bg-zinc-900 text-white hover:bg-zinc-800 rounded-none h-12 text-sm tracking-wide font-semibold">
                        <Download className="mr-2 h-4 w-4" />
                        DESCARGAR PAPER
                      </Button>
                    </div>
                  </div>
                </Reveal>

                {/* CTA — Agenda */}
                <Reveal delay={0.15}>
                  <div>
                    <h4 className="text-minimal text-zinc-500 mb-6">SIGUIENTE PASO</h4>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-6" style={{ lineHeight: 1.1 }}>
                      Agenda tu sesión START de 25 minutos.
                    </h3>
                    <p className="text-zinc-500 leading-relaxed mb-10 font-light text-lg">
                      Sin compromiso. Te mostramos cómo aplicar nuestra metodología a tu caso concreto y qué resultados puedes esperar.
                    </p>
                    <Button className="bg-zinc-900 text-white hover:bg-zinc-800 rounded-none px-10 py-6 text-sm tracking-wide font-semibold">
                      AGENDAR SESIÓN START
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                    {/* Trust signals */}
                    <div className="mt-16 pt-8 border-t border-zinc-300/50 grid grid-cols-3 gap-6">
                      <div>
                        <span className="text-2xl font-bold text-zinc-900">200+</span>
                        <p className="text-xs text-zinc-500 mt-1">Proyectos</p>
                      </div>
                      <div>
                        <span className="text-2xl font-bold text-zinc-900">90d</span>
                        <p className="text-xs text-zinc-500 mt-1">Sprint medio</p>
                      </div>
                      <div>
                        <span className="text-2xl font-bold text-zinc-900">2012</span>
                        <p className="text-xs text-zinc-500 mt-1">Desde</p>
                      </div>
                    </div>
                  </div>
                </Reveal>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default About;