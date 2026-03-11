import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";
import heroImage from "@/assets/hero-architecture.jpg";

const Hero = () => {
  const { t } = useTranslation();
  const lp = useLocalizedPath();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt={t("imageAlt.hero")}
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        fetchPriority="high"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-light text-white text-architectural mb-8 reveal lg:text-8xl">
          {t("hero.title1")}
          <br />
          {t("hero.title2")}
        </h1>
        <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide max-w-2xl mx-auto mb-3 reveal-delayed whitespace-pre-line">
          {t("hero.subtitle")}
        </p>
        <p className="text-[13px] text-[#888888] font-normal tracking-[0.02em] text-center mb-8 reveal-delayed">
          Diagnóstico en 4 semanas · Primer caso en producción en 90 días · Oficina IA completa antes del primer año.
        </p>
        <Link
          to={lp("about")}
          className="inline-block bg-white/10 backdrop-blur-sm border border-white/30 text-white px-10 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-white/20 transition-all duration-300 reveal-delayed"
        >
          DESCUBRE TU OFICINA IA →
        </Link>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 reveal-delayed">
        <div className="w-px h-16 bg-white/40" />
        <div className="text-minimal text-white/60 mt-4 rotate-90 origin-center">
          {t("hero.scroll")}
        </div>
      </div>
    </section>
  );
};

export default Hero;
