// Assets
import astana01 from "@assets/portfolio/astana_bank/astana01.webp";
import astana02 from "@assets/portfolio/astana_bank/astana02.webp";
import astana03 from "@assets/portfolio/astana_bank/astana03.webp";
import astana04 from "@assets/portfolio/astana_bank/astana04.webp";
import astana05 from "@assets/portfolio/astana_bank/astana05.webp";

import mars01 from "@assets/portfolio/mars/mars01.webp";
import mars02 from "@assets/portfolio/mars/mars02.webp";
import mars03 from "@assets/portfolio/mars/mars03.webp";
import mars04 from "@assets/portfolio/mars/mars04.webp";

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
      "Банк Астаны — коммерческое банковское учреждение. По размеру активов входил в двадцатку крупнейших казахстанских финансовых предприятий. До 2015 года банк был известен под названием Астана-Финанс.",
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
        photo: astana01,
        thumbnail: astana01,
      },
      {
        photo: astana02,
        thumbnail: astana02,
      },
      {
        photo: astana03,
        thumbnail: astana03,
      },
      {
        photo: astana04,
        thumbnail: astana04,
      },
      {
        photo: astana05,
        thumbnail: astana05,
      },
    ],
  },
  mars: {
    title: "Офис компании Mars Казахстан",
    description:
      "Mars - это одна из ведущих международных компаний по производству продуктов питания и кормов для животных. Офис Mars в Алматы является региональной штаб-квартирой и отвечает за бизнес компании в 12 странах: Азербайджан, Армения, Беларусь, Грузия, Казахстан, Кыргызстан, Молдова, Монголия, Узбекистан, Таджикистан, Туркменистан и Турция.",
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
        photo: mars01,
        thumbnail: mars01,
      },
      {
        photo: mars02,
        thumbnail: mars02,
      },
      {
        photo: mars03,
        thumbnail: mars03,
      },
      {
        photo: mars04,
        thumbnail: mars04,
      },
    ],
  },
};
