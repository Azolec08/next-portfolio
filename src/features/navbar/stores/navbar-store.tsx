import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface NavbarTypes {
  phoneNumber: string;
  email: string;
  setIsCopy: (text: string) => void;
}

export const userNavbarStore = create(
  immer<NavbarTypes>((set) => ({
    //state
    phoneNumber: "(+63) 955 471 4257",
    email: "sabdesserts@gmail.com",

    //function

    setIsCopy: (text) => {
      try {
        navigator.clipboard.writeText(text);
      } catch (error) {
        console.error("Error copying to clipboard:", error);
      }
    },
  }))
);
