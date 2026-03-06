import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Privacidad = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">

            <p className="text-minimal text-muted-foreground mb-4">LEGAL</p>
            <h1 className="text-4xl md:text-5xl font-light text-architectural mb-4">
              Política de Privacidad y Protección de Datos (RGPD)
            </h1>
            <p className="text-sm text-muted-foreground mb-16">
              Última actualización: Marzo 2026
            </p>

            <div className="space-y-14">

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  1. Responsable del Tratamiento
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), se informa que el responsable del tratamiento de sus datos es:
                </p>
                <ul className="ml-6 space-y-2 text-base text-muted-foreground leading-relaxed list-disc">
                  <li><strong className="text-foreground/80">Titular:</strong> SkyView Iberia, S.L.</li>
                  <li><strong className="text-foreground/80">CIF/NIF:</strong> B-87205951</li>
                  <li><strong className="text-foreground/80">Email:</strong> hola@skyview.es</li>
                  <li><strong className="text-foreground/80">Finalidad:</strong> Gestión de solicitudes de información, reserva de sesiones estratégicas y prestación de servicios de consultoría en Inteligencia Artificial.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  2. Base Legal para el Tratamiento
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  La base legal para el tratamiento de sus datos es el consentimiento expreso del usuario al completar nuestros formularios de contacto o suscribirse a nuestras sesiones. En caso de contratación, la base será la ejecución de un contrato de servicios (SOW).
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  3. Finalidad y Conservación de Datos
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  SkyView 2026 trata la información con el fin de facilitar la adopción de IA en su organización. Los datos se conservarán mientras exista un interés mutuo para mantener el fin del tratamiento y, cuando ya no sea necesario, se suprimirán con medidas de seguridad adecuadas para garantizar la seudonimización o destrucción total.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  4. Comunicación de Datos a Terceros (Socio Tecnológico)
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  Para la prestación de nuestros servicios de IA, informamos que:
                </p>
                <ul className="ml-6 space-y-3 text-base text-muted-foreground leading-relaxed list-disc">
                  <li>Sus datos no se venden ni se ceden a terceros con fines comerciales.</li>
                  <li>Podrán ser comunicados a proveedores de servicios técnicos (Encargados de Tratamiento) como proveedores de infraestructura cloud (Microsoft Azure, Google Cloud) o modelos de lenguaje (OpenAI, Anthropic), siempre bajo entornos que garantizan la privacidad y el cumplimiento de los estándares de seguridad empresariales.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  5. Seguridad en el uso de IA
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  En SkyView 2026 nos tomamos en serio la confidencialidad corporativa. Garantizamos que los datos introducidos en nuestras sesiones estratégicas no se utilizan para entrenar modelos públicos de terceros, manteniendo su propiedad intelectual y secreto comercial protegidos en todo momento.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  6. Derechos del Usuario
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  Usted tiene derecho a:
                </p>
                <ul className="ml-6 space-y-3 text-base text-muted-foreground leading-relaxed list-disc">
                  <li><strong className="text-foreground/80">Acceso:</strong> Saber qué datos tratamos.</li>
                  <li><strong className="text-foreground/80">Rectificación:</strong> Corregir datos inexactos.</li>
                  <li><strong className="text-foreground/80">Supresión (Derecho al olvido):</strong> Solicitar la eliminación de sus datos.</li>
                  <li><strong className="text-foreground/80">Limitación y Oposición:</strong> Solicitar que no se traten para fines específicos.</li>
                  <li><strong className="text-foreground/80">Portabilidad:</strong> Recibir sus datos en formato electrónico.</li>
                </ul>
                <p className="text-base text-muted-foreground leading-relaxed mt-6">
                  Para ejercer estos derechos, puede enviar un correo a <a href="mailto:hola@skyview.es" className="underline underline-offset-4 hover:text-foreground transition-colors duration-300">hola@skyview.es</a> adjuntando copia de su DNI o documento equivalente.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  7. Reclamación ante la Autoridad de Control
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Si considera que el tratamiento no se ajusta a la normativa vigente, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) en{" "}
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
