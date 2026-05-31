import { useTranslation } from "react-i18next";

export default function QueEsOficinaIA() {
  const { t } = useTranslation();
  return (
    <section className="bg-white text-zinc-900 py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-6">
          {t("home.queEs.label")}
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-8 max-w-4xl mx-auto" style={{ lineHeight: 1.15 }}>
          {t("home.queEs.title")}
        </h2>
        <p className="text-base text-zinc-600 leading-relaxed max-w-2xl mx-auto">
          {t("home.queEs.desc")}
        </p>
      </div>
    </section>
  );
}
