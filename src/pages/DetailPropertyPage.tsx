import DateRangePicker from "@/components/fragments/date-picker/date-range-picker";
import { Footer } from "@/components/fragments/footer/Footer";
import MapViewer from "@/components/fragments/map-viewer/MapViewer";
import Navbar from "@/components/fragments/navbar/Navbar";
import Button from "@/components/ui/button/Button";
import { useScroll } from "@/hooks/scroll.hook";
import { addDays, differenceInCalendarDays } from "date-fns";
import {
  Armchair,
  ArrowLeft,
  Drum,
  Heart,
  HouseWifi,
  Share,
  WavesLadder,
} from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

const images = [
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
  "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858",
  "https://images.unsplash.com/photo-1494526585095-c41746248156",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  "https://images.unsplash.com/photo-1493666438817-866a91353ca9",
  "https://images.unsplash.com/photo-1505692794403-35f0f0d7e6b8",
  "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d8a",
];

export default function DetailPropertyPage(): React.ReactNode {
  const today = new Date();
  const price = 235000;

  const [range, setRange] = useState<{ start: Date | null; end: Date | null }>({
    start: today,
    end: addDays(today, 1),
  });
  const { scrollY } = useScroll();
  const { pathname } = useLocation();

  useEffect(() => {
    // Scrolls to top-left corner instantly
    window.scrollTo(0, 0);
  }, [pathname]);

  console.log(range);

  const startDate = range.start?.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const endDate = range.start?.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const totalDays =
    range.start && range.end
      ? Math.max(1, differenceInCalendarDays(range.end, range.start))
      : 0;

  const totalPrice = totalDays * price;

  return (
    <>
      {/* navbar */}
      <div className="w-full p-4 md:hidden flex absolute z-30 justify-between">
        <Button variant="icon" asChild>
          <Link to="/">
            <ArrowLeft size={22} />
          </Link>
        </Button>
        <div className="flex gap-2">
          <Button variant="icon">
            <Share size={22} />
          </Button>
          <Button variant="icon">
            <Heart size={22} />
          </Button>
        </div>
      </div>

      <section id="foto" className="hidden md:flex">
        <Navbar isFixed={false} />
      </section>

      {/* Header Content */}
      <div
        className={`${scrollY > 460 ? "sticky" : "hidden"} w-full z-[10000] border-b top-0 bg-white py-5`}
      >
        <div className="flex gap-x-2 container mx-auto px-3 md:px-20">
          <Button asChild variant="link">
            <a href="#foto">Foto</a>
          </Button>
          <Button asChild variant="link">
            <a href="#fasilitas">Fasilitas</a>
          </Button>
          <Button asChild variant="link">
            <a href="#foto">Ulasan</a>
          </Button>
          <Button asChild variant="link">
            <a href="#foto">Lokasi</a>
          </Button>
          {totalDays === 0 && (
            <Button asChild variant="link">
              <a href="#foto">Tanggal</a>
            </Button>
          )}
        </div>
      </div>

      {/* primary image for mobile */}
      <div className="relative aspect-square md:hidden overflow-hidden bg-gray-200">
        <img
          src={images[0]}
          alt="image"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="container mx-auto max-w-6xl sm:px-5">
        {/* Header */}
        {/* image on middle point */}
        <section className="hidden md:grid grid-cols-4 grid-rows-2 gap-2 w-full h-[400px] mt-10 items-stretch ">
          <div className="row-span-2 col-span-2 bg-gray-100 rounded-l-2xl overflow-hidden group cursor-pointer">
            <img
              loading="lazy"
              src={images[0]}
              alt="main image"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="bg-amber-400 overflow-hidden group cursor-pointer">
            <img
              src={images[1]}
              alt="main image"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="bg-amber-400 rounded-tr-2xl overflow-hidden group cursor-pointer">
            <img
              src={images[2]}
              alt="main image"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="bg-amber-400 overflow-hidden group cursor-pointer">
            <img
              src={images[3]}
              alt="main image"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="bg-amber-400 rounded-br-2xl overflow-hidden group cursor-pointer">
            <img
              src={images[4]}
              alt="main image"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </section>

        {/* main */}
        <main className="px-6 md:px-0 py-6 relative -top-6 md:top-0 bg-white rounded-t-3xl flex gap-10">
          {/* Content main */}
          <div>
            <div className="flex justify-center md:justify-start w-full">
              <h1 className="text-2xl font-medium text-center mcapitalize">
                Homestay ku yang indah nan jauh di sana
              </h1>
            </div>
            <div className="flex justify-center items-center md:items-start mt-6 md:mt-2 gap-y-1 flex-col">
              <p className="text-gray-500 text-xs font-light text-center">
                Sembungan, Dieng
              </p>
              <p className="text-gray-500 md:text-gray-700 text-xs md:text-sm font-light px-3 md:px-0 text-center">
                10 tamu . 3 Kamar . 3 Tempat tidur . 4 Kamar mandi
              </p>
            </div>
            {/* host */}
            <div className="py-6 border-t border-b mt-6 flex gap-4 items-center justify-start">
              <div className="w-11 h-11 aspect-square overflow-hidden rounded-full bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1723810742992-0e84241abcf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwd29vZGVuJTIwY2FiaW4lMjBpbnRlcmlvciUyMGhvbWVzdGF5fGVufDF8fHx8MTc3MDk3MTUxNHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-lg font-medium">Tuan rumah : Mujito</p>
                <p className="text-sm font-light text-gray-500">
                  Host teladan : tuan rumah selama 10 tahun
                </p>
              </div>
            </div>
            {/* Description */}
            <div className="mt-6 border-b pb-6">
              <p className="font-light text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                quo placeat, enim minus iste laborum! Hic, eos doloribus itaque
                aut quod maiores veritatis quae suscipit magnam exercitationem
                dolorem libero molestias! Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Mollitia nihil eligendi fugiat
                doloribus fugit quisquam harum. Impedit beatae velit quo, natus
                deleniti magnam deserunt
              </p>

              <div className="mt-4 ">
                <Button variant="link">Tampilkan lebih banyak</Button>
              </div>
            </div>
            {/* Amenities */}
            <section id="fasilitas" className="pt-20 border-b pb-6">
              <h2 className="text-xl font-semibold">
                Fasilitas yang ditawarkan
              </h2>
              <div className="mt-6 flex gap-5 flex-col">
                <div className="flex items-center gap-2 justify-start">
                  <WavesLadder
                    size={30}
                    className="min-w-10 "
                    strokeWidth={1.5}
                  />
                  <span className="text-md">Kolam renang</span>
                </div>
                <div className="flex items-center gap-2">
                  <HouseWifi
                    size={30}
                    className="min-w-10 "
                    strokeWidth={1.5}
                  />
                  <span className="text-md">Wifi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Armchair size={30} className="min-w-10 " strokeWidth={1.5} />
                  <span className="text-md">Ruang tamu</span>
                </div>
                <div className="flex items-center gap-2">
                  <Drum size={30} className="min-w-10 " strokeWidth={1.5} />
                  <span className="text-md">Studio music</span>
                </div>
              </div>
              <div className="mt-4">
                <Button variant="link">Tampilkan ke-40 fasilitas</Button>
              </div>
            </section>

            {/* calendar */}
            <div className="mt-6 border-b pb-6 ">
              {totalDays !== 0 && (
                <>
                  <h2 className="text-xl font-semibold">
                    {totalDays} malam di vilaa nan indah
                  </h2>
                  <p className="font-normal text-sm text-gray-400 mt-4">
                    {startDate} - {endDate}
                  </p>
                </>
              )}

              <div className="flex items-center justify-center w-full">
                {/* <DatePicker /> */}
                <DateRangePicker
                  value={range}
                  onChange={(val) => setRange(val)}
                />
              </div>
            </div>
            {/* Location  */}
            <div className="mt-6 border-b pb-6">
              <h2 className="text-xl font-semibold">Lokasi anda</h2>
              <p className="my-5">Jl. dieng km.2</p>

              <MapViewer
                center={[-7.205, 109.906]} // Dieng
                zoom={12}
                markers={[
                  {
                    id: "1",
                    position: [-7.205, 109.906],
                    label: "Dieng Plateau",
                  },
                ]}
              />
            </div>
          </div>

          {/* Header Content */}
          {/* Card */}
          <div className="hidden md:block">
            <div className="w-[350px] h-[350px] shadow-custom-lg rounded-2xl p-7 sticky! top-20">
              <p className="text-2xl">Rp. 240.000</p>
              <p className="text-gray-500 font-light">untuk 1 malam</p>
            </div>
          </div>
        </main>

        {/* booking card mobile */}
        <div className="w-full border-t z-[1000]  ease-in-out transition-all delay-150 border-zinc-100  bottom-0 left-0 md:hidden fixed bg-white flex px-6 py-5 items-center justify-between">
          {totalDays !== 0 ? (
            <div className="flex flex-col gap-1 ">
              <div className="flex gap-1 items-end justify-start">
                <p className="font-normal text-sm text-gray-500 line-through">
                  Rp. {price.toLocaleString("id-ID")}
                </p>
                <p className="font-semibold underline">
                  Rp. {totalPrice.toLocaleString("id-ID")}
                </p>
              </div>
              <p className="text-xs font-medium text-gray-400">
                Untuk {totalDays} malam . {startDate} - {endDate}
              </p>
            </div>
          ) : (
            <p className="text-md font-medium">
              Tambahkan tanggal untuk melihat harga
            </p>
          )}
          <Button asChild>
            <Link to="/book/properties">Pesan</Link>
          </Button>
        </div>
      </div>
      <div className="mb-20">
        <Footer />
      </div>
    </>
  );
}
