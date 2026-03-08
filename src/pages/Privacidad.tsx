import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";
import SEO from "@/components/SEO";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";

const tocIds = ["responsable", "datos", "conservacion", "terceros", "seguridad", "derechos", "aepd"];

const Privacidad = () => {
  const { t, i18n } = useTranslation();
  const lp = useLocalizedPath();
  const lang = i18n.language?.startsWith("pt") ? "pt" : i18n.language?.startsWith("en") ? "en" : "es";

  const datosTable = [
    { dato: t("privacidad.s2Row1Dato"), finalidad: t("privacidad.s2Row1Finalidad"), base: t("privacidad.s2Row1Base") },
    { dato: t("privacidad.s2Row2Dato"), finalidad: t("privacidad.s2Row2Finalidad"), base: t("privacidad.s2Row2Base") },
    { dato: t("privacidad.s2Row3Dato"), finalidad: t("privacidad.s2Row3Finalidad"), base: t("privacidad.s2Row3Base") },
    { dato: t("privacidad.s2Row4Dato"), finalidad: t("privacidad.s2Row4Finalidad"), base: t("privacidad.s2Row4Base") },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO titleKey="seo.privacidad.title" descriptionKey="seo.privacidad.description" routeKey="privacidad" noIndex />
      <Navigation />

      <main className="flex-1 pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">

            <p className="text-minimal text-muted-foreground mb-4">{t("privacidad.label")}</p>
            <h1 className="text-4xl md:text-5xl font-light text-architectural mb-4">{t("privacidad.title")}</h1>
            <p className="text-sm text-muted-foreground mb-6">{t("privacidad.lastUpdate")}</p>
            <p className="text-base text-muted-foreground leading-relaxed mb-16">{t("privacidad.intro")}</p>

            <nav className="mb-16 p-6 border border-border rounded-sm bg-muted/30">
              <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">{t("privacidad.tocTitle")}</h2>
              <ol className="space-y-2">
                {tocIds.map((id, i) => (
                  <li key={id}>
                    <a href={`#${id}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 underline-offset-4 hover:underline">
                      {t(`privacidad.toc${i + 1}`)}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="space-y-14 legal-prose" lang={lang}>
              <section id="responsable">
                <h3 className="text-xl font-semibold text-foreground mb-4">{t("privacidad.s1Title")}</h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">{t("privacidad.s1Intro")}</p>
                <ul className="ml-6 space-y-2 text-base text-muted-foreground leading-relaxed list-disc">
                  <li><strong className="text-foreground/80">{t("privacidad.s1TitularLabel")}:</strong> {t("privacidad.s1Titular")}</li>
                  <li><strong className="text-foreground/80">{t("privacidad.s1CifLabel")}:</strong> {t("privacidad.s1Cif")}</li>
                  <li><strong className="text-foreground/80">{t("privacidad.s1DomicilioLabel")}:</strong> {t("privacidad.s1Domicilio")}</li>
                  <li><strong className="text-foreground/80">{t("privacidad.s1EmailLabel")}:</strong>{" "}
                    <a href="mailto:hola@skyview.es" className="underline underline-offset-4 hover:text-foreground transition-colors duration-300">hola@skyview.es</a>
                  </li>
                </ul>
              </section>

              <section id="datos">
                <h3 className="text-xl font-semibold text-foreground mb-4">{t("privacidad.s2Title")}</h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">{t("privacidad.s2Intro")}</p>
                <div className="overflow-x-auto mb-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold text-foreground/80 min-w-[160px]">{t("privacidad.s2TableHeaderDato")}</TableHead>
                        <TableHead className="font-semibold text-foreground/80">{t("privacidad.s2TableHeaderFinalidad")}</TableHead>
                        <TableHead className="font-semibold text-foreground/80 min-w-[200px]">{t("privacidad.s2TableHeaderBase")}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {datosTable.map((row, i) => (
                        <TableRow key={i}>
                          <TableCell className="text-muted-foreground">{row.dato}</TableCell>
                          <TableCell className="text-muted-foreground">{row.finalidad}</TableCell>
                          <TableCell className="text-muted-foreground">{row.base}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">{t("privacidad.s2Closing")}</p>
              </section>

              <section id="conservacion">
                <h3 className="text-xl font-semibold text-foreground mb-4">{t("privacidad.s3Title")}</h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">{t("privacidad.s3Intro")}</p>
                <ul className="ml-6 space-y-3 text-base text-muted-foreground leading-relaxed list-disc">
                  <li><strong className="text-foreground/80">{t("privacidad.s3ContactLabel")}</strong> {t("privacidad.s3ContactDesc")}</li>
                  <li><strong className="text-foreground/80">{t("privacidad.s3ContractLabel")}</strong> {t("privacidad.s3ContractDesc")}</li>
                </ul>
                <p className="text-base text-muted-foreground leading-relaxed mt-6">{t("privacidad.s3Closing")}</p>
              </section>

              <section id="terceros">
                <h3 className="text-xl font-semibold text-foreground mb-4">{t("privacidad.s4Title")}</h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">{t("privacidad.s4Intro")}</p>
                <h4 className="text-base font-semibold text-foreground/80 mb-3">{t("privacidad.s4EEETitle")}</h4>
                <ul className="ml-6 space-y-2 text-base text-muted-foreground leading-relaxed list-disc mb-6">
                  <li>{t("privacidad.s4EEEItem")}</li>
                </ul>
                <h4 className="text-base font-semibold text-foreground/80 mb-3">{t("privacidad.s4IntlTitle")}</h4>
                <ul className="ml-6 space-y-2 text-base text-muted-foreground leading-relaxed list-disc">
                  <li>{t("privacidad.s4IntlItem")}</li>
                </ul>
              </section>

              <section id="seguridad">
                <h3 className="text-xl font-semibold text-foreground mb-4">{t("privacidad.s5Title")}</h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">{t("privacidad.s5Intro")}</p>
                <ul className="ml-6 space-y-3 text-base text-muted-foreground leading-relaxed list-disc">
                  <li>{t("privacidad.s5Item1")}</li>
                  <li>{t("privacidad.s5Item2")}</li>
                </ul>
                <p className="text-base text-muted-foreground leading-relaxed mt-6">{t("privacidad.s5Closing")}</p>
              </section>

              <section id="derechos">
                <h3 className="text-xl font-semibold text-foreground mb-4">{t("privacidad.s6Title")}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {t("privacidad.s6Content")}{" "}
                  <a href="mailto:hola@skyview.es" className="underline underline-offset-4 hover:text-foreground transition-colors duration-300">hola@skyview.es</a>{" "}
                  {t("privacidad.s6ContentAfter")}
                </p>
              </section>

              <section id="aepd">
                <h3 className="text-xl font-semibold text-foreground mb-4">{t("privacidad.s7Title")}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {t("privacidad.s7Content")}{" "}
                  <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground transition-colors duration-300">www.aepd.es</a>.
                </p>
              </section>
            </div>

            <div className="mt-20 pt-10 border-t border-border flex flex-col sm:flex-row gap-4">
              <Button variant="outline" asChild className="rounded-none">
                <Link to={lp("home")}><ArrowLeft className="mr-2 h-4 w-4" />{t("privacidad.backBtn")}</Link>
              </Button>
              <Button variant="outline" asChild className="rounded-none">
                <a href="mailto:hola@skyview.es"><Mail className="mr-2 h-4 w-4" />{t("privacidad.supportBtn")}</a>
              </Button>
              <Button variant="outline" className="rounded-none print:hidden" onClick={() => window.print()}>
                <Printer className="mr-2 h-4 w-4" />{t("privacidad.printBtn")}
              </Button>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacidad;