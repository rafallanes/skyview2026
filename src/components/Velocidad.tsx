import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";

export default function Velocidad() {
  const { t } = useTranslation();
  const lp = useLocalizedPath();
  const cols = ["c1", "c2", "c3"].map((k) => ({
    num: t(`home.velocidad.${k}.num`),
    title: t(`home.velocidad.${k}.title`),
    desc: t(`home.velocidad.${k}.desc`),
  }));
  return (
    <section className="bg-white text-zinc-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-6">{t("home.velocidad.label")}</p>
        <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 max-w-4xl" style={{ lineHeight: 1.15 }}>
          {t("home.velocidad.title")}
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
            {t("home.velocidad.cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
