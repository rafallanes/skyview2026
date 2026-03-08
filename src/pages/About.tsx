import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutSection from "@/components/About";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <SEO titleKey="seo.about.title" descriptionKey="seo.about.description" routeKey="about" />
      <Navigation />

      {/* ─── HERO ─── */}
      <section className="pt-32 pb-10 md:pb-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-minimal text-muted-foreground mb-6">{t("about.heroLabel")}</h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-architectural max-w-5xl mb-10">
              {t("about.heroTitle")}{" "}
              <br className="hidden md:block" />
              {t("about.heroTitle2")}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              {t("about.heroDesc")}
            </p>
          </div>
        </div>
      </section>

      <AboutSection />
      <Footer />
    </div>
  );
};

export default About;
