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
  { src: logoRafaNadal, alt: "Rafa Nadal Academy" },
  { src: logoReigJofre, alt: "Reig Jofre", sizeClass: "max-h-28 md:max-h-32" },
  { src: logoViessmann, alt: "Viessmann", sizeClass: "max-h-20 md:max-h-24" },
  { src: logoLeroyMerlin, alt: "Leroy Merlin" },
  { src: logoLinde, alt: "Linde" },
  { src: logoPrivalia, alt: "Privalia" },
  { src: logoProclinic, alt: "Proclinic Group", sizeClass: "max-h-[168px] md:max-h-[192px]" },
  { src: logoGrupoLantero, alt: "Grupo Lantero", sizeClass: "max-h-[120px] md:max-h-[144px]" },
  { src: logoHM, alt: "H&M" },
  { src: logoInfojobs, alt: "InfoJobs" },
  { src: logoBBraun, alt: "B. Braun" },
  { src: logoCaritas, alt: "Cáritas", sizeClass: "max-h-20 md:max-h-24" },
  { src: logoDesigual, alt: "Desigual", sizeClass: "max-h-[60px] md:max-h-[72px]" },
  { src: logoEuskaltel, alt: "Euskaltel", sizeClass: "max-h-[60px] md:max-h-[72px]" },
  { src: logoSeur, alt: "SEUR", sizeClass: "max-h-[60px] md:max-h-[72px]" },
  { src: logoCodorniu, alt: "Codorníu" },
  { src: logoEconocom, alt: "Econocom", sizeClass: "max-h-[48px] md:max-h-[60px]" },
  { src: logoAirEuropa, alt: "Air Europa", sizeClass: "max-h-[168px] md:max-h-[192px]" },
];

const LogoCarousel = () => {
  // Duplicate logos enough times for seamless loop
  const repeated = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="py-16 md:py-24 overflow-hidden bg-black rounded-sm">
      <h4 className="text-minimal text-white/40 mb-12 text-center tracking-widest">
        CONFÍAN EN NOSOTROS
      </h4>
      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />

        <div className="flex animate-logo-scroll" style={{ width: `${logos.length * 4 * 200}px` }}>
          {repeated.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center px-8 md:px-12"
              style={{ width: "200px", height: "120px" }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`${logo.sizeClass || "max-h-10 md:max-h-12"} w-auto object-contain opacity-60 hover:opacity-90 transition-opacity duration-300 brightness-0 invert`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
