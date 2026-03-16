export default function NuestraHistoria() {
  return (
    <div className="bg-background px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* ═══ DESKTOP: Horizontal Timeline ═══ */}
        <div className="hidden md:block relative px-4 md:px-16 max-w-6xl mx-auto">
          {/* Years and titles at same height */}
          <div className="flex items-center justify-between relative mb-4">
            <div className="bg-primary text-primary-foreground px-4 py-1.5 rounded-none relative z-10 flex-shrink-0">
              <p className="text-sm">2014</p>
            </div>
            <div className="flex-1 px-4">
              <h3 className="text-center uppercase tracking-tight">Automatización de procesos</h3>
            </div>
            <div className="bg-primary text-primary-foreground px-4 py-1.5 rounded-none relative z-10 flex-shrink-0">
              <p className="text-sm">2022</p>
            </div>
            <div className="flex-1 px-4">
              <h3 className="text-center uppercase tracking-tight">Oficina IA</h3>
            </div>
            <div className="bg-primary text-primary-foreground px-4 py-1.5 rounded-none relative z-10 flex-shrink-0">
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
          <div className="grid grid-cols-2 gap-12 mt-8">
            <div className="space-y-4">
              <p className="text-muted-foreground text-center text-sm mb-4">
                Liberamos a las personas de tareas manuales y repetitivas para que dedicasen su tiempo a lo importante.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <div className="bg-secondary px-3 py-1.5 rounded-none text-sm">
                  <p className="text-secondary-foreground">APPS B2B</p>
                </div>
                <div className="bg-secondary px-3 py-1.5 rounded-none text-sm">
                  <p className="text-secondary-foreground">INTEGRACIONES A MEDIDA</p>
                </div>
                <div className="bg-secondary px-3 py-1.5 rounded-none text-sm">
                  <p className="text-secondary-foreground">RPA</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground text-center text-sm mb-4">
                Misma misión, nueva tecnología. Desplegamos Oficinas de IA que transforman cómo trabajan los equipos.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <div className="bg-secondary px-3 py-1.5 rounded-none text-sm">
                  <p className="text-secondary-foreground">Programa START</p>
                </div>
                <div className="bg-secondary px-3 py-1.5 rounded-none text-sm">
                  <p className="text-secondary-foreground">OFICINA IA as a service</p>
                </div>
                <div className="bg-secondary px-3 py-1.5 rounded-none text-sm">
                  <p className="text-secondary-foreground">Oficina IA propia</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ MOBILE: Vertical Timeline ═══ */}
        <div className="md:hidden relative pl-8">
          {/* Vertical line */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-border" />

          {/* 2014 - Automatización */}
          <div className="relative pb-10">
            <div className="absolute left-[-21px] top-1 w-2 h-2 bg-foreground rounded-full z-10" />
            <div className="mb-3">
              <span className="bg-primary text-primary-foreground px-3 py-1 text-sm inline-block">2014</span>
            </div>
            <h3 className="uppercase tracking-tight text-lg mb-3">Automatización de procesos</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Liberamos a las personas de tareas manuales y repetitivas para que dedicasen su tiempo a lo importante.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-secondary text-secondary-foreground px-3 py-1.5 text-sm">APPS B2B</span>
              <span className="bg-secondary text-secondary-foreground px-3 py-1.5 text-sm">INTEGRACIONES A MEDIDA</span>
              <span className="bg-secondary text-secondary-foreground px-3 py-1.5 text-sm">RPA</span>
            </div>
          </div>

          {/* 2022 - Oficina IA */}
          <div className="relative pb-10">
            <div className="absolute left-[-21px] top-1 w-2 h-2 bg-foreground rounded-full z-10" />
            <div className="mb-3">
              <span className="bg-primary text-primary-foreground px-3 py-1 text-sm inline-block">2022</span>
            </div>
            <h3 className="uppercase tracking-tight text-lg mb-3">Oficina IA</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Misma misión, nueva tecnología. Desplegamos Oficinas de IA que transforman cómo trabajan los equipos.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-secondary text-secondary-foreground px-3 py-1.5 text-sm">Programa START</span>
              <span className="bg-secondary text-secondary-foreground px-3 py-1.5 text-sm">OFICINA IA as a service</span>
            </div>
          </div>

          {/* Hoy */}
          <div className="relative">
            <div className="absolute left-[-21px] top-1 w-2 h-2 bg-foreground rounded-full z-10" />
            <div>
              <span className="bg-primary text-primary-foreground px-3 py-1 text-sm inline-block">Hoy</span>
            </div>
          </div>
        </div>

        {/* Slogan */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground italic mb-8">
            Lo que no ha cambiado: "poner la tecnología al servicio de las personas".
          </p>
        </div>
      </div>
    </div>
  );
}
