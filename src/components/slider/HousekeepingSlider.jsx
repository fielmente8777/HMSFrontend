import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import HousekeepingCard from "../cards/HousekeepingCard";

import Pillows from "../../images/Pillows.webp";
import Blankets from "../../images/Blankets.webp";
import Towels from "../../images/Towels.webp";
import Toiletries from "../../images/Toiletries.webp";
import { Autoplay } from "swiper/modules";

const HousekeepingSlider = () => {
  const housekeep = [
    {
      src: Pillows,
      title: "Pillows",
    },
    {
      src: Blankets,
      title: "Blankets",
    },
    {
      src: Towels,
      title: "Towels",
    },
    {
      src: Toiletries,
      title: "Toiletries",
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        slidesPerView={4}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {housekeep.map((item, index) => (
          <SwiperSlide key={index} className="me-4">
            <HousekeepingCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HousekeepingSlider;
