import { ServiceTab } from "@shared/ui/ServiceTab";
import { Slide } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

import service02 from "@assets/service_02.webp";

import ek from "@assets/services/ek.webp";
import project from "@assets/services/project.webp";
import peregorodka from "@assets/services/peregorodka.webp";
import building from "@assets/services/building.webp";
import furniture from "@assets/services/furniture.webp";
import glass from "@assets/services/glass.webp";

export const ServicesList = () => {
  const navigate = useNavigate();

  function navigateServiceCase() {
    navigate("/services/design");
  }

  return (
    <>
      <main className="content-container min-[1024px]:hidden">
        <Slide direction="left" triggerOnce>
          <h1>Наши услуги</h1>
        </Slide>
        <Slide direction="right" triggerOnce>
          <p className="paragraph text-center mt-4">
            Наши услуги охватывают широкий спектр современных решений для
            бизнеса и частных клиентов. Мы предлагаем высококлассные
            консультации, разработку на заказ, полную техническую поддержку и
            управление проектами.
          </p>
        </Slide>
        <Slide direction="left" triggerOnce>
          <ServiceTab
            text="Инженерные коммуникации"
            img={ek}
            onClick={navigateServiceCase}
            marginTop="mt-16"
          />
        </Slide>
        <Slide direction="right" triggerOnce>
          <ServiceTab
            text="Проектирование"
            img={project}
            onClick={navigateServiceCase}
            marginTop="mt-16"
          />{" "}
        </Slide>
        <Slide direction="left" triggerOnce>
          <ServiceTab
            text="Монтаж перегородок"
            img={peregorodka}
            onClick={navigateServiceCase}
            marginTop="mt-16"
          />{" "}
        </Slide>
        <Slide direction="right" triggerOnce>
          <ServiceTab
            text="Строительно монтажные работы"
            img={building}
            onClick={navigateServiceCase}
            marginTop="mt-16"
          />{" "}
        </Slide>
        <Slide direction="left" triggerOnce>
          <ServiceTab
            text="Поставка мебели и оборудования"
            img={furniture}
            onClick={navigateServiceCase}
            marginTop="mt-16"
          />
        </Slide>
        <Slide direction="right" triggerOnce>
          <ServiceTab
            text="Облицовка стен стеклом"
            img={glass}
            onClick={navigateServiceCase}
            marginTop="mt-16"
          />
        </Slide>
      </main>
      <main className="content-container max-[1024px]:hidden min-[2560px]:mt-[100px]">
        <Slide direction="left" triggerOnce>
          <h1>Наши услуги</h1>
        </Slide>
        <Slide direction="right" triggerOnce>
          <p className="paragraph mt-8 text-center w-[70%] m-auto">
            Наши услуги охватывают широкий спектр современных решений для
            бизнеса и частных клиентов. Мы предлагаем высококлассные
            консультации, разработку на заказ, полную техническую поддержку и
            управление проектами.
          </p>
        </Slide>
        <div className="w-full mt-16 flex items-center justify-between">
          <Slide direction="up" duration={500} triggerOnce>
            <ServiceTab
              text="Инженерные коммуникации"
              img={ek}
              onClick={navigateServiceCase}
              marginTop="ml-4"
            />
          </Slide>
          <Slide direction="up" duration={600} triggerOnce>
            <ServiceTab
              text="Проектирование"
              img={project}
              onClick={navigateServiceCase}
              marginTop="ml-4"
            />
          </Slide>
          <Slide direction="up" duration={700} triggerOnce>
            <ServiceTab
              text="Монтаж перегородок"
              img={peregorodka}
              onClick={navigateServiceCase}
              marginTop="ml-4"
            />{" "}
          </Slide>
          <Slide direction="up" duration={800} triggerOnce>
            <ServiceTab
              text="Строительно монтажные работы"
              img={building}
              onClick={navigateServiceCase}
              marginTop="ml-4"
            />{" "}
          </Slide>
        </div>
        <div className="w-full mt-16 flex items-center justify-between">
          <Slide direction="up" duration={500} triggerOnce>
            <ServiceTab
              text="Поставка мебели и оборудования"
              img={furniture}
              onClick={navigateServiceCase}
              marginTop="ml-4"
            />
          </Slide>
          <Slide direction="up" duration={600} triggerOnce>
            <ServiceTab
              text="Облицовка стен стеклом"
              img={glass}
              onClick={navigateServiceCase}
              marginTop="ml-4"
            />{" "}
          </Slide>
          <Slide direction="up" duration={700} triggerOnce>
            <ServiceTab
              text="Облицовка стен стеклом"
              img={glass}
              onClick={navigateServiceCase}
              marginTop="ml-4"
            />{" "}
          </Slide>
          <Slide direction="up" duration={800} triggerOnce>
            <ServiceTab
              text="Облицовка стен стеклом"
              img={glass}
              onClick={navigateServiceCase}
              marginTop="ml-4"
            />{" "}
          </Slide>
        </div>
      </main>
    </>
  );
};
