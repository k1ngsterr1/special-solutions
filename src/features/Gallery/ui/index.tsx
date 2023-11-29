import { Swiper, SwiperSlide } from "swiper/react";
import { GalleryPhoto } from "@shared/ui/GalleryPhoto";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css";
import "swiper/css/autoplay";
import "./styles.scss";

interface GalleryProps {
  image: string;
  image2: string;
  image3: string;
  image4: string;
  onClick?: () => void;
  onClick2?: () => void;
  onClick3?: () => void;
  onClick4?: () => void;
}

export const Gallery: React.FC<GalleryProps> = ({
  image,
  image2,
  image3,
  image4,
  onClick,
  onClick2,
  onClick3,
  onClick4,
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
      <SwiperSlide className="swiper__slide" onClick={onClick}>
        <GalleryPhoto
          text="Дизайн Интерьера"
          subText="Интерьер"
          url=""
          img={image}
        />
      </SwiperSlide>
      <SwiperSlide className="swiper__slide" onClick={onClick2}>
        <GalleryPhoto
          text="Дизайн Интерьера"
          subText="Интерьер"
          url=""
          img={image2}
        />
      </SwiperSlide>
      <SwiperSlide className="swiper__slide" onClick={onClick3}>
        <GalleryPhoto
          text="Дизайн Интерьера"
          subText="Интерьер"
          url=""
          img={image3}
        />
      </SwiperSlide>
      <SwiperSlide className="swiper__slide" onClick={onClick4}>
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
