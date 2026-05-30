const stats = [
  { num: "2014", label: "Desde" },
  { num: "200+", label: "Proyectos" },
  { num: "90d", label: "Sprint medio" },
];

export default function Desde2014() {
  return (
    <section className="bg-zinc-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-6">Desde 2014</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ lineHeight: 1.15 }}>
          No somos nuevos en esto.
        </h2>
        <p className="text-base text-gray-400 max-w-xl mt-6 leading-relaxed">
          Más de 10 años automatizando procesos en grandes organizaciones. La tecnología cambia; nuestra
          misión no.
        </p>
        <div className="flex flex-wrap gap-12 mt-12">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-5xl font-light text-white">{s.num}</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
