import Button from "@/components/ui/button/Button";
import clsx from "clsx";
import { Heart, Navigation, Search, User, type LucideIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { useLocalStorage } from "react-use";

type Menu = {
  label: string;
  path: string;
  icon: LucideIcon;
};
const menuUnathorize: Menu[] = [
  {
    label: "Telusuri",
    path: "/",
    icon: Search,
  },
  {
    label: "Favorit",
    path: "/wishlists",
    icon: Heart,
  },
  {
    label: "Masuk",
    path: "/login",
    icon: User,
  },
];

export default function MenuBar(): React.ReactNode {
  const [token] = useLocalStorage("token", "");

  const { pathname } = useLocation();

  const menu = !token
    ? menuUnathorize
    : [
        ...menuUnathorize.slice(0, 2),
        {
          label: "Perjalanan",
          path: "/trips",
          icon: Navigation,
        },
        ...menuUnathorize.slice(2),
      ];

  const isActive = (url: string) =>
    pathname === url || pathname.startsWith(url + "/");

  const [translateY, setTranslateY] = useState(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setTranslateY((prev) => Math.min(prev + 10, 100));
      } else {
        setTranslateY((prev) => Math.max(prev - 10, 0));
      }

      // if (Math.abs(currentScrollY - lastScrollY.current) < 5) return;

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={clsx(
        "w-full border-t ease-in-out transition-all delay-150 border-zinc-100  bottom-0 fixed bg-white flex p-2 items-center px-10",
        {
          "justify-between": token,
        },
        {
          "justify-around": !token,
        },
      )}
      style={{
        transform: `translateY(${translateY}px)`,
      }}
    >
      {menu.map((item) => {
        const Icon = item.icon;
        return (
          <Button variant="ghost" asChild>
            <Link
              to={item.path}
              className="flex flex-col justify-around  items-center"
            >
              <Icon
                strokeWidth={2}
                size={26}
                className={clsx({ "text-primary-800": isActive(item.path) })}
              />
              <span
                className={clsx("font-medium text-[10px]", {
                  "text-primary-800": isActive(item.path),
                })}
              >
                {item.label}
              </span>
            </Link>
          </Button>
        );
      })}

      {/* <Button variant="ghost" asChild>
        <Link to="/" className="flex flex-col justify-center items-center">
          <Heart strokeWidth={2.5} className="text-black" />
          <span className="font-medium text-black text-[10px]">Favorit</span>
        </Link>
      </Button>
      <Button variant="ghost" asChild>
        <Link to="/" className="flex flex-col justify-center items-center">
          <User strokeWidth={2.5} className="text-black" />
          <span className="font-medium text-black text-[10px]">Masuk</span>
        </Link>
      </Button> */}
    </div>
  );
}
