import { useState } from "react";
import { Feature } from "@shared/ui/Feature";
import { Slide } from "react-awesome-reveal";
import line from "@assets/plus.svg";

import "./styles.scss";

export const StepsScreen = () => {
  const [isOpen, setOpen] = useState(false);
  const [stepOne, setStepOne] = useState(false);
  const [stepTwo, setStepTwo] = useState(false);
  const [stepThree, setStepThree] = useState(false);
  const [stepFour, setStepFour] = useState(false);
  const [stepFive, setStepFive] = useState(false);
  const [stepSix, setStepSix] = useState(false);
  const [stepSeven, setStepSeven] = useState(false);
  const [stepEight, setStepEight] = useState(false);
  const [stepNine, setStepNine] = useState(false);

  function useSteps() {
    setOpen(!isOpen);
  }

  function useStepOne() {
    setStepOne(!stepOne);
    setStepTwo(true);
  }

  function useStepTwo() {
    setStepTwo(!stepTwo);
    setStepThree(!stepThree);
    setStepFour(true);
  }

  function useStepFour() {
    setStepFive(!stepFive);
    setStepFour(!stepFour);
    setStepSix(true);
  }

  function useStepFive() {
    setStepSix(!stepSix);
    setStepSeven(!stepSeven);
    setStepEight(true);
  }

  function useStepSix() {
    setStepSeven(!stepSeven);
    setStepEight(!stepEight);
    setStepNine(true);
  }

  return (
    <>
      <section
        className="mobile-screen w-full flex flex-col items-center mt-20 min-[1024px]:hidden"
        id="steps-mob"
      >
        <Slide triggerOnce>
          <h3>Этапы работы</h3>
        </Slide>
        <Slide
          direction="right"
          triggerOnce
          delay={150}
          className="flex justify-center"
        >
          <p className="paragraph text-center mt-4 w-[80%]">
            Нажмите на плюсик, чтобы увидеть все этапы работы
          </p>
        </Slide>
        <Slide direction="left">
          <img
            onClick={useSteps}
            className={`line mt-8 ${isOpen ? "cross" : ""}`}
            src={line}
            alt="line"
          />
        </Slide>
        {isOpen ? (
          <>
            <Slide
              direction="left"
              className="w-full flex flex-col"
              delay={150}
            >
              <Feature
                number="01"
                textType="text-center"
                text="Опрос заказчика"
                marginTop="mt-6"
              />
            </Slide>
            <Slide direction="right" delay={250}>
              <Feature
                number="02"
                textType="text-center"
                text="Выезд на объект, обследование, замеры, видеосъемка"
                marginTop="mt-16"
              />
            </Slide>
            <Slide direction="left" delay={350}>
              <Feature
                number="03"
                textType="text-center"
                text="Эскизный проект"
                marginTop="mt-16"
              />
            </Slide>
            <Slide direction="right" delay={450}>
              <Feature
                number="04"
                textType="text-center"
                text="Рабочая документация"
                marginTop="mt-16"
              />
            </Slide>
            <Slide direction="left" delay={550}>
              <Feature
                number="05"
                textType="text-center"
                text="Реализация проекта"
                marginTop="mt-16"
              />
            </Slide>
          </>
        ) : null}
      </section>
      <section
        className="flex flex-col items-center  w-full max-[1024px]:hidden mt-28"
        id="steps"
      >
        <Slide triggerOnce>
          <h3>Этапы работы</h3>
        </Slide>
        <p className="paragraph text-center w-[50%] mt-6">
          Каждый этап работы в Special Solutions нацелен на создание не просто
          зданий, а продуманных, устойчивых и инновационных пространств, которые
          способствуют росту и успеху бизнеса наших клиентов.
        </p>
        <div className="w-full h-auto flex flex-col items-center relative">
          <>
            <Slide direction="right" triggerOnce>
              <img
                src={line}
                onClick={useStepOne}
                className={`cursor-pointer line mt-16 ${
                  stepOne ? "hidden" : ""
                }`}
                alt="line"
              />
            </Slide>
          </>
          {stepOne ? (
            <>
              <Slide direction="left" triggerOnce>
                <div className="step-container flex flex-col items-center mt-12">
                  <span className="text-custom-orange text-5xl">01</span>
                  <span className="text-custom-black step mt-4">
                    Опрос заказчика
                  </span>
                </div>
              </Slide>
            </>
          ) : null}
          {stepTwo ? (
            <>
              <Slide direction="right" triggerOnce>
                <img
                  src={line}
                  onClick={useStepTwo}
                  className={`cursor-pointer line mt-16 ${
                    stepTwo ? "" : "hidden"
                  }`}
                  alt="line"
                />
              </Slide>
            </>
          ) : null}
          {stepThree ? (
            <>
              <Slide direction="left" triggerOnce>
                <div className="step-container flex flex-col items-center mt-12">
                  <span className="text-custom-orange text-5xl">02</span>
                  <span className="text-custom-black step mt-4 text-center w-[60%]">
                    Выезд на объект, обследование, замеры, видеосъемка
                  </span>
                </div>
              </Slide>
            </>
          ) : null}
          {stepFour ? (
            <>
              <Slide direction="right" triggerOnce>
                <img
                  src={line}
                  onClick={useStepFour}
                  className={`cursor-pointer line mt-16 ${
                    stepFour ? "" : "hidden"
                  }`}
                  alt="line"
                />
              </Slide>
            </>
          ) : null}
          {stepFive ? (
            <>
              <Slide direction="left" triggerOnce>
                <div className="step-container flex flex-col items-center mt-12">
                  <span className="text-custom-orange text-5xl">03</span>
                  <span className="text-custom-black step mt-4 text-center w-[60%]">
                    Эскизный проект
                  </span>
                </div>
              </Slide>
            </>
          ) : null}
          {stepSix ? (
            <>
              <Slide direction="right" triggerOnce>
                <img
                  src={line}
                  onClick={useStepFive}
                  className={`cursor-pointer line mt-16 ${
                    stepSix ? "" : "hidden"
                  }`}
                  alt="line"
                />
              </Slide>
            </>
          ) : null}
          {stepSeven ? (
            <>
              <Slide direction="left" triggerOnce>
                <div className="step-container flex flex-col items-center mt-12">
                  <span className="text-custom-orange text-5xl">04</span>
                  <span className="text-custom-black step mt-4 text-center w-[60%]">
                    Рабочая документация
                  </span>
                </div>
              </Slide>
            </>
          ) : null}
          {stepEight ? (
            <>
              <Slide direction="right" triggerOnce>
                <img
                  src={line}
                  onClick={useStepSix}
                  className={`cursor-pointer line mt-16 ${
                    stepEight ? "" : "hidden"
                  }`}
                  alt="line"
                />
              </Slide>
            </>
          ) : null}
          {stepNine ? (
            <>
              <Slide direction="left" triggerOnce>
                <div className="step-container flex flex-col items-center mt-12">
                  <span className="text-custom-orange text-5xl">05</span>
                  <span className="text-custom-black step mt-4 text-center w-[60%]">
                    Реализация проекта
                  </span>
                </div>
              </Slide>
            </>
          ) : null}
        </div>
      </section>
    </>
  );
};
