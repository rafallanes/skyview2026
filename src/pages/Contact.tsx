import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20">
              <div>
                <h1 className="text-minimal text-muted-foreground mb-4">CONTACTO</h1>
                <h2 className="text-4xl md:text-6xl font-light text-architectural mb-12">Hablemos de Impacto No de herramientas

                  <br />
                  Extraordinary
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-2">EMAIL</h3>
                    <a className="text-xl hover:text-muted-foreground transition-colors duration-300" href="mailto:info@skyview.es">info@skyview.es

                    </a>
                  </div>
                  
                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-2">PHONE</h3>
                    <a className="text-xl hover:text-muted-foreground transition-colors duration-300" href="tel:+34691824746">(+34) 691-824 746

                    </a>
                  </div>
                  
                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-2">STUDIO</h3>
                    <address className="text-xl not-italic">Valportillo Primera, 5 Alcobendas 
MAD 28108 SPAIN

                      <br />
                      New York, NY 10001
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-minimal text-muted-foreground mb-6">SIGUENOS</h3>
                  <div className="space-y-4">
                    <a href="#" className="block text-xl hover:text-muted-foreground transition-colors duration-300">
                      Instagram
                    </a>
                    <a href="#" className="block text-xl hover:text-muted-foreground transition-colors duration-300">
                      LinkedIn
                    </a>
                    <a href="#" className="block text-xl hover:text-muted-foreground transition-colors duration-300">
                      Behance
                    </a>
                  </div>
                </div>
                
                <div className="pt-12 border-t border-border">
                  <p className="text-muted-foreground">
                    "Hablemos de resultados, no de promesas."
                    <br /><br />
                    25 minutos para identificar dónde está el mayor
                    <br />
                    impacto de la IA en tu operación actual.
                    <br />
                    Sin compromiso, sin humo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>);};

export default Contact;