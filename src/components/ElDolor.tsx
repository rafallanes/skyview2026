import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";

export default function ElDolor() {
  const { t } = useTranslation();
  const lp = useLocalizedPath();

  const cards = ["c1", "c2", "c3"];

  return (
    <section className="bg-black text-white py-24 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-6">
          {t("home.dolor.label")}
        </p>
        <h2
          className="text-3xl md:text-5xl font-bold text-white text-architectural mb-6 max-w-4xl"
        >
          {t("home.dolor.title")}
        </h2>
        <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl mb-16">
          {t("home.dolor.desc")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-zinc-800">
          {cards.map((key) => (
            <div
              key={key}
              className="border-r border-b border-zinc-800 p-10 hover:border-zinc-600 transition-colors duration-300"
            >
              <div className="text-6xl font-light text-white mb-6">
                {t(`home.dolor.${key}.stat`)}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {t(`home.dolor.${key}.title`)}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                {t(`home.dolor.${key}.desc`)}
              </p>
              <p className="text-xs uppercase tracking-widest text-gray-600">
                {t(`home.dolor.${key}.source`)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <Link
            to={lp("about")}
            className="inline-flex items-center border border-white text-white px-7 py-3 text-xs uppercase tracking-widest font-medium hover:bg-white hover:text-black transition-colors"
          >
            {t("home.dolor.cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
