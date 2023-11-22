// Assets
import gallery01 from "@assets/design_gallery_01.webp";
import gallery02 from "../../../assets/design_gallery_01.webp";

interface ServiceInfo {
  title: string;
  description: string;
  image: any;
  image2: any;
  image3: any;
  image4: any;
}

export const serviceContent: Record<string, ServiceInfo> = {
  design: {
    title: "Дизайн Интерьеров",
    description:
      "Компания Special Solution занимается разработкой передовых решений, способных удовлетворить самые изысканные и специфические запросы наших клиентов. Мы сочетаем глубокие знания отрасли с инновационным мышлением, чтобы предлагать продукты и услуги, выходящие за рамки стандартных предложений.",
    image: gallery01,
    image2: gallery01,
    image3: gallery01,
    image4: gallery01,
  },
  development: {
    title: "Development Services",
    description: "Our development team creates scalable applications...",
    image: "path/to/development/image.jpg",
    image2: "path/to/design/image.jpg",
    image3: "path/to/design/image.jpg",
    image4: "path/to/design/image.jpg",
  },
};
