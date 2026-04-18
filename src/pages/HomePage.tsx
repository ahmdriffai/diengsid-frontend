import Categories from "@/components/fragments/categories/Categories";
import { Footer } from "@/components/fragments/footer/Footer";
import { Hero } from "@/components/fragments/hero/Hero";
import ItemCard from "@/components/fragments/item-card/ItemCard";
import MenuBar from "@/components/fragments/menu-bar/MenuBar";
import Navbar from "@/components/fragments/navbar/Navbar";
import { WhyChooseUs } from "@/components/fragments/why-choose-us/WhyChooseUs";
import { useGetExperience } from "@/hooks/experience.hook";
import { useScroll } from "@/hooks/scroll.hook";
import type { SearchExperirenceRequest } from "@/lib/model/experience.mode";
import type React from "react";
import { useState } from "react";

export default function HomePage(): React.ReactNode {
  const { scrollY } = useScroll();
  const [selectedCategory, setSelectedCategory] = useState<string>("property");

  const search: SearchExperirenceRequest = {
    type: selectedCategory,
  };
  const { data } = useGetExperience(search);

  return (
    <>
      <Navbar />
      <Hero />
      {/* <div className="px-6 lg:px-12">
        <PromoList />
      </div> */}
      <div
        className={`${scrollY > 490 ? "shadow-custom" : "shadow-none"} mb-10 sticky top-20 z-50 `}
      >
        <Categories
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>
      <main className="container mt-10 mx-auto bg-white">
        {/* list experiences */}
        <div className="grid grid-cols-2 px-6 lg:px-12  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-10 mt-6">
          {data?.data.map((item) => (
            <ItemCard experience={item} key={item.title} />
          ))}
        </div>
        <WhyChooseUs />
      </main>
      <Footer />
      <div className="md:hidden">
        <MenuBar />
      </div>
    </>
  );
}
