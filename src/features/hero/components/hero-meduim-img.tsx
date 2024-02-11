import Image from "next/image";

export default function HeroMediumImg() {
  return (
    <div className="h-full w-full relative pl-8">
      <div className="h-full w-full relative">
        <Image
          src="/hero-img/herobigimg.png"
          alt="heroBigImg"
          fill
          className="brightness-100"
        />
      </div>

      <Image
        src="/hero-img/chocoBar.png"
        alt="heroBigImg"
        height={50}
        width={50}
        className="absolute top-[0] left-[90px] w-[40px] h-auto
        md:top-[0] md:left-[180px] md:w-[70px] md:h-auto"
      />
      <Image
        src="/hero-img/brownyChoco.png"
        alt="heroBigImg"
        height={50}
        width={50}
        className="absolute top-[80px] left-[100px] w-[40px] h-auto
        md:top-[140px] md:left-[200px] md:w-[60px] md:h-auto"
      />
      <Image
        src="/hero-img/orange.png"
        alt="heroBigImg"
        height={50}
        width={50}
        className="absolute top-[90px] left-[20px] w-[35px] h-auto
        md:top-[150px] md:left-[30px] md:w-[55px] md:h-auto"
      />
      <Image
        src="/hero-img/oreo.png"
        alt="heroBigImg"
        height={50}
        width={50}
        className="absolute top-[0] right-[80px] w-[80px] h-auto
        md:top-[0] md:right-[180px] md:w-[150px] md:h-auto"
      />
    </div>
  );
}
