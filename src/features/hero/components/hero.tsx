import { HeroBeanscent } from "./hero-beanscent";
import HeroBigImg from "./hero-big-img";
import HeroGroupImage from "./hero-group-img";
import HeroMediumImg from "./hero-meduim-img";

export function Hero() {
  return (
    <div
      className="min-h-screen flex flex-col lg:grid lg:grid-cols-2 bg-cover"
      style={{ backgroundImage: "url('/hero-img/blackpaper.png')" }}
    >
      <div
        className="grid grid-rows-[200px_360px_auto] 
      md:grid-rows-[200px_600px_auto] 
      lg:grid-rows-[65vh_30vh]"
      >
        <div className="flex ">
          <HeroBeanscent />
        </div>
        <div className="lg:hidden">
          <HeroMediumImg />
        </div>
        <div className="">
          <HeroGroupImage />
        </div>
      </div>
      <div className="hidden h-full w-full lg:flex justify-end ">
        <HeroBigImg />
      </div>
    </div>
  );
}
