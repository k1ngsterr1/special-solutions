import { Swiper, SwiperSlide } from "swiper/react";
import { GalleryPhoto } from "@shared/ui/GalleryPhoto";

// Assets
import gallery01 from "@assets/design_gallery_01.webp";

import "swiper/css";
import "./styles.scss";

export const Gallery = () => {
  return (
    <Swiper className="swiper" slidesPerView={1} spaceBetween={64}>
      <SwiperSlide className="swiper__slide">
        <GalleryPhoto
          text="Дизайн Интерьера"
          subText="Интерьер"
          url=""
          img={gallery01}
        />
      </SwiperSlide>
      <SwiperSlide className="swiper__slide">
        <GalleryPhoto
          text="Дизайн Интерьера"
          subText="Интерьер"
          url=""
          img={gallery01}
        />
      </SwiperSlide>
      <SwiperSlide className="swiper__slide">
        <GalleryPhoto
          text="Дизайн Интерьера"
          subText="Интерьер"
          url=""
          img={gallery01}
        />{" "}
      </SwiperSlide>
      <SwiperSlide className="swiper__slide">
        <GalleryPhoto
          text="Дизайн Интерьера"
          subText="Интерьер"
          url=""
          img={gallery01}
        />
      </SwiperSlide>
    </Swiper>
  );
};
