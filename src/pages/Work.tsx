import { useState } from "react";
import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import projectHm from "@/assets/project-hm.jpg";
import projectGlobalia from "@/assets/project-globalia.jpg";
import projectInfojobs from "@/assets/project-infojobs.jpg";
import projectKluber from "@/assets/project-kluber.jpg";
import projectLantero from "@/assets/project-lantero.jpg";
import projectLeroymerlin from "@/assets/project-leroymerlin.jpg";

const CATEGORY_KEYS = ["catAll", "catSaas", "catCustom", "catOffice"] as const;
const CATEGORY_FILTER_MAP: Record<string, string> = {
  catSaas: "SaaS",
  catCustom: "A Medida",
  catOffice: "Oficina IA",
};

const Work = () => {
  const [activeCatKey, setActiveCatKey] = useState("catAll");
  const { t } = useTranslation();

  const projects = [
    { image: project1, title: "AMURA", key: "amura", filterCat: "Oficina IA", subTag: "START" as string | undefined, area: "areaPersonas", year: "2019" },
    { image: project2, title: "BBRAUN", key: "bbraun", filterCat: "A Medida", subTag: undefined as string | undefined, area: "areaFinanciero", year: "2016" },
    { image: project3, title: "CARITAS", key: "caritas", filterCat: "Oficina IA", subTag: "SPRINT" as string | undefined, area: "areaOperaciones", year: "2024" },
    { image: project1, title: "CODORNIU", key: "codorniu", filterCat: "SaaS", subTag: undefined as string | undefined, area: "areaFinanciero", year: "2014" },
    { image: project2, title: "DESIGUAL", key: "desigual", filterCat: "A Medida", subTag: undefined as string | undefined, area: "areaOperaciones", year: "2019" },
    { image: project3, title: "DIAFARM", key: "diafarm", filterCat: "SaaS", subTag: undefined as string | undefined, area: "areaFinanciero", year: "2020" },
    { image: project1, title: "EUSKALTEL", key: "euskaltel", filterCat: "Oficina IA", subTag: "SPRINT" as string | undefined, area: "areaOperaciones", year: "2023" },
    { image: projectHm, title: "H&M", key: "hm", filterCat: "SaaS", subTag: undefined as string | undefined, area: "areaPersonas", year: "2022" },
    { image: projectGlobalia, title: "GLOBALIA", key: "globalia", filterCat: "A Medida", subTag: undefined as string | undefined, area: "areaPersonas", year: "2018" },
    { image: projectInfojobs, title: "INFOJOBS", key: "infojobs", filterCat: "SaaS", subTag: undefined as string | undefined, area: "areaFinanciero", year: "2018" },
    { image: projectKluber, title: "KLUBER", key: "kluber", filterCat: "Oficina IA", subTag: "START" as string | undefined, area: "areaOperaciones", year: "2024" },
    { image: projectLantero, title: "LANTERO", key: "lantero", filterCat: "Oficina IA", subTag: t("workProjects.catOffice") as string | undefined, area: "areaFinanciero", year: "2017" },
    { image: projectLeroymerlin, title: "LEROY MERLIN", key: "leroymerlin", filterCat: "A Medida", subTag: undefined as string | undefined, area: "areaOperaciones", year: "2019" },
  ];

  const filteredProjects = activeCatKey === "catAll"
    ? projects
    : projects.filter((p) => p.filterCat === CATEGORY_FILTER_MAP[activeCatKey]);

  const getCategoryLabel = (catKey: string) => {
    // Find which CATEGORY_KEYS entry maps to this filterCat
    for (const [k, v] of Object.entries(CATEGORY_FILTER_MAP)) {
      if (v === catKey) return t(`workProjects.${k}`);
    }
    return catKey;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h1 className="text-6xl md:text-8xl font-light text-architectural mb-8">{t("work.title")}</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                {t("work.desc")}
                <br /><br />
                {t("work.desc2")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-8 justify-center md:justify-start">
              {CATEGORY_KEYS.map((catKey) => (
                <button
                  key={catKey}
                  onClick={() => setActiveCatKey(catKey)}
                  className={`text-minimal transition-colors duration-300 relative group ${
                    activeCatKey === catKey ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t(`workProjects.${catKey}`)}
                  <span className={`absolute bottom-0 left-0 w-full h-px bg-foreground transition-transform duration-300 origin-left ${
                    activeCatKey === catKey ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
              {filteredProjects.map((project, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden mb-8">
                    <img src={project.image} alt={project.title} className="w-full h-[60vh] object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-6 left-6 flex gap-2">
                      <span className="bg-background/90 backdrop-blur-sm px-4 py-2 text-minimal text-foreground">{getCategoryLabel(project.filterCat)}</span>
                      {project.subTag && (
                        <span className="bg-primary/90 backdrop-blur-sm px-4 py-2 text-minimal text-primary-foreground">{project.subTag}</span>
                      )}
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-light text-architectural mb-2 group-hover:text-muted-foreground transition-colors duration-500">{project.title}</h3>
                      <p className="text-minimal text-muted-foreground">{t(`workProjects.${project.key}.location`)}</p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{t(`workProjects.${project.key}.desc`)}</p>
                    <div className="flex gap-8 pt-4 border-t border-border">
                      <div>
                        <p className="text-minimal text-muted-foreground mb-1">{t("work.area")}</p>
                        <p className="text-foreground">{t(`workProjects.${project.area}`)}</p>
                      </div>
                      <div>
                        <p className="text-minimal text-muted-foreground mb-1">{t("work.year")}</p>
                        <p className="text-foreground">{project.year}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-light text-architectural mb-8 whitespace-pre-line">
              {t("work.ctaTitle")}
            </h2>
            <p className="text-xl text-muted-foreground mb-12">{t("work.ctaDesc")}</p>
            <a
              href="/contacto"
              className="inline-block text-minimal text-foreground hover:text-muted-foreground transition-colors duration-300 relative group"
            >
              {t("work.ctaCta")}
              <span className="absolute bottom-0 left-0 w-full h-px bg-foreground group-hover:bg-muted-foreground transition-colors duration-300"></span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Work;
