import Navigation from "@/components/Navigation";

const Services = () => {
  const services = [
  {
    number: "01",
    title: "START",
    description: "Asignamos tu Core Team y Comité de IA desde el primer día. \n\n\nEl plan: En 14 días tienes tu mapa de casos de uso priorizados (S/M/L) y el plan para el primer trimestre."
  },
  {
    number: "02",
    title: "COMMERCIAL",
    description: "Reuniones periódicas con objetivos claros.\n\n\nEl impacto: Automatización de procesos reales y medición constante del retorno (ROI)"
  },
  {
    number: "03",
    title: "RENOVATION",
    description: "Procesos automatizados de forma regular cada trimestre.\n\nLa tranquilidad: Gestión profesional continua bajo un modelo de \"IA como Servicio\" (FaaS)"
  },
  {
    number: "04",
    title: "CONSULTATION",
    description: "Si lo decides, transferimos todas las capacidades a tu personal propio.\n\nIndependencia: Tu Oficina de IA se vuelve autónoma y totalmente integrada en tu estructura."
  }];


  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h1 className="text-minimal text-muted-foreground mb-4">TECNOLOGIA AL SERVICIO DE LAS PERSONAS
              </h1>
              <h2 className="text-4xl md:text-6xl font-light text-architectural">
                Adopción Acelerada de {"\n"}Inteligencia Aumentada (IA)
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
              {services.map((service, index) => <div key={index} className="group">
                  <div className="flex items-start space-x-6">
                    <span className="text-minimal text-muted-foreground font-medium">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="text-2xl font-light mb-4 text-architectural group-hover:text-muted-foreground transition-colors duration-500">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>);

};

export default Services;