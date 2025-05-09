"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
  FreeMode,
} from "swiper/modules";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface PhotoSliderProps {
  thumbnails: string[];
}

export default function PhotoSlider({ thumbnails }: PhotoSliderProps) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [navigationReady, setNavigationReady] = useState(false);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      setNavigationReady(true);
    }
  }, []);

  return (
    <div className="relative w-full">
      <button
        ref={prevRef}
        className={`absolute top-1/2 left-1 md:left-4 z-20 -translate-y-1/2 rounded-full md:p-2 lg:p-3 transition-all duration-300  group-hover:opacity-100 bg-white/80 hover:bg-white shadow-lg hover:shadow-xl`}
        aria-label="Previous slide"
      >
        <IoIosArrowBack className="md:size-4 lg:size-6 text-gray-800" />
      </button>

      <button
        ref={nextRef}
        className={`absolute top-1/2 right-1 md:right-4 z-20 -translate-y-1/2 rounded-full md:p-2 lg:p-3 transition-all duration-300  group-hover:opacity-100 bg-white/80 hover:bg-white shadow-lg hover:shadow-xl`}
        aria-label="Next slide"
      >
        <IoIosArrowForward className="md:size-4 lg:size-6 text-gray-800" />
      </button>

      <Swiper
        cssMode={true}
        loop={true}
        navigation={
          navigationReady
            ? {
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }
            : false
        }
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        spaceBetween={50}
        modules={[
          Navigation,
          Pagination,
          Mousewheel,
          Keyboard,
          Autoplay,
          FreeMode,
        ]}
        className="mySwiper"
      >
        {thumbnails.map((thumbnail, index) => (
          <SwiperSlide
            className="border rounded-3xl overflow-hidden"
            key={index}
          >
            <div className="relative card-shadow aspect-video rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <Image
                src={thumbnail}
                alt={`${index} screenshot ${index + 1}`}
                fill
                quality={100}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
