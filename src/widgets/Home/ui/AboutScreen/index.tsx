import { Feature } from "@shared/ui/Feature";
import { Slide } from "react-awesome-reveal";
import { Button } from "@shared/ui/Button";

import Image from "@assets/about_image.webp";

import "./styles.scss";

export const AboutScreen = () => {
  return (
    <>
      <section
        className="mobile-screen w-full flex flex-col items-center min-[1024px]:hidden"
        id="about-mob"
      >
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
          <Feature number="01" text="На рынке с 2011 года" marginTop="mt-6" />
        </Slide>
        <Slide direction="right" triggerOnce={true}>
          <Feature
            number="02"
            text="Более 80.000 кв.м выполненных объектов"
            marginTop="mt-6"
          />
        </Slide>
        <Slide direction="left" triggerOnce={true}>
          <Feature
            number="03"
            text="Годовая гарантия на работу"
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
      <section
        className="pc-screen w-full max-[1024px]:hidden mt-24"
        id="about"
      >
        <Slide direction="left" triggerOnce={true}>
          <h2>О компании</h2>
        </Slide>
        <Slide direction="right" triggerOnce={true}>
          <p className="paragraph mt-8 w-[60%]">
            Компания <span className="orange">Special Solution</span> занимается
            разработкой передовых решений, способных удовлетворить самые
            изысканные и специфические запросы наших клиентов. Мы сочетаем
            глубокие знания отрасли с инновационным мышлением, чтобы предлагать
            продукты и услуги, выходящие за рамки стандартных предложений.
          </p>
        </Slide>
        <div className="about-content w-full flex justify-between mt-12">
          <Slide direction="left" triggerOnce={true} className="w-full">
            <img
              src={Image}
              className="about-content__image flex flex-col"
              alt="about-image"
            />
          </Slide>
          <div className="about-content__text-container flex flex-col justify-between items-start ml-28">
            <Slide direction="right" triggerOnce={true} delay={100}>
              <Feature number="01" text="На рынке с 2011 года" />
            </Slide>
            <Slide direction="right" triggerOnce={true} delay={200}>
              <Feature
                number="02"
                text="Более с 80.000 кв.м выполненных объектов"
                marginTop="mt-4"
              />
            </Slide>
            <Slide direction="right" triggerOnce={true} delay={300}>
              <Feature
                number="03"
                text="Годовая гарантия на работу"
                marginTop="mt-4"
              />
            </Slide>
            <Slide direction="right" triggerOnce={true} delay={500}>
              <p className="paragraph">
                Компания <span className="orange">Special Solution</span>{" "}
                занимается разработкой передовых решений, способных
                удовлетворить самые изысканные и специфические запросы наших
                клиентов. Мы сочетаем глубокие знания отрасли с инновационным
                мышлением, чтобы предлагать продукты и услуги, выходящие за
                рамки стандартных предложений.
              </p>
            </Slide>
          </div>
        </div>
      </section>
    </>
  );
};
