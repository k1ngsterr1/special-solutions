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
import mars_preview from "@assets/portfolio/mars/mars_preview.png";

import koktem01 from "@assets/portfolio/koktem/koktem1.webp";
import koktem02 from "@assets/portfolio/koktem/koktem2.webp";
import koktem03 from "@assets/portfolio/koktem/koktem3.webp";
import koktem04 from "@assets/portfolio/koktem/koktem4.webp";
import koktem05 from "@assets/portfolio/koktem/koktem5.webp";
import koktem06 from "@assets/portfolio/koktem/dar01.webp";
import koktem07 from "@assets/portfolio/koktem/dar02.webp";
import koktem08 from "@assets/portfolio/koktem/dar03.webp";

import syngent01 from "@assets/portfolio/syngenta/syngent01.webp";
import syngent02 from "@assets/portfolio/syngenta/syngent02.webp";
import syngent03 from "@assets/portfolio/syngenta/syngent03.webp";
import syngent04 from "@assets/portfolio/syngenta/syngent04.webp";
import syngent05 from "@assets/portfolio/syngenta/syngent05.webp";
// import syngent06 from "@assets/portfolio/syngenta/syngent06.webp";

import cat02 from "@assets/portfolio/CAT/cat02.webp";
import cat03 from "@assets/portfolio/CAT/cat03.webp";
import cat05 from "@assets/portfolio/CAT/cat05.webp";
import cat06 from "@assets/portfolio/CAT/cat06.webp";
import cat07 from "@assets/portfolio/CAT/cat07.webp";

import standard01 from "@assets/portfolio/insurance/insurance1.webp";
import standard02 from "@assets/portfolio/insurance/insurance2.webp";
import standard03 from "@assets/portfolio/insurance/insurance3.webp";
import standard04 from "@assets/portfolio/insurance/insurance4.webp";

export interface PhotoItem {
  type: "image" | "video";
  source?: string;
  photo: string;
  thumbnail: string;
}
interface AdressItem {
  adress: string;
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
  officeName: string;
  metaDescription: string;
}

export const portfolioContent: Record<string, PortfolioInfo> = {
  astana_bank: {
    title: "Офис Астана Банк",
    officeName: "Астана Банк",
    metaDescription:
      "Банк Астаны — коммерческое банковское учреждение. По размеру активов входил в двадцатку крупнейших казахстанских финансовых предприятий. До 2015 года банк был известен под названием Астана-Финанс.",
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
        type: "image",
        photo: astana01,
        thumbnail: astana01,
      },
      {
        type: "image",
        photo: astana02,
        thumbnail: astana02,
      },
      {
        type: "image",
        photo: astana03,
        thumbnail: astana03,
      },
      {
        type: "image",
        photo: astana04,
        thumbnail: astana04,
      },
      {
        type: "image",
        photo: astana05,
        thumbnail: astana05,
      },
    ],
  },
  mars: {
    title: "Офис компании Mars Казахстан",
    officeName: "Mars",
    metaDescription:
      "Mars - это одна из ведущих международных компаний по производству продуктов питания и кормов для животных. Офис Mars в Алматы является региональной штаб-квартирой и отвечает за бизнес компании в 12 странах: Азербайджан, Армения, Беларусь, Грузия, Казахстан, Кыргызстан, Молдова, Монголия, Узбекистан, Таджикистан, Туркменистан и Турция.",
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
        type: "image",
        photo: mars01,
        thumbnail: mars01,
      },
      {
        type: "image",
        photo: mars02,
        thumbnail: mars02,
      },
      {
        type: "image",
        photo: mars03,
        thumbnail: mars03,
      },
      {
        type: "image",
        photo: mars04,
        thumbnail: mars04,
      },
      {
        type: "video",
        photo: mars04,
        thumbnail: mars_preview,
        source: "https://www.youtube.com/embed/F5rerYMmK90?si=_Iy5Wb8LKMnl2ZgD",
      },
    ],
  },
  dar: {
    title: "Офис компании DAR Казахстан",
    officeName: "DAR Казахстан",
    metaDescription:
      "DAR - группа компаний, создающая цифровые продукты. DAR разрабатываем проекты в сфере образования, спорта и финтеха, а также цифровые инструменты для работы бизнеса и улучшения качества жизни и развития людей. ",
    description:
      "DAR - группа компаний, создающая цифровые продукты. DAR разрабатываем проекты в сфере образования, спорта и финтеха, а также цифровые инструменты для работы бизнеса и улучшения качества жизни и развития людей. ",
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
        type: "image",
        photo: koktem01,
        thumbnail: koktem01,
      },
      {
        type: "image",
        photo: koktem02,
        thumbnail: koktem02,
      },
      {
        type: "image",
        photo: koktem03,
        thumbnail: koktem03,
      },
      {
        type: "image",
        photo: koktem04,
        thumbnail: koktem04,
      },
      {
        type: "image",
        photo: koktem05,
        thumbnail: koktem05,
      },
      {
        type: "image",
        photo: koktem06,
        thumbnail: koktem06,
      },
      {
        type: "image",
        photo: koktem07,
        thumbnail: koktem07,
      },
      {
        type: "image",
        photo: koktem08,
        thumbnail: koktem08,
      },
    ],
  },
  syngent: {
    title: "Офис компании Syngenta Казахстан",
    officeName: "Syngenta Казахстан",
    metaDescription:
      "Фирма «Syngenta» занимает лидирующую позицию среди разработчиков и производителей средств защиты растений, и третье место - на рынке высококачественных семян. Благодаря богатому ассортименту препаратов, мощной технологической базе и большому научно-исследовательскому потенциалу компания лидирует в мировом агробизнесе.",
    description:
      "Фирма «Syngenta» занимает лидирующую позицию среди разработчиков и производителей средств защиты растений, и третье место - на рынке высококачественных семян. Благодаря богатому ассортименту препаратов, мощной технологической базе и большому научно-исследовательскому потенциалу компания лидирует в мировом агробизнесе.",
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
        type: "image",
        photo: syngent01,
        thumbnail: syngent01,
      },
      {
        type: "image",
        photo: syngent02,
        thumbnail: syngent02,
      },
      {
        type: "image",
        photo: syngent03,
        thumbnail: syngent03,
      },
      {
        type: "image",
        photo: syngent04,
        thumbnail: syngent04,
      },
      {
        type: "image",
        photo: syngent05,
        thumbnail: syngent05,
      },
    ],
  },
  CAT: {
    title: "CAT Казахстан",
    officeName: "CAT",
    metaDescription:
      "Mars - это одна из ведущих международных компаний по производству продуктов питания и кормов для животных. Офис Mars в Алматы является региональной штаб-квартирой и отвечает за бизнес компании в 12 странах: Азербайджан, Армения, Беларусь, Грузия, Казахстан, Кыргызстан, Молдова, Монголия, Узбекистан, Таджикистан, Туркменистан и Турция.",
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
        type: "image",
        photo: cat02,
        thumbnail: cat02,
      },
      {
        type: "image",
        photo: cat03,
        thumbnail: cat03,
      },
      {
        type: "image",
        photo: cat07,
        thumbnail: cat07,
      },
      {
        type: "image",
        photo: cat05,
        thumbnail: cat05,
      },
      {
        type: "image",
        photo: cat06,
        thumbnail: cat06,
      },
    ],
  },
  standard_insurance: {
    title: "Standard Insurance",
    officeName: "Standard Insurance",
    metaDescription:
      "Mars - это одна из ведущих международных компаний по производству продуктов питания и кормов для животных. Офис Mars в Алматы является региональной штаб-квартирой и отвечает за бизнес компании в 12 странах: Азербайджан, Армения, Беларусь, Грузия, Казахстан, Кыргызстан, Молдова, Монголия, Узбекистан, Таджикистан, Туркменистан и Турция.",
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
        type: "image",
        photo: standard01,
        thumbnail: standard01,
      },
      {
        type: "image",
        photo: standard02,
        thumbnail: standard02,
      },
      {
        type: "image",
        photo: standard03,
        thumbnail: standard03,
      },
      {
        type: "image",
        photo: standard04,
        thumbnail: standard04,
      },
    ],
  },
};
