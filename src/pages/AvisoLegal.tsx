import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";

const tocIds = ["identificativa", "objeto", "propiedad", "responsabilidad", "cookies", "enlaces", "datos", "jurisdiccion"];

const AvisoLegal = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("pt") ? "pt" : i18n.language?.startsWith("en") ? "en" : "es";

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">

            <p className="text-minimal text-muted-foreground mb-4">{t("avisoLegal.label")}</p>
            <h1 className="text-4xl md:text-5xl font-light text-architectural mb-4">
              {t("avisoLegal.title")}
            </h1>
            <p className="text-sm text-muted-foreground mb-16">
              {t("avisoLegal.lastUpdate")}
            </p>

            <nav className="mb-16 p-6 border border-border rounded-sm bg-muted/30">
              <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">{t("avisoLegal.tocTitle")}</h2>
              <ol className="space-y-2">
                {tocIds.map((id, i) => (
                  <li key={id}>
                    <a href={`#${id}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 underline-offset-4 hover:underline">
                      {t(`avisoLegal.toc${i + 1}`)}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="space-y-14 legal-prose" lang={lang}>
              <section id="identificativa">
                <h3 className="text-xl font-semibold text-foreground mb-4">{t("avisoLegal.s1Title")}</h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">{t("avisoLegal.s1Intro")}</p>
                <ul className="ml-6 space-y-2 text-base text-muted-foreground leading-relaxed list-disc">
                  <li><strong className="text-foreground/80">{t("avisoLegal.s1TitularLabel")}:</strong> {t("avisoLegal.s1Titular")}</li>
                  <li><strong className="text-foreground/80">{t("avisoLegal.s1CifLabel")}:</strong> {t("avisoLegal.s1Cif")}</li>
                  <li><strong className="text-foreground/80">{t("avisoLegal.s1DomicilioLabel")}:</strong> {t("avisoLegal.s1Domicilio")}</li>
                  <li><strong className="text-foreground/80">{t("avisoLegal.s1ActividadLabel")}:</strong> {t("avisoLegal.s1Actividad")}</li>
                  <li><strong className="text-foreground/80">{t("avisoLegal.s1EmailLabel")}:</strong>{" "}
                    <a href="mailto:hola@skyview.es" className="underline underline-offset-4 hover:text-foreground transition-colors duration-300">hola@skyview.es</a>
                  </li>
                </ul>
              </section>

              <section id="objeto">
                <h3 className="text-xl font-semibold text-foreground mb-4">{t("avisoLegal.s2Title")}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{t("avisoLegal.s2Content")}</p>
              </section>

              <section id="propiedad">
                <h3 className="text-xl font-semibold text-foreground mb-4">{t("avisoLegal.s3Title")}</h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">{t("avisoLegal.s3Intro")}</p>
                <ul className="ml-6 space-y-2 text-base text-muted-foreground leading-relaxed list-disc">
                  <li>{t("avisoLegal.s3Item1")}</li>
                  <li>{t("avisoLegal.s3Item2")}</li>
                  <li>{t("avisoLegal.s3Item3")}</li>
                </ul>
                <p className="text-base text-muted-foreground leading-relaxed mt-6">{t("avisoLegal.s3Closing")}</p>
              </section>

              <section id="responsabilidad">
                <h3 className="text-xl font-semibold text-foreground mb-4">{t("avisoLegal.s4Title")}</h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">{t("avisoLegal.s4Intro")}</p>
                <ul className="ml-6 space-y-3 text-base text-muted-foreground leading-relaxed list-disc">
                  <li>{t("avisoLegal.s4Item1")}</li>
                  <li>{t("avisoLegal.s4Item2")}</li>
                  <li>{t("avisoLegal.s4Item3")}</li>
                  <li>{t("avisoLegal.s4Item4")}</li>
                </ul>
              </section>

              <section id="cookies">
                <h3 className="text-xl font-semibold text-foreground mb-4">{t("avisoLegal.s5Title")}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{t("avisoLegal.s5Content")}</p>
              </section>

              <section id="enlaces">
                <h3 className="text-xl font-semibold text-foreground mb-4">{t("avisoLegal.s6Title")}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{t("avisoLegal.s6Content")}</p>
              </section>

              <section id="datos">
                <h3 className="text-xl font-semibold text-foreground mb-4">{t("avisoLegal.s7Title")}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {t("avisoLegal.s7Content")}{" "}
                  <Link to="/privacidad" className="underline underline-offset-4 hover:text-foreground transition-colors duration-300">{t("avisoLegal.s7LinkText")}</Link>
                  {t("avisoLegal.s7ContentAfter")}
                </p>
              </section>

              <section id="jurisdiccion">
                <h3 className="text-xl font-semibold text-foreground mb-4">{t("avisoLegal.s8Title")}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{t("avisoLegal.s8Content")}</p>
              </section>
            </div>

            <div className="mt-20 pt-10 border-t border-border flex flex-col sm:flex-row gap-4">
              <Button variant="outline" asChild className="rounded-none">
                <Link to="/"><ArrowLeft className="mr-2 h-4 w-4" />{t("avisoLegal.backBtn")}</Link>
              </Button>
              <Button variant="outline" asChild className="rounded-none">
                <a href="mailto:hola@skyview.es"><Mail className="mr-2 h-4 w-4" />{t("avisoLegal.supportBtn")}</a>
              </Button>
              <Button variant="outline" className="rounded-none print:hidden" onClick={() => window.print()}>
                <Printer className="mr-2 h-4 w-4" />{t("avisoLegal.printBtn")}
              </Button>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AvisoLegal;