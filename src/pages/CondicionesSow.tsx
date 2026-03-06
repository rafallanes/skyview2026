import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CondicionesSow = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-light text-architectural mb-12">Condiciones SOW</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Contenido de las condiciones SOW próximamente.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CondicionesSow;
