import Image from "next/image";

export default function HeroBigImg() {
  return (
    <div className="relative w-full h-full">
      <div className="w-full h-full flex items-end justify-end">
        <Image
          src="/hero-img/herobigimg.png"
          alt="heroBigImg"
          height={500}
          width={500}
          className="brightness-100 "
        />
      </div>

      <Image
        src="/hero-img/chocoBar.png"
        alt="heroBigImg"
        height={20}
        width={60}
        className="absolute top-[40px] left-[230px] w-auto h-auto"
      />
      <Image
        src="/hero-img/brownyChoco.png"
        alt="heroBigImg"
        height={20}
        width={50}
        className="absolute top-[190px] left-[260px] w-auto h-auto"
      />
      <Image
        src="/hero-img/orange.png"
        alt="heroBigImg"
        height={20}
        width={50}
        className="absolute  top-[190px] left-[60px] w-auto h-auto"
      />
      <Image
        src="/hero-img/oreo.png"
        alt="heroBigImg"
        height={20}
        width={130}
        className="absolute top-[40px] right-[70px] "
      />
    </div>
  );
}
