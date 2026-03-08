import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const tocSections = [
  { id: "identificativa", label: "1. Información identificativa" },
  { id: "objeto", label: "2. Objeto y aceptación" },
  { id: "propiedad", label: "3. Propiedad intelectual e industrial" },
  { id: "responsabilidad", label: "4. Limitación de responsabilidad" },
  { id: "cookies", label: "5. Política de cookies" },
  { id: "enlaces", label: "6. Enlaces externos" },
  { id: "datos", label: "7. Protección de datos" },
  { id: "jurisdiccion", label: "8. Legislación aplicable y jurisdicción" },
];

const AvisoLegal = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">

            <p className="text-minimal text-muted-foreground mb-4">LEGAL</p>
            <h1 className="text-4xl md:text-5xl font-light text-architectural mb-4">
              Aviso Legal y Condiciones de Uso
            </h1>
            <p className="text-sm text-muted-foreground mb-16">
              Última actualización: Marzo 2026
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
              <section id="identificativa">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  1. Información identificativa
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  En cumplimiento de la Ley 34/2002 de Servicios de la Sociedad de la Información (LSSI-CE), se facilitan los datos identificativos del titular de este sitio web:
                </p>
                <ul className="ml-6 space-y-2 text-base text-muted-foreground leading-relaxed list-disc">
                  <li><strong className="text-foreground/80">Titular:</strong> SkyView Iberia, S.L.</li>
                  <li><strong className="text-foreground/80">CIF:</strong> B-87205951</li>
                  <li><strong className="text-foreground/80">Domicilio Social:</strong> C/ Gemma Mengual, 2 — 28760 Tres Cantos, Madrid, España</li>
                  <li><strong className="text-foreground/80">Actividad:</strong> Consultoría estratégica en Inteligencia Artificial y Eficiencia Operativa</li>
                  <li><strong className="text-foreground/80">Email:</strong>{" "}
                    <a href="mailto:hola@skyview.es" className="underline underline-offset-4 hover:text-foreground transition-colors duration-300">hola@skyview.es</a>
                  </li>
                </ul>
              </section>

              {/* 2 */}
              <section id="objeto">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  2. Objeto y aceptación
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Este Aviso Legal regula el acceso y uso del sitio web de SkyView Iberia, S.L. El acceso al sitio implica la aceptación de las presentes condiciones. SkyView Iberia, S.L. se reserva el derecho a actualizarlas cuando sea necesario por cambios normativos o estratégicos, publicando siempre la fecha de la última revisión.
                </p>
              </section>

              {/* 3 */}
              <section id="propiedad">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  3. Propiedad intelectual e industrial
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  SkyView Iberia, S.L. es titular de todos los derechos de propiedad intelectual e industrial sobre este sitio web, incluyendo:
                </p>
                <ul className="ml-6 space-y-2 text-base text-muted-foreground leading-relaxed list-disc">
                  <li>Diseño gráfico, arquitectura de información, interfaces y código fuente.</li>
                  <li>Textos, logotipos, marcas y lemas, incluyendo "Making AI easy".</li>
                  <li>Metodologías propias descritas en el sitio, como la Metodología SPRINT y el modelo de Oficina de IA.</li>
                </ul>
                <p className="text-base text-muted-foreground leading-relaxed mt-6">
                  Queda prohibida la reproducción, distribución o transformación de cualquier contenido sin autorización expresa y por escrito de SkyView Iberia, S.L.
                </p>
              </section>

              {/* 4 */}
              <section id="responsabilidad">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  4. Limitación de responsabilidad
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  SkyView mantiene el contenido de este sitio actualizado con el máximo rigor. No obstante:
                </p>
                <ul className="ml-6 space-y-3 text-base text-muted-foreground leading-relaxed list-disc">
                  <li>Los contenidos publicados tienen carácter informativo y no constituyen un diagnóstico vinculante. Cualquier recomendación estratégica requiere una auditoría previa personalizada.</li>
                  <li>Dada la velocidad de evolución del sector de la IA, algunos contenidos pueden quedar desactualizados entre revisiones. Consultarás siempre la fecha de última actualización.</li>
                  <li>SkyView no se hace responsable de interrupciones técnicas del servicio web derivadas de mantenimiento o causas de fuerza mayor.</li>
                  <li>Los resultados descritos en casos de uso son ilustrativos del potencial de la tecnología. Los resultados específicos dependen del contexto, los procesos y la implementación de cada organización.</li>
                </ul>
              </section>

              {/* 5 */}
              <section id="cookies">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  5. Política de cookies
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Este sitio web puede utilizar cookies técnicas necesarias para su funcionamiento y, con tu consentimiento previo, cookies analíticas para entender cómo se utiliza el sitio y mejorar la experiencia. Puedes gestionar tus preferencias de cookies en cualquier momento desde el banner de consentimiento o desde la configuración de tu navegador. Para más información, consulta nuestra Política de Cookies.
                </p>
              </section>

              {/* 6 */}
              <section id="enlaces">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  6. Enlaces externos
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  El sitio puede incluir enlaces a webs de terceros (partners tecnológicos como OpenAI, Microsoft, Google o Anthropic). SkyView no asume responsabilidad sobre el contenido, la disponibilidad ni las políticas de privacidad de sitios externos.
                </p>
              </section>

              {/* 7 */}
              <section id="datos">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  7. Protección de datos
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  El tratamiento de los datos personales que facilites a través de este sitio se rige por nuestra{" "}
                  <Link to="/privacidad" className="underline underline-offset-4 hover:text-foreground transition-colors duration-300">Política de Privacidad</Link>, disponible en este mismo sitio, conforme al RGPD (UE) 2016/679 y la LOPDGDD 3/2018.
                </p>
              </section>

              {/* 8 */}
              <section id="jurisdiccion">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  8. Legislación aplicable y jurisdicción
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Este aviso legal se rige por la legislación española. Para cualquier controversia derivada del acceso o uso de este sitio web, ambas partes se someten expresamente a los Juzgados y Tribunales de Madrid, con renuncia a cualquier otro fuero.
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

export default AvisoLegal;
