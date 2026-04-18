import Login from "@/components/features/auth/Login";
import Stepper from "@/components/fragments/stepper/Stepper";
import Button from "@/components/ui/button/Button";
import { Star, X } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useLocalStorage } from "react-use";

export default function BookProperty(): React.ReactNode {
  const [token] = useLocalStorage("token", "");
  const [openAuth, setOpenAuth] = useState<boolean>(false);
  const navigate = useNavigate();
  // effecet
  useEffect(() => {
    if (openAuth) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openAuth]);

  // Handle submit
  const handleSubmit = () => {
    if (token) {
      navigate("/book/room");
    } else {
      setOpenAuth(true);
    }
  };
  return (
    <>
      <div className="container mx-auto px-6 py-5 pb-30">
        <div className="w-full flex justify-end">
          <Button asChild variant="ghost">
            <Link to="/properties/1">
              <X />
            </Link>
          </Button>
        </div>
        <div>
          <Stepper
            currentStep={0}
            steps={[
              { label: "Tinjau" },
              { label: "Tanya pemilik" },
              { label: "Pembayaran" },
              { label: "Selesai" },
            ]}
          />
        </div>
        <div className="p-4 rounded-2xl bg-zinc-100 mt-10 text-zinc-500 font-light text-sm">
          <p>
            Homestay ini memerlukan konfirmasi ketersediaan tanggal dari
            pemilik. Anda akan menerima konfirmasi paling lambat dalam{" "}
            <span className="text-zinc-950 font-medium">1 × 24 jam.</span>
          </p>
        </div>
        <h1 className="mt-5 text-2xl font-medium">Tinjau dan lanjutkan</h1>
        {/* Detail home */}
        <div className="p-4 border rounded-xl mt-4">
          <div className="flex w-full gap-4 border-b-[0.2px] pb-4">
            <div className="w-20 h-20 aspect-square overflow-hidden rounded-lg bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1723810742992-0e84241abcf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwd29vZGVuJTIwY2FiaW4lMjBpbnRlcmlvciUyMGhvbWVzdGF5fGVufDF8fHx8MTc3MDk3MTUxNHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <h2 className="font-medium text-lg">
                Homestay Nan Indah dan Jauh di Sana
              </h2>
              <span className="flex text-xs items-center gap-1">
                <Star size={14} /> 4.5 (2)
              </span>
            </div>
          </div>
          {/* Detail tanggal */}
          <div className="py-5 flex justify-between items-center border-b-[0.2px]">
            <div className="flex flex-col gap-1">
              <label>Tanggal</label>
              <span className="text-xs text-gray-500">10-12 April 2026</span>
            </div>
            <Button variant="third" size="sm">
              Ubah
            </Button>
          </div>
          {/* Detail tamu */}
          <div className="py-5 flex justify-between items-center border-b-[0.2px]">
            <div className="flex flex-col gap-1">
              <label>Tamu</label>
              <span className="text-xs text-gray-500">1 dewasa, 1 anak </span>
            </div>
            <Button variant="third" size="sm">
              Ubah
            </Button>
          </div>
          {/* Detail tamu */}
          <div className="py-5 flex justify-between items-center border-b-[0.2px]">
            <div className="flex flex-col gap-1">
              <label>Nomer telepon</label>
              {/* <span className="text-xs text-gray-500">+6285155380996</span> */}
              <span className="text-xs text-red-700 italic">
                Nomer telepon harus diisi untuk mengkonfirmasi ketersidiaan.
              </span>
            </div>
            <Button variant="third" size="sm">
              Ubah
            </Button>
          </div>
          {/* Detail tamu */}
          <div className="pt-5 flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <label>Harga total</label>
              <span className="text-xs text-gray-500">R. 500.000 </span>
            </div>
            <Button variant="third" size="sm">
              Perincian
            </Button>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 py-3 px-6 border-t border-zinc-100 w-full flex justify-end bg-white">
        <Button variant="secondary" onClick={handleSubmit}>
          Tanyakan pemilik
        </Button>
      </div>

      {/* Login */}
      <div
        className={`w-full h-full ${openAuth ? "flex" : "hidden"} items-center justify-center fixed top-0 left-0 bg-zinc-900/40 z-10 transition-all duration-1000`}
      >
        <Login onClose={() => setOpenAuth(false)} />
      </div>
    </>
  );
}
