import PaymentSelector from "@/components/fragments/payment-selector/PaymentSelector";
import Stepper from "@/components/fragments/stepper/Stepper";
import Button from "@/components/ui/button/Button";
import { X } from "lucide-react";
import type React from "react";
import { Link } from "react-router";

export default function PaymentPage(): React.ReactNode {
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

        <h1 className="mt-5 text-2xl font-medium">Tinjau dan lanjutkan</h1>
        {/* Detail home */}

        <div>
          <PaymentSelector />
        </div>
      </div>
      <div className="fixed bottom-0 py-3 px-6 border-t border-zinc-100 w-full flex justify-end bg-white">
        <Button variant="secondary">Berikutnya</Button>
      </div>
    </>
  );
}
