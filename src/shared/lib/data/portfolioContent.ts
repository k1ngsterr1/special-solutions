// Assets
import gallery01 from "@assets/design_gallery_01.webp";

interface PortfolioInfo {
  title: string;
  description: string;
  image: string;
  image2: string;
  image3: string;
  image4: string;
}

export const portfolioContent: Record<string, PortfolioInfo> = {
  astana_bank: {
    title: "Офис Астана Банк",
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
