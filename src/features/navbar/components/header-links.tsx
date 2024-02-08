import Link from "next/link";
import { headerTypes } from "../types/navbar-types";

type menuProps = {
  menu: headerTypes;
};

export default function headerLinks({ menu }: menuProps) {
  return (
    <ul className="ml-20 font-bold text-textBrowny ">
      <li>
        <Link href={menu.path}>{menu.title}</Link>
      </li>
    </ul>
  );
}
