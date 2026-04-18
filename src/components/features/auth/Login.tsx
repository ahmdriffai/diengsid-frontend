import Input from "@/components/fragments/input/input";
import Button from "@/components/ui/button/Button";
import { useAuthGoogle } from "@/hooks/auth.hook";
import { GoogleLogin } from "@react-oauth/google";
import { X } from "lucide-react";
import type React from "react";
import { useState } from "react";
import Logo from "../../../assets/logo.png";

interface Props {
  onClose?: () => void;
}

export default function Login({ onClose }: Props): React.ReactNode {
  const [email, setEmail] = useState<string>("");

  const authGoogle = useAuthGoogle();

  return (
    <div className="w-full max-w-lg bg-white h-full md:h-fit md:rounded-b-3xl  mt-10 rounded-t-3xl py-3 px-5 flex-col">
      <div className="w-full flex justify-end">
        <Button variant="ghost" onClick={onClose}>
          <X size={18} />
        </Button>
      </div>
      <div className="py-10">
        <div className="flex w-full flex-col items-center mb-3 gap-3">
          <img src={Logo} alt="dieng.id" className="w-10" />
          <h1 className="text-2xl font-medium">Masuk atau daftar</h1>
        </div>
        <div className="mt-7 space-y-3">
          <Input
            label="Email anda"
            value={email}
            onChange={(e) => setEmail(e)}
          />
          <p className="text-xs text-gray-400 font-light">
            Kami akan mengirimkan konfirmasi melalui email.
          </p>
          <Button className="w-full">Masuk</Button>
        </div>
        <div className="flex justify-center items-center flex-col mt-6">
          <div className="bg-gray-300 h-[0.4px] w-full"></div>
          <span className="text-xs text-gray-400 p-2 bg-white absolute">
            atau
          </span>
        </div>
        <div className="mt-6 ">
          <GoogleLogin
            onSuccess={async (credentialResponse) => {
              authGoogle.mutate({ token: credentialResponse.credential ?? "" });
            }}
            onError={() => console.log("Login Failed")}
          />
          {/* <Button variant="third" className="w-full">
            Masuk dengan Google
          </Button> */}
        </div>
      </div>
    </div>
  );
}
