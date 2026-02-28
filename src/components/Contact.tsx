const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-minimal text-muted-foreground mb-4">CONTACTO</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">Hablemos de impacto, no de herramientas.

                <br />
                Extraordinary
              </h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">EMAIL</h4>
                  <a href="mailto:hello@archstudio.com" className="text-xl hover:text-muted-foreground transition-colors duration-300">info@skyview.es

                  </a>
                </div>
                
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">PHONE</h4>
                  <a href="tel:+1234567890" className="text-xl hover:text-muted-foreground transition-colors duration-300">(+34) 691-824 746

                  </a>
                </div>
                
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">OFICINAS</h4>
                  <address className="text-xl not-italic">Gemma Mengual, 3 
Tres Cantos, MAD 28760
                    <br />
                    New York, NY 10001
                  </address>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-minimal text-muted-foreground mb-6">SIGUENOS</h4>
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
                <p className="text-muted-foreground">"Hablemos de resultados, no de promesas."  
 25 minutos para identificar dónde está el mayor 
impacto de la IA en tu operación actual.  
 Sin compromiso, sin humo.




                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);};export default Contact;