import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Download, Mail, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";
import aboutLaberinto from "@/assets/about-laberinto.jpg";
import aboutCta from "@/assets/about-cta.jpg";

/* ── REVEAL WRAPPER ── */
function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const queObtienes = [
  {
    n: "01",
    title: "Estrategia clara desde el día uno.",
    desc: "Mapa de oportunidades, hoja de ruta priorizada y un Comité IA constituido con tu equipo. Sabes exactamente qué automatizar, en qué orden y qué retorno esperar.",
  },
  {
    n: "02",
    title: "Automatizaciones en producción, no prototipos.",
    desc: "Procesos automatizados e integrados en tus sistemas reales. Soluciones que tu equipo usa desde el primer trimestre — no demos, no pilotos eternos.",
  },
  {
    n: "03",
    title: "Tu equipo trabaja con IA, no contra ella.",
    desc: "Formación aplicada al día a día de cada departamento. Tu gente aprende haciendo, con herramientas que ya están configuradas para su contexto.",
  },
  {
    n: "04",
    title: "Impacto medido y validado por tu equipo financiero.",
    desc: "KPIs financieros, de adopción y operativos definidos desde el arranque. Todo alimenta una calculadora ROI que el propio equipo del cliente supervisa.",
  },
];

const stepResults: Record<string, string> = {
  "01": "plan claro y Comité IA constituido.",
  "02": "primeras automatizaciones en producción con impacto medible.",
  "03": "Oficina IA operativa con nuevos casos cada trimestre.",
  "04": "tu equipo gestiona la Oficina IA con capacidad propia.",
};

const About = () => {
  const { t } = useTranslation();
  const lp = useLocalizedPath();

  const methodologySteps = [
    { number: "01", title: t("about.steps.01.title"), subtitle: t("about.steps.01.subtitle"), time: t("about.steps.01.time"), description: t("about.steps.01.desc") },
    { number: "02", title: t("about.steps.02.title"), subtitle: t("about.steps.02.subtitle"), time: t("about.steps.02.time"), description: t("about.steps.02.desc") },
    { number: "03", title: t("about.steps.03.title"), subtitle: t("about.steps.03.subtitle"), time: t("about.steps.03.time"), description: t("about.steps.03.desc") },
    { number: "04", title: t("about.steps.04.title"), subtitle: t("about.steps.04.subtitle"), time: t("about.steps.04.time"), description: t("about.steps.04.desc") },
  ];

  const diagnosisItems = [
    { ghost: "01", title: t("about.diagnosis.01.title"), stat: t("about.diagnosis.01.stat"), description: t("about.diagnosis.01.desc") },
    { ghost: "02", title: t("about.diagnosis.02.title"), stat: t("about.diagnosis.02.stat"), description: t("about.diagnosis.02.desc") },
    { ghost: "03", title: t("about.diagnosis.03.title"), stat: t("about.diagnosis.03.stat"), description: t("about.diagnosis.03.desc") },
    { ghost: "04", title: t("about.diagnosis.04.title"), stat: t("about.diagnosis.04.stat"), description: t("about.diagnosis.04.desc") },
    { ghost: "05", title: t("about.diagnosis.05.title"), stat: t("about.diagnosis.05.stat"), description: t("about.diagnosis.05.desc") },
    { ghost: "06", title: t("about.diagnosis.06.title"), stat: t("about.diagnosis.06.stat"), description: t("about.diagnosis.06.desc") },
  ];

  const sprintPillars = ["S", "P", "R", "I", "N", "T"].map((letter) => ({
    letter,
    title: t(`about.sprint.${letter}.title`),
    description: t(`about.sprint.${letter}.desc`),
  }));

  return (
    <section id="about">
      {/* ═══ BLOQUE 1 — HERO ═══ */}
      <section className="relative bg-black text-white overflow-hidden flex items-center min-h-[70vh] pt-32 pb-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutCta})`, filter: "grayscale(100%)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(15, 23, 42, 0.85), rgba(0, 0, 0, 0.80))" }}
        />
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-8">OFICINA IA</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white uppercase tracking-[-0.02em] leading-[1.05] mb-8">
            TU OFICINA IA.
            <br />
            COMPLETA Y OPERATIVA
            <br />
            DESDE EL PRIMER TRIMESTRE.
          </h1>
          <p className="text-base text-gray-400 max-w-xl mb-12 leading-relaxed">
            No necesitas contratar un equipo de IA ni esperar meses para ver resultados. Nosotros montamos tu
            Oficina IA con todo lo que necesita. Tú solo tienes que decidir empezar.
          </p>
          <Link
            to={lp("contact")}
            className="inline-block bg-white text-black px-7 py-3 text-xs uppercase tracking-widest font-medium hover:bg-gray-100 transition-colors"
          >
            AGENDA TU SESIÓN START →
          </Link>
        </div>
      </section>

      {/* ═══ BLOQUE 2 — QUÉ OBTIENES ═══ */}
      <section className="bg-white text-zinc-900 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-6">QUÉ OBTIENES</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-16 max-w-4xl" style={{ lineHeight: 1.15 }}>
              Todo lo que tu empresa necesita para funcionar con IA. Sin montar nada internamente.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {queObtienes.map((it, i) => (
              <Reveal key={it.n} delay={i * 0.08}>
                <div className="border border-zinc-200 p-10 -ml-px -mt-px h-full">
                  <div className="text-7xl font-light text-foreground/[0.12] mb-4 leading-none">{it.n}</div>
                  <h3 className="text-lg font-medium text-zinc-900 mb-3">{it.title}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">{it.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="text-base text-zinc-600 max-w-2xl mx-auto text-center mt-12 leading-relaxed">
            Consultoría, desarrollo, formación, compliance y medición de resultados. Todo incluido. Todo
            gestionado. Sin que tengas que improvisar.
          </p>
        </div>
      </section>

      {/* ═══ BLOQUE 3 — EL LABERINTO DE LA IA ═══ */}
      <div className="relative bg-white text-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={aboutLaberinto}
            alt=""
            className="w-full h-full object-cover grayscale opacity-[0.15] contrast-[1.8] brightness-[1.2] mix-blend-multiply"
            aria-hidden="true"
            loading="lazy"
            width={1920}
            height={1080}
          />
        </div>
        <div className="relative z-10 py-12 md:py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <Reveal>
                <h4 className="text-minimal text-gray-400 mb-6">{t("about.diagnosisLabel")}</h4>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 max-w-5xl mb-8">
                  {t("about.diagnosisTitle")}
                  <br />
                  {t("about.diagnosisTitle2")}
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-lg md:text-xl text-gray-500 max-w-3xl mb-20 font-light leading-relaxed">
                  {t("about.diagnosisDesc")}
                </p>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                {diagnosisItems.map((item, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <div className="group relative border-t border-gray-200 py-10 md:py-14 pr-8 overflow-hidden">
                      <span className="absolute top-3 right-3 text-[5rem] md:text-[6rem] font-bold text-foreground/[0.25] select-none pointer-events-none leading-none">
                        {item.ghost}
                      </span>
                      <div className="relative z-10">
                        <span className="text-minimal text-gray-600 block mb-2 whitespace-pre-line">{item.stat}</span>
                        <h5 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-500 transition-colors duration-500">
                          {item.title}
                        </h5>
                        <p className="text-gray-500 leading-relaxed font-light text-sm md:text-base">{item.description}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <div className="border-t border-gray-200" />
            </div>
          </div>
        </div>
      </div>

      {/* ═══ BLOQUE 4 — DE CERO A TU OFICINA IA EN 4 PASOS ═══ */}
      <div className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <h3 className="text-minimal text-muted-foreground mb-6">{t("about.methodLabel")}</h3>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-light text-architectural mb-16 max-w-3xl">
                {t("about.methodTitle")}
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {methodologySteps.map((step, index) => (
                <Reveal key={index} delay={index * 0.08}>
                  <div className="group relative border-t border-border py-12 md:py-16 md:pr-16 md:odd:pr-16 md:even:pl-16 md:even:pr-0 overflow-hidden">
                    <span className="absolute top-4 right-4 md:top-6 md:right-8 text-7xl md:text-8xl font-bold text-foreground/[0.12] select-none pointer-events-none leading-none">
                      {step.number}
                    </span>
                    <div className="relative z-10">
                      <h4 className="text-xl md:text-2xl font-semibold text-architectural mb-1 group-hover:text-muted-foreground transition-colors duration-500">
                        {step.title}
                      </h4>
                      <span className="text-[11px] uppercase tracking-[0.15em] text-[#888888] block mb-3">{step.subtitle}</span>
                      <span className="text-base font-semibold text-foreground block mb-3">{step.time}</span>
                      <p className="text-[#999999] leading-relaxed font-light text-[15px]">{step.description}</p>
                      <div className="mt-4 pt-4 border-t border-zinc-200">
                        <span className="font-medium text-zinc-900">Resultado: </span>
                        <span className="text-zinc-600">{stepResults[step.number]}</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="border-t border-border" />
          </div>
        </div>
      </div>

      {/* ═══ BLOQUE 5 — S-P-R-I-N-T ═══ */}
      <div className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <h4 className="text-minimal text-muted-foreground mb-6">{t("about.sprintLabel")}</h4>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-architectural mb-6 max-w-5xl">
                {t("about.sprintTitle")}
              </h3>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-lg text-muted-foreground mb-20 max-w-2xl font-light leading-relaxed">
                {t("about.sprintDesc")}
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-0">
              {sprintPillars.map((pillar, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="group relative border-t xl:border-t-0 xl:border-l border-border py-10 xl:py-0 xl:pl-6 xl:pr-4 xl:min-h-[320px] flex flex-col justify-start">
                    <span className="text-[6rem] xl:text-[7rem] font-bold text-zinc-200 leading-none select-none pointer-events-none -mb-6 xl:-mb-4">
                      {pillar.letter}
                    </span>
                    <div className="relative z-10">
                      <h5 className="text-lg font-semibold text-architectural mb-3 group-hover:text-muted-foreground transition-colors duration-500">
                        {pillar.title}
                      </h5>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ═══ BLOQUE 6 — PAPER EL LABERINTO ═══ */}
      <div className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={aboutCta}
            alt=""
            className="w-full h-full object-cover grayscale opacity-[0.15] contrast-[1.8] brightness-[1.2] mix-blend-multiply"
            aria-hidden="true"
            loading="lazy"
            width={1920}
            height={1080}
          />
        </div>
        <div className="relative z-10 py-12 md:py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <Reveal>
                <div className="max-w-2xl">
                  <h4 className="text-minimal text-white/40 mb-6">{t("about.leadLabel")}</h4>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ lineHeight: 1.1 }}>
                    {t("about.leadTitle")}
                    <br />
                    {t("about.leadTitle2")}
                  </h3>
                  <p className="text-white/50 leading-relaxed mb-10 font-light text-lg">{t("about.leadDesc")}</p>
                  <div className="border border-white/10 p-8 mb-10 max-w-xs">
                    <div className="border border-white/20 aspect-[3/4] flex flex-col items-center justify-center p-6 text-center">
                      <span className="text-minimal text-white/30 mb-4">{t("about.leadWhitePaper")}</span>
                      <h5 className="text-lg font-semibold leading-tight mb-2 whitespace-pre-line">{t("about.leadPaperTitle")}</h5>
                      <span className="text-xs text-white/30 mt-auto">{t("about.leadPaperYear")}</span>
                    </div>
                  </div>
                  <div className="space-y-4 max-w-sm">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                      <Input placeholder={t("about.leadEmailPlaceholder")} className="bg-transparent border-white/20 text-white placeholder:text-white/30 rounded-none pl-10 h-12 focus-visible:ring-white/30" />
                    </div>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                      <Input placeholder={t("about.leadCompanyPlaceholder")} className="bg-transparent border-white/20 text-white placeholder:text-white/30 rounded-none pl-10 h-12 focus-visible:ring-white/30" />
                    </div>
                    <Button className="w-full bg-white text-black hover:bg-white/90 rounded-none h-12 text-sm tracking-wide font-semibold">
                      <Download className="mr-2 h-4 w-4" />
                      {t("about.leadDownload")}
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ BLOQUE 7 — CTA FINAL ═══ */}
      <section className="relative bg-black text-white py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutCta})`, filter: "grayscale(100%)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(15, 23, 42, 0.85), rgba(0, 0, 0, 0.80))" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-6">EMPIEZA AQUÍ</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ lineHeight: 1.15 }}>
              Agenda tu sesión START. 25 minutos. Sin compromiso.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-base text-gray-400 max-w-xl leading-relaxed mb-10">
              Te mostramos cómo sería tu Oficina IA, qué resultados puedes esperar y en cuánto tiempo. Sin
              presentaciones genéricas — con datos de tu sector y tu tipo de empresa.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              to={lp("contact")}
              className="inline-block bg-white text-black px-7 py-3 text-xs uppercase tracking-widest font-medium hover:bg-gray-100 transition-colors"
            >
              AGENDAR SESIÓN START →
            </Link>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-8 text-xs uppercase tracking-widest text-gray-500">
              <span>200+ proyectos</span>
              <span className="text-white/20">·</span>
              <span>90 días sprint medio</span>
              <span className="text-white/20">·</span>
              <span>Desde 2014</span>
            </div>
          </Reveal>
        </div>
      </section>
    </section>
  );
};

export default About;
