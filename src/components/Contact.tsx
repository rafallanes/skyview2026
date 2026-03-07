import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import contactBg from "@/assets/contact-bg.jpg";

const Contact = () => {
  return (
    <section id="contact" className="relative bg-foreground text-primary-foreground overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={contactBg}
          alt=""
          className="w-full h-full object-cover grayscale opacity-[0.08]"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 py-12 md:py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

              {/* Left column — Contact info */}
              <div>
                <h2 className="text-minimal text-primary-foreground/40 mb-4">CONTACTO</h2>
                <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                  Hablemos de impacto, no de herramientas.
                </h3>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-minimal text-primary-foreground/40 mb-2">EMAIL</h4>
                    <a href="mailto:info@skyview.es" className="text-xl text-primary-foreground hover:text-primary-foreground/70 transition-colors duration-300">
                      info@skyview.es
                    </a>
                  </div>

                  <div>
                    <h4 className="text-minimal text-primary-foreground/40 mb-2">TELÉFONO</h4>
                    <a href="tel:+34691824746" className="text-xl text-primary-foreground hover:text-primary-foreground/70 transition-colors duration-300">
                      (+34) 691-824 746
                    </a>
                  </div>

                  <div>
                    <h4 className="text-minimal text-primary-foreground/40 mb-2">OFICINAS</h4>
                    <address className="text-xl not-italic text-primary-foreground/80">
                      Gemma Mengual, 2 - Edificio 23
                      <br />
                      Tres Cantos 28108 MAD SPAIN
                    </address>
                  </div>

                  <div>
                    <h4 className="text-minimal text-primary-foreground/40 mb-6">SÍGUENOS</h4>
                    <div className="space-y-4">
                      <a href="#" className="block text-xl text-primary-foreground hover:text-primary-foreground/70 transition-colors duration-300">
                        Instagram
                      </a>
                      <a href="#" className="block text-xl text-primary-foreground hover:text-primary-foreground/70 transition-colors duration-300">
                        LinkedIn
                      </a>
                      <a href="#" className="block text-xl text-primary-foreground hover:text-primary-foreground/70 transition-colors duration-300">
                        Behance
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column — CTA Agenda */}
              <div>
                <h4 className="text-minimal text-primary-foreground/40 mb-6">SIGUIENTE PASO</h4>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ lineHeight: 1.1 }}>
                  Agenda tu sesión<br />START de 25 minutos.
                </h3>
                <p className="text-primary-foreground/50 leading-relaxed mb-10 font-light text-lg">
                  Sin compromiso. Te mostramos cómo aplicar nuestra metodología a tu caso concreto y qué resultados puedes esperar.
                </p>
                <Button className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 rounded-none px-10 py-6 text-sm tracking-wide font-semibold">
                  AGENDAR SESIÓN START
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                {/* Trust signals */}
                <div className="mt-16 pt-8 border-t border-primary-foreground/10 grid grid-cols-3 gap-6">
                  <div>
                    <span className="text-2xl font-bold">200+</span>
                    <p className="text-xs text-primary-foreground/40 mt-1">Proyectos</p>
                  </div>
                  <div>
                    <span className="text-2xl font-bold">90d</span>
                    <p className="text-xs text-primary-foreground/40 mt-1">Sprint medio</p>
                  </div>
                  <div>
                    <span className="text-2xl font-bold">2012</span>
                    <p className="text-xs text-primary-foreground/40 mt-1">Desde</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
