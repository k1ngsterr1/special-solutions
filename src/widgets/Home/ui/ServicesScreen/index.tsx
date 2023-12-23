import { ServiceTab } from "@shared/ui/ServiceTab";
import { Slide } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import { Button } from "@shared/ui/Button";

import { useEffect } from "react";

// Assets
import service01 from "@assets/office01.webp";
import service02 from "@assets/office02.webp";
import service03 from "@assets/office03.webp";
import service04 from "@assets/office04.webp";

export const ServicesScreen = () => {
  const navigate = useNavigate();

  function navigateServices() {
    navigate("/services");
  }

  function navigateServiceCase() {
    navigate("/services/design");
  }

  return (
    <>
      <section
        className="mobile-container w-full flex flex-col items-center min-[1024px]:hidden"
        id="services-mob"
      >
        <Slide direction="right" triggerOnce={true}>
          <h3 className="mt-12">Наши Услуги</h3>
        </Slide>
        <Slide direction="left" triggerOnce={true}>
          <p className="paragraph text-center mt-8">
            Наши услуги охватывают широкий спектр современных решений для
            бизнеса и частных клиентов. Мы предлагаем высококлассные
            консультации, разработку на заказ, полную техническую поддержку и
            управление проектами.
          </p>
        </Slide>
        <Slide direction="right" triggerOnce={true}>
          <ServiceTab
            text="Проектирование"
            img={service01}
            onClick={navigateServiceCase}
            marginTop="mt-8"
          />
        </Slide>
        <Slide direction="left" triggerOnce={true}>
          <ServiceTab
            text="Строительно монтажные работы"
            img={service02}
            onClick={navigateServiceCase}
            marginTop="mt-8"
          />
        </Slide>
        <Slide direction="right" triggerOnce={true}>
          <ServiceTab
            text="Инженерные коммуникации"
            img={service03}
            onClick={navigateServiceCase}
            marginTop="mt-8"
          />
        </Slide>
        <Slide direction="left" triggerOnce={true}>
          <ServiceTab
            text="Поставка мебели и оборудования"
            img={service04}
            onClick={navigateServiceCase}
            marginTop="mt-8"
          />
        </Slide>
        <Button
          text="Все услуги"
          type="outline"
          marginTop="mt-8"
          onClick={navigateServices}
        />
      </section>
      <section
        className="pc-screen w-full flex flex-col items-end max-[1024px]:hidden"
        id="services"
      >
        <div className="w-full flex justify-between  items-center mt-28">
          <Slide direction="left" triggerOnce={true}>
            <Button
              text="Все Услуги"
              type="outline"
              onClick={navigateServices}
            />
          </Slide>
          <div className="w-[70%] flex flex-col items-end">
            <Slide direction="right" triggerOnce={true}>
              <h3>Услуги</h3>
            </Slide>
            <Slide
              direction="right"
              className="w-full flex justify-end"
              triggerOnce={true}
            >
              <p className=" paragraph text-right mt-8 w-[70%]">
                Наши услуги охватывают широкий спектр современных решений для
                бизнеса и частных клиентов. Мы предлагаем высококлассные
                консультации, разработку на заказ, полную техническую поддержку
                и управление проектами.
              </p>
            </Slide>
          </div>
        </div>
        <div
          className="w-full flex items-centes justify-between ios mt-16"
          style={{
            display: "-webkit-flex",
            WebkitJustifyContent: "space-between",
          }}
        >
          <Slide direction="up" className="flex" triggerOnce={true}>
            <ServiceTab
              text="Проектирование"
              img={service01}
              onClick={navigateServiceCase}
              marginTop="mt-8"
            />
          </Slide>
          <Slide direction="up" className="flex" triggerOnce={true} delay={200}>
            <ServiceTab
              text="Строительно монтажные работы"
              img={service02}
              onClick={navigateServiceCase}
              marginTop="mt-8"
            />
          </Slide>
          <Slide direction="up" className="flex" triggerOnce={true} delay={300}>
            <ServiceTab
              text="Инженерные коммуникации"
              img={service03}
              onClick={navigateServiceCase}
              marginTop="mt-8"
            />
          </Slide>
          <Slide direction="up" className="flex" triggerOnce={true} delay={400}>
            <ServiceTab
              text="Поставка мебели и оборудования"
              img={service04}
              onClick={navigateServiceCase}
              marginTop="mt-8"
            />
          </Slide>
        </div>
      </section>
    </>
  );
};
