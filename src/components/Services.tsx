import servicesArch2 from "@/assets/services-architecture-2.png";
import LogoCarousel from "@/components/LogoCarousel";

const timelineEvents = [
{ year: "2014", label: "EL ORIGEN", description: "Enfoque fundacional en el ahorro de tiempo y dinero gracias a la tecnología." },
{ year: "2016", label: "ECOSISTEMA SAAS", description: "Alianzas estratégicas para la agilidad operativa (Monday, Signaturit, Odoo, Zoho, Xeerpa, Captio)." },
{ year: "2017", label: "LA FÁBRICA RPA", description: "Especialización en automatización robótica de procesos como factoría para 'Big Four' del norte de Europa." },
{ year: "2022", label: "INTELIGENCIA\nARTIFICIAL", description: "Colaboración en proyectos de gran escala con líderes mundiales en visión artificial y ML (ML6, Robovision)." },
{ year: "2024", label: "INTELIGENCIA\nAUMENTADA", description: "Desarrollo de metodología propia para hacer la IA fácil y puesta en marcha de las primeras Oficinas IA." }];


const methodologySteps = [
{
  number: "01",
  title: "START",
  subtitle: "EL GERMEN",
  description: "PRIMERAS DOS SEMANAS - Consultoría Intensiva. Asignamos Comité IA, definimos objetivos y planificamos primer trimestre con casos de uso."
},
{
  number: "02",
  title: "SPRINT",
  subtitle: "EL MOTOR",
  description: "PRIMER TRIMESTRE - Ejecución intensiva. Reuniones periódicas, objetivos medibles y automatización con evaluación de impacto real."
},
{
  number: "03",
  title: "OFICINA IA AS A SERVICE",
  subtitle: "LA CONSOLIDACIÓN",
  description: "PRIMER AÑO Gestión profesional continua. Procesos automatizados de forma regular y evolución constante del modelo."
},
{
  number: "04",
  title: "OFICINA IA PROPIA (OPCIONAL)",
  subtitle: "LA AUTONOMÍA",
  description: "Paso opcional y final. Transferimos nuestras capacidades a tu personal propio para que la oficina sea 100% autónoma e independiente."
}];


const Services = () => {
  return (
    <section id="services" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">

          {/* HEADER & INTRO */}
          <div className="mb-16 md:mb-24">
            <h2 className="text-minimal text-muted-foreground mb-6">MAKING AI EASY</h2>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-light text-architectural max-w-4xl mb-10">
              Una década diseñando{"\n"}el futuro de la eficiencia.
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl" style={{ whiteSpace: "pre-line" }}>No nacimos con la IA generativa. Llevamos una década optimizando la operativa de las organizaciones más exigentes de Europa.

            </p>
          </div>

          {/* INFOGRAPHIC TIMELINE */}
          <div className="mb-16 md:mb-24 w-full bg-background">
            {/* Desktop: horizontal scrollable timeline */}
            <div className="hidden md:block overflow-x-auto">
              <div className="flex items-stretch min-w-[900px] border-t border-b border-border">
                {timelineEvents.map((event, index) =>
                <div
                  key={index}
                  className="flex-1 relative px-6 py-10 border-r border-border last:border-r-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms`, animationFillMode: "both" }}>

                    <span className="text-4xl font-light text-foreground/30 block mb-3">{event.year}</span>
                    <span className="text-minimal text-foreground font-semibold block mb-3 whitespace-pre-line">{event.label}</span>
                    <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                  </div>
                )}
              </div>
            </div>
            {/* Mobile: vertical list */}
            <div className="md:hidden space-y-0">
              {timelineEvents.map((event, index) =>
              <div
                key={index}
                className="py-8 border-t border-border animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}>

                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="text-2xl font-light text-foreground/30">{event.year}</span>
                    <span className="text-minimal text-foreground font-semibold whitespace-pre-line">{event.label}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                </div>
              )}
              <div className="border-t border-border" />
            </div>
          </div>

          {/* REINFORCEMENT TEXT */}
          <div className="mb-16 md:mb-20">
            <p className="text-base md:text-lg text-muted-foreground/50 italic max-w-3xl leading-relaxed">
              Nuestra experiencia nace de la eficiencia operativa y evoluciona hacia la inteligencia estratégica.
            </p>
          </div>

          {/* LOGO CAROUSEL */}
          <div className="mb-24 md:mb-32 -mx-6 md:-mx-0">
            <LogoCarousel />
          </div>

          {/* FULL-BLEED PHOTOS */}
          <div className="mb-24 md:mb-32 -mx-6 md:-mx-0">
            <div className="aspect-[21/9] overflow-hidden">
              <img
                src={servicesArch2}
                alt="Pasillo de hormigón con luz al fondo"
                className="w-full h-full object-cover object-center grayscale"
                loading="lazy" />
            </div>
          </div>

          {/* METHODOLOGY GRID */}
          <div>
            <h4 className="text-minimal text-muted-foreground mb-6">METODOLOGÍA</h4>
            <h3 className="text-3xl md:text-5xl font-light text-architectural mb-16 md:mb-20 max-w-3xl">
              Tu Oficina IA en 4 pasos.
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {methodologySteps.map((step, index) =>
              <div
                key={index}
                className="group relative border-t border-border py-12 md:py-16 md:pr-16 md:odd:pr-16 md:even:pl-16 md:even:pr-0 overflow-hidden">

                  {/* Large background number */}
                  <span className="absolute top-4 right-4 md:top-6 md:right-8 text-7xl md:text-8xl font-bold text-foreground/[0.12] select-none pointer-events-none leading-none">
                    {step.number}
                  </span>
                  <div className="relative z-10">
                    <h4 className="text-xl md:text-2xl font-semibold text-architectural mb-1 group-hover:text-muted-foreground transition-colors duration-500">
                      {step.title}
                    </h4>
                    <span className="text-minimal text-muted-foreground/60 block mb-4">
                      {step.subtitle}
                    </span>
                    <p className="text-muted-foreground leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="border-t border-border" />
          </div>

        </div>
      </div>
    </section>);

};

export default Services;