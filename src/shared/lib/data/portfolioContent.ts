// Assets
import gallery02 from "@assets/interior.png";

interface PhotoItem {
  photo: string;
  thumbnail: string;
}

interface ServiceItem {
  service: string;
}
interface PortfolioInfo {
  title: string;
  description: string;
  servicesHeading: string;
  photos: PhotoItem[];
  services: ServiceItem[];
}

export const portfolioContent: Record<string, PortfolioInfo> = {
  astana_bank: {
    title: "Офис Астана Банк",
    description:
      "Компания Special Solution занимается разработкой передовых решений, способных удовлетворить самые изысканные и специфические запросы наших клиентов. Мы сочетаем глубокие знания отрасли с инновационным мышлением, чтобы предлагать продукты и услуги, выходящие за рамки стандартных предложений.",
    servicesHeading: "Выполненные услуги:",
    services: [
      {
        service: "Новый интерьер",
      },
      {
        service: "Новый интерьер",
      },
      {
        service: "Новый интерьер",
      },
      {
        service: "Новый интерьер",
      },
      {
        service: "Новый интерьер",
      },
    ],
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
