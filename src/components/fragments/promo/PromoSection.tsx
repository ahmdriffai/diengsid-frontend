import { Tag } from "lucide-react";

type Promo = {
  id: number;
  title: string;
  description: string;
  discount: string;
  image: string;
  expired: string;
};

const promos: Promo[] = [
  {
    id: 1,
    title: "Diskon Jeep Dieng Sunrise",
    description: "Nikmati sunrise dengan jeep terbaik di Dieng.",
    discount: "20% OFF",
    image:
      "https://images.unsplash.com/photo-1723810742992-0e84241abcf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwd29vZGVuJTIwY2FiaW4lMjBpbnRlcmlvciUyMGhvbWVzdGF5fGVufDF8fHx8MTc3MDk3MTUxNHww&ixlib=rb-4.1.0&q=80&w=1080",
    expired: "Berlaku sampai 30 Apr 2026",
  },
  {
    id: 2,
    title: "Promo Homestay Cozy",
    description: "Menginap nyaman dengan view pegunungan.",
    discount: "15% OFF",
    image:
      "https://images.unsplash.com/photo-1723810742992-0e84241abcf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwd29vZGVuJTIwY2FiaW4lMjBpbnRlcmlvciUyMGhvbWVzdGF5fGVufDF8fHx8MTc3MDk3MTUxNHww&ixlib=rb-4.1.0&q=80&w=1080",
    expired: "Berlaku sampai 10 Mei 2026",
  },
];

function PromoCard({ promo }: { promo: Promo }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      {/* Image */}
      <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
        <img
          src={promo.image}
          alt={promo.title}
          className="w-full h-full object-cover hover:scale-105 transition"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-4 flex-1">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="flex items-center gap-1 text-xs font-medium bg-red-100 text-red-600 px-2 py-1 rounded-full">
              <Tag size={14} />
              {promo.discount}
            </span>
          </div>

          <h3 className="text-lg font-semibold text-gray-900">{promo.title}</h3>

          <p className="text-sm text-gray-500 mt-1">{promo.description}</p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xs text-gray-400">{promo.expired}</span>

          <button className="px-4 py-2 text-sm font-medium bg-black text-white rounded-xl hover:bg-gray-800 transition">
            Lihat Detail
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PromoList() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {promos.map((promo) => (
        <PromoCard key={promo.id} promo={promo} />
      ))}
    </section>
  );
}
