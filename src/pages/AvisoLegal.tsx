import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const AvisoLegal = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">

            {/* Header */}
            <p className="text-minimal text-muted-foreground mb-4">LEGAL</p>
            <h1 className="text-4xl md:text-5xl font-light text-architectural mb-4">
              Aviso Legal y Condiciones de Uso
            </h1>
            <p className="text-sm text-muted-foreground mb-16">
              Última actualización: Marzo 2026
            </p>

            {/* Content */}
            <div className="space-y-14">

              {/* 1 */}
              <section>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  1. Información Identificativa
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la Sociedad de la Información y el Comercio Electrónico (LSSI-CE) de 11 de julio, se facilitan a continuación los datos de información general de este sitio web:
                </p>
                <ul className="ml-6 space-y-2 text-base text-muted-foreground leading-relaxed list-disc">
                  <li><strong className="text-foreground/80">Titular:</strong> SkyView Iberia, S.L.</li>
                  <li><strong className="text-foreground/80">NIF/CIF:</strong> B-87205951</li>
                  <li><strong className="text-foreground/80">Domicilio Social:</strong> c/ Gemma Mengual, 2 — Tres Cantos 28760 Madrid, España.</li>
                  <li><strong className="text-foreground/80">Actividad:</strong> Consultoría estratégica de Inteligencia Artificial y Eficiencia Operativa.</li>
                  <li><strong className="text-foreground/80">Email de contacto:</strong> hola@skyview.es</li>
                </ul>
              </section>

              {/* 2 */}
              <section>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  2. Objeto y Ámbito de Aplicación
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  El presente Aviso Legal regula el acceso, navegación y utilización del sitio web skyview2026.lovable.app (en adelante, el "Sitio Web"). El acceso al Sitio Web le atribuye la condición de Usuario, lo cual implica la aceptación sin reservas de todas las cláusulas aquí expuestas. SkyView 2026 se reserva el derecho a modificar estas condiciones para adaptarlas a novedades legislativas o estrategias de negocio.
                </p>
              </section>

              {/* 3 */}
              <section>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  3. Propiedad Intelectual e Industrial
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  SkyView 2026 es titular de todos los derechos de propiedad intelectual e industrial de este Sitio Web. Esto incluye, a título enunciativo:
                </p>
                <ul className="ml-6 space-y-2 text-base text-muted-foreground leading-relaxed list-disc">
                  <li>Diseño gráfico, interfaces de usuario, arquitectura de información y código fuente.</li>
                  <li>Textos, logotipos, marcas comerciales y lemas (incluyendo "Making AI easy").</li>
                  <li>Metodologías propias descritas (como la Metodología SPRINT o el concepto de Inteligencia Aumentada).</li>
                </ul>
                <p className="text-base text-muted-foreground leading-relaxed mt-6">Queda estrictamente prohibida la reproducción, distribución o transformación de cualquier contenido de este sitio sin la autorización expresa y por escrito de SkyView Iberia, S.L. Cualquier uso no autorizado será considerado un incumplimiento grave de los derechos de propiedad intelectual.

                </p>
              </section>

              {/* 4 */}
              <section>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  4. Exclusión de Garantías y Responsabilidad
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  SkyView 2026 desarrolla sus mejores esfuerzos para que el contenido sea preciso y actualizado. No obstante, dada la naturaleza cambiante de la Inteligencia Artificial, el titular no se hace responsable de:
                </p>
                <ul className="ml-6 space-y-4 text-base text-muted-foreground leading-relaxed list-disc">
                  <li>
                    <strong className="text-foreground/80">Exactitud de la información:</strong> Los contenidos son informativos y no constituyen un diagnóstico vinculante sin una auditoría previa personalizada.
                  </li>
                  <li>Disponibilidad Técnica: El acceso puede verse interrumpido por mantenimiento o causas de fuerza mayor ajenas a SkyView Iberia S.L.
                    <strong className="text-foreground/80">Disponibilidad Técnica:</strong> El acceso puede verse interrumpido por mantenimiento o causas de fuerza mayor ajenas a SkyView 2026.
                  </li>
                  <li>Uso de la Información: SkyView Iberia S.L. no se hace responsable del uso que el Usuario realice de la información contenida en la web, ni de las decisiones tomadas en base a la misma.
                    <strong className="text-foreground/80">Uso de la Información:</strong> SkyView 2026 no se hace responsable del uso que el Usuario realice de la información contenida en la web, ni de las decisiones tomadas en base a la misma.
                  </li>
                </ul>
              </section>

              {/* 5 */}
              <section>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  5. Protección de Datos y Seguridad
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  El tratamiento de los datos de carácter personal que el Usuario facilite a través de los formularios de contacto o sesiones estratégicas se rige por nuestra <Link to="/privacidad" className="underline underline-offset-4 hover:text-foreground transition-colors duration-300">Política de Privacidad</Link>, la cual cumple estrictamente con el Reglamento (UE) 2016/679 (RGPD) y la LOPDGDD 3/2018. SkyView 2026 emplea protocolos de seguridad para proteger la integridad y confidencialidad de los datos.
                </p>
              </section>

              {/* 6 */}
              <section>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  6. Política de Enlaces
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  El Sitio Web puede contener enlaces a sitios de terceros (partners tecnológicos como OpenAI, Microsoft o Google). SkyView 2026 no asume responsabilidad alguna por el contenido, políticas de privacidad o prácticas de dichos sitios web.
                </p>
              </section>

              {/* 7 */}
              <section>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  7. Legislación Aplicable y Jurisdicción
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Para la resolución de cualquier controversia o cuestión litigiosa relacionada con este sitio web, será de aplicación la legislación española. Ambas partes se someten, con renuncia expresa a cualquier otro fuero, a los Juzgados y Tribunales de la ciudad de Madrid, España.
                </p>
              </section>
            </div>

            {/* CTAs */}
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
    </div>);

};

export default AvisoLegal;