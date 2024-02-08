import { Button } from "@/shared/components/ui/button";
import Image from "next/image";
import { headerMenu } from "../constants/header-constants";
import HeaderContactLine from "./header-contact-line";
import HeaderDarkLine from "./header-dark-line";
import HeaderLinks from "./header-links";

export default function navbar() {
  return (
    <header className="w-full ">
      <HeaderDarkLine />
      <HeaderContactLine />
      <div className="flex">
        <div className="w-full ml-20  flex items-center">
          <div className="relative w-[70px] h-[50px]">
            <Image src="/logo.jpg" alt="logoImg" fill />
          </div>
          {headerMenu.map((menu, index) => (
            <HeaderLinks key={index} menu={menu} />
          ))}
        </div>
        <div className="mr-[25px] flex items-center">
          <Button
            className="rounded-full text-white  text-[10px] font-bold border-[2px]  "
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
        </div>
      </div>
    </header>
  );
}
