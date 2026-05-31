import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";
import SEO from "@/components/SEO";
import heroBg from "@/assets/hero-architecture.jpg";
import ctaBg from "@/assets/about-cta.jpg";

type Category = "all" | "oficina" | "automatizacion";

interface CaseStudy {
  category: "oficina" | "automatizacion";
  idx: number;
}

const cases: CaseStudy[] = [
  { category: "oficina", idx: 0 },
  { category: "oficina", idx: 1 },
  { category: "oficina", idx: 2 },
  { category: "automatizacion", idx: 3 },
  { category: "automatizacion", idx: 4 },
  { category: "automatizacion", idx: 5 },
];

const Work = () => {
  const [activeCat, setActiveCat] = useState<Category>("all");
  const { t } = useTranslation();
  const lp = useLocalizedPath();

  const filtered = activeCat === "all" ? cases : cases.filter((c) => c.category === activeCat);

  const tabBase = "px-6 py-3 text-xs uppercase tracking-widest font-medium border border-zinc-900 transition-colors";
  const tabActive = "bg-zinc-900 text-white";
  const tabInactive = "bg-white text-zinc-900 hover:bg-zinc-900 hover:text-white";

  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: "Inter, sans-serif" }}>
      <SEO
        titleKey="seo.work.title"
        descriptionKey="seo.work.description"
        routeKey="work"
        breadcrumbs={[
          { name: t("nav.home", "Home"), routeKey: "home" },
          { name: t("nav.caseStudies"), routeKey: "work" },
        ]}
      />
      <Navigation />

      {/* ─── HERO ─── */}
      <section className="relative bg-black text-white pt-32 pb-20 overflow-hidden" style={{ minHeight: "50vh" }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})`, filter: "grayscale(100%)" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(15, 23, 42, 0.85), rgba(0, 0, 0, 0.80))" }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-6">{t("work.heroLabel")}</p>
          <h1 className="text-6xl md:text-8xl font-light text-white uppercase leading-[1.05] max-w-5xl mb-10">
            {t("work.heroTitle1")}<br />{t("work.heroTitle2")}
          </h1>
          <p className="text-base text-gray-400 leading-relaxed max-w-xl">
            {t("work.heroDesc")}
          </p>
        </div>
      </section>

      {/* ─── FILTRO ─── */}
      <section className="bg-white text-zinc-900 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-0">
            <button
              onClick={() => setActiveCat("all")}
              className={`${tabBase} ${activeCat === "all" ? tabActive : tabInactive}`}
            >
              {t("work.filterAll")}
            </button>
            <button
              onClick={() => setActiveCat("oficina")}
              className={`${tabBase} ${activeCat === "oficina" ? tabActive : tabInactive}`}
            >
              {t("work.filterOficina")}
            </button>
            <button
              onClick={() => setActiveCat("automatizacion")}
              className={`${tabBase} ${activeCat === "automatizacion" ? tabActive : tabInactive}`}
            >
              {t("work.filterAutomatizacion")}
            </button>
          </div>
        </div>
      </section>

      {/* ─── GRID DE CASOS ─── */}
      <section className="bg-white text-zinc-900 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {filtered.map((c, i) => {
              const isOficina = c.category === "oficina";
              const badgeClasses = isOficina
                ? "border border-zinc-900 text-zinc-900"
                : "border border-zinc-400 text-zinc-500";
              return (
                <article
                  key={i}
                  className="border border-zinc-200 p-10 flex flex-col"
                >
                  <span className={`${badgeClasses} text-xs uppercase tracking-widest px-3 py-1 mb-6 inline-block self-start`}>
                    {c.badge}
                  </span>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">{c.sector}</p>
                  <h3 className="text-lg font-medium text-zinc-900 mb-2">{c.title}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">{c.result}</p>
                  <a
                    href="#"
                    className="text-xs uppercase tracking-widest text-zinc-900 font-medium mt-6 border-b border-zinc-900 self-start pb-0.5 hover:opacity-70 transition-opacity"
                  >
                    Ver caso →
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="relative bg-black text-white py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ctaBg})`, filter: "grayscale(100%)" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(15, 23, 42, 0.85), rgba(0, 0, 0, 0.80))" }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-6">TU TURNO</p>
          <h2 className="text-4xl font-bold text-white mb-6 max-w-3xl">
            ¿Quieres ver resultados como estos en tu empresa?
          </h2>
          <p className="text-base text-gray-400 leading-relaxed max-w-xl mb-10">
            Agenda una sesión START de 25 minutos. Analizamos tu caso, te mostramos oportunidades concretas y te damos un plan con plazos y retorno esperado.
          </p>
          <Link
            to={lp("contact")}
            className="inline-block bg-white text-black px-7 py-3 text-xs uppercase tracking-widest font-medium hover:bg-gray-100 transition-colors"
          >
            AGENDAR SESIÓN START →
          </Link>
          <div className="flex flex-wrap gap-8 mt-10 text-xs uppercase tracking-widest text-gray-500">
            <span>200+ proyectos</span>
            <span>·</span>
            <span>90 días sprint medio</span>
            <span>·</span>
            <span>Desde 2014</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Work;
