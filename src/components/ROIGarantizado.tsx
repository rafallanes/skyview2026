import bgImage from "@/assets/bg-roi.png";

const cards = [
  {
    title: "Indicadores financieros",
    desc: "Ahorro en CAPEX y OPEX. Los números que importan al comité de dirección.",
  },
  {
    title: "Indicadores de adopción",
    desc: "Tareas automatizadas, calidad de entregables, ratios de uso de herramientas IA.",
  },
  {
    title: "Indicadores operativos",
    desc: "Eficiencia de procesos, reducción de errores, tiempo recuperado por equipo.",
  },
];

export default function ROIGarantizado() {
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
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-6">ROI garantizado</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white max-w-3xl" style={{ lineHeight: 1.15 }}>
          Todo se mide. Todo se planifica. Tu equipo financiero lo valida.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-12">
          {cards.map((c) => (
            <div key={c.title} className="border border-zinc-700/50 backdrop-blur-sm bg-black/30 p-10 -ml-px -mt-px">
              <h3 className="text-lg font-medium text-white mb-3">{c.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-base text-gray-400 leading-relaxed max-w-2xl mt-12">
          Cada proyecto arranca con KPIs definidos. Todo alimenta una calculadora ROI supervisada por el
          Comité IA — un órgano donde participan perfiles del propio equipo financiero del cliente. El cliente
          valida el retorno como parte natural de la metodología.
        </p>
      </div>
    </section>
  );
}
