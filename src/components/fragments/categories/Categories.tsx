import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Camera,
  Car,
  Coffee,
  Home,
  Mountain,
  Tent,
  type LucideIcon,
} from "lucide-react";
import type React from "react";

type Category = {
  label: string;
  icon: LucideIcon;
};

const categories: Category[] = [
  { label: "property", icon: Home },
  { label: "tour", icon: Car },
  { label: "camping", icon: Tent },
  { label: "wisata", icon: Mountain },
  { label: "kuliner", icon: Coffee },
  { label: "fotografi", icon: Camera },
];

interface CategoriesProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function Categories({
  selectedCategory,
  onSelectCategory,
}: CategoriesProps): React.ReactNode {
  return (
    <div className="sticky top-17 z-50 overflow-hidden bg-white pt-5">
      <div className="container mx-auto px-13">
        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {categories.map((cat, index) => (
              <CarouselItem
                key={index}
                className="basis-1/4 pl-1 lg:basis-1/12"
              >
                <div
                  key={index}
                  className={`group flex min-w-16 cursor-pointer flex-col items-center gap-2 transition-all duration-200 ${
                    selectedCategory === cat.label
                      ? "border-b-2 border-black pb-2 text-black"
                      : "border-b-2 border-transparent pb-2 text-gray-500 hover:border-gray-300 hover:text-gray-800"
                  }`}
                  onClick={() => onSelectCategory(cat.label)}
                >
                  <cat.icon
                    size={24}
                    strokeWidth={selectedCategory === cat.label ? 2 : 1.5}
                    className="transition-transform group-hover:scale-110"
                  />
                  <span className="text-[10px] font-medium whitespace-nowrap capitalize">
                    {cat.label}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
