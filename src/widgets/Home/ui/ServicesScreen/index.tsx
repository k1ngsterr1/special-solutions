import { ServiceTab } from "@shared/ui/ServiceTab";
import { Slide } from "react-awesome-reveal";

// Assets
import service01 from "@assets/service_01.webp";
import service02 from "@assets/service_02.webp";
import service03 from "@assets/service_03.webp";
import service04 from "@assets/service_04.webp";
import { Button } from "@shared/ui/Button";
import { LinkButton } from "@shared/ui/LinkButton";

export const ServicesScreen = () => {
  return (
    <>
      <section className="mobile-container w-full flex flex-col items-center min-[1024px]:hidden">
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
      </section>
      <section className="pc-screen w-full flex flex-col items-end max-[1024px]:hidden mt-28">
        <div className="w-full flex justify-between  items-center">
          <Slide direction="left" triggerOnce={true}>
            <LinkButton text="Связаться с нами" to="contacts" type="outline" />
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
        <div className="w-full flex items-centes justify-between mt-16">
          <Slide direction="up" triggerOnce={true}>
            <ServiceTab
              text="Облицовка стен стеклом"
              img={service01}
              marginTop="mt-8"
            />
          </Slide>
          <Slide direction="up" triggerOnce={true} delay={200}>
            <ServiceTab
              text="Облицовка стен стеклом"
              img={service02}
              marginTop="mt-8"
            />
          </Slide>
          <Slide direction="up" triggerOnce={true} delay={300}>
            <ServiceTab
              text="Облицовка стен стеклом"
              img={service03}
              marginTop="mt-8"
            />
          </Slide>
          <Slide direction="up" triggerOnce={true} delay={400}>
            <ServiceTab
              text="Облицовка стен стеклом"
              img={service04}
              marginTop="mt-8"
            />
          </Slide>
        </div>
      </section>
    </>
  );
};
