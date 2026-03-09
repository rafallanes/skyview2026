import { Cog, TrendingUp, BarChart3, Users, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";
import servicesArch from "@/assets/about-cta.png";

const areaKeys = ["operations", "sales", "finance", "talent"] as const;
const areaIcons = [Cog, TrendingUp, BarChart3, Users];

const ImpactAreas = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-12 md:py-16 bg-background overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={servicesArch}
          alt=""
          className="w-full h-full object-cover opacity-[0.15] grayscale contrast-[1.8] brightness-[1.2] mix-blend-multiply"
          aria-hidden="true"
          loading="lazy"
          width={1920}
          height={1080}
        />
      </div>
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-minimal text-muted-foreground mb-6 tracking-widest">{t("impact.label")}</h3>
          <h4 className="text-3xl md:text-5xl font-light text-architectural mb-16 max-w-4xl">
            {t("impact.title")}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {areaKeys.map((key, index) => {
              const Icon = areaIcons[index];
              return (
                <div
                  key={key}
                  className="group relative border-t border-border lg:border-r lg:last:border-r-0 py-12 px-6 lg:px-8 hover:bg-muted/30 transition-colors duration-500"
                >
                  <Icon
                    className="text-foreground/20 group-hover:text-foreground/50 transition-colors duration-500 mb-6"
                    size={36}
                    strokeWidth={1.5}
                  />
                  <h5 className="text-lg font-semibold text-architectural mb-3 group-hover:text-muted-foreground transition-colors duration-500">
                    {t(`impact.areas.${key}.title`)}
                  </h5>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light mb-6">
                    {t(`impact.areas.${key}.desc`)}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-muted-foreground transition-colors duration-300 border-b border-foreground/30 hover:border-foreground/60 pb-0.5"
                  >
                    <FileText size={14} />
                    {t("impact.downloadCase", { department: t(`impact.areas.${key}.department`) })}
                  </a>
                </div>
              );
            })}
          </div>
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default ImpactAreas;
