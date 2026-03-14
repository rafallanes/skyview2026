const blocks = [
{ label: "APPS B2B" },
{ label: "INTEGRACIONES A MEDIDA" },
{ label: "RPA" },
{ label: "Programa START" },
{ label: "OFICINA IA as a service" }];


export default function NuestraHistoria() {
  return (
    <div className="bg-background px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Horizontal Timeline */}
        <div className="relative px-4 md:px-16 max-w-6xl mx-auto">
          {/* Years and titles at same height */}
          <div className="flex items-center justify-between relative mb-4">
            <div className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full relative z-10 flex-shrink-0">
              <p className="text-sm">2014</p>
            </div>
            <div className="flex-1 px-4">
              <h3 className="text-center uppercase tracking-tight">Automatización de procesos</h3>
            </div>
            <div className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full relative z-10 flex-shrink-0">
              <p className="text-sm">2022</p>
            </div>
            <div className="flex-1 px-4">
              <h3 className="text-center uppercase tracking-tight">Oficina IA</h3>
            </div>
            <div className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full relative z-10 flex-shrink-0">
              <p className="text-sm">Hoy</p>
            </div>
          </div>
          {/* Timeline line with dots */}
          <div className="relative mb-8">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />
            <div className="flex items-center justify-between relative">
              <div className="w-2 h-2 bg-foreground rounded-full relative z-10" style={{ marginLeft: '32px' }} />
              <div className="w-2 h-2 bg-foreground rounded-full relative z-10" />
              <div className="w-2 h-2 bg-foreground rounded-full relative z-10" style={{ marginRight: '32px' }} />
            </div>
          </div>
          {/* Content sections below timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
            <div className="space-y-4">
              <p className="text-muted-foreground text-center text-sm mb-4">Liberamos a las personas de tareas manuales y repetitivas para que dedicasen su tiempo a lo importante.

              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <div className="bg-secondary px-3 py-1.5 rounded text-sm">
                  <p className="text-secondary-foreground">APPS B2B</p>
                </div>
                <div className="bg-secondary px-3 py-1.5 rounded text-sm">
                  <p className="text-secondary-foreground">INTEGRACIONES A MEDIDA</p>
                </div>
                <div className="bg-secondary px-3 py-1.5 rounded text-sm">
                  <p className="text-secondary-foreground">RPA</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground text-center text-sm mb-4">
                Misma misión, nueva tecnología. Desplegamos Oficinas de IA que transforman cómo trabajan los equipos.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <div className="bg-secondary px-3 py-1.5 rounded text-sm">
                  <p className="text-secondary-foreground">Programa START</p>
                </div>
                <div className="bg-secondary px-3 py-1.5 rounded text-sm">
                  <p className="text-secondary-foreground">OFICINA IA as a service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Slogan */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground italic mb-8">Lo que no ha cambiado: "poner la tecnología al servicio de las personas".

          </p>
        </div>
      </div>
    </div>);

}
