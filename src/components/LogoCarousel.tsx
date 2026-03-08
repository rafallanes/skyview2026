import { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import logoRafaNadal from "@/assets/logos/rafa-nadal-academy.svg";
import logoReigJofre from "@/assets/logos/reig-jofre.png";
import logoViessmann from "@/assets/logos/viessmann.png";
import logoLeroyMerlin from "@/assets/logos/leroy-merlin.png";
import logoLinde from "@/assets/logos/linde.png";
import logoPrivalia from "@/assets/logos/privalia-clean.png";
import logoProclinic from "@/assets/logos/proclinic-clean.png";
import logoGrupoLantero from "@/assets/logos/grupo-lantero.png";
import logoHM from "@/assets/logos/hm.png";
import logoInfojobs from "@/assets/logos/infojobs-clean.png";
import logoBBraun from "@/assets/logos/b-braun.svg";
import logoCaritas from "@/assets/logos/caritas.png";
import logoDesigual from "@/assets/logos/desigual.png";
import logoEuskaltel from "@/assets/logos/euskaltel-clean.png";
import logoSeur from "@/assets/logos/seur.png";
import logoCodorniu from "@/assets/logos/codorniu.png";
import logoEconocom from "@/assets/logos/econocom.png";
import logoAirEuropa from "@/assets/logos/air-europa.png";

const logos = [
  { src: logoRafaNadal, alt: "Rafa Nadal Academy", maxH: "40px" },
  { src: logoReigJofre, alt: "Reig Jofre", maxH: "56px" },
  { src: logoViessmann, alt: "Viessmann", maxH: "48px" },
  { src: logoLeroyMerlin, alt: "Leroy Merlin", maxH: "40px" },
  { src: logoLinde, alt: "Linde", maxH: "40px" },
  { src: logoPrivalia, alt: "Privalia", maxH: "40px" },
  { src: logoProclinic, alt: "Proclinic Group", maxH: "36px", width: 280 },
  { src: logoGrupoLantero, alt: "Grupo Lantero", maxH: "32px", width: 280 },
  { src: logoHM, alt: "H&M", maxH: "40px" },
  { src: logoInfojobs, alt: "InfoJobs", maxH: "40px" },
  { src: logoBBraun, alt: "B. Braun", maxH: "40px" },
  { src: logoCaritas, alt: "Cáritas", maxH: "48px" },
  { src: logoDesigual, alt: "Desigual", maxH: "44px" },
  { src: logoEuskaltel, alt: "Euskaltel", maxH: "44px" },
  { src: logoSeur, alt: "SEUR", maxH: "44px" },
  { src: logoCodorniu, alt: "Codorníu", maxH: "40px" },
  { src: logoEconocom, alt: "Econocom", maxH: "36px" },
  { src: logoAirEuropa, alt: "Air Europa", maxH: "48px", width: 260 },
];

const LogoCarousel = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [setWidth, setSetWidth] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const totalWidth = logos.reduce((sum, logo) => sum + (logo.width || 200), 0);
    setSetWidth(totalWidth);
  }, []);

  const repeated = [...logos, ...logos];

  return (
    <div className="py-16 md:py-24 overflow-hidden bg-black rounded-sm">
      <h4 className="text-minimal text-white/40 mb-12 text-center tracking-widest">
        {t("logoCarousel.title")}
      </h4>
      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />
        <div
          ref={trackRef}
          className="flex items-center"
          style={{
            width: setWidth ? `${setWidth * 2}px` : undefined,
            animation: setWidth ? `logo-scroll-custom ${35}s linear infinite` : undefined,
          }}
        >
          {repeated.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center px-8 md:px-12"
              style={{ width: `${logo.width || 200}px`, height: "80px" }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={{ maxHeight: logo.maxH }}
                className="w-auto object-contain opacity-60 hover:opacity-90 transition-opacity duration-300 brightness-0 invert"
                loading="lazy"
                width={120}
                height={48}
              />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes logo-scroll-custom {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${setWidth}px); }
        }
      `}</style>
    </div>
  );
};

export default LogoCarousel;
