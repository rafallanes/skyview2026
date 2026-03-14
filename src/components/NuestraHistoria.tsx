import { useRef } from "react";
import { motion, useInView } from "motion/react";

const blocks = [
  { label: "APPS B2B" },
  { label: "INTEGRACIONES A MEDIDA" },
  { label: "RPA" },
  { label: "Programa START" },
  { label: "OFICINA IA as a service" },
  { label: "OFICINA IA propia" },
];

function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export default function NuestraHistoria() {
  return (
    <section className="bg-black text-white py-24" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Eyebrow + Headline */}
        <FadeIn>
          <div className="text-center mb-20">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
              Nuestra historia
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Tecnología al servicio de las personas.
            </h2>
          </div>
        </FadeIn>

        {/* ─── DESKTOP TIMELINE (md+) ─── */}
        <div className="hidden md:block relative max-w-5xl mx-auto px-4 md:px-12">

          {/* Year labels + section titles */}
          <FadeIn delay={0.1}>
            <div className="flex items-center justify-between mb-4">
              <div className="border border-white px-4 py-1.5 flex-shrink-0">
                <p className="text-sm text-white uppercase tracking-widest">2014</p>
              </div>
              <div className="flex-1 px-6">
                <h3 className="text-center text-xs uppercase tracking-widest text-gray-400">
                  Automatización de procesos
                </h3>
              </div>
              <div className="border border-white px-4 py-1.5 flex-shrink-0">
                <p className="text-sm text-white uppercase tracking-widest">2022</p>
              </div>
              <div className="flex-1 px-6">
                <h3 className="text-center text-xs uppercase tracking-widest text-gray-400">
                  Oficina IA
                </h3>
              </div>
              <div className="border border-white px-4 py-1.5 flex-shrink-0">
                <p className="text-sm text-white uppercase tracking-widest">Hoy</p>
              </div>
            </div>
          </FadeIn>

          {/* Line + dots */}
          <FadeIn delay={0.2}>
            <div className="relative mb-12">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-zinc-700 -translate-y-1/2" />
              <div className="flex items-center justify-between relative">
                <div className="w-2 h-2 bg-white" style={{ marginLeft: "40px" }} />
                <div className="w-2 h-2 bg-white" />
                <div className="w-2 h-2 bg-white" style={{ marginRight: "40px" }} />
              </div>
            </div>
          </FadeIn>

          {/* Content blocks */}
          <div className="grid grid-cols-2 gap-12">
            <FadeIn delay={0.3}>
              <div className="space-y-4">
                <p className="text-base text-gray-400 leading-relaxed text-center mb-6">
                  Liberamos a las personas de tareas manuales y repetitivas para
                  que dedicasen su tiempo a lo táctico y estratégico.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {blocks.slice(0, 3).map((b) => (
                    <div
                      key={b.label}
                      className="bg-zinc-800 border border-zinc-700 px-3 py-1.5 hover:border-zinc-600 transition-colors"
                    >
                      <p className="text-xs text-white uppercase tracking-widest">
                        {b.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="space-y-4">
                <p className="text-base text-gray-400 leading-relaxed text-center mb-6">
                  Misma misión, nueva tecnología. Desplegamos Oficinas de IA que
                  transforman cómo trabajan los equipos.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {blocks.slice(3).map((b) => (
                    <div
                      key={b.label}
                      className="bg-zinc-800 border border-zinc-700 px-3 py-1.5 hover:border-zinc-600 transition-colors"
                    >
                      <p className="text-xs text-white uppercase tracking-widest">
                        {b.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* ─── MOBILE TIMELINE (< md) ─── */}
        <div className="md:hidden relative max-w-md mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-700" />

          {/* 2014 */}
          <FadeIn delay={0.1}>
            <div className="relative pl-12 pb-12">
              <div className="absolute left-[12px] top-1 w-2 h-2 bg-white" />
              <div className="border border-white px-4 py-1.5 inline-block mb-3">
                <p className="text-sm text-white uppercase tracking-widest">2014</p>
              </div>
              <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-3">
                Automatización de procesos
              </h3>
              <p className="text-base text-gray-400 leading-relaxed mb-4">
                Liberamos a las personas de tareas manuales y repetitivas para
                que dedicasen su tiempo a lo táctico y estratégico.
              </p>
              <div className="flex flex-wrap gap-2">
                {blocks.slice(0, 3).map((b) => (
                  <div
                    key={b.label}
                    className="bg-zinc-800 border border-zinc-700 px-3 py-1.5"
                  >
                    <p className="text-xs text-white uppercase tracking-widest">
                      {b.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* 2022 */}
          <FadeIn delay={0.2}>
            <div className="relative pl-12 pb-12">
              <div className="absolute left-[12px] top-1 w-2 h-2 bg-white" />
              <div className="border border-white px-4 py-1.5 inline-block mb-3">
                <p className="text-sm text-white uppercase tracking-widest">2022</p>
              </div>
              <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-3">
                Oficina IA
              </h3>
              <p className="text-base text-gray-400 leading-relaxed mb-4">
                Misma misión, nueva tecnología. Desplegamos Oficinas de IA que
                transforman cómo trabajan los equipos.
              </p>
              <div className="flex flex-wrap gap-2">
                {blocks.slice(3).map((b) => (
                  <div
                    key={b.label}
                    className="bg-zinc-800 border border-zinc-700 px-3 py-1.5"
                  >
                    <p className="text-xs text-white uppercase tracking-widest">
                      {b.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Hoy */}
          <FadeIn delay={0.3}>
            <div className="relative pl-12">
              <div className="absolute left-[12px] top-1 w-2 h-2 bg-white" />
              <div className="border border-white px-4 py-1.5 inline-block">
                <p className="text-sm text-white uppercase tracking-widest">Hoy</p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Slogan */}
        <FadeIn delay={0.5}>
          <div className="text-center mt-20">
            <p className="text-base text-gray-500 italic">
              Lo que no ha cambiado: liberar a las personas del trabajo del "trabajo robot".
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
