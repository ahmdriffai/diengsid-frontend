import Stepper from "@/components/fragments/stepper/Stepper";
import Button from "@/components/ui/button/Button";
import { X } from "lucide-react";
import { Link } from "react-router";
import HomePic from "../assets/home.svg";

export default function BookRoom(): React.ReactNode {
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
            currentStep={1}
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
        <h1 className="mt-5 text-2xl font-medium">Tanya pemilik</h1>
        {/* Detail home */}
        <div className="p-4 border rounded-xl mt-4">
          {/* Illustration */}
          <div className="flex justify-center mb-8">
            <div className="w-40 h-40 bg-green-50 rounded-full flex items-center justify-center">
              <img src={HomePic} alt="loading..." />
            </div>
          </div>

          {/* Text */}
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Pengajuan Anda sudah kami teruskan
            </h2>
            <p className="text-gray-500">
              Sekarang kami sedang mengecek ketersediaan homestay ke pemilik.
              Tenang saja, Anda akan mendapatkan konfirmasi maksimal dalam 24
              jam.
            </p>
          </div>

          {/* Button */}
          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-medium transition">
            Lihat status pengajuan
          </button>
        </div>
      </div>
      {/* <div className="fixed bottom-0 py-3 px-6 border-t border-zinc-100 w-full flex justify-end bg-white">
        <Button variant="secondary">Tanyakan pemilik</Button>
      </div> */}
    </>
  );
}
