import Login from "@/components/features/auth/Login";
import MenuBar from "@/components/fragments/menu-bar/MenuBar";
import Button from "@/components/ui/button/Button";
import type React from "react";
import { useState } from "react";

export default function WishlistPage(): React.ReactNode {
  const [openAuth, setOpenAuth] = useState<boolean>(false);

  return (
    <>
      <div className="pt-10 container px-6">
        <h1 className="font-semibold text-4xl my-10">Favorit</h1>
        <h2 className="font-medium text-2xl">
          Masuk untuk melihat daftar favorit anda
        </h2>
        <p className="text-sm font-light my-3">
          Anda dapat membuat, melihat, atau mengedit daftar favorit setelah
          masuk.
        </p>
        <Button onClick={() => setOpenAuth(true)}>Masuk diengs ID</Button>
      </div>
      <MenuBar />
      {/* Login */}

      <div
        className={`w-full h-full ${openAuth ? "flex" : "hidden"} items-center justify-center fixed top-0 left-0 bg-zinc-900/40 z-10 transition-all duration-1000`}
      >
        <Login onClose={() => setOpenAuth(false)} />
      </div>
    </>
  );
}
