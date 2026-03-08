import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Printer } from "lucide-react";

const CondicionesSow = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const tocSections = [
    { id: "introduccion", label: "1. Introducción y Propósito del Proyecto" },
    { id: "contexto", label: "2. Descripción del Proyecto" },
    { id: "alcance", label: "3. Servicio" },
    { id: "propiedad", label: "4. Propiedad Intelectual y Confidencialidad" },
    { id: "economicas", label: "5. Condiciones Económicas" },
    { id: "responsabilidad", label: "6. Responsabilidad y Garantías" },
    { id: "gestion", label: "7. Gestión y Cambios en el Alcance" },
    { id: "terminacion", label: "8. Terminación y Jurisdicción" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="print:hidden">
        <Navigation />
      </div>

      <main className="flex-1 pt-32 pb-20 bg-[hsl(0_0%_100%)]" ref={contentRef}>
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">

            {/* Header with print button */}
            <div className="flex items-start justify-between mb-12">
              <div>
                <p className="text-minimal text-[hsl(0_0%_60%)] mb-4">DOCUMENTO LEGAL</p>
                <h1 className="text-3xl md:text-4xl font-light text-[hsl(240_6%_10%)] leading-tight">
                  Master Statement of Work (SOW)
                  <br />
                  <span className="text-[hsl(0_0%_40%)]">SkyView v0.2</span>
                </h1>
              </div>
              <button
                onClick={handlePrint}
                className="print:hidden flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[hsl(0_0%_50%)] hover:text-[hsl(240_6%_10%)] transition-colors duration-300 mt-2 border border-[hsl(0_0%_90%)] rounded px-3 py-2"
              >
                <Printer className="h-3.5 w-3.5" />
                Imprimir PDF
              </button>
            </div>

            {/* Table of Contents */}
            <nav className="bg-[hsl(240_5%_96%)] rounded-lg p-6 mb-16">
              <h2 className="text-xs font-semibold tracking-widest uppercase text-[hsl(0_0%_40%)] mb-4">
                Índice de Contenidos
              </h2>
              <ol className="space-y-2">
                {tocSections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-sm text-[hsl(240_6%_10%)] hover:text-[hsl(0_0%_0%)] transition-colors duration-200"
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* Legal Content */}
            <div className="space-y-16 text-[hsl(240_6%_10%)] leading-relaxed">

              {/* Section 1 — SOW PDF */}
              <section id="introduccion">
                <h2 className="text-2xl font-semibold text-[hsl(240_6%_10%)] mb-6">
                  1. Introducción y Propósito del Proyecto
                </h2>
                <p className="text-[15px] mb-4">
                  El presente <strong>Statement of Work</strong> (en adelante, "SOW") describe el marco de colaboración, los objetivos y el alcance de los servicios de consultoría estratégica y operativa en Inteligencia Artificial que <strong>SkyView</strong> (en adelante, "el Consultor") prestará a El Cliente.
                </p>
                <p className="text-[15px] mb-4">
                  El Cliente, cuya actividad principal se detalla en la Orden de Pedido (PO) correspondiente, se encuentra en un proceso de evolución tecnológica donde la adopción de soluciones de IA y automatización es crítica para mantener y escalar su competitividad en el mercado actual.
                </p>
                <p className="text-[15px] mb-4">
                  El objetivo fundamental de este acuerdo es establecer una hoja de ruta práctica y simplificada que permita al Cliente no solo comprender el ecosistema de la IA, sino integrarlo de forma efectiva en su operativa diaria. Mediante este acompañamiento, transformaremos la complejidad técnica en palancas de eficiencia, garantizando que el equipo de El Cliente adquiera el conocimiento y la autonomía necesarios para maximizar el retorno de la inversión tecnológica.
                </p>
                <p className="text-[15px]">
                  Este documento servirá como guía maestra para asegurar el alineamiento de expectativas entre ambas partes, definiendo con precisión los resultados esperados y los mecanismos de colaboración.
                </p>
              </section>

              {/* Section 2 — SOW PDF */}
              <section id="contexto">
                <h2 className="text-2xl font-semibold text-[hsl(240_6%_10%)] mb-6">
                  2. Descripción del Proyecto
                </h2>
                <h3 className="text-lg font-semibold text-[hsl(240_6%_10%)] mb-4">
                  2.1. Antecedentes y Necesidades del Cliente
                </h3>
                <p className="text-[15px] mb-4">
                  El entorno de mercado actual, caracterizado por una aceleración tecnológica sin precedentes, exige a las organizaciones una agilidad operativa superior. El Cliente reconoce que la Inteligencia Artificial no es solo una tendencia, sino una capacidad estratégica fundamental para optimizar recursos y mejorar la toma de decisiones.
                </p>
                <p className="text-[15px] mb-4">
                  Tras nuestras conversaciones previas, hemos identificado que el Cliente se encuentra en un punto de inflexión donde busca superar la fase de "curiosidad tecnológica" para pasar a una "ejecución de impacto". En este contexto, se han detectado las siguientes necesidades específicas que este proyecto abordará:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[15px]">
                  <li>
                    <strong>Capacitación Crítica:</strong> Necesidad de realizar formación especializada a sus equipos para que comprendan el potencial real de la IA y puedan identificar oportunidades de aplicación en su trabajo diario.
                  </li>
                  <li>
                    <strong>Automatización de Procesos:</strong> Identificación y puesta en marcha de casos de uso concretos que generen ahorros de tiempo y reduzcan tareas manuales repetitivas.
                  </li>
                  <li>
                    <strong>Estrategia de IA:</strong> Definición de una hoja de ruta clara que priorice las iniciativas de IA según su impacto en el negocio y su viabilidad técnica.
                  </li>
                </ul>
              </section>

              {/* Section 3 — MSA Cláusula 1 */}
              <section id="alcance">
                <h2 className="text-2xl font-semibold text-[hsl(240_6%_10%)] mb-6">
                  3. Servicio
                </h2>
                <h3 className="text-lg font-semibold text-[hsl(240_6%_10%)] mb-4">
                  3.1. Objeto del Servicio
                </h3>
                <p className="text-[15px] mb-4">
                  El Cliente contrata a El Prestador para la realización de servicios de <strong>consultoría especializada en Inteligencia Artificial, formación y automatización de casos de uso</strong>. La descripción detallada de las tareas, fases, entregables y plazos se especifica en el presente SOW (Skyview_Master_SOW_v0.2), el cual forma parte integrante y vinculante del presente Contrato.
                </p>
                <p className="text-[15px] mb-6">
                  Cualquier modificación posterior del alcance del servicio deberá ser acordada por escrito por ambas partes mediante la firma de un nuevo Anexo o una adenda al presente documento.
                </p>
                <h3 className="text-lg font-semibold text-[hsl(240_6%_10%)] mb-4">
                  3.2. Independencia de las Partes
                </h3>
                <p className="text-[15px]">
                  La relación entre El Prestador y El Cliente es de carácter estrictamente mercantil. El Prestador ejecutará los servicios con plena autonomía técnica y organizativa, utilizando sus propios medios, sin que exista relación de dependencia, subordinación o jerarquía laboral entre las partes o su personal.
                </p>
              </section>

              {/* Section 4 — MSA Cláusula 2 */}
              <section id="propiedad">
                <h2 className="text-2xl font-semibold text-[hsl(240_6%_10%)] mb-6">
                  4. Propiedad Intelectual y Confidencialidad
                </h2>
                <h3 className="text-lg font-semibold text-[hsl(240_6%_10%)] mb-4">
                  4.1. <strong>Propiedad del Cliente</strong>
                </h3>
                <p className="text-[15px] mb-6">
                  Tras el pago íntegro de los honorarios, el Cliente adquirirá la propiedad de los resultados específicos del servicio (informes, hojas de ruta y configuraciones realizadas en sus propias cuentas). El Cliente autoriza al Prestador a utilizar el conocimiento técnico general obtenido durante el proyecto para su actividad profesional.
                </p>
                <h3 className="text-lg font-semibold text-[hsl(240_6%_10%)] mb-4">
                  4.2. Propiedad y Resultados de la Formación
                </h3>
                <p className="text-[15px] mb-6">
                  El Prestador conserva la propiedad de sus materiales y métodos preexistentes. Toda implementación o automatización desarrollada de forma independiente por el Cliente a raíz de la capacitación recibida será responsabilidad exclusiva de este, no asumiendo el Prestador garantía alguna sobre dichos desarrollos. Los materiales entregados son para uso exclusivo del personal del Cliente.
                </p>
                <h3 className="text-lg font-semibold text-[hsl(240_6%_10%)] mb-4">
                  4.3. <strong>Confidencialidad</strong>
                </h3>
                <p className="text-[15px]">
                  Ambas partes se comprometen a no revelar la información sensible, datos de negocio o secretos comerciales compartidos durante la prestación del servicio. Esta obligación se mantendrá vigente durante los <strong>dos (2) años</strong> siguientes a la finalización del presente Contrato.
                </p>
              </section>

              {/* Section 5 — MSA Cláusula 3 */}
              <section id="economicas">
                <h2 className="text-2xl font-semibold text-[hsl(240_6%_10%)] mb-6">
                  5. Condiciones Económicas
                </h2>
                <h3 className="text-lg font-semibold text-[hsl(240_6%_10%)] mb-4">
                  5.1. Honorarios
                </h3>
                <p className="text-[15px] mb-6">
                  El precio total por los servicios se especifica en Hojas de Pedido emitidas en documento aparte. Salvo que se acuerde lo contrario, el pago se realizará mediante transferencia bancaria: el <strong>70% a la firma del contrato</strong> y el <strong>30% restante a la entrega</strong> de los resultados o finalización de la consultoría.
                </p>
                <h3 className="text-lg font-semibold text-[hsl(240_6%_10%)] mb-4">
                  5.2. Costes de Terceros
                </h3>
                <div className="bg-[hsl(240_5%_96%)] border-l-4 border-[hsl(0_0%_70%)] p-4 rounded-r mb-6">
                  <p className="text-[15px]">
                    <strong>Importante:</strong> El Cliente asumirá directamente el coste de las licencias de software, suscripciones y consumo de APIs (ej. <strong>OpenAI, Claude, herramientas de automatización</strong>) necesarias para el proyecto. El Prestador asesorará sobre la configuración de estas cuentas, pero no será responsable de los pagos a estos proveedores.
                  </p>
                </div>
                <h3 className="text-lg font-semibold text-[hsl(240_6%_10%)] mb-4">
                  5.3. Impuestos y Gastos
                </h3>
                <p className="text-[15px]">
                  Los importes indicados no incluyen el IVA. Cualquier gasto extraordinario (materiales físicos, desplazamientos, gastos y dietas) deberá ser aprobado previamente por el Cliente y se facturará por separado.
                </p>
              </section>

              {/* Section 6 — MSA Cláusula 4 */}
              <section id="responsabilidad">
                <h2 className="text-2xl font-semibold text-[hsl(240_6%_10%)] mb-6">
                  6. Responsabilidad y Garantías
                </h2>
                <h3 className="text-lg font-semibold text-[hsl(240_6%_10%)] mb-4">
                  6.1. Naturaleza de la IA
                </h3>
                <div className="bg-[hsl(40_100%_97%)] border-l-4 border-[hsl(40_80%_50%)] p-4 rounded-r mb-6">
                  <p className="text-[15px]">
                    <strong>Cláusula Crítica:</strong> El Cliente reconoce que los modelos de Inteligencia Artificial son herramientas basadas en probabilidades que pueden generar respuestas inexactas, incompletas o incoherentes (fenómenos conocidos como <strong>"alucinaciones"</strong>). El Prestador no garantiza la infalibilidad de los resultados ni la exactitud absoluta de los datos generados por estas herramientas.
                  </p>
                </div>
                <h3 className="text-lg font-semibold text-[hsl(240_6%_10%)] mb-4">
                  6.2. Supervisión Obligatoria — <strong>Human-in-the-Loop</strong>
                </h3>
                <div className="bg-[hsl(240_5%_96%)] border-l-4 border-[hsl(240_6%_10%)] p-4 rounded-r mb-6">
                  <p className="text-[15px]">
                    El Cliente es el <strong>responsable final</strong> de revisar, validar y supervisar cualquier contenido o automatización generada por la IA antes de su implementación comercial o publicación. El servicio del Prestador es de consultoría y apoyo, no sustituyendo el juicio humano ni la supervisión del Cliente (<strong>Human-in-the-Loop</strong>).
                  </p>
                </div>
                <h3 className="text-lg font-semibold text-[hsl(240_6%_10%)] mb-4">
                  6.3. Limitación de Responsabilidad
                </h3>
                <p className="text-[15px]">
                  El Prestador no será responsable por daños indirectos, pérdida de beneficios o fallos en el servicio de terceros proveedores de IA (caídas de OpenAI, cambios en sus términos, etc.).
                </p>
              </section>

              {/* Section 7 — MSA Cláusula 5 */}
              <section id="gestion">
                <h2 className="text-2xl font-semibold text-[hsl(240_6%_10%)] mb-6">
                  7. Gestión y Cambios en el Alcance
                </h2>
                <h3 className="text-lg font-semibold text-[hsl(240_6%_10%)] mb-4">
                  7.1. Colaboración del Cliente
                </h3>
                <p className="text-[15px] mb-6">
                  El Cliente se compromete a facilitar el acceso a los datos, plataformas y personal necesarios para la ejecución del servicio. Los retrasos imputables al Cliente en la entrega de esta información se añadirán automáticamente al plazo de finalización previsto en el Anexo I.
                </p>
                <h3 className="text-lg font-semibold text-[hsl(240_6%_10%)] mb-4">
                  7.2. Control de Cambios
                </h3>
                <p className="text-[15px]">
                  Cualquier petición del Cliente que suponga una modificación o ampliación de las tareas descritas en el Anexo I será considerada un <strong>"Cambio de Alcance"</strong>. El Prestador presentará un presupuesto adicional por dicho cambio, el cual deberá ser aceptado por escrito antes de su ejecución.
                </p>
              </section>

              {/* Section 8 — MSA Cláusula 6 */}
              <section id="terminacion">
                <h2 className="text-2xl font-semibold text-[hsl(240_6%_10%)] mb-6">
                  8. Terminación y Jurisdicción
                </h2>
                <h3 className="text-lg font-semibold text-[hsl(240_6%_10%)] mb-4">
                  8.1. Rescisión
                </h3>
                <p className="text-[15px] mb-6">
                  Cualquiera de las partes podrá rescindir el contrato con un preaviso de <strong>30 días</strong>. El Cliente abonará el trabajo realizado hasta la fecha incluyendo los recurrentes y mantenimientos comprometidos.
                </p>
                <h3 className="text-lg font-semibold text-[hsl(240_6%_10%)] mb-4">
                  8.2. Jurisdicción
                </h3>
                <p className="text-[15px]">
                  Para cualquier controversia, las partes se someten a los Juzgados y Tribunales de la ciudad de <strong>Madrid</strong>, renunciando a cualquier otro fuero.
                </p>
              </section>

              {/* Footer legal */}
              <div className="pt-12 border-t border-[hsl(0_0%_90%)]">
                <p className="text-xs text-[hsl(0_0%_60%)] text-center">
                  SKYVIEW IBERIA, S.L. — CIF B-87205951 — c/ Valportillo Primera, 5 · Alcobendas 28108 Madrid
                </p>
                <p className="text-xs text-[hsl(0_0%_60%)] text-center mt-1">
                  Documento vinculante referenciado en el Contrato de Prestación de Servicios (MSA).
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default CondicionesSow;
