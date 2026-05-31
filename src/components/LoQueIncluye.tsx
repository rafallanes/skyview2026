import { useTranslation } from "react-i18next";
import bgImage from "@/assets/bg-todo-incluido.jpg";

export default function LoQueIncluye() {
  const { t } = useTranslation();
  const items = ["01", "02", "03", "04"].map((n) => ({
    n,
    title: t(`incluye.${n}.title`),
    desc: t(`incluye.${n}.desc`),
  }));

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
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-6">{t("incluye.label")}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 max-w-3xl" style={{ lineHeight: 1.15 }}>
          {t("incluye.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {items.map((it) => (
            <div key={it.n} className="group relative border-t border-white/15 py-12 md:py-16 md:pr-16 md:odd:pr-16 md:even:pl-16 md:even:pr-0 overflow-hidden">
              <span className="absolute top-4 right-4 md:top-6 md:right-8 text-7xl md:text-8xl font-bold text-white/[0.12] select-none pointer-events-none leading-none">
                {it.n}
              </span>
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-white/70 transition-colors duration-500">
                  {it.title}
                </h3>
                <p className="text-[15px] text-white/60 leading-relaxed font-light">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-white/15" />
        <p className="text-base text-gray-400 leading-relaxed max-w-2xl mx-auto text-center mt-16">
          {t("incluye.closing")}
        </p>
      </div>
    </section>
  );
}
