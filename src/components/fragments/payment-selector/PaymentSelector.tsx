import clsx from "clsx";
import { useState } from "react";

type PaymentMethod = {
  id: string;
  label: string;
  description?: string;
  logo?: string;
};

const paymentMethods: PaymentMethod[] = [
  {
    id: "card",
    label: "Kartu kredit atau debit",
    description: "Visa, Mastercard, AMEX",
  },
  {
    id: "bca",
    label: "Bank BCA",
    description: "Transfer Virtual Account",
  },
  {
    id: "bri",
    label: "Bank BRI",
    description: "Transfer Virtual Account",
  },
  {
    id: "mandiri",
    label: "Bank Mandiri",
    description: "Transfer Virtual Account",
  },
  {
    id: "bni",
    label: "Bank BNI",
    description: "Transfer Virtual Account",
  },
  {
    id: "gopay",
    label: "GoPay",
  },
  {
    id: "ovo",
    label: "OVO",
  },
  {
    id: "dana",
    label: "DANA",
  },
];

export default function PaymentSelector() {
  const [selected, setSelected] = useState<string>("card");

  return (
    <div className="w-full max-w-md rounded-2xl border border-gray-200 overflow-hidden bg-white">
      {paymentMethods.map((method, index) => (
        <div
          key={method.id}
          onClick={() => setSelected(method.id)}
          className={clsx(
            "flex items-center justify-between px-4 py-4 cursor-pointer transition",
            "hover:bg-gray-50",
            index !== paymentMethods.length - 1 && "border-b border-gray-200",
          )}
        >
          {/* Left Content */}
          <div className="flex items-start gap-3">
            {/* Fake icon */}
            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-sm font-semibold">
              {method.label.charAt(0)}
            </div>

            <div>
              <p className="text-sm font-medium text-gray-900">
                {method.label}
              </p>
              {method.description && (
                <p className="text-xs text-gray-500">{method.description}</p>
              )}
            </div>
          </div>

          {/* Radio */}
          <div
            className={clsx(
              "w-5 h-5 rounded-full border flex items-center justify-center",
              selected === method.id ? "border-black" : "border-gray-300",
            )}
          >
            {selected === method.id && (
              <div className="w-2.5 h-2.5 bg-black rounded-full" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
