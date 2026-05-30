import { Link } from "react-router-dom";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";

const cols = [
  {
    num: "2 sem.",
    title: "Diagnóstico",
    desc: "Mapa de oportunidades, constitución del Comité IA y hoja de ruta clara. En dos semanas ya trabajamos.",
  },
  {
    num: "90 días",
    title: "Primeras automatizaciones",
    desc: "Automatizaciones en producción con impacto medible. Tu equipo ya nota la diferencia.",
  },
  {
    num: "< 1 año",
    title: "Oficina IA al 100%",
    desc: "Oficina IA operativa, nuevos casos cada trimestre, equipo formado. Servicio profesional continuo.",
  },
];

export default function Velocidad() {
  const lp = useLocalizedPath();
  return (
    <section className="bg-white text-zinc-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-6">Resultados, no promesas</p>
        <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 max-w-4xl" style={{ lineHeight: 1.15 }}>
          En 2 semanas arrancamos. En 90 días, tu Oficina IA ya automatiza procesos.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-6xl font-light text-zinc-900">{c.num}</div>
              <h3 className="text-lg font-medium text-zinc-900 mt-4">{c.title}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed mt-2">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <Link
            to={lp("contact")}
            className="inline-block border border-zinc-900 text-zinc-900 px-7 py-3 text-xs uppercase tracking-widest font-medium hover:bg-zinc-900 hover:text-white transition-colors"
          >
            AGENDA TU SESIÓN START →
          </Link>
        </div>
      </div>
    </section>
  );
}
