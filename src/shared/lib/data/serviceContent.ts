// Assets
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
};
