import logoImg from "../../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { LiaGamepadSolid } from "react-icons/lia";

export const Header = () => {
  return (
    <header className="w-full h-28 bg-slate-100 text-black px-2">
      <div className="max-w-screen-xl mx-auto flex justify-center items-center h-28 sm:justify-between">
        <nav className="flex justify-center items-center gap-4">
          <Link href={"/"}>
            <Image
              src={logoImg}
              alt="logo do site dalygames"
              quality={100}
              priority
              className="w-full"
            />
          </Link>
          <Link href={"/"} className="font-medium hover:opacity-75">
            Games
          </Link>
          <Link href={"/profile"} className="font-medium hover:opacity-75">
            Perfil
          </Link>
        </nav>

        <div className="hidden sm:flex justify-center items-center">
          <Link href={"/profile"}>
            <LiaGamepadSolid size={34} color="#475569" />
          </Link>
        </div>
      </div>
    </header>
  );
};
