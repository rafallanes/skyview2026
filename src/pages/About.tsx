import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutSection from "@/components/About";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <SEO
        titleKey="seo.about.title"
        descriptionKey="seo.about.description"
        routeKey="about"
        breadcrumbs={[
          { name: t("nav.home", "Home"), routeKey: "home" },
          { name: t("nav.officeIA"), routeKey: "about" },
        ]}
      />
      <Navigation />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default About;
