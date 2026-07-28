import whatsappIcon from "../assets/whatsapp.svg";
import instagramIcon from "../assets/instagram.webp";

interface HeroProps {
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
}
function Hero({ imgSrc, imgWidth, imgHeight }: HeroProps) {
  return (
    <div>
      <div className="relative w-full h-screen">
        <img
          src={imgSrc}
          width={imgWidth}
          height={imgHeight}
          alt="Th-Atelier Fotografie"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/5 to-transparent">
          <div className="flex flex-col m-5 p-2 border-t border-b border-slate-100/10 ">
            <div className="flex gap-2 items-center justify-between text-slate-700/90 text-sm font-comfortaa tracking-widest">
              <div className="uppercase font-serif">Home</div>
              <div className="uppercase font-serif">Über Mich</div>
              <div className="uppercase font-serif">Portfolio</div>
              <div className="">
                {" "}
                <h1 className="font-allura text-8xl font-extralight text-center text-slate-800">
                  Th-Atelier
                </h1>
                <h2 className="font-marcellus text-xl text-center text-slate-700/50">
                  Authenthisch & Leidenschaftlich
                </h2>
              </div>

              <div className="uppercase font-serif">Preise</div>
              <div className="uppercase font-serif">Kontakt</div>
              <div className="flex gap-8">
                <span className="">
                  <img src={whatsappIcon.src} alt="WhatsApp icon" className="w-5 h-5" />
                </span>
                <span className="">
                  <img src={instagramIcon.src} alt="Instagram icon" className="w-5 h-5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
