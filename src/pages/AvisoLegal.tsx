import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AvisoLegal = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-light text-architectural mb-12">Aviso Legal</h1>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
              <section>
                <h2 className="text-2xl font-light text-foreground mb-4">1. Datos Identificativos</h2>
                <p className="leading-relaxed">
                  En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSICE), se informa al usuario de los datos del titular del presente sitio web: Skyview Consulting S.L., con domicilio social en Calle Gemma Mengual 3, 28760 Tres Cantos, Madrid, España. CIF: B-XXXXXXXX. Email de contacto: info@skyview.es.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light text-foreground mb-4">2. Objeto</h2>
                <p className="leading-relaxed">
                  El presente aviso legal regula el uso y acceso al sitio web skyview.es (en adelante, el «Sitio Web»), que Skyview Consulting S.L. pone a disposición de los usuarios de Internet. La navegación por el Sitio Web atribuye la condición de usuario e implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light text-foreground mb-4">3. Propiedad Intelectual e Industrial</h2>
                <p className="leading-relaxed">
                  Todos los contenidos del Sitio Web, incluyendo, sin carácter limitativo, textos, fotografías, gráficos, imágenes, iconos, tecnología, software, enlaces y demás contenidos audiovisuales o sonoros, así como su diseño gráfico y códigos fuente, son propiedad intelectual de Skyview Consulting S.L. o de terceros, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación reconocidos por la normativa vigente en materia de propiedad intelectual.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light text-foreground mb-4">4. Exclusión de Garantías y Responsabilidad</h2>
                <p className="leading-relaxed">
                  Skyview Consulting S.L. no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del Sitio Web, o la transmisión de virus o programas maliciosos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light text-foreground mb-4">5. Legislación Aplicable y Jurisdicción</h2>
                <p className="leading-relaxed">
                  Para la resolución de todas las controversias o cuestiones relacionadas con el presente Sitio Web o de las actividades en él desarrolladas, será de aplicación la legislación española, a la que se someten expresamente las partes, siendo competentes para la resolución de todos los conflictos derivados o relacionados con su uso los Juzgados y Tribunales de Madrid.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AvisoLegal;
