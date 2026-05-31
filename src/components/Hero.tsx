import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";
import heroImage from "@/assets/hero-architecture.jpg";

const Hero = () => {
  const { t } = useTranslation();
  const lp = useLocalizedPath();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <img
        src={heroImage}
        alt={t("imageAlt.hero")}
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        loading="eager"
        fetchPriority="high"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 py-32 flex flex-col">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-8 reveal">
          {t("home.hero.label")}
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white uppercase tracking-[-0.02em] leading-[1.05] mb-8 reveal">
          {t("home.hero.title1")}
          <br />
          {t("home.hero.title2")}
        </h1>
        <p className="text-base text-gray-400 max-w-xl mb-12 reveal-delayed leading-relaxed">
          {t("home.hero.desc")}
        </p>
        <div className="reveal-delayed">
          <Link
            to={lp("about")}
            className="inline-block bg-white text-black px-7 py-3 text-xs uppercase tracking-widest font-medium hover:bg-gray-100 transition-colors"
          >
            {t("home.hero.cta")}
          </Link>
        </div>
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-wrap items-center gap-x-10 gap-y-3 text-xs uppercase tracking-widest text-gray-400 reveal-delayed">
          <span>{t("home.hero.trust1")}</span>
          <span className="hidden md:inline text-white/20">|</span>
          <span>{t("home.hero.trust2")}</span>
          <span className="hidden md:inline text-white/20">|</span>
          <span>{t("home.hero.trust3")}</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
