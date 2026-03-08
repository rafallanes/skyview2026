import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Printer } from "lucide-react";
import { tocSections, entregablesTable, raciMatrix } from "@/data/sowContent";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

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

const Callout = ({
  children,
  variant = "neutral",
}: {
  children: React.ReactNode;
  variant?: "neutral" | "warning" | "dark";
}) => {
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

  return (
    <div className="min-h-screen flex flex-col">
      <div className="print:hidden">
        <Navigation />
      </div>

      <main className="flex-1 pt-32 pb-20 bg-[hsl(0_0%_100%)]" ref={contentRef}>
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <p className="text-minimal text-[hsl(0_0%_60%)] mb-4">DOCUMENTO LEGAL</p>
                <h1 className="text-3xl md:text-4xl font-light text-[hsl(240_6%_10%)] leading-tight">
                  Statement of Work
                  <br />
                  <span className="text-[hsl(0_0%_40%)]">SkyView 2026</span>
                </h1>
              </div>
              <button
                onClick={() => window.print()}
                className="print:hidden flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[hsl(0_0%_50%)] hover:text-[hsl(240_6%_10%)] transition-colors duration-300 mt-2 border border-[hsl(0_0%_90%)] rounded px-3 py-2"
              >
                <Printer className="h-3.5 w-3.5" />
                Imprimir PDF
              </button>
            </div>

            {/* Meta */}
            <div className="text-xs text-[hsl(0_0%_50%)] space-y-1 mb-12">
              <p>Documento ID: SOW-IA-MASTER-v0.2 &nbsp;|&nbsp; Versión 0.2 — 23/02/2025</p>
              <p>Preparado por: <strong>SkyView 2026</strong> (en adelante, "el Consultor")</p>
              <p>Preparado para: <strong>El Cliente</strong> (según se define en la Orden de Pedido correspondiente)</p>
            </div>

            {/* TOC */}
            <nav className="bg-[hsl(240_5%_96%)] rounded-lg p-6 mb-16">
              <h2 className="text-xs font-semibold tracking-widest uppercase text-[hsl(0_0%_40%)] mb-4">
                Índice de Contenidos
              </h2>
              <ol className="space-y-2">
                {tocSections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="text-sm text-[hsl(240_6%_10%)] hover:text-[hsl(0_0%_0%)] transition-colors duration-200">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* Content */}
            <div className="space-y-16 text-[hsl(240_6%_10%)] leading-relaxed legal-prose" lang="es">

              {/* 1 */}
              <section>
                <SectionTitle id="introduccion" number="1" title="Introducción y propósito" />
                <P>Este documento define el marco de trabajo, los objetivos y el alcance de los servicios de consultoría estratégica en Inteligencia Artificial que <strong>SkyView 2026</strong> prestará al Cliente.</P>
                <P>Nuestro objetivo es claro: ayudarte a integrar la IA en tu operativa real, no en un piloto eterno. Transformamos la complejidad tecnológica en decisiones accionables que impactan directamente en tu EBIT.</P>
                <P>Este SOW establece qué se hace, quién lo hace, cuándo y bajo qué condiciones. Sin letra pequeña innecesaria; con toda la claridad que una relación profesional de alto nivel requiere.</P>
              </section>

              {/* 2 */}
              <section>
                <SectionTitle id="descripcion" number="2" title="Descripción del proyecto" />
                <SubTitle number="2.1" title="Contexto y necesidades del Cliente" />
                <P>El mercado no espera. La IA ha dejado de ser una tendencia para convertirse en una ventaja competitiva estructural. El Cliente se encuentra en un punto de inflexión: ha superado la fase de curiosidad tecnológica y necesita pasar a la ejecución de impacto.</P>
                <P>En nuestras conversaciones previas hemos identificado necesidades concretas que este proyecto abordará:</P>
                <ul className="list-disc pl-6 space-y-2 text-[15px] mb-6">
                  <li><strong>Capacitación crítica:</strong> Formar a los equipos del Cliente para que comprendan, evalúen y utilicen herramientas de IA con criterio y autonomía.</li>
                  <li><strong>Identificación de palancas de eficiencia:</strong> Detectar qué procesos internos generan más fricción y tienen mayor potencial de mejora mediante automatización inteligente.</li>
                  <li><strong>Diseño e implementación de flujos de trabajo:</strong> Construir y desplegar agentes y automatizaciones concretas, adaptadas al contexto operativo del Cliente.</li>
                  <li><strong>Reducción del riesgo tecnológico:</strong> Acompañar al equipo directivo para tomar decisiones de inversión tecnológica con fundamento, no con especulación.</li>
                </ul>

                <SubTitle number="2.2" title="Objetivos del proyecto" />
                <P>Al finalizar el alcance definido en este SOW, el Cliente habrá conseguido:</P>
                <ul className="list-disc pl-6 space-y-2 text-[15px]">
                  <li>Un diagnóstico claro de su madurez en IA y los vectores de mayor impacto.</li>
                  <li>Un equipo interno con criterio para evaluar, adoptar y escalar soluciones de IA.</li>
                  <li>Al menos un proceso crítico automatizado y en producción.</li>
                  <li>Un modelo de gobernanza básico para la adopción IA: quién decide, quién valida, quién ejecuta.</li>
                </ul>
              </section>

              {/* 3 */}
              <section>
                <SectionTitle id="fases" number="3" title="Fases de trabajo" />
                <P>El modelo de trabajo de SkyView se estructura en tres fases progresivas. Cada fase tiene entregables definidos, duración establecida y criterios de cierre claros.</P>

                {/* START */}
                <h3 className="text-xl font-semibold text-[hsl(240_6%_10%)] mt-8 mb-2">Fase START — Diagnóstico y hoja de ruta</h3>
                <p className="text-xs text-[hsl(0_0%_50%)] mb-4">Duración: 2 semanas</p>
                <P>La Fase START es el punto de partida de cualquier proyecto SkyView. En dos semanas intensivas, auditamos tu operativa, identificamos las oportunidades de mayor retorno y te entregamos una hoja de ruta ejecutable. No hacemos PowerPoints genéricos; hacemos diagnóstico real sobre tu empresa.</P>
                <P><strong>Qué incluye:</strong></P>
                <ul className="list-disc pl-6 space-y-2 text-[15px] mb-4">
                  <li><strong>Semana 1 — Auditoría y entrevistas:</strong> Sesiones de trabajo con los responsables clave de las áreas de impacto definidas (Operaciones, Finanzas, Ventas, RRHH u otras según PO). Análisis de procesos actuales, herramientas en uso y flujos de datos existentes.</li>
                  <li><strong>Semana 2 — Diagnóstico y priorización:</strong> Entrega del Informe de Madurez IA con mapa de oportunidades priorizado por impacto/esfuerzo, primeras recomendaciones de herramientas y un roadmap inicial de 90 días.</li>
                </ul>
                <P><strong>Entregables de cierre de fase:</strong></P>
                <ul className="list-disc pl-6 space-y-2 text-[15px] mb-4">
                  <li>Informe de Diagnóstico IA (Madurez + Oportunidades)</li>
                  <li>Mapa de Procesos Críticos con potencial de automatización</li>
                  <li>Roadmap ejecutivo 90 días</li>
                  <li>Sesión de presentación y validación con el equipo directivo</li>
                </ul>
                <Callout variant="neutral"><strong>Condición de cierre:</strong> La Fase START se considera completada cuando el Cliente ha recibido y validado el Informe de Diagnóstico en la sesión de presentación conjunta.</Callout>

                {/* SPRINT */}
                <h3 className="text-xl font-semibold text-[hsl(240_6%_10%)] mt-10 mb-2">Fase SPRINT — Implementación por trimestres</h3>
                <p className="text-xs text-[hsl(0_0%_50%)] mb-4">Duración: Uno o varios trimestres (90 días por sprint), según Orden de Pedido</p>
                <P>La Fase SPRINT es donde ocurre la transformación real. Cada sprint de 90 días tiene un objetivo concreto, entregables medibles y sprints de revisión quincenales para garantizar la alineación constante con el negocio.</P>
                <P><strong>Estructura de cada sprint:</strong></P>
                <ul className="list-disc pl-6 space-y-2 text-[15px] mb-4">
                  <li><strong>Mes 1 — Diseño y construcción:</strong> Arquitectura de la solución, selección de herramientas, desarrollo de flujos de trabajo y automatizaciones. Configuración de entornos de prueba.</li>
                  <li><strong>Mes 2 — Prueba y ajuste:</strong> Pruebas en entorno controlado con usuarios clave. Iteraciones de mejora basadas en feedback real del equipo interno.</li>
                  <li><strong>Mes 3 — Despliegue y estabilización:</strong> Puesta en producción, formación del equipo en el uso de la solución, documentación operativa y panel de seguimiento de KPIs.</li>
                </ul>
                <P><strong>Revisiones periódicas:</strong></P>
                <ul className="list-disc pl-6 space-y-2 text-[15px] mb-4">
                  <li><strong>Check-in quincenal (30 min):</strong> Seguimiento de avance y resolución de bloqueos.</li>
                  <li><strong>Revisión mensual (60 min):</strong> Presentación de métricas y ajuste de prioridades.</li>
                  <li><strong>Cierre de sprint (90 días):</strong> Presentación ejecutiva de resultados e impacto medido.</li>
                </ul>
                <P><strong>Entregables por sprint (estándar):</strong></P>
                <ul className="list-disc pl-6 space-y-2 text-[15px] mb-4">
                  <li>Solución IA desplegada en producción (automatización, agente o integración, según scope)</li>
                  <li>Documentación técnica y manual de usuario</li>
                  <li>Dashboard de KPIs asociados a la solución implementada</li>
                  <li>Informe de impacto: tiempo ahorrado, coste reducido, errores eliminados</li>
                  <li>Formación del equipo usuario (sesión práctica)</li>
                </ul>
                <Callout variant="neutral"><strong>Condición de cierre de sprint:</strong> El sprint se considera completado cuando la solución está en producción y el Cliente ha validado el informe de impacto en la sesión de cierre.</Callout>

                {/* Oficina de IA */}
                <h3 className="text-xl font-semibold text-[hsl(240_6%_10%)] mt-10 mb-2">Oficina de IA — Servicio de continuidad estratégica</h3>
                <p className="text-xs text-[hsl(0_0%_50%)] mb-4">Modalidad: Retainer mensual (condiciones según Orden de Pedido específica)</p>
                <P>La Oficina de IA es el modelo de relación para clientes que quieren mantener la evolución continua de sus capacidades en IA sin necesidad de gestionar un equipo interno propio. Funciona como una extensión estratégica del equipo directivo del Cliente.</P>
                <P><strong>Qué incluye:</strong></P>
                <ul className="list-disc pl-6 space-y-2 text-[15px] mb-4">
                  <li>Acceso directo al equipo senior de SkyView para consultas, decisiones tecnológicas y evaluación de nuevas herramientas.</li>
                  <li>Mantenimiento y evolución de las soluciones implementadas en fases anteriores.</li>
                  <li>Vigilancia tecnológica continua: te avisamos cuando algo relevante para tu sector emerge y tiene aplicación práctica real.</li>
                  <li>Formación continua para equipos: sesiones mensuales de actualización para mantener la capacitación interna.</li>
                  <li>Soporte en la evaluación de proveedores y nuevas inversiones tecnológicas.</li>
                  <li>Informes trimestrales de madurez IA y evolución de KPIs.</li>
                </ul>
                <Callout variant="dark"><strong>Condición de acceso:</strong> La Oficina de IA está disponible para Clientes que hayan completado al menos una Fase START o una Fase SPRINT con SkyView.</Callout>
              </section>

              {/* 4 */}
              <section>
                <SectionTitle id="entregables" number="4" title="Entregables" />
                <P>Los entregables específicos de cada proyecto se detallan en la Orden de Pedido (PO) correspondiente. Con carácter general, los entregables estándar por fase son los siguientes:</P>
                <div className="mb-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold text-[hsl(240_6%_10%)]">Fase</TableHead>
                        <TableHead className="font-semibold text-[hsl(240_6%_10%)]">Entregables principales</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {entregablesTable.map((row) => (
                        <TableRow key={row.fase}>
                          <TableCell className="font-medium">{row.fase}</TableCell>
                          <TableCell>{row.entregables}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <P>Todos los entregables se entregarán en formato digital. Los documentos estratégicos se entregarán en formatos editables (PDF y/o DOCX). Las configuraciones técnicas se realizarán directamente sobre las plataformas del Cliente o en entornos definidos en la PO.</P>
                <P>SkyView se compromete a entregar los resultados acordados con los estándares de calidad propios de una consultoría estratégica boutique. En caso de que un entregable no alcance los criterios de calidad acordados, SkyView realizará las revisiones necesarias sin coste adicional.</P>
              </section>

              {/* 5 */}
              <section>
                <SectionTitle id="raci" number="5" title="Matriz RACI" />
                <P>La siguiente matriz define las responsabilidades de cada parte en las actividades clave del proyecto. Su correcta aplicación es fundamental para garantizar la agilidad en la toma de decisiones y evitar bloqueos operativos.</P>
                <div className="mb-6">
                  <p className="text-xs text-[hsl(0_0%_50%)] mb-3">
                    <strong>R</strong> — Responsible &nbsp;|&nbsp; <strong>A</strong> — Accountable &nbsp;|&nbsp; <strong>C</strong> — Consulted &nbsp;|&nbsp; <strong>I</strong> — Informed
                  </p>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="font-semibold text-[hsl(240_6%_10%)] min-w-[200px]">Actividad</TableHead>
                          <TableHead className="font-semibold text-[hsl(240_6%_10%)] text-center">SkyView</TableHead>
                          <TableHead className="font-semibold text-[hsl(240_6%_10%)] text-center">Cliente (Dirección)</TableHead>
                          <TableHead className="font-semibold text-[hsl(240_6%_10%)] text-center">Cliente (Equipo)</TableHead>
                          <TableHead className="font-semibold text-[hsl(240_6%_10%)] text-center">Cliente (IT)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {raciMatrix.map((row, i) => (
                          <TableRow key={i}>
                            <TableCell className="text-[13px]">{row.actividad}</TableCell>
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
                <Callout variant="dark"><strong>Principio fundamental:</strong> SkyView es responsable de la consultoría, el diseño y la implementación. El Cliente es responsable de la validación, aprobación final y supervisión operativa de todo lo que entra en producción en su organización.</Callout>
              </section>

              {/* 6 */}
              <section>
                <SectionTitle id="economicas" number="6" title="Condiciones económicas" />
                <SubTitle number="6.1" title="Estructura de pago" />
                <P>Los honorarios de SkyView se estructuran con el siguiente esquema de pagos:</P>
                <ul className="list-disc pl-6 space-y-2 text-[15px] mb-6">
                  <li><strong>70% a la firma de la Orden de Pedido (PO):</strong> El proyecto comienza una vez recibido este pago. Es la condición de inicio de cualquier fase.</li>
                  <li><strong>30% a la entrega y validación de los entregables de cierre de fase:</strong> Se facturará una vez el Cliente haya recibido y aceptado los entregables finales de la fase correspondiente.</li>
                </ul>
                <P>Los importes específicos de cada fase o servicio se detallan en la Orden de Pedido correspondiente.</P>

                <SubTitle number="6.2" title="Costes de plataformas y licencias de terceros" />
                <Callout variant="warning"><strong>Importante:</strong> SkyView trabaja con las mejores herramientas del mercado: OpenAI, Anthropic Claude, Microsoft Azure, Google Cloud, entre otras. Las licencias, suscripciones y costes de API de estas plataformas <strong>no están incluidos</strong> en los honorarios de SkyView y corren íntegramente a cargo del Cliente.</Callout>
                <P>El Cliente contratará y pagará directamente a cada proveedor. SkyView no actuará en ningún caso como intermediario financiero frente a proveedores de software. Este modelo garantiza que el Cliente mantiene la relación directa, la propiedad de los datos y el control total sobre sus cuentas de plataforma.</P>

                <SubTitle number="6.3" title="Gastos externos" />
                <P>Si el desarrollo del proyecto requiere desplazamientos, alojamiento u otros gastos directamente imputables al proyecto, estos se facturarán al Cliente al coste real, previa aprobación escrita.</P>

                <SubTitle number="6.4" title="Condiciones de facturación y pago" />
                <ul className="list-disc pl-6 space-y-2 text-[15px]">
                  <li>Las facturas serán emitidas en euros.</li>
                  <li>El plazo de pago es de <strong>15 días naturales</strong> desde la fecha de emisión de la factura.</li>
                  <li>El impago en plazo podrá dar lugar a la suspensión de los servicios hasta la regularización, sin que ello genere responsabilidad alguna para SkyView por los retrasos derivados.</li>
                </ul>
              </section>

              {/* 7 */}
              <section>
                <SectionTitle id="propiedad" number="7" title="Propiedad intelectual" />
                <SubTitle number="7.1" title="Entregables del proyecto" />
                <P>Una vez completado el pago íntegro de los honorarios correspondientes a una fase, el Cliente adquiere la plena propiedad de los entregables específicos de ese proyecto: informes, documentos estratégicos y configuraciones realizadas directamente en las cuentas y sistemas del Cliente.</P>

                <SubTitle number="7.2" title="Metodología y propiedad preexistente de SkyView" />
                <P>SkyView conserva en todo momento la propiedad intelectual de sus metodologías, marcos de trabajo, procesos propios, plantillas, modelos de análisis y cualquier herramienta o conocimiento desarrollado con anterioridad al inicio del proyecto o de forma independiente al mismo.</P>
                <P>La entrega de resultados al Cliente no implica en ningún caso la cesión de la metodología SkyView ni de ninguno de sus componentes propietarios.</P>

                <SubTitle number="7.3" title="Uso de los entregables" />
                <P>El Cliente podrá utilizar los entregables para sus fines internos sin restricción. No podrá comercializarlos, cederlos a terceros ni utilizarlos para prestar servicios propios de consultoría sin el consentimiento expreso y por escrito de SkyView.</P>
              </section>

              {/* 8 */}
              <section>
                <SectionTitle id="confidencialidad" number="8" title="Confidencialidad" />
                <P>Ambas partes se comprometen a mantener la más estricta confidencialidad sobre toda la información sensible a la que accedan durante el desarrollo del proyecto.</P>

                <SubTitle number="8.1" title="Alcance" />
                <P>Esta obligación abarca toda la información técnica, estratégica, financiera, comercial u operativa intercambiada entre las partes, independientemente del soporte en que se facilite.</P>

                <SubTitle number="8.2" title="Excepciones" />
                <P>La obligación de confidencialidad no aplica a información que:</P>
                <ul className="list-disc pl-6 space-y-2 text-[15px] mb-4">
                  <li>Sea de dominio público en el momento de su divulgación o llegue a serlo sin incumplimiento de este acuerdo.</li>
                  <li>Fuera conocida por la parte receptora con anterioridad a su divulgación.</li>
                  <li>Sea requerida por mandato legal o resolución judicial firme, en cuyo caso se informará a la otra parte con la máxima antelación posible.</li>
                </ul>

                <SubTitle number="8.3" title="Duración" />
                <P>Esta obligación de confidencialidad se mantiene durante la vigencia del contrato y por un período de <strong>dos (2) años</strong> tras su finalización, con independencia del motivo de terminación.</P>
              </section>

              {/* 9 */}
              <section>
                <SectionTitle id="advertencia-ia" number="9" title="Advertencia sobre inteligencia artificial" />
                <P>En SkyView llevamos la transparencia al máximo. Antes de trabajar con nosotros, quieres saber esto sobre la IA.</P>

                <SubTitle number="9.1" title="Naturaleza probabilística de los modelos" />
                <Callout variant="warning">
                  <strong>Cláusula Crítica:</strong> Los modelos de inteligencia artificial (como GPT-4, Claude, Gemini u otros) son sistemas probabilísticos. Esto significa que generan respuestas basadas en patrones estadísticos, no en certezas absolutas. Pueden generar información inexacta, incompleta o desactualizada (lo que la industria denomina <strong>"alucinaciones"</strong>). Sus resultados pueden variar entre consultas similares. No sustituyen el criterio profesional humano en decisiones de alto impacto.
                </Callout>

                <SubTitle number="9.2" title="Limitación de responsabilidad" />
                <P>SkyView no asume responsabilidad por los resultados generados directamente por modelos de IA de terceros, ni por las decisiones que el Cliente tome basándose en dichos resultados sin la correspondiente validación humana. Esta limitación aplica tanto a los modelos utilizados durante el proyecto como a los desplegados en producción tras la finalización del mismo.</P>

                <SubTitle number="9.3" title="Buenas prácticas recomendadas" />
                <P>SkyView diseña todos sus flujos de trabajo con criterios de calidad, validación y supervisión humana integrados. Recomendamos activamente al Cliente que:</P>
                <ul className="list-disc pl-6 space-y-2 text-[15px]">
                  <li>Nunca automatice de forma totalmente autónoma procesos de alto impacto (financiero, legal, de seguridad o de personas) sin revisión humana.</li>
                  <li>Establezca mecanismos de auditoría y revisión periódica de los outputs de los sistemas de IA en producción.</li>
                  <li>Forme a su equipo para identificar y gestionar errores generados por modelos de IA.</li>
                </ul>
              </section>

              {/* 10 */}
              <section>
                <SectionTitle id="supervision" number="10" title="Supervisión y responsabilidad operativa" />
                <Callout variant="dark"><strong>SkyView aplica el principio de Human-in-the-Loop como estándar en todos sus proyectos.</strong></Callout>

                <SubTitle number="10.1" title="Responsabilidad de validación del Cliente" />
                <P>El Cliente es el <strong>responsable final</strong> de validar y autorizar cualquier solución, automatización o agente de IA antes de su puesta en producción y uso comercial. Esta validación deberá realizarse en el entorno de pruebas establecido durante la fase correspondiente.</P>
                <P>Ningún sistema desarrollado por SkyView entrará en producción sin la aprobación explícita del Cliente.</P>

                <SubTitle number="10.2" title="Responsabilidad operativa en producción" />
                <P>Una vez que el Cliente aprueba el despliegue en producción, la responsabilidad operativa de los sistemas implementados recae en el Cliente. SkyView podrá prestar soporte técnico según las condiciones de la Oficina de IA o de un servicio de mantenimiento acordado por separado, pero no asumirá responsabilidad por el funcionamiento de sistemas en entornos productivos bajo la gestión del Cliente.</P>

                <SubTitle number="10.3" title="Acceso a sistemas del Cliente" />
                <P>Para el desarrollo del proyecto, el Cliente facilitará a SkyView los accesos necesarios a sus plataformas, herramientas y datos relevantes. SkyView utilizará estos accesos exclusivamente para los fines del proyecto y los revocará o devolverá en el momento en que el proyecto finalice.</P>
              </section>

              {/* 11 */}
              <section>
                <SectionTitle id="cambios" number="11" title="Gestión de cambios" />
                <P>Los proyectos de IA evolucionan. Sabemos que el alcance puede necesitar ajustarse. Lo gestionamos con un proceso claro.</P>

                <SubTitle number="11.1" title="Qué se considera un cambio de alcance" />
                <P>Son cambios de alcance (no incluidos en el SOW original) las solicitudes de:</P>
                <ul className="list-disc pl-6 space-y-2 text-[15px] mb-6">
                  <li>Nuevas funcionalidades, automatizaciones o integraciones no contempladas en la PO.</li>
                  <li>Ampliación del número de departamentos, usuarios o procesos cubiertos.</li>
                  <li>Modificaciones sustanciales en los entregables ya acordados una vez iniciada su elaboración.</li>
                  <li>Trabajo adicional derivado de cambios en los sistemas, datos o prioridades del Cliente ocurridos durante el proyecto.</li>
                </ul>

                <SubTitle number="11.2" title="Proceso de gestión de cambios" />
                <ol className="list-decimal pl-6 space-y-2 text-[15px] mb-4">
                  <li>El Cliente o SkyView identifica la necesidad de un cambio.</li>
                  <li>SkyView elabora una propuesta de alcance adicional con estimación de impacto en tiempo y coste.</li>
                  <li>El Cliente aprueba la propuesta por escrito (correo electrónico con confirmación explícita o Orden de Pedido adicional).</li>
                  <li>El trabajo adicional se inicia únicamente tras la aprobación escrita.</li>
                </ol>
                <Callout variant="dark">Ningún cambio de alcance se considerará aceptado ni ejecutado sin aprobación escrita previa. Las instrucciones verbales o conversaciones informales no tienen validez contractual a efectos de modificación del alcance.</Callout>
              </section>

              {/* 12 */}
              <section>
                <SectionTitle id="relacion" number="12" title="Naturaleza de la relación" />
                <P>La relación entre SkyView y el Cliente es una relación mercantil entre partes independientes.</P>
                <P>SkyView opera con plena autonomía técnica y metodológica en la prestación de los servicios. Nada en este SOW implica la existencia de una relación laboral, de agencia, de sociedad o de representación entre SkyView y el Cliente, ni entre el Cliente y los profesionales del equipo SkyView.</P>
                <P>SkyView podrá subcontratar parte de los servicios a profesionales especializados, manteniendo en todo caso la responsabilidad frente al Cliente por los resultados acordados.</P>
              </section>

              {/* 13 */}
              <section>
                <SectionTitle id="vigencia" number="13" title="Vigencia y terminación" />
                <SubTitle number="13.1" title="Vigencia" />
                <P>Este SOW entra en vigor en la fecha de firma de la Orden de Pedido correspondiente y permanece vigente hasta la finalización y entrega de todos los entregables acordados, salvo terminación anticipada.</P>

                <SubTitle number="13.2" title="Terminación por mutuo acuerdo" />
                <P>Ambas partes podrán acordar la terminación anticipada del contrato mediante comunicación escrita con un preaviso mínimo de <strong>30 días naturales</strong>.</P>

                <SubTitle number="13.3" title="Terminación por incumplimiento" />
                <P>Cualquiera de las partes podrá resolver el contrato en caso de incumplimiento material de las obligaciones por la otra parte, si dicho incumplimiento no fuera subsanado en un plazo de <strong>15 días hábiles</strong> desde la notificación escrita del mismo.</P>

                <SubTitle number="13.4" title="Efectos de la terminación" />
                <P>En caso de terminación:</P>
                <ul className="list-disc pl-6 space-y-2 text-[15px]">
                  <li>El Cliente abonará los honorarios correspondientes al trabajo efectivamente realizado hasta la fecha de terminación, calculados de forma proporcional.</li>
                  <li>SkyView entregará al Cliente los avances y materiales elaborados hasta ese momento.</li>
                  <li>Las obligaciones de confidencialidad y las limitaciones de propiedad intelectual permanecerán vigentes según lo establecido en este documento.</li>
                </ul>
              </section>

              {/* 14 */}
              <section>
                <SectionTitle id="jurisdiccion" number="14" title="Jurisdicción y ley aplicable" />
                <P>Este SOW se rige por la legislación española.</P>
                <P>Para cualquier controversia, reclamación o litigio derivado de la interpretación, ejecución o incumplimiento de este documento, ambas partes se someten expresamente a la jurisdicción de los Juzgados y Tribunales de <strong>Madrid</strong>, renunciando a cualquier otro fuero que pudiera corresponderles.</P>
              </section>

              {/* Footer legal */}
              <div className="pt-12 border-t border-[hsl(0_0%_90%)]">
                <p className="text-sm font-medium text-[hsl(240_6%_10%)] text-center mb-2">
                  SkyView 2026 — Making AI easy
                </p>
                <p className="text-xs text-[hsl(0_0%_60%)] text-center">
                  Madrid, España &nbsp;|&nbsp; Documento ID: SOW-IA-MASTER-v0.2 &nbsp;|&nbsp; Versión 0.2 — 23/02/2025
                </p>
                <p className="text-xs text-[hsl(0_0%_50%)] text-center mt-4 italic">
                  Nota de uso: Este documento tiene validez legal una vez firmada la Orden de Pedido (PO) correspondiente por ambas partes. En caso de discrepancia entre este SOW y la PO específica, prevalecerá el contenido de la PO. Para cualquier consulta sobre este documento, contacta con SkyView a través de los canales oficiales indicados en la web.
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
