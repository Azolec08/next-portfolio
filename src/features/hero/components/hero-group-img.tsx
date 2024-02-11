import Image from "next/image";

export default function HeroGroupImage() {
  return (
    <div className="grid grid-cols-4 p-8  md:px-16 md:py-10 lg:p-0">
      <div className="relative w-full h-full ">
        <Image
          src="/hero-img/pic1.png"
          alt="heroBigImg"
          fill
          className="row-span-2"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="grid grid-cols-1 grid-rows-2 col-span-2">
        <div className="grid grid-cols-2 ">
          <div className="relative w-full h-full">
            <Image
              src="/hero-img/pic2.png"
              alt="heroBigImg"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative h-full w-full">
            <Image
              src="/hero-img/pic4.png"
              alt="heroBigImg"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
        <div className="grid grid-cols-[90px_1fr] md:grid-cols-[230px_1fr] lg:grid-cols-[190px_1fr]">
          <Image
            src="/hero-img/pic3.png"
            alt="heroBigImg"
            width={500}
            height={500}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="relative h-full w-full">
            <Image
              src="/hero-img/pic5.png"
              alt="heroBigImg"
              fill
              className="h-auto w-auto filter "
            />
          </div>
        </div>
      </div>
      <div className="relative w-full h-full ">
        <Image
          src="/hero-img/pic6.png"
          alt="heroBigImg"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
    </div>
  );
}
