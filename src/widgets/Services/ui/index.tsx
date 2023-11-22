import { ServiceTab } from "@shared/ui/ServiceTab";
import { Slide } from "react-awesome-reveal";

import service02 from "@assets/service_02.webp";

export const ServicesList = () => {
  return (
    <>
      <main className="content-container min-[1024px]:hidden">
        <Slide direction="left">
          <h1>Наши услуги</h1>
        </Slide>
        <Slide direction="right">
          <p className="paragraph text-center mt-4">
            Наши услуги охватывают широкий спектр современных решений для
            бизнеса и частных клиентов. Мы предлагаем высококлассные
            консультации, разработку на заказ, полную техническую поддержку и
            управление проектами.
          </p>
        </Slide>
        <Slide direction="left">
          <ServiceTab
            text="Облицовка стен стеклом"
            img={service02}
            marginTop="mt-16"
          />
        </Slide>
        <Slide direction="right">
          <ServiceTab
            text="Облицовка стен стеклом"
            img={service02}
            marginTop="mt-16"
          />{" "}
        </Slide>
        <Slide direction="left">
          <ServiceTab
            text="Облицовка стен стеклом"
            img={service02}
            marginTop="mt-16"
          />{" "}
        </Slide>
        <Slide direction="right">
          <ServiceTab
            text="Облицовка стен стеклом"
            img={service02}
            marginTop="mt-16"
          />{" "}
        </Slide>
        <Slide direction="left">
          <ServiceTab
            text="Облицовка стен стеклом"
            img={service02}
            marginTop="mt-16"
          />
        </Slide>
      </main>
      <main className="content-container max-[1024px]:hidden">
        <Slide direction="left">
          <h1>Наши услуги</h1>
        </Slide>
        <Slide direction="right">
          <p className="paragraph mt-8  w-[70%] m-auto">
            Наши услуги охватывают широкий спектр современных решений для
            бизнеса и частных клиентов. Мы предлагаем высококлассные
            консультации, разработку на заказ, полную техническую поддержку и
            управление проектами.
          </p>
        </Slide>
        <div className="w-full mt-16 flex items-center justify-between">
          <Slide direction="up" duration={500}>
            <ServiceTab
              text="Облицовка стен стеклом"
              img={service02}
              marginTop="ml-4"
            />
          </Slide>
          <Slide direction="up" duration={600}>
            <ServiceTab
              text="Облицовка стен стеклом"
              img={service02}
              marginTop="ml-4"
            />{" "}
          </Slide>
          <Slide direction="up" duration={700}>
            <ServiceTab
              text="Облицовка стен стеклом"
              img={service02}
              marginTop="ml-4"
            />{" "}
          </Slide>
          <Slide direction="up" duration={800}>
            <ServiceTab
              text="Облицовка стен стеклом"
              img={service02}
              marginTop="ml-4"
            />{" "}
          </Slide>
        </div>
        <div className="w-full mt-16 flex items-center justify-between">
          <Slide direction="up" duration={500}>
            <ServiceTab
              text="Облицовка стен стеклом"
              img={service02}
              marginTop="ml-4"
            />
          </Slide>
          <Slide direction="up" duration={600}>
            <ServiceTab
              text="Облицовка стен стеклом"
              img={service02}
              marginTop="ml-4"
            />{" "}
          </Slide>
          <Slide direction="up" duration={700}>
            <ServiceTab
              text="Облицовка стен стеклом"
              img={service02}
              marginTop="ml-4"
            />{" "}
          </Slide>
          <Slide direction="up" duration={800}>
            <ServiceTab
              text="Облицовка стен стеклом"
              img={service02}
              marginTop="ml-4"
            />{" "}
          </Slide>
        </div>
      </main>
    </>
  );
};
