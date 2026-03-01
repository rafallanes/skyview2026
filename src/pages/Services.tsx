import Navigation from "@/components/Navigation";
import servicesArch1 from "@/assets/services-architecture-1.jpg";
import servicesArch2 from "@/assets/services-architecture-2.jpg";

const timelineEvents = [
  { year: "2014", label: "EL ORIGEN", description: "Enfoque fundacional en el ahorro de tiempo y costes mediante arquitectura tecnológica." },
  { year: "2016", label: "ECOSISTEMA SAAS", description: "Alianzas estratégicas para la agilidad operativa (Xeerpa, Captio, Monday, Signaturit, Odoo, Zoho)." },
  { year: "2017", label: "LA FÁBRICA RPA", description: "Especialización en automatización robótica de procesos como factoría para 'Big Four' del norte de Europa." },
  { year: "2022", label: "INTELIGENCIA AVANZADA", description: "Colaboración en proyectos de gran escala con líderes mundiales en visión artificial y ML (ML6, Robovision)." },
  { year: "2024", label: "METODOLOGÍA SPRINT", description: "Lanzamiento de nuestra metodología propia para acelerar la adopción de la IA y creación de las primeras Oficinas de IA." },
];

const methodologySteps = [
  {
    number: "01",
    title: "START",
    subtitle: "EL GERMEN",
    description: "En 2 semanas asignamos tu Core Team, definimos objetivos y planificamos tu primer trimestre con casos priorizados (S/M/L).",
  },
  {
    number: "02",
    title: "SPRINT",
    subtitle: "EL MOTOR",
    description: "90 días de ejecución intensiva. Reuniones periódicas, objetivos medibles y automatización con evaluación de impacto real.",
  },
  {
    number: "03",
    title: "OFICINA IA AS A SERVICE",
    subtitle: "LA CONSOLIDACIÓN",
    description: "Gestión profesional continua. Procesos automatizados de forma regular y evolución constante del modelo.",
  },
  {
    number: "04",
    title: "OFICINA IA PROPIA",
    subtitle: "LA AUTONOMÍA",
    description: "Paso opcional y final. Transferimos nuestras capacidades a tu personal propio para que la oficina sea 100% independiente.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">

            {/* HEADER & INTRO */}
            <div className="mb-24 md:mb-32">
              <h1 className="text-minimal text-muted-foreground mb-6">MAKING AI EASY</h1>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-architectural max-w-4xl mb-10">
                Una década diseñando{"\n"}el futuro de la eficiencia.
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl" style={{ whiteSpace: "pre-line" }}>
                No nacimos con la IA generativa. Llevamos 10 años optimizando la operativa de las organizaciones más exigentes de Europa.
              </p>
            </div>

            {/* EVOLUTIONARY TIMELINE */}
            <div className="mb-24 md:mb-32">
              <h3 className="text-minimal text-muted-foreground mb-12">TRAYECTORIA</h3>
              <div className="space-y-0">
                {timelineEvents.map((event, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-[120px_200px_1fr] gap-4 md:gap-8 py-8 border-t border-border items-start"
                  >
                    <span className="text-2xl md:text-3xl font-light text-architectural">{event.year}</span>
                    <span className="text-minimal text-foreground font-medium pt-1 md:pt-2">{event.label}</span>
                    <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                  </div>
                ))}
                <div className="border-t border-border" />
              </div>
            </div>

            {/* FULL-BLEED PHOTOS */}
            <div className="mb-24 md:mb-32 -mx-6 md:-mx-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={servicesArch1}
                    alt="Arquitectura corporativa moderna en blanco y negro"
                    className="w-full h-full object-cover grayscale"
                    loading="lazy"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={servicesArch2}
                    alt="Personas en movimiento en un espacio arquitectónico moderno"
                    className="w-full h-full object-cover grayscale"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* METHODOLOGY GRID */}
            <div>
              <h3 className="text-minimal text-muted-foreground mb-6">METODOLOGÍA</h3>
              <h2 className="text-3xl md:text-5xl font-light text-architectural mb-16 md:mb-20 max-w-3xl">
                Tu Oficina IA en 4 pasos.
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {methodologySteps.map((step, index) => (
                  <div
                    key={index}
                    className="group border-t border-border py-10 md:py-14 md:pr-16 md:odd:pr-16 md:even:pl-16 md:even:pr-0"
                  >
                    <div className="flex items-start space-x-6">
                      <span className="text-minimal text-muted-foreground font-medium shrink-0 pt-1">
                        {step.number}
                      </span>
                      <div>
                        <h4 className="text-xl md:text-2xl font-light text-architectural mb-1 group-hover:text-muted-foreground transition-colors duration-500">
                          {step.title}
                        </h4>
                        <span className="text-minimal text-muted-foreground/60 block mb-4">
                          {step.subtitle}
                        </span>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-border" />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
