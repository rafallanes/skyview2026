const Services = () => {
  const services = [
  {
    number: "01",
    title: "START",
    description: "Consultoría de diagnóstico y roadmap ¡en tan sólo 2 semanas! Con entregables imprescindibles para empezar con buen pie: Plan estratégico, Mapa de casos de uso y Marco de gobierno."
  },
  {
    number: "02",
    title: "SPRINT",
    description: "Automatización de procesos reales y medición constante del retorno (ROI). Incluye métricas de impacto, evaluación de resultados y ajuste de roadmap."
  },
  {
    number: "03",
    title: "OFICINA IA (as a Service)",
    description: "Gestión profesional continua bajo un modelo de \"IA como servicio\" (FaaS). Servicio anual para pasar del laboratorio a una oficina IA operativa al 100%."
  },
  {
    number: "04",
    title: "OFICINA IA INTERNA (OPCIONAL)",
    description: "Si lo decides, transferimos progresivamente capacidades a tu personal propio. Tu Oficina IA se vuelve autónoma y totalmente integrada en tu estructura."
  }];


  return (
    <section id="services" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-minimal text-muted-foreground mb-4">
              QUÉ HACEMOS
            </h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">Tu Oficina IA en 3 Pasos
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
            {services.map((service, index) => <div key={index} className="group">
                <div className="flex items-start space-x-6">
                  <span className="text-minimal text-muted-foreground font-medium">
                    {service.number}
                  </span>
                  <div>
                    <h4 className="text-2xl font-light mb-4 text-architectural group-hover:text-muted-foreground transition-colors duration-500">
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default Services;