import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Printer } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  Table, TableHeader, TableBody, TableHead, TableRow, TableCell,
} from "@/components/ui/table";
import SEO from "@/components/SEO";

const tocIds = ["introduccion", "descripcion", "fases", "entregables", "raci", "economicas", "propiedad", "confidencialidad", "advertencia-ia", "supervision", "cambios", "relacion", "vigencia", "jurisdiccion"];

const raciData = [
  { skyview: "R / A", direccion: "A / C", equipo: "I", it: "I" },
  { skyview: "R", direccion: "C", equipo: "C", it: "C" },
  { skyview: "R / A", direccion: "C", equipo: "I", it: "I" },
  { skyview: "C", direccion: "R / A", equipo: "I", it: "I" },
  { skyview: "R / A", direccion: "C", equipo: "I", it: "C" },
  { skyview: "C", direccion: "A", equipo: "I", it: "R" },
  { skyview: "I", direccion: "A / R", equipo: "I", it: "R" },
  { skyview: "R / A", direccion: "I", equipo: "C", it: "C" },
  { skyview: "R", direccion: "C", equipo: "R", it: "C" },
  { skyview: "C", direccion: "R / A", equipo: "C", it: "C" },
  { skyview: "R", direccion: "A", equipo: "I", it: "C / R" },
  { skyview: "R / A", direccion: "C", equipo: "R", it: "I" },
  { skyview: "I", direccion: "A", equipo: "R", it: "I" },
  { skyview: "R", direccion: "C", equipo: "C", it: "I" },
  { skyview: "C", direccion: "R / A", equipo: "I", it: "I" },
  { skyview: "I", direccion: "A", equipo: "I", it: "R" },
];

const SectionTitle = ({ id, number, title }: { id: string; number: string; title: string }) => (
  <h2 id={id} className="text-2xl font-semibold text-[hsl(240_6%_10%)] mb-6 scroll-mt-32">
    {number}. {title}
  </h2>
);

const SubTitle = ({ number, title }: { number: string; title: string }) => (
  <h3 className="text-lg font-semibold text-[hsl(240_6%_10%)] mb-4">{number}. {title}</h3>
);

const P = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-[15px] mb-4 ${className}`}>{children}</p>
);

const Html = ({ html }: { html: string }) => (
  <span dangerouslySetInnerHTML={{ __html: html }} />
);

const Callout = ({ children, variant = "neutral" }: { children: React.ReactNode; variant?: "neutral" | "warning" | "dark" }) => {
  const styles = {
    neutral: "bg-[hsl(240_5%_96%)] border-[hsl(0_0%_70%)]",
    warning: "bg-[hsl(40_100%_97%)] border-[hsl(40_80%_50%)]",
    dark: "bg-[hsl(240_5%_96%)] border-[hsl(240_6%_10%)]",
  };
  return (
    <div className={`border-l-4 p-4 rounded-r mb-6 ${styles[variant]}`}>
      <p className="text-[15px]">{children}</p>
    </div>
  );
};

const CondicionesSow = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("pt") ? "pt" : i18n.language?.startsWith("en") ? "en" : "es";

  return (
    <div className="min-h-screen flex flex-col">
      <div className="print:hidden"><Navigation /></div>

      <main className="flex-1 pt-32 pb-20 bg-[hsl(0_0%_100%)]" ref={contentRef}>
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <p className="text-minimal text-[hsl(0_0%_60%)] mb-4">{t("sow.label")}</p>
                <h1 className="text-3xl md:text-4xl font-light text-[hsl(240_6%_10%)] leading-tight">
                  {t("sow.title")}<br />
                  <span className="text-[hsl(0_0%_40%)]">{t("sow.subtitle")}</span>
                </h1>
              </div>
              <button onClick={() => window.print()} className="print:hidden flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[hsl(0_0%_50%)] hover:text-[hsl(240_6%_10%)] transition-colors duration-300 mt-2 border border-[hsl(0_0%_90%)] rounded px-3 py-2">
                <Printer className="h-3.5 w-3.5" />{t("sow.printBtn")}
              </button>
            </div>

            {/* Meta */}
            <div className="text-xs text-[hsl(0_0%_50%)] space-y-1 mb-12">
              <p>{t("sow.metaDocId")}</p>
              <p>{t("sow.metaPreparedBy")} <strong>{t("sow.metaPreparedByValue")}</strong> {t("sow.metaPreparedByAfter")}</p>
              <p>{t("sow.metaPreparedFor")} <strong>{t("sow.metaPreparedForValue")}</strong> {t("sow.metaPreparedForAfter")}</p>
            </div>

            {/* TOC */}
            <nav className="bg-[hsl(240_5%_96%)] rounded-lg p-6 mb-16">
              <h2 className="text-xs font-semibold tracking-widest uppercase text-[hsl(0_0%_40%)] mb-4">{t("sow.tocTitle")}</h2>
              <ol className="space-y-2">
                {tocIds.map((id, i) => (
                  <li key={id}>
                    <a href={`#${id}`} className="text-sm text-[hsl(240_6%_10%)] hover:text-[hsl(0_0%_0%)] transition-colors duration-200">
                      {t(`sow.toc${i + 1}`)}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* Content */}
            <div className="space-y-16 text-[hsl(240_6%_10%)] leading-relaxed legal-prose" lang={lang}>

              {/* 1 */}
              <section>
                <SectionTitle id="introduccion" number="1" title={t("sow.s1Title")} />
                <P><Html html={t("sow.s1P1")} /></P>
                <P>{t("sow.s1P2")}</P>
                <P>{t("sow.s1P3")}</P>
              </section>

              {/* 2 */}
              <section>
                <SectionTitle id="descripcion" number="2" title={t("sow.s2Title")} />
                <SubTitle number="2.1" title={t("sow.s2s1Title")} />
                <P>{t("sow.s2s1P1")}</P>
                <P>{t("sow.s2s1P2")}</P>
                <ul className="list-disc pl-6 space-y-2 text-[15px] mb-6">
                  <li><Html html={t("sow.s2s1Item1")} /></li>
                  <li><Html html={t("sow.s2s1Item2")} /></li>
                  <li><Html html={t("sow.s2s1Item3")} /></li>
                  <li><Html html={t("sow.s2s1Item4")} /></li>
                </ul>
                <SubTitle number="2.2" title={t("sow.s2s2Title")} />
                <P>{t("sow.s2s2P1")}</P>
                <ul className="list-disc pl-6 space-y-2 text-[15px]">
                  <li>{t("sow.s2s2Item1")}</li>
                  <li>{t("sow.s2s2Item2")}</li>
                  <li>{t("sow.s2s2Item3")}</li>
                  <li>{t("sow.s2s2Item4")}</li>
                </ul>
              </section>

              {/* 3 */}
              <section>
                <SectionTitle id="fases" number="3" title={t("sow.s3Title")} />
                <P>{t("sow.s3Intro")}</P>

                <h3 className="text-xl font-semibold text-[hsl(240_6%_10%)] mt-8 mb-2">{t("sow.s3StartTitle")}</h3>
                <p className="text-xs text-[hsl(0_0%_50%)] mb-4">{t("sow.s3StartDuration")}</p>
                <P>{t("sow.s3StartP1")}</P>
                <P><strong>{t("sow.s3StartIncludes")}</strong></P>
                <ul className="list-disc pl-6 space-y-2 text-[15px] mb-4">
                  <li><Html html={t("sow.s3StartWeek1")} /></li>
                  <li><Html html={t("sow.s3StartWeek2")} /></li>
                </ul>
                <P><strong>{t("sow.s3StartDeliverables")}</strong></P>
                <ul className="list-disc pl-6 space-y-2 text-[15px] mb-4">
                  <li>{t("sow.s3StartDel1")}</li>
                  <li>{t("sow.s3StartDel2")}</li>
                  <li>{t("sow.s3StartDel3")}</li>
                  <li>{t("sow.s3StartDel4")}</li>
                </ul>
                <Callout variant="neutral"><Html html={t("sow.s3StartClose")} /></Callout>

                <h3 className="text-xl font-semibold text-[hsl(240_6%_10%)] mt-10 mb-2">{t("sow.s3SprintTitle")}</h3>
                <p className="text-xs text-[hsl(0_0%_50%)] mb-4">{t("sow.s3SprintDuration")}</p>
                <P>{t("sow.s3SprintP1")}</P>
                <P><strong>{t("sow.s3SprintStructure")}</strong></P>
                <ul className="list-disc pl-6 space-y-2 text-[15px] mb-4">
                  <li><Html html={t("sow.s3SprintMonth1")} /></li>
                  <li><Html html={t("sow.s3SprintMonth2")} /></li>
                  <li><Html html={t("sow.s3SprintMonth3")} /></li>
                </ul>
                <P><strong>{t("sow.s3SprintReviews")}</strong></P>
                <ul className="list-disc pl-6 space-y-2 text-[15px] mb-4">
                  <li><Html html={t("sow.s3SprintReview1")} /></li>
                  <li><Html html={t("sow.s3SprintReview2")} /></li>
                  <li><Html html={t("sow.s3SprintReview3")} /></li>
                </ul>
                <P><strong>{t("sow.s3SprintDeliverables")}</strong></P>
                <ul className="list-disc pl-6 space-y-2 text-[15px] mb-4">
                  <li>{t("sow.s3SprintDel1")}</li>
                  <li>{t("sow.s3SprintDel2")}</li>
                  <li>{t("sow.s3SprintDel3")}</li>
                  <li>{t("sow.s3SprintDel4")}</li>
                  <li>{t("sow.s3SprintDel5")}</li>
                </ul>
                <Callout variant="neutral"><Html html={t("sow.s3SprintClose")} /></Callout>

                <h3 className="text-xl font-semibold text-[hsl(240_6%_10%)] mt-10 mb-2">{t("sow.s3OfficeTitle")}</h3>
                <p className="text-xs text-[hsl(0_0%_50%)] mb-4">{t("sow.s3OfficeDuration")}</p>
                <P>{t("sow.s3OfficeP1")}</P>
                <P><strong>{t("sow.s3OfficeIncludes")}</strong></P>
                <ul className="list-disc pl-6 space-y-2 text-[15px] mb-4">
                  <li>{t("sow.s3OfficeItem1")}</li>
                  <li>{t("sow.s3OfficeItem2")}</li>
                  <li>{t("sow.s3OfficeItem3")}</li>
                  <li>{t("sow.s3OfficeItem4")}</li>
                  <li>{t("sow.s3OfficeItem5")}</li>
                  <li>{t("sow.s3OfficeItem6")}</li>
                </ul>
                <Callout variant="dark"><Html html={t("sow.s3OfficeClose")} /></Callout>
              </section>

              {/* 4 */}
              <section>
                <SectionTitle id="entregables" number="4" title={t("sow.s4Title")} />
                <P>{t("sow.s4Intro")}</P>
                <div className="mb-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold text-[hsl(240_6%_10%)]">{t("sow.s4TablePhase")}</TableHead>
                        <TableHead className="font-semibold text-[hsl(240_6%_10%)]">{t("sow.s4TableDeliverables")}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[1, 2, 3].map((i) => (
                        <TableRow key={i}>
                          <TableCell className="font-medium">{t(`sow.s4Row${i}Phase`)}</TableCell>
                          <TableCell>{t(`sow.s4Row${i}Del`)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <P>{t("sow.s4P1")}</P>
                <P>{t("sow.s4P2")}</P>
              </section>

              {/* 5 */}
              <section>
                <SectionTitle id="raci" number="5" title={t("sow.s5Title")} />
                <P>{t("sow.s5Intro")}</P>
                <div className="mb-6">
                  <p className="text-xs text-[hsl(0_0%_50%)] mb-3"><Html html={t("sow.s5Legend")} /></p>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="font-semibold text-[hsl(240_6%_10%)] min-w-[200px]">{t("sow.s5TableActivity")}</TableHead>
                          <TableHead className="font-semibold text-[hsl(240_6%_10%)] text-center">{t("sow.s5TableSkyview")}</TableHead>
                          <TableHead className="font-semibold text-[hsl(240_6%_10%)] text-center">{t("sow.s5TableDirection")}</TableHead>
                          <TableHead className="font-semibold text-[hsl(240_6%_10%)] text-center">{t("sow.s5TableTeam")}</TableHead>
                          <TableHead className="font-semibold text-[hsl(240_6%_10%)] text-center">{t("sow.s5TableIT")}</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {raciData.map((row, i) => (
                          <TableRow key={i}>
                            <TableCell className="text-[13px]">{t(`sow.raciActivities.${i + 1}`)}</TableCell>
                            <TableCell className="text-center text-[13px] font-medium">{row.skyview}</TableCell>
                            <TableCell className="text-center text-[13px] font-medium">{row.direccion}</TableCell>
                            <TableCell className="text-center text-[13px] font-medium">{row.equipo}</TableCell>
                            <TableCell className="text-center text-[13px] font-medium">{row.it}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
                <Callout variant="dark"><Html html={t("sow.s5Close")} /></Callout>
              </section>

              {/* 6 */}
              <section>
                <SectionTitle id="economicas" number="6" title={t("sow.s6Title")} />
                <SubTitle number="6.1" title={t("sow.s6s1Title")} />
                <P>{t("sow.s6s1P1")}</P>
                <ul className="list-disc pl-6 space-y-2 text-[15px] mb-6">
                  <li><Html html={t("sow.s6s1Item1")} /></li>
                  <li><Html html={t("sow.s6s1Item2")} /></li>
                </ul>
                <P>{t("sow.s6s1P2")}</P>
                <SubTitle number="6.2" title={t("sow.s6s2Title")} />
                <Callout variant="warning"><Html html={t("sow.s6s2Callout")} /></Callout>
                <P>{t("sow.s6s2P1")}</P>
                <SubTitle number="6.3" title={t("sow.s6s3Title")} />
                <P>{t("sow.s6s3P1")}</P>
                <SubTitle number="6.4" title={t("sow.s6s4Title")} />
                <ul className="list-disc pl-6 space-y-2 text-[15px]">
                  <li>{t("sow.s6s4Item1")}</li>
                  <li><Html html={t("sow.s6s4Item2")} /></li>
                  <li>{t("sow.s6s4Item3")}</li>
                </ul>
              </section>

              {/* 7 */}
              <section>
                <SectionTitle id="propiedad" number="7" title={t("sow.s7Title")} />
                <SubTitle number="7.1" title={t("sow.s7s1Title")} />
                <P>{t("sow.s7s1P1")}</P>
                <SubTitle number="7.2" title={t("sow.s7s2Title")} />
                <P>{t("sow.s7s2P1")}</P>
                <P>{t("sow.s7s2P2")}</P>
                <SubTitle number="7.3" title={t("sow.s7s3Title")} />
                <P>{t("sow.s7s3P1")}</P>
              </section>

              {/* 8 */}
              <section>
                <SectionTitle id="confidencialidad" number="8" title={t("sow.s8Title")} />
                <P>{t("sow.s8Intro")}</P>
                <SubTitle number="8.1" title={t("sow.s8s1Title")} />
                <P>{t("sow.s8s1P1")}</P>
                <SubTitle number="8.2" title={t("sow.s8s2Title")} />
                <P>{t("sow.s8s2P1")}</P>
                <ul className="list-disc pl-6 space-y-2 text-[15px] mb-4">
                  <li>{t("sow.s8s2Item1")}</li>
                  <li>{t("sow.s8s2Item2")}</li>
                  <li>{t("sow.s8s2Item3")}</li>
                </ul>
                <SubTitle number="8.3" title={t("sow.s8s3Title")} />
                <P><Html html={t("sow.s8s3P1")} /></P>
              </section>

              {/* 9 */}
              <section>
                <SectionTitle id="advertencia-ia" number="9" title={t("sow.s9Title")} />
                <P>{t("sow.s9Intro")}</P>
                <SubTitle number="9.1" title={t("sow.s9s1Title")} />
                <Callout variant="warning"><Html html={t("sow.s9s1Callout")} /></Callout>
                <SubTitle number="9.2" title={t("sow.s9s2Title")} />
                <P>{t("sow.s9s2P1")}</P>
                <SubTitle number="9.3" title={t("sow.s9s3Title")} />
                <P>{t("sow.s9s3P1")}</P>
                <ul className="list-disc pl-6 space-y-2 text-[15px]">
                  <li>{t("sow.s9s3Item1")}</li>
                  <li>{t("sow.s9s3Item2")}</li>
                  <li>{t("sow.s9s3Item3")}</li>
                </ul>
              </section>

              {/* 10 */}
              <section>
                <SectionTitle id="supervision" number="10" title={t("sow.s10Title")} />
                <Callout variant="dark"><Html html={t("sow.s10Callout")} /></Callout>
                <SubTitle number="10.1" title={t("sow.s10s1Title")} />
                <P><Html html={t("sow.s10s1P1")} /></P>
                <P>{t("sow.s10s1P2")}</P>
                <SubTitle number="10.2" title={t("sow.s10s2Title")} />
                <P>{t("sow.s10s2P1")}</P>
                <SubTitle number="10.3" title={t("sow.s10s3Title")} />
                <P>{t("sow.s10s3P1")}</P>
              </section>

              {/* 11 */}
              <section>
                <SectionTitle id="cambios" number="11" title={t("sow.s11Title")} />
                <P>{t("sow.s11Intro")}</P>
                <SubTitle number="11.1" title={t("sow.s11s1Title")} />
                <P>{t("sow.s11s1P1")}</P>
                <ul className="list-disc pl-6 space-y-2 text-[15px] mb-6">
                  <li>{t("sow.s11s1Item1")}</li>
                  <li>{t("sow.s11s1Item2")}</li>
                  <li>{t("sow.s11s1Item3")}</li>
                  <li>{t("sow.s11s1Item4")}</li>
                </ul>
                <SubTitle number="11.2" title={t("sow.s11s2Title")} />
                <ol className="list-decimal pl-6 space-y-2 text-[15px] mb-4">
                  <li>{t("sow.s11s2Item1")}</li>
                  <li>{t("sow.s11s2Item2")}</li>
                  <li>{t("sow.s11s2Item3")}</li>
                  <li>{t("sow.s11s2Item4")}</li>
                </ol>
                <Callout variant="dark">{t("sow.s11s2Close")}</Callout>
              </section>

              {/* 12 */}
              <section>
                <SectionTitle id="relacion" number="12" title={t("sow.s12Title")} />
                <P>{t("sow.s12P1")}</P>
                <P>{t("sow.s12P2")}</P>
                <P>{t("sow.s12P3")}</P>
              </section>

              {/* 13 */}
              <section>
                <SectionTitle id="vigencia" number="13" title={t("sow.s13Title")} />
                <SubTitle number="13.1" title={t("sow.s13s1Title")} />
                <P>{t("sow.s13s1P1")}</P>
                <SubTitle number="13.2" title={t("sow.s13s2Title")} />
                <P><Html html={t("sow.s13s2P1")} /></P>
                <SubTitle number="13.3" title={t("sow.s13s3Title")} />
                <P><Html html={t("sow.s13s3P1")} /></P>
                <SubTitle number="13.4" title={t("sow.s13s4Title")} />
                <P>{t("sow.s13s4P1")}</P>
                <ul className="list-disc pl-6 space-y-2 text-[15px]">
                  <li>{t("sow.s13s4Item1")}</li>
                  <li>{t("sow.s13s4Item2")}</li>
                  <li>{t("sow.s13s4Item3")}</li>
                </ul>
              </section>

              {/* 14 */}
              <section>
                <SectionTitle id="jurisdiccion" number="14" title={t("sow.s14Title")} />
                <P>{t("sow.s14P1")}</P>
                <P><Html html={t("sow.s14P2")} /></P>
              </section>

              {/* Footer */}
              <div className="pt-12 border-t border-[hsl(0_0%_90%)]">
                <p className="text-sm font-medium text-[hsl(240_6%_10%)] text-center mb-2">{t("sow.footerCompany")}</p>
                <p className="text-xs text-[hsl(0_0%_60%)] text-center">{t("sow.footerMeta")}</p>
                <p className="text-xs text-[hsl(0_0%_50%)] text-center mt-4 italic">{t("sow.footerNote")}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="print:hidden"><Footer /></div>
    </div>
  );
};

export default CondicionesSow;