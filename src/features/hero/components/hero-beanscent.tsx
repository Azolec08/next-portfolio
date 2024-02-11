import { Button } from "@/shared/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export function HeroBeanscent() {
  return (
    <div className="w-full flex items-center justify-center lg:justify-start gap-x-20 ">
      <Image
        src="/hero-img/leaf.png"
        alt="leafImg"
        height={50}
        width={90}
        className="hidden lg:flex justif"
      />
      <div
        className="flex flex-col items-center gap-y-2 pt-[15px] relative
      lg:items-start
      "
      >
        <div
          className="relative w-[220px] h-[40px] 
          md:w-[340px] md:h-[60px]
        "
        >
          <Image
            src="/hero-img/beanScent.png"
            alt="leafImg"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="relative w-[130px] h-[40px]">
          <Image
            src="/hero-img/beSpecial.png"
            alt="leafImg"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <Button
          className="gap-x-2 rounded-full font-semibold text-textBrowny w-fit text-[10px] hidden
          lg:flex absolute top-[150px]
        
          "
          variant="outline"
        >
          Explore More <MoveRight />
        </Button>
      </div>
    </div>
  );
}
