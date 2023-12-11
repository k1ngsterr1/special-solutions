import React, { useState } from "react";
import { Feature } from "@shared/ui/Feature";
import { Fade, Slide } from "react-awesome-reveal";
import line from "@assets/plus.svg";

import "./styles.scss";

export const StepsScreen = () => {
  const [isOpen, setOpen] = useState(false);

  function useSteps() {
    setOpen(!isOpen);
  }

  return (
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
      <Fade direction="up">
        <img
          onClick={useSteps}
          className={`line mt-8 ${isOpen ? "cross" : ""}`}
          src={line}
          alt="line"
        />
      </Fade>
      {isOpen ? (
        <>
          <Slide direction="left" className="w-full flex flex-col" delay={150}>
            <Feature
              number="01"
              textType="text-center"
              text="На рынке с 2011 года"
              marginTop="mt-6"
            />
          </Slide>
          <Slide direction="right" delay={250}>
            <Feature
              number="02"
              textType="text-center"
              text="На рынке с 2011 года"
              marginTop="mt-16"
            />
          </Slide>
          <Slide direction="left" delay={350}>
            <Feature
              number="03"
              textType="text-center"
              text="На рынке с 2011 года"
              marginTop="mt-16"
            />
          </Slide>
          <Slide direction="right" delay={450}>
            <Feature
              number="04"
              textType="text-center"
              text="На рынке с 2011 года"
              marginTop="mt-16"
            />
          </Slide>
          <Slide direction="left" delay={550}>
            <Feature
              number="05"
              textType="text-center"
              text="На рынке с 2011 года"
              marginTop="mt-16"
            />
          </Slide>
        </>
      ) : null}
    </section>
  );
};
