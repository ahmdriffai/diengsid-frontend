import type { ExperienceType } from "@/lib/model/experience.mode";
import { Heart, MapPinHouse, Star } from "lucide-react";
import { motion } from "motion/react";
import type React from "react";
import { useNavigate } from "react-router";

interface Props {
  experience: ExperienceType;
}

export default function ItemCard({ experience }: Props): React.ReactNode {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group flex cursor-pointer flex-col gap-2"
      onClick={() => navigate("/properties/" + experience.id)}
    >
      <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-200">
        <img
          src={experience.thumbnail_url}
          alt={experience.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <button className="rounded-full bg-transparent p-2 text-white transition-colors hover:bg-white/10">
            <Heart
              size={24}
              className="fill-black/20 stroke-white transition-colors hover:fill-emerald-500 hover:stroke-emerald-500"
            />
          </button>
        </div>
        <div className="absolute  top-3 left-3 rounded-md bg-white/90 px-2 py-1 text-[10px] font-bold capitalize shadow-sm backdrop-blur-sm">
          {experience.experience_type}
        </div>
      </div>

      <div className="mt-1 flex items-start justify-between">
        <h3 className="truncate pr-2 font-semibold text-gray-900">
          {experience.title}
        </h3>
        <div className="flex items-center gap-1">
          <Star size={14} className="fill-black text-black" />
          <span className="text-sm text-gray-900">{experience.lng}</span>
        </div>
      </div>

      <div className="flex w-full items-center justify-start gap-1 text-gray-500">
        <div>
          <MapPinHouse size={13} />
        </div>
        <div className="flex gap-1 truncate text-xs">{experience.address}</div>
      </div>

      <div className="mt-1 flex items-baseline gap-1">
        <span className="font-semibold text-gray-900">
          Rp {experience.base_price.toLocaleString("id-ID")}
        </span>
        <span className="text-sm text-gray-900">
          {experience.experience_type === "homestay" ? "/ malam" : ""}
          {experience.experience_type === "Jeep Tour" ? " trip" : ""}
        </span>
      </div>
    </motion.div>
  );
}
