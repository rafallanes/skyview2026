import { User, Users, Building } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";

const bars = [
  {
    icon: User,
    title: "Persona aumentada",
    focus: "FOCO: LA TAREA",
    description: "Productividad personal con IA generativa. Formación, adopción, buenas prácticas.",
    label: "OFICINA IA — PRIMER SPRINT",
    heightClass: "h-[180px] md:h-[200px]",
    bg: "bg-zinc-300",
    textColor: "text-foreground",
    iconColor: "currentColor",
  },
  {
    icon: Users,
    title: "Equipo aumentado",
    focus: "FOCO: EL PROCESO",
    description: "Automatizaciones recurrentes de tareas manuales. El equipo deja de hacer lo repetitivo.",
    label: "OFICINA IA AS A SERVICE",
    heightClass: "h-[220px] md:h-[260px]",
    bg: "bg-zinc-400",
    textColor: "text-foreground",
    iconColor: "currentColor",
  },
  {
    icon: Building,
    title: "Empresa aumentada",
    focus: "FOCO: EL NEGOCIO",
    description: "Modelos y agentes a escala en el core del negocio. La IA opera en lo estratégico.",
    label: "OFICINA IA PROPIA",
    heightClass: "h-[260px] md:h-[320px]",
    bg: "bg-zinc-600",
    textColor: "text-white",
    iconColor: "white",
  },
];

export default function AIMaturityChart() {
  const { t } = useTranslation();
  const lp = useLocalizedPath();

  return (
    <div className="bg-background py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 md:mb-14">
            <p
              className="uppercase text-muted-foreground/60 mb-3"
              style={{ fontSize: "11px", letterSpacing: "2.4px" }}
            >
              MAKING AI EASY
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-2xl md:text-4xl">
              <span className="text-muted-foreground font-light">Talento</span>
              <span className="text-muted-foreground/40 font-light">+</span>
              <span className="text-muted-foreground font-light">Tecnología</span>
              <span className="text-muted-foreground/40 font-light">=</span>
              <span className="text-foreground font-bold">Inteligencia Aumentada</span>
            </div>
          </div>

          {/* Chart - Desktop */}
          <div className="hidden md:block">
            <div className="flex items-end border-b-2 border-border mx-4 lg:mx-16">
              {bars.map((bar, i) => (
                <div key={i} className="flex-1 flex flex-col">
                  <div
                    className={`${bar.heightClass} ${bar.bg} border border-border flex flex-col justify-between p-5 lg:p-6`}
                  >
                    <div className="flex items-start gap-3 lg:gap-4">
                      <bar.icon size={28} color={bar.iconColor} strokeWidth={1.5} className="flex-shrink-0 mt-0.5" />
                      <div>
                        <p className={`text-lg lg:text-xl font-bold ${bar.textColor} mb-1`}>{bar.title}</p>
                        <p
                          className={`uppercase ${bar.textColor} font-semibold`}
                          style={{ fontSize: "10px", letterSpacing: "2px" }}
                        >
                          {bar.focus}
                        </p>
                      </div>
                    </div>
                    <p className={`text-[13px] ${bar.textColor} leading-snug`}>{bar.description}</p>
                  </div>
                  <p
                    className="text-center uppercase text-muted-foreground/60 py-3"
                    style={{ fontSize: "11px", letterSpacing: "1.5px" }}
                  >
                    {bar.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Chart - Mobile (stacked) */}
          <div className="md:hidden space-y-4">
            {bars.map((bar, i) => (
              <div key={i}>
                <div className={`${bar.bg} border border-border flex flex-col gap-4 p-5`}>
                  <div className="flex items-start gap-3">
                    <bar.icon size={24} color={bar.iconColor} strokeWidth={1.5} className="flex-shrink-0 mt-0.5" />
                    <div>
                      <p className={`text-base font-bold ${bar.textColor} mb-1`}>{bar.title}</p>
                      <p
                        className={`uppercase ${bar.textColor} font-semibold`}
                        style={{ fontSize: "10px", letterSpacing: "2px" }}
                      >
                        {bar.focus}
                      </p>
                    </div>
                  </div>
                  <p className={`text-sm ${bar.textColor} leading-snug`}>{bar.description}</p>
                </div>
                <p
                  className="uppercase text-muted-foreground/60 mt-2"
                  style={{ fontSize: "10px", letterSpacing: "1.5px" }}
                >
                  {bar.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-12">
            <Button asChild variant="default" className="rounded-none px-10 py-6 text-sm tracking-wide font-semibold">
              <Link to={lp("about")}>
                {t("index.sprintCta")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
