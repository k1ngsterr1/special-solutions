import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { GalleryPhoto } from "@shared/ui/GalleryPhoto";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "./styles.scss";

interface GalleryItem {
  image: string;
  name?: string | any;
  category?: string | any;
  onClick?: () => void;
}

interface GalleryProps {
  items: GalleryItem[];
}

export const Gallery: React.FC<GalleryProps> = ({ items }) => {
  return (
    <Swiper
      className="swiper mt-8"
      slidesPerView={1}
      spaceBetween={64}
      modules={[Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      {items.map((item, index) => (
        <SwiperSlide
          key={index}
          className="swiper__slide"
          onClick={item.onClick}
        >
          <GalleryPhoto
            text={item.name}
            subText={item.category}
            url=""
            img={item.image}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
