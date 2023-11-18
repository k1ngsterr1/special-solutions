import { ServiceTab } from "@shared/ui/ServiceTab";
import { Slide } from "react-awesome-reveal";

// Assets
import service01 from "@assets/service_01.webp";
import service02 from "@assets/service_02.webp";
import service03 from "@assets/service_03.webp";
import service04 from "@assets/service_04.webp";
import { Button } from "@shared/ui/Button";

export const ServicesScreen = () => {
  return (
    <>
      <Slide direction="right" triggerOnce={true}>
        <h3 className="mt-12">Наши Услуги</h3>
      </Slide>
      <Slide direction="left" triggerOnce={true}>
        <p className="paragraph text-center mt-8">
          Наши услуги охватывают широкий спектр современных решений для бизнеса
          и частных клиентов. Мы предлагаем высококлассные консультации,
          разработку на заказ, полную техническую поддержку и управление
          проектами.
        </p>
      </Slide>
      <Slide direction="right" triggerOnce={true}>
        <ServiceTab
          text="Облицовка стен стеклом"
          img={service01}
          marginTop="mt-8"
        />
      </Slide>
      <Slide direction="left" triggerOnce={true}>
        <ServiceTab
          text="Облицовка стен стеклом"
          img={service02}
          marginTop="mt-8"
        />
      </Slide>
      <Slide direction="right" triggerOnce={true}>
        <ServiceTab
          text="Облицовка стен стеклом"
          img={service03}
          marginTop="mt-8"
        />
      </Slide>
      <Slide direction="left" triggerOnce={true}>
        <ServiceTab
          text="Облицовка стен стеклом"
          img={service04}
          marginTop="mt-8"
        />
      </Slide>
      <Button
        text="Все услуги"
        type="outline"
        marginTop="mt-8"
        onClick={() => console.log("lol")}
      />
    </>
  );
};
