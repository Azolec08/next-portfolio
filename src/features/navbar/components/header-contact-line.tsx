"use client";
import { useToast } from "@/shared/components/ui/use-toast";
import { Mail, Phone } from "lucide-react";
import { userNavbarStore } from "../stores/navbar-store";

export default function HeaderContactLine() {
  const { toast } = useToast();
  const { setIsCopy, phoneNumber, email } = userNavbarStore((state) => state);

  const handleCopyNumber = (text: string, toastMessage: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopy(text);
        toast({
          description: toastMessage,
        });
      })
      .catch((error) => {
        console.log(error);
        toast({
          description: "Failed to copy",
        });
      });
  };

  return (
    <div className="bg-backgroundBrowny">
      <div className="flex gap-x-3 text-[10px] p-1 mx-20 text-[#E5E5E5]">
        <span
          className="flex gap-x-1 cursor-pointer"
          onClick={() =>
            handleCopyNumber(phoneNumber, "Phone Number successfully copied")
          }
        >
          <Phone size="15px" /> <span className="underline">{phoneNumber}</span>
        </span>

        <span
          className="flex gap-x-1 cursor-pointer"
          onClick={() => handleCopyNumber(email, "Email successfully copied")}
        >
          <Mail size="15px" /> <span className="underline">{email}</span>
        </span>
      </div>
    </div>
  );
}
