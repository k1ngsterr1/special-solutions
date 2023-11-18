import { ServiceTab } from "@shared/ui/ServiceTab";
import { Slide } from "react-awesome-reveal";

// Assets
import service01 from "@assets/service_01.webp";
import service02 from "@assets/service_02.webp";
import service03 from "@assets/service_03.webp";
import service04 from "@assets/service_04.webp";

export const ServicesScreen = () => {
  return (
    <>
      <Slide direction="right" triggerOnce={true}>
        <h3 className="mt-12">Наши Услуги</h3>
      </Slide>
      <Slide direction="left" triggerOnce={false}>
        <ServiceTab
          text="Облицовка стен стеклом"
          img={service01}
          marginTop="mt-8"
        />
      </Slide>
      <Slide direction="right" triggerOnce={true}>
        <ServiceTab
          text="Облицовка стен стеклом"
          img={service02}
          marginTop="mt-8"
        />
      </Slide>
      <Slide direction="left" triggerOnce={true}>
        <ServiceTab
          text="Облицовка стен стеклом"
          img={service03}
          marginTop="mt-8"
        />
      </Slide>
      <Slide direction="right" triggerOnce={true}>
        <ServiceTab
          text="Облицовка стен стеклом"
          img={service04}
          marginTop="mt-8"
        />
      </Slide>
    </>
  );
};
