import bgImage from "@/assets/bg-todo-incluido.jpg";

const items = [
  {
    n: "01",
    title: "Consultoría estratégica",
    desc: "Diagnóstico, mapa de oportunidades y hoja de ruta. Sabemos dónde está el valor.",
  },
  {
    n: "02",
    title: "Desarrollo e integración",
    desc: "Automatizaciones en producción, integradas con tus sistemas. No prototipos — soluciones reales.",
  },
  {
    n: "03",
    title: "MLOps y mantenimiento",
    desc: "Modelos monitorizados, actualizados y funcionando. Sin sorpresas.",
  },
  {
    n: "04",
    title: "Formación y adopción",
    desc: "Tu equipo aprende a trabajar con IA. No cursos genéricos — formación aplicada a su día a día.",
  },
  {
    n: "05",
    title: "IA ética, seguridad y compliance",
    desc: "Gobernanza, privacidad y cumplimiento normativo. Todo bajo control desde el primer día.",
  },
  {
    n: "06",
    title: "Medición de impacto y ROI",
    desc: "KPIs financieros, de adopción y operativos. Todo alimenta una calculadora ROI supervisada por el Comité IA.",
  },
];

export default function LoQueIncluye() {
  return (
    <section className="relative bg-black text-white py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})`, filter: "grayscale(100%)" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(15, 23, 42, 0.85), rgba(0, 0, 0, 0.80))",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-6">Todo incluido</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 max-w-3xl" style={{ lineHeight: 1.15 }}>
          Esto es lo que ponemos a trabajar para ti.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {items.map((it) => (
            <div key={it.n} className="border border-zinc-600/40 backdrop-blur-sm bg-black/30 p-10 -ml-px -mt-px">
              <div className="text-6xl font-bold text-white/10 mb-4 leading-none">{it.n}</div>
              <h3 className="text-lg font-medium text-white mb-2">{it.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-base text-gray-400 leading-relaxed max-w-2xl mx-auto text-center mt-16">
          Todo esto, operativo desde el primer trimestre. Sin contratar perfiles que no encuentras. Sin curva
          de aprendizaje de meses.
        </p>
      </div>
    </section>
  );
}
