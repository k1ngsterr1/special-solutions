import { Feature } from "@shared/ui/Feature";
import { Slide } from "react-awesome-reveal";

import Image from "@assets/about_image.webp";

import "./styles.scss";

export const AboutScreen = () => {
  return (
    <>
      <Slide direction="left" triggerOnce={true}>
        <h2 className="mt-12">О компании</h2>
      </Slide>
      <Slide direction="right" triggerOnce={true}>
        <p className="paragraph text-center mt-8">
          Компания <span className="orange">Special Solution</span> занимается
          разработкой передовых решений, способных удовлетворить самые
          изысканные и специфические запросы наших клиентов. Мы сочетаем
          глубокие знания отрасли с инновационным мышлением, чтобы предлагать
          продукты и услуги, выходящие за рамки стандартных предложений.
        </p>
      </Slide>
      <Slide direction="left" triggerOnce={true}>
        <Feature
          number="01"
          text="Архитектурное Проектирование"
          marginTop="mt-6"
        />
      </Slide>
      <Slide direction="right" triggerOnce={true}>
        <Feature number="02" text="Строительство" marginTop="mt-6" />
      </Slide>
      <Slide direction="left" triggerOnce={true}>
        <Feature number="03" text="Фасадное остекление" marginTop="mt-6" />
      </Slide>
      <Slide direction="right" triggerOnce={true}>
        <Feature
          number="04"
          text="Изготовление и монтаж офисных перегородок"
          marginTop="mt-6"
        />
      </Slide>
      <Slide direction="left" triggerOnce={true}>
        <img src={Image} className="about-image mt-12" alt="about-image" />
      </Slide>
      <Slide direction="right" triggerOnce={true}>
        <p className="paragraph text-center mt-8">
          Компания <span className="orange">Special Solution</span> занимается
          разработкой передовых решений, способных удовлетворить самые
          изысканные и специфические запросы наших клиентов. Мы сочетаем
          глубокие знания отрасли с инновационным мышлением, чтобы предлагать
          продукты и услуги, выходящие за рамки стандартных предложений.
        </p>
      </Slide>
    </>
  );
};
