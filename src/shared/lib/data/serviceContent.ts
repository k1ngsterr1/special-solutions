// Assets
import gallery01 from "@assets/design_gallery_01.webp";
import gallery02 from "@assets/interior.png";

interface PhotoItem {
  photo: string;
  thumbnail: string;
}

interface ServiceInfo {
  title: string;
  description: string;
  photos: PhotoItem[];
}

export const serviceContent: Record<string, ServiceInfo> = {
  design: {
    title: "Дизайн Интерьеров",
    description:
      "Компания Special Solution занимается разработкой передовых решений, способных удовлетворить самые изысканные и специфические запросы наших клиентов. Мы сочетаем глубокие знания отрасли с инновационным мышлением, чтобы предлагать продукты и услуги, выходящие за рамки стандартных предложений.",
    photos: [
      {
        photo: gallery02,
        thumbnail: gallery02,
      },
      {
        photo: gallery02,
        thumbnail: gallery02,
      },
      {
        photo: gallery02,
        thumbnail: gallery02,
      },
      {
        photo: gallery02,
        thumbnail: gallery02,
      },
      {
        photo: gallery02,
        thumbnail: gallery02,
      },
    ],
  },
  development: {
    title: "Development Services",
    description: "Our development team creates scalable applications...",
    photos: [
      {
        photo: gallery01,
        thumbnail: gallery01,
      },
    ],
  },
};
