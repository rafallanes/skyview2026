import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Download, Mail, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";
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

/* ── COMPONENT ── */
const About = () => {
  const { t } = useTranslation();

  const methodologySteps = [
    { number: "01", title: t("about.steps.01.title"), subtitle: t("about.steps.01.subtitle"), description: t("about.steps.01.desc") },
    { number: "02", title: t("about.steps.02.title"), subtitle: t("about.steps.02.subtitle"), description: t("about.steps.02.desc") },
    { number: "03", title: t("about.steps.03.title"), subtitle: t("about.steps.03.subtitle"), description: t("about.steps.03.desc") },
    { number: "04", title: t("about.steps.04.title"), subtitle: t("about.steps.04.subtitle"), description: t("about.steps.04.desc") },
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
      {/* ═══ SECTION 1 — METODOLOGÍA: 4 PASOS ═══ */}
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
                      <span className="text-minimal text-muted-foreground/60 block mb-4">{step.subtitle}</span>
                      <p className="text-muted-foreground leading-relaxed font-light">{step.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="border-t border-border" />
          </div>
        </div>
      </div>

      {/* ═══ SECTION 2 — EL LABERINTO ═══ */}
      <div className="relative bg-white text-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={aboutLaberinto} alt="" className="w-full h-full object-cover grayscale opacity-[0.15] contrast-[1.8] brightness-[1.2] mix-blend-multiply" aria-hidden="true" loading="lazy" width={1920} height={1080} />
        </div>
        <div className="relative z-10 py-12 md:py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <Reveal><h4 className="text-minimal text-gray-400 mb-6">{t("about.diagnosisLabel")}</h4></Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 max-w-5xl mb-8">
                  {t("about.diagnosisTitle")}<br />{t("about.diagnosisTitle2")}
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
                      <span className="absolute top-3 right-3 text-[5rem] md:text-[6rem] font-bold text-gray-400 select-none pointer-events-none leading-none">
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

      {/* ═══ SECTION 3 — S-P-R-I-N-T ═══ */}
      <div className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <Reveal><h4 className="text-minimal text-muted-foreground mb-6">{t("about.sprintLabel")}</h4></Reveal>
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
                    <span className="text-[6rem] xl:text-[7rem] font-bold text-foreground/[0.12] leading-none select-none pointer-events-none -mb-6 xl:-mb-4">
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

      {/* ═══ SECTION 4 — LEAD MAGNET & CTA ═══ */}
      <div className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={aboutCta} alt={t("imageAlt.aboutCta")} className="w-full h-full object-cover grayscale opacity-[0.15] contrast-[1.8] brightness-[1.2] mix-blend-multiply" aria-hidden="true" loading="lazy" width={1920} height={1080} />
        </div>
        <div className="relative z-10 py-12 md:py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
                <Reveal>
                  <div>
                    <h4 className="text-minimal text-white/40 mb-6">{t("about.leadLabel")}</h4>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ lineHeight: 1.1 }}>
                      {t("about.leadTitle")}<br />{t("about.leadTitle2")}
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
                <Reveal delay={0.15}>
                  <div>
                    <h4 className="text-minimal text-white/40 mb-6">{t("about.ctaLabel")}</h4>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ lineHeight: 1.1 }}>
                      {t("about.ctaTitle")}
                    </h3>
                    <p className="text-white/50 leading-relaxed mb-10 font-light text-lg">{t("about.ctaDesc")}</p>
                    <Button className="bg-white text-black hover:bg-white/90 rounded-none px-10 py-6 text-sm tracking-wide font-semibold">
                      {t("about.ctaCta")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-3 gap-6">
                      <div>
                        <span className="text-2xl font-bold">200+</span>
                        <p className="text-xs text-white/40 mt-1">{t("about.trustProjects")}</p>
                      </div>
                      <div>
                        <span className="text-2xl font-bold">90d</span>
                        <p className="text-xs text-white/40 mt-1">{t("about.trustSprint")}</p>
                      </div>
                      <div>
                        <span className="text-2xl font-bold">2012</span>
                        <p className="text-xs text-white/40 mt-1">{t("about.trustSince")}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
