import Navigation from "@/components/Navigation";
import AboutSection from "@/components/About";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* ─── HERO ─── */}
      <section className="pt-32 pb-10 md:pb-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-minimal text-muted-foreground mb-6">OFICINA IA</h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-architectural max-w-5xl mb-10">
              Del Caos a la Claridad:{" "}
              <br className="hidden md:block" />
              Su Oficina de IA Operativa.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Transformamos la incertidumbre tecnológica en una ventaja competitiva medible y estructurada. Sin complicaciones. Making AI easy.
            </p>
          </div>
        </div>
      </section>

      <AboutSection />
    </div>
  );
};

export default About;
