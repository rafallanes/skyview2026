import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const tocSections = [
  { id: "responsable", label: "1. Responsable del tratamiento" },
  { id: "datos", label: "2. Qué datos tratamos y con qué finalidad" },
  { id: "conservacion", label: "3. Plazo de conservación" },
  { id: "terceros", label: "4. Comunicación de datos a terceros y transferencias internacionales" },
  { id: "seguridad", label: "5. Seguridad y confidencialidad en proyectos de IA" },
  { id: "derechos", label: "6. Tus derechos" },
  { id: "aepd", label: "7. Reclamación ante la AEPD" },
];

const datosTable = [
  { dato: "Nombre y email corporativo", finalidad: "Gestión de solicitudes de información y sesiones estratégicas", base: "Consentimiento expreso" },
  { dato: "Datos de empresa y cargo", finalidad: "Cualificación del proyecto y propuesta de servicios", base: "Interés legítimo (art. 6.1.f RGPD)" },
  { dato: "Datos contractuales", finalidad: "Ejecución del contrato de servicios (SOW)", base: "Ejecución contractual (art. 6.1.b RGPD)" },
  { dato: "Datos de facturación", finalidad: "Cumplimiento de obligaciones fiscales y contables", base: "Obligación legal (art. 6.1.c RGPD)" },
];

const Privacidad = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">

            <p className="text-minimal text-muted-foreground mb-4">LEGAL</p>
            <h1 className="text-4xl md:text-5xl font-light text-architectural mb-4">
              Política de Privacidad y Protección de Datos
            </h1>
            <p className="text-sm text-muted-foreground mb-6">
              Última actualización: Marzo 2026
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-16">
              En SkyView, la privacidad no es burocracia: es parte de cómo trabajamos. Este documento explica, sin rodeos, qué datos tratamos, por qué y qué derechos tienes sobre ellos.
            </p>

            {/* Table of Contents */}
            <nav className="mb-16 p-6 border border-border rounded-sm bg-muted/30">
              <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Índice</h2>
              <ol className="space-y-2">
                {tocSections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 underline-offset-4 hover:underline"
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="space-y-14 legal-prose" lang="es">

              {/* 1 */}
              <section id="responsable">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  1. Responsable del tratamiento
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), el responsable del tratamiento de tus datos es:
                </p>
                <ul className="ml-6 space-y-2 text-base text-muted-foreground leading-relaxed list-disc">
                  <li><strong className="text-foreground/80">Titular:</strong> SkyView Iberia, S.L.</li>
                  <li><strong className="text-foreground/80">CIF:</strong> B-87205951</li>
                  <li><strong className="text-foreground/80">Domicilio:</strong> C/ Gemma Mengual, 2 — 28760 Tres Cantos, Madrid, España</li>
                  <li><strong className="text-foreground/80">Email de contacto:</strong>{" "}
                    <a href="mailto:hola@skyview.es" className="underline underline-offset-4 hover:text-foreground transition-colors duration-300">hola@skyview.es</a>
                  </li>
                </ul>
              </section>

              {/* 2 */}
              <section id="datos">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  2. Qué datos tratamos y con qué finalidad
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  Tratamos únicamente los datos que tú nos facilitas de forma activa, con las siguientes finalidades:
                </p>
                <div className="overflow-x-auto mb-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold text-foreground/80 min-w-[160px]">Dato</TableHead>
                        <TableHead className="font-semibold text-foreground/80">Finalidad</TableHead>
                        <TableHead className="font-semibold text-foreground/80 min-w-[200px]">Base legal</TableHead>
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
                <p className="text-base text-muted-foreground leading-relaxed">
                  No tratamos categorías especiales de datos ni realizamos decisiones automatizadas con impacto legal sobre los usuarios.
                </p>
              </section>

              {/* 3 */}
              <section id="conservacion">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  3. Plazo de conservación
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  Los datos se conservarán durante el tiempo necesario para cumplir la finalidad para la que fueron recabados, con los siguientes criterios:
                </p>
                <ul className="ml-6 space-y-3 text-base text-muted-foreground leading-relaxed list-disc">
                  <li><strong className="text-foreground/80">Contactos y leads:</strong> Hasta 2 años desde el último contacto, salvo ejercicio del derecho de supresión.</li>
                  <li><strong className="text-foreground/80">Datos contractuales y de facturación:</strong> 6 años, en cumplimiento de las obligaciones fiscales establecidas en la normativa española.</li>
                </ul>
                <p className="text-base text-muted-foreground leading-relaxed mt-6">
                  Transcurridos estos plazos, los datos serán suprimidos o anonimizados de forma irreversible.
                </p>
              </section>

              {/* 4 */}
              <section id="terceros">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  4. Comunicación de datos a terceros y transferencias internacionales
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  Tus datos no se venden ni ceden a terceros con fines comerciales. Pueden ser comunicados a los siguientes Encargados de Tratamiento, siempre bajo acuerdos contractuales que garantizan el cumplimiento del RGPD:
                </p>

                <h4 className="text-base font-semibold text-foreground/80 mb-3">Proveedores dentro del EEE:</h4>
                <ul className="ml-6 space-y-2 text-base text-muted-foreground leading-relaxed list-disc mb-6">
                  <li>Proveedores de infraestructura cloud con centros de datos en Europa (Microsoft Azure, Google Cloud — regiones EU).</li>
                </ul>

                <h4 className="text-base font-semibold text-foreground/80 mb-3">Proveedores fuera del EEE (transferencias internacionales):</h4>
                <ul className="ml-6 space-y-2 text-base text-muted-foreground leading-relaxed list-disc">
                  <li>
                    Proveedores de modelos de lenguaje como OpenAI (EE.UU.) y Anthropic (EE.UU.). Estas transferencias se amparan en las Cláusulas Contractuales Tipo aprobadas por la Comisión Europea (Decisión de Ejecución 2021/914) y en el uso de APIs empresariales cuyos términos de servicio garantizan que los datos no se utilizan para el entrenamiento de modelos públicos. Puedes consultar las garantías específicas en las páginas de privacidad empresarial de cada proveedor.
                  </li>
                </ul>
              </section>

              {/* 5 */}
              <section id="seguridad">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  5. Seguridad y confidencialidad en proyectos de IA
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  SkyView trabaja exclusivamente con APIs empresariales y entornos de IA privados. Esto implica, contractualmente con nuestros proveedores tecnológicos, que:
                </p>
                <ul className="ml-6 space-y-3 text-base text-muted-foreground leading-relaxed list-disc">
                  <li>Los datos de tus sesiones y proyectos no se emplean para entrenar modelos públicos de terceros.</li>
                  <li>Todo acceso a información sensible del Cliente se gestiona bajo los protocolos de confidencialidad establecidos en el SOW firmado.</li>
                </ul>
                <p className="text-base text-muted-foreground leading-relaxed mt-6">
                  Aplicamos medidas técnicas y organizativas acordes al estado actual de la técnica para proteger la integridad y confidencialidad de los datos.
                </p>
              </section>

              {/* 6 */}
              <section id="derechos">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  6. Tus derechos
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Tienes derecho a acceder, rectificar, suprimir, limitar u oponerte al tratamiento de tus datos, así como a la portabilidad de los mismos. Para ejercerlos, escríbenos a{" "}
                  <a href="mailto:hola@skyview.es" className="underline underline-offset-4 hover:text-foreground transition-colors duration-300">hola@skyview.es</a>{" "}
                  indicando el derecho que deseas ejercer y adjuntando copia de tu DNI o documento equivalente. Responderemos en el plazo máximo de 30 días hábiles.
                </p>
              </section>

              {/* 7 */}
              <section id="aepd">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  7. Reclamación ante la AEPD
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Si consideras que el tratamiento de tus datos no se ajusta a la normativa, puedes presentar una reclamación ante la Agencia Española de Protección de Datos en{" "}
                  <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground transition-colors duration-300">
                    www.aepd.es
                  </a>.
                </p>
              </section>
            </div>

            <div className="mt-20 pt-10 border-t border-border flex flex-col sm:flex-row gap-4">
              <Button variant="outline" asChild className="rounded-none">
                <Link to="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver al Inicio
                </Link>
              </Button>
              <Button variant="outline" asChild className="rounded-none">
                <a href="mailto:hola@skyview.es">
                  <Mail className="mr-2 h-4 w-4" />
                  Contactar con Soporte
                </a>
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
