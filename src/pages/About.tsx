import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <h1 className="text-minimal text-muted-foreground mb-4">TECNOLOGÍA AL SERVICIO DE LAS PERSONAS</h1>
                <h2 className="text-4xl md:text-6xl font-light text-architectural mb-12">Filosofía Aumentada

                </h2>
                
                <div className="space-y-8">
                  <p className="text-lg text-muted-foreground leading-relaxed">Creemos que la inteligencia natural y la artifical son plenamente compatibles, y que la combinación perfecta de las dos origina la inteligencia aumentada.



                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">Fundada en 2012, nuestra compañía ha acometido más de 200 proyectos para poner la tecnología al servicio de las personas. Cada proyecto empieza con una escucha activa y continúa con una ejecución rápida y efectiva orientada a mejorar tu forma de trabajar.



                  </p>
                </div>
              </div>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-minimal text-muted-foreground mb-6">METODOLOGIA SPRINT

                  </h3>
                  <div className="space-y-6">
                    <div className="border-l-2 border-architectural pl-6">
                      <h4 className="text-lg font-medium mb-2">Research</h4>
                      <p className="text-muted-foreground">Deep understanding of context, culture, and climate</p>
                    </div>
                    <div className="border-l-2 border-architectural pl-6">
                      <h4 className="text-lg font-medium mb-2">Collaboration</h4>
                      <p className="text-muted-foreground">Close partnership with clients, engineers, and craftspeople</p>
                    </div>
                    <div className="border-l-2 border-architectural pl-6">
                      <h4 className="text-lg font-medium mb-2">Innovation</h4>
                      <p className="text-muted-foreground">Sustainable materials and forward-thinking design solutions</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-border">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-minimal text-muted-foreground mb-2">FOUNDED</h3>
                      <p className="text-xl">2012</p>
                    </div>
                    <div>
                      <h3 className="text-minimal text-muted-foreground mb-2">PROJECTS</h3>
                      <p className="text-xl">200+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>);};

export default About;