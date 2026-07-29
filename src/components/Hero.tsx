import { useEffect, useState } from "react";
import whatsappIcon from "../assets/whatsapp.svg";
import instagramIcon from "../assets/Instagram.svg";

interface HeroProps {
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
}

const NAV_FADE_START = 150;
const NAV_FADE_DISTANCE = 300;

function Hero({ imgSrc, imgWidth, imgHeight }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navOpacity = Math.min(Math.max(1 - (scrollY - NAV_FADE_START) / NAV_FADE_DISTANCE, 0), 1);
  const navTranslateY = -(1 - navOpacity) * 16;

  return (
    <div>
      <div
        className="fixed top-0 inset-x-0 z-50 flex flex-col m-5 mt-8 p-2"
        style={{
          opacity: navOpacity,
          transform: `translateY(${navTranslateY}px)`,
          transition: "opacity 150ms ease-out, transform 150ms ease-out",
          pointerEvents: navOpacity === 0 ? "none" : "auto",
        }}>
        <div className="flex gap-2 items-center justify-center lg:justify-between text-neutral-700/70 text-sm font-comfortaa tracking-widest">
          <div className="hidden lg:block uppercase font-serif cursor-pointer hover:text-neutral-700"></div>
          <div className="hidden lg:block uppercase font-serif cursor-pointer hover:text-neutral-700">
            Über Mich
          </div>
          <div className="hidden lg:block uppercase font-serif cursor-pointer hover:text-neutral-700">
            Portfolio
          </div>
          <div className="">
            <h1 className="font-mrs-saint-delafield text-6xl lg:text-8xl text-center text-neutral-700 whitespace-nowrap ">
              Th-Atelier
            </h1>
            <h2 className="hidden lg:flex font-cormorant-garamond text-lg text-center text-neutral-700/70 uppercase tracking-wider">
              Authenthisch & Leidenschaftlich
            </h2>
          </div>

          <div className="hidden lg:block uppercase font-serif cursor-pointer hover:text-neutral-700">
            Preise
          </div>
          <div className="hidden lg:block uppercase font-serif cursor-pointer hover:text-neutral-700">
            Kontakt
          </div>
          <div className="hidden lg:flex gap-8 ">
            <span className="">
              <img
                src={whatsappIcon.src}
                alt="WhatsApp icon"
                className="w-5 h-5 opacity-60 cursor-pointer hover:opacity-80"
              />
            </span>
            <span className="">
              <img
                src={instagramIcon.src}
                alt="Instagram icon"
                className="w-5 h-5 opacity-50 cursor-pointer hover:opacity-70"
              />
            </span>
          </div>
        </div>
      </div>

      <div className="relative w-full h-screen">
        <img
          src={imgSrc}
          width={imgWidth}
          height={imgHeight}
          alt="Th-Atelier Fotografie"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-white via-white/10 to-transparent"></div>
      </div>
    </div>
  );
}
export default Hero;
