import { useTranslation } from "react-i18next";

export default function Desde2014() {
  const { t } = useTranslation();
  const stats = [
    { num: "2014", label: t("home.desde2014.s1") },
    { num: "200+", label: t("home.desde2014.s2") },
    { num: "90d", label: t("home.desde2014.s3") },
  ];
  return (
    <section className="bg-white text-zinc-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs uppercase tracking-widest text-zinc-500 mb-6">{t("home.desde2014.label")}</p>
        <h2 className="text-3xl md:text-5xl font-bold text-zinc-900" style={{ lineHeight: 1.15 }}>
          {t("home.desde2014.title")}
        </h2>
        <p className="text-base text-zinc-600 max-w-xl mt-6 leading-relaxed">
          {t("home.desde2014.desc")}
        </p>
        <div className="flex flex-wrap gap-12 mt-12">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-5xl font-light text-zinc-900">{s.num}</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
