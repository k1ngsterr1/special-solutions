import { Swiper, SwiperSlide } from "swiper/react";
import { GalleryPhoto } from "@shared/ui/GalleryPhoto";
import { Autoplay } from "swiper/modules";

// Assets
import gallery01 from "@assets/design_gallery_01.webp";

import "swiper/css";
import "swiper/css";
import "swiper/css/autoplay";
import "./styles.scss";

interface GalleryProps {
  image: string;
  image2: string;
  image3: string;
  image4: string;
}

export const Gallery: React.FC<GalleryProps> = ({
  image,
  image2,
  image3,
  image4,
}) => {
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
      <SwiperSlide className="swiper__slide">
        <GalleryPhoto
          text="Дизайн Интерьера"
          subText="Интерьер"
          url=""
          img={image}
        />
      </SwiperSlide>
      <SwiperSlide className="swiper__slide">
        <GalleryPhoto
          text="Дизайн Интерьера"
          subText="Интерьер"
          url=""
          img={image2}
        />
      </SwiperSlide>
      <SwiperSlide className="swiper__slide">
        <GalleryPhoto
          text="Дизайн Интерьера"
          subText="Интерьер"
          url=""
          img={image3}
        />
      </SwiperSlide>
      <SwiperSlide className="swiper__slide">
        <GalleryPhoto
          text="Дизайн Интерьера"
          subText="Интерьер"
          url=""
          img={image4}
        />
      </SwiperSlide>
    </Swiper>
  );
};
