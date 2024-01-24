import { Feature } from "@shared/ui/Feature";
import { Slide } from "react-awesome-reveal";
import { ScrollButton } from "@shared/ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            Более 12 лет наша компания стремится к созданию инновационных
            пространств, способствующих эффективной работе и открывающих новые
            перспективы для развития бизнеса. Наш подход основан на глубоком
            изучении потребностей клиентов, что позволяет нам предлагать
            выгодные и персонализированные решения. Мы активно внедряем
            современные технологии, опираясь на результаты практических
            исследований, чтобы обеспечить наших клиентов наилучшими
            инструментами для успешного развития и процветания их бизнеса.
          </p>
        </Slide>
        <Slide direction="left" triggerOnce={true}>
          <Feature
            textType="text-center"
            text="На рынке с 2011 года"
            marginTop="mt-6"
          />
        </Slide>
        <Slide direction="right" triggerOnce={true}>
          <Feature
            textType="text-center"
            text="Более 80.000 кв.м выполненных объектов"
            marginTop="mt-6"
          />
        </Slide>
        <Slide direction="left" triggerOnce={true}>
          <Feature
            textType="text-center"
            text="Гарантия на работу"
            marginTop="mt-6"
          />
        </Slide>
        <Slide direction="right" triggerOnce={true}>
          <Feature
            textType="text-center"
            text="Лицензии в области строительства и архитектуры"
            marginTop="mt-6"
          />
        </Slide>
        <Slide direction="left" triggerOnce={true}>
          <img src={Image} className="about-image mt-12" alt="about-image" />
        </Slide>
        <Slide direction="right" triggerOnce={true}>
          <p className="paragraph text-center mt-8">
            Мы стремимся предоставлять нашим клиентам выдающиеся пространства,
            объединяя опыт, экспертизу, продукты и поддержку от ведущих мировых
            брендов. Наша миссия основана на инновационном производстве и
            предоставлении качественных услуг. Мы посвящаем себя обеспечению
            клиентов лучшими решениями для их потребностей, создавая условия для
            успешного развития и процветания.
          </p>
        </Slide>
        <Slide direction="left" triggerOnce={true}>
          <ScrollButton
            text="Связаться нами"
            marginTop="mt-8"
            type="outline"
            to={"contacts-mob"}
          />
        </Slide>
      </section>
      <section className="pc-screen w-full max-[1024px]:hidden mt-1" id="about">
        <Slide direction="left" className="mt-28" triggerOnce={true}>
          <h2>О компании</h2>
        </Slide>
        <Slide direction="right" triggerOnce={true}>
          <p className="paragraph mt-8 w-[60%]">
            Более 12 лет наша компания стремится к созданию инновационных
            пространств, способствующих эффективной работе и открывающих новые
            перспективы для развития бизнеса. Наш подход основан на глубоком
            изучении потребностей клиентов, что позволяет нам предлагать
            выгодные и персонализированные решения. Мы активно внедряем
            современные технологии, опираясь на результаты практических
            исследований, чтобы обеспечить наших клиентов наилучшими
            инструментами для успешного развития и процветания их бизнеса.
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
              <Feature textType="text-left" text="На рынке с 2011 года" />
            </Slide>
            <Slide direction="right" triggerOnce={true} delay={200}>
              <Feature
                textType="text-left"
                text="Более 80.000 кв.м выполненных объектов"
                marginTop="mt-0"
              />
            </Slide>
            <Slide direction="right" triggerOnce={true} delay={300}>
              <Feature
                textType="text-left"
                text="Гарантия на работу"
                marginTop="mt-0"
              />
            </Slide>
            <Slide direction="right" triggerOnce={true} delay={400}>
              <Feature
                textType="text-left"
                text="Лицензии в области строительства и архитектуры"
                marginTop="mt-0"
              />
            </Slide>
            <Slide direction="right" triggerOnce={true} delay={500}>
              <p className="paragraph">
                Мы стремимся предоставлять нашим клиентам выдающиеся
                пространства, объединяя опыт, экспертизу, продукты и поддержку
                от ведущих мировых брендов. Наша миссия основана на
                инновационном производстве и предоставлении качественных услуг.
                Мы посвящаем себя обеспечению клиентов лучшими решениями для их
                потребностей, создавая условия для успешного развития и
                процветания.
              </p>
            </Slide>
          </div>
        </div>
      </section>
    </>
  );
};
