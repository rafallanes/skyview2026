import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";

const Footer = () => {
  const { t } = useTranslation();
  const lp = useLocalizedPath();

  return (
    <footer className="py-16 bg-muted border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            <div className="col-span-2 md:col-span-1">
              <Link to={lp("home")} className="text-minimal text-foreground">SKYVIEW</Link>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                {t("footer.tagline")}
              </p>
            </div>
            <div>
              <h4 className="text-minimal text-foreground mb-4">{t("footer.services")}</h4>
              <div className="space-y-3">
                <Link to={lp("services")} className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">{t("footer.whatWeDo")}</Link>
                <Link to={lp("about")} className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">{t("footer.officeIA")}</Link>
                <Link to={lp("work")} className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">{t("footer.clients")}</Link>
              </div>
            </div>
            <div>
              <h4 className="text-minimal text-foreground mb-4">{t("footer.company")}</h4>
              <div className="space-y-3">
                <Link to={lp("blog")} className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">{t("footer.resources")}</Link>
                <Link to={lp("contact")} className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">{t("footer.contact")}</Link>
              </div>
            </div>
            <div>
              <h4 className="text-minimal text-foreground mb-4">{t("footer.legal")}</h4>
              <div className="space-y-3">
                <Link to={lp("avisoLegal")} className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">{t("footer.legalNotice")}</Link>
                <Link to={lp("privacidad")} className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">{t("footer.privacy")}</Link>
                <Link to={lp("sow")} className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">{t("footer.sowConditions")}</Link>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">{t("footer.rights", { year: new Date().getFullYear() })}</p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300">LinkedIn</a>
              <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
