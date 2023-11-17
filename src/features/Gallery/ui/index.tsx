import { Swiper, SwiperSlide } from "swiper/react";
import { GalleryPhoto } from "@shared/ui/GalleryPhoto";

// Assets
import gallery01 from "@assets/design_gallery_01.webp";

import "./styles.scss";
interface GalleryProps {
  img: string;
}

export const Gallery: React.FC<GalleryProps> = ({ img }) => {
  return (
    <Swiper className="swiper">
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
        />{" "}
      </SwiperSlide>
    </Swiper>
  );
};
