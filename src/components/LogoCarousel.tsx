import logoRafaNadal from "@/assets/logos/rafa-nadal-academy.svg";
import logoReigJofre from "@/assets/logos/reig-jofre.png";
import logoSecuritas from "@/assets/logos/securitas.png";
import logoSeur from "@/assets/logos/seur.png";
import logoStihl from "@/assets/logos/stihl.png";
import logoViessmann from "@/assets/logos/viessmann.png";
import logoLeroyMerlin from "@/assets/logos/leroy-merlin.png";
import logoLinde from "@/assets/logos/linde.png";
import logoPrivalia from "@/assets/logos/privalia.jpg";
import logoProclinic from "@/assets/logos/proclinic.jpg";

const logos = [
  { src: logoRafaNadal, alt: "Rafa Nadal Academy" },
  { src: logoReigJofre, alt: "Reig Jofre" },
  { src: logoSecuritas, alt: "Securitas" },
  { src: logoSeur, alt: "SEUR" },
  { src: logoStihl, alt: "Stihl" },
  { src: logoViessmann, alt: "Viessmann" },
  { src: logoLeroyMerlin, alt: "Leroy Merlin" },
  { src: logoLinde, alt: "Linde" },
  { src: logoPrivalia, alt: "Privalia" },
  { src: logoProclinic, alt: "Proclinic" },
];

const LogoCarousel = () => {
  return (
    <div className="py-16 md:py-24 overflow-hidden">
      <h4 className="text-minimal text-muted-foreground mb-12 text-center tracking-widest">
        CONFÍAN EN NOSOTROS
      </h4>
      {/* Infinite scroll wrapper */}
      <div className="relative w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-logo-scroll">
          {/* Duplicate logos for seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center px-8 md:px-12"
              style={{ width: "180px", height: "60px" }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-10 md:max-h-12 w-auto object-contain brightness-0 invert opacity-50 hover:opacity-80 transition-opacity duration-300"
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
