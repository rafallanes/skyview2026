import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import contactBg from "@/assets/contact-bg.jpg";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="relative bg-foreground text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={contactBg}
          alt={t("imageAlt.contactBackground")}
          className="w-full h-full object-cover opacity-[0.15] grayscale contrast-[1.8] brightness-[1.2] mix-blend-multiply"
          aria-hidden="true"
          loading="lazy"
          width={1920}
          height={1080}
        />
      </div>
      <div className="relative z-10 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
              <div>
                <h2 className="text-minimal text-primary-foreground/40 mb-4">{t("contact.directLabel")}</h2>
                <h3 className="text-3xl md:text-5xl font-bold mb-12" style={{ lineHeight: 1.1 }}>
                  {t("contact.directTitle")}
                </h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-primary-foreground/50 mt-1 shrink-0" />
                    <div>
                      <h4 className="text-minimal text-primary-foreground/40 mb-1">{t("contact.email")}</h4>
                      <a href="mailto:hola@skyview.es" className="text-lg text-primary-foreground hover:text-primary-foreground/70 transition-colors duration-300">
                        hola@skyview.es
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-primary-foreground/50 mt-1 shrink-0" />
                    <div>
                      <h4 className="text-minimal text-primary-foreground/40 mb-1">{t("contact.phone")}</h4>
                      <a href="tel:+34691824746" className="text-lg text-primary-foreground hover:text-primary-foreground/70 transition-colors duration-300">
                        (+34) 691-824 746
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-primary-foreground/50 mt-1 shrink-0" />
                    <div>
                      <h4 className="text-minimal text-primary-foreground/40 mb-1">{t("contact.offices")}</h4>
                      <address className="text-lg not-italic text-primary-foreground/80 leading-relaxed">
                        Gemma Mengual, 2 - Edificio 23<br />
                        Tres Cantos 28108 MAD SPAIN
                      </address>
                    </div>
                  </div>
                </div>
                <div className="mt-12 pt-8 border-t border-primary-foreground/10">
                  <h4 className="text-minimal text-primary-foreground/40 mb-4">{t("contact.followUs")}</h4>
                  <div className="flex gap-8">
                    <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300">LinkedIn</a>
                    <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300">Instagram</a>
                    <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300">Behance</a>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-minimal text-primary-foreground/40 mb-4">{t("contact.ctaLabel")}</h4>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ lineHeight: 1.1 }}>
                  {t("contact.ctaTitle")}<br />{t("contact.ctaTitle2")}
                </h3>
                <p className="text-primary-foreground/50 leading-relaxed mb-10 font-light text-lg">
                  {t("contact.ctaDesc")}
                </p>
                <Button className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 rounded-none px-10 py-6 text-sm tracking-wide font-semibold">
                  {t("contact.ctaCta")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <div className="mt-16 pt-8 border-t border-primary-foreground/10 grid grid-cols-3 gap-6">
                  <div>
                    <span className="text-2xl font-bold">200+</span>
                    <p className="text-xs text-primary-foreground/40 mt-1">{t("contact.trustProjects")}</p>
                  </div>
                  <div>
                    <span className="text-2xl font-bold">90d</span>
                    <p className="text-xs text-primary-foreground/40 mt-1">{t("contact.trustSprint")}</p>
                  </div>
                  <div>
                    <span className="text-2xl font-bold">2012</span>
                    <p className="text-xs text-primary-foreground/40 mt-1">{t("contact.trustSince")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
