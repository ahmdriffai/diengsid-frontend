import type React from "react";
import Logo from "../../../assets/logo.png";
import Logo2 from "../../../assets/logo2.png";

import { useScroll } from "@/hooks/scroll.hook";
import { Search } from "lucide-react";

interface Props {
  isFixed?: boolean;
}

export default function Navbar({ isFixed = true }: Props): React.ReactNode {
  const { scrollY } = useScroll();
  return (
    <nav
      className={`${scrollY > 490 ? "shadow-none" : "shadow-custom"} py-4 shadow-custom-sm w-full ${isFixed && "fixed"} z-100 bg-white top-0`}
    >
      <div className="flex gap-x-4 px-6 lg:px-12 justify-between max-w-7xl items-center container mx-auto">
        {/* Logo */}
        {}
        <a href="/" className="md:hidden">
          <img
            src={scrollY > 340 ? Logo : Logo2}
            alt="dieng.id"
            className={scrollY > 340 ? "w-10" : "w-40"}
          />
        </a>
        <a href="/" className="hidden md:block">
          <img src={Logo2} alt="dieng.id" className="w-40" />
        </a>

        {/* Search Bar */}
        <div
          className={`${scrollY > 340 || !isFixed ? "flex" : "hidden"} max-w-100 w-full items-center gap-2 rounded-full bg-white shadow-custom`}
        >
          <input
            type="text"
            placeholder="Cari destinasi ..."
            className="flex-1 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none"
          />
          <button className="flex items-center gap-2 rounded-full bg-primary p-4 text-sm font-medium transition hover:bg-primary-600 text-white">
            <Search size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
}
