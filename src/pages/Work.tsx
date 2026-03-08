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

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const { t } = useTranslation();

  const projects = [
    { image: project1, title: "AMURA", location: "TECH, 2019", category: "Oficina IA", subTag: "START" as string | undefined, description: "Oficina IA para el departamento de Personas y cultura. Segmentando el \"viaje\" del empleado: selección, on-boarding, formación, desarrollo,... y automatizando progresivamente tareas de todos los procesos.", area: "PERSONAS", year: "2019" },
    { image: project2, title: "BBRAUN", location: "HEALTH, 2016", category: "A Medida", subTag: undefined as string | undefined, description: "Automatización de tareas repetitivas en proceso de gestión de datos en fábrica y volcado automático a AS400. ROI Ahorro anual del 70% de tiempo y dinero.", area: "FINANCIERO", year: "2016" },
    { image: project3, title: "CARITAS", location: "NGO, 2024", category: "Oficina IA", subTag: "SPRINT" as string | undefined, description: "START y SPRINT para instaurar buenas prácticas en relación a la IA. Comité de IA desde día uno. Objetivo final a 18 meses: Oficina IA.", area: "OPERACIONES", year: "2024" },
    { image: project1, title: "CODORNIU", location: "RETAIL, 2014", category: "SaaS", subTag: undefined as string | undefined, description: "Automatización de tareas repetitivas en proceso financiero. Eficiencia que aporta un ahorro del 72% de tiempo y dinero. Cálculo realizado por el propio cliente.", area: "FINANCIERO", year: "2014" },
    { image: project2, title: "DESIGUAL", location: "RETAIL, 2019", category: "A Medida", subTag: undefined as string | undefined, description: "Automatización de tareas repetitivas en proceso financiero. Ahorro del 65% de tiempo y dinero. ROI calculado por Controlling Financiero.", area: "OPERACIONES", year: "2019" },
    { image: project3, title: "DIAFARM", location: "HEALTH, 2020", category: "SaaS", subTag: undefined as string | undefined, description: "Solución B2B SaaS para el departamento financiero con eficiencias superiores al 50% calculadas por el propio departamento financiero.", area: "FINANCIERO", year: "2020" },
    { image: project1, title: "EUSKALTEL", location: "TECH, 2023", category: "Oficina IA", subTag: "SPRINT" as string | undefined, description: "Oficina IA como servicio enfocada en la gobernanza y escalabilidad de procesos operativos.", area: "OPERACIONES", year: "2023" },
    { image: projectHm, title: "H&M", location: "RETAIL, 2022", category: "SaaS", subTag: undefined as string | undefined, description: "Digitalización de facturas simplificadas homologadas por la AEAT. Automatización del 80% del proceso y volcado automático en ERP.", area: "PERSONAS", year: "2022" },
    { image: projectGlobalia, title: "GLOBALIA", location: "TURISM, 2018", category: "A Medida", subTag: undefined as string | undefined, description: "Automatización del procesamiento de reclamaciones (papel y email). Extracción de metadatos y volcado en sistemas centrales.", area: "PERSONAS", year: "2018" },
    { image: projectInfojobs, title: "INFOJOBS", location: "TECH, 2018", category: "SaaS", subTag: undefined as string | undefined, description: "Automatización de tareas repetitivas en proceso financiero. Ahorro de tiempo y mejora de eficiencia superior al 60%.", area: "FINANCIERO", year: "2018" },
    { image: projectKluber, title: "KLUBER", location: "INDUSTRIA, 2024", category: "Oficina IA", subTag: "START" as string | undefined, description: "Programa de Oficina IA para operaciones industriales. Definición de hoja de ruta estratégica y adopción de buenas prácticas de IA.", area: "OPERACIONES", year: "2024" },
    { image: projectLantero, title: "LANTERO", location: "INDUSTRIA, 2018", category: "Oficina IA", subTag: "OFICINA IA" as string | undefined, description: "Oficina IA aplicada a procesos financieros industriales. Identificación y priorización de casos de uso para automatización.", area: "FINANCIERO", year: "2017" },
    { image: projectLeroymerlin, title: "LEROY MERLIN", location: "RETAIL, 2019", category: "A Medida", subTag: undefined as string | undefined, description: "Digitalización de documentos y facturas simplificadas (AEAT). Automatización del 80% del proceso con integración en ERP y Oracle.", area: "OPERACIONES", year: "2019" },
  ];

  const categories = ["ALL", "SaaS", "A Medida", "Oficina IA"];

  const filteredProjects = activeCategory === "ALL"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

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
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-minimal transition-colors duration-300 relative group ${
                    activeCategory === category ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                  <span className={`absolute bottom-0 left-0 w-full h-px bg-foreground transition-transform duration-300 origin-left ${
                    activeCategory === category ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
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
                      <span className="bg-background/90 backdrop-blur-sm px-4 py-2 text-minimal text-foreground">{project.category}</span>
                      {project.subTag && (
                        <span className="bg-primary/90 backdrop-blur-sm px-4 py-2 text-minimal text-primary-foreground">{project.subTag}</span>
                      )}
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-light text-architectural mb-2 group-hover:text-muted-foreground transition-colors duration-500">{project.title}</h3>
                      <p className="text-minimal text-muted-foreground">{project.location}</p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    <div className="flex gap-8 pt-4 border-t border-border">
                      <div>
                        <p className="text-minimal text-muted-foreground mb-1">{t("work.area")}</p>
                        <p className="text-foreground">{project.area}</p>
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
