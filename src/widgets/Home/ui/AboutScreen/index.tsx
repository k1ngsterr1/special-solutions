import { Feature } from "@shared/ui/Feature";
import { Slide } from "react-awesome-reveal";
import { Button } from "@shared/ui/Button";

import Image from "@assets/about_image.webp";

import "./styles.scss";

export const AboutScreen = () => {
  return (
    <>
      <section className="mobile-screen w-full flex flex-col items-center min-[1024px]:hidden">
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
        <Slide direction="left" triggerOnce={true}>
          <Button
            text="Связаться нами"
            marginTop="mt-8"
            type="outline"
            onClick={() => console.log("holla")}
          />
        </Slide>
      </section>
      <section className="pc-screen w-full max-[1024px]:hidden">
        <h2>О компании</h2>
        <p className="paragraph mt-8 w-[60%]">
          Компания <span className="orange">Special Solution</span> занимается
          разработкой передовых решений, способных удовлетворить самые
          изысканные и специфические запросы наших клиентов. Мы сочетаем
          глубокие знания отрасли с инновационным мышлением, чтобы предлагать
          продукты и услуги, выходящие за рамки стандартных предложений.
        </p>
        <div className="about-content w-full flex justify-between mt-12">
          <img src={Image} className="about-content__image" alt="about-image" />
          <div className="about-content__text-container flex flex-col items-start">
            <Feature number="01" text="Архитектурное  Проектирование" />
            <Feature number="02" text="Строительство" />
            <Feature number="03" text="Фасадное остекление" />
            <Feature
              number="04"
              text="Изготовление и монтаж офисных перегородок"
            />
            <p className="paragraph">
              Компания <span className="orange">Special Solution</span>{" "}
              занимается разработкой передовых решений, способных удовлетворить
              самые изысканные и специфические запросы наших клиентов. Мы
              сочетаем глубокие знания отрасли с инновационным мышлением, чтобы
              предлагать продукты и услуги, выходящие за рамки стандартных
              предложений.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
