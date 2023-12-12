// Assets
import gallery02 from "@assets/interior.png";

interface PhotoItem {
  photo: string;
  thumbnail: string;
}
interface AdressItem {
  adress: string;
}

interface ServiceItem {
  service: string;
}
interface PortfolioInfo {
  title: string;
  description: string;
  objectAddress: string;
  servicesHeading: string;
  adresses: AdressItem[];
  photos: PhotoItem[];
  serviceYear: string;
  serviceLocation: string;
  serviceSquare: string;
  service: string;
}

export const portfolioContent: Record<string, PortfolioInfo> = {
  astana_bank: {
    title: "Офис Астана Банк",
    description:
      "Компания Special Solution занимается разработкой передовых решений, способных удовлетворить самые изысканные и специфические запросы наших клиентов. Мы сочетаем глубокие знания отрасли с инновационным мышлением, чтобы предлагать продукты и услуги, выходящие за рамки стандартных предложений.",
    servicesHeading: "Выполненные работы:",
    objectAddress: "Адрес объекта:",
    serviceYear: "2021",
    serviceLocation: "Желтоксан 134",
    serviceSquare: "1000кв.м",
    service: "Создание нового интерьера",
    adresses: [
      {
        adress: "Адрес номер 1",
      },
      {
        adress: "Адрес номер 2",
      },
      {
        adress: "Адрес номер 3",
      },
      {
        adress: "Адрес номер 4",
      },
      {
        adress: "Адрес номер 4",
      },
      {
        adress: "Адрес номер 4",
      },
      {
        adress: "Адрес номер 4",
      },
      {
        adress: "Адрес номер 4",
      },
      {
        adress: "Адрес номер 4",
      },
      {
        adress: "Адрес номер 4",
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
