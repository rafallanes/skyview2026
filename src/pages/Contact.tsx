import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import SEO from "@/components/SEO";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <SEO
        titleKey="seo.contact.title"
        descriptionKey="seo.contact.description"
        routeKey="contact"
        breadcrumbs={[
          { name: t("nav.home", "Home"), routeKey: "home" },
          { name: t("nav.contact"), routeKey: "contact" },
        ]}
      />
      <Navigation />
      <div className="pt-16">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
