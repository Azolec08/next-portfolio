import { Button } from "@/shared/components/ui/button";
import Image from "next/image";
import { headerMenu } from "../constants/header-constants";
import HeaderContactLine from "./header-contact-line";
import HeaderDarkLine from "./header-dark-line";
import HeaderLinks from "./header-links";
import { SheetDemo } from "./header-sidebar";

export function Header() {
  return (
    <header className="w-full ">
      <HeaderDarkLine />
      <HeaderContactLine />
      <div className="flex py-2">
        <div className="w-full flex items-center lg:ml-20">
          <Image
            src="/header-img/logo.png"
            alt="logoImg"
            width={100}
            height={100}
            className="ml-4"
            priority={true}
          />
          <div className=" hidden lg:flex">
            {headerMenu.map((menu, index) => (
              <HeaderLinks key={index} menu={menu} />
            ))}
          </div>
        </div>
        <div className="mr-[25px] flex items-center">
          <Button
            className="rounded-full text-white  text-[10px] font-bold border-[2px] 
             hidden lg:block "
            size="sm"
            style={{
              backgroundColor: "#ffffff",
              color: "#4d2615",
              borderColor: "#4d2615",
            }}
            variant="ghost"
          >
            Subscribe
          </Button>
          <SheetDemo />
        </div>
      </div>
    </header>
  );
}
