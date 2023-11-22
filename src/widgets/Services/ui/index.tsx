import { ServiceTab } from "@shared/ui/ServiceTab";
import service02 from "@assets/service_02.webp";

export const ServicesList = () => {
  return (
    <>
      <main className="content-container services-list-mob">
        <h1 className="">Наши услуги</h1>
        <p className="paragraph text-center mt-4">
          Наши услуги охватывают широкий спектр современных решений для бизнеса
          и частных клиентов. Мы предлагаем высококлассные консультации,
          разработку на заказ, полную техническую поддержку и управление
          проектами.
        </p>
        <ServiceTab
          text="Облицовка стен стеклом"
          img={service02}
          marginTop="mt-8"
        />{" "}
        <ServiceTab
          text="Облицовка стен стеклом"
          img={service02}
          marginTop="mt-8"
        />{" "}
        <ServiceTab
          text="Облицовка стен стеклом"
          img={service02}
          marginTop="mt-8"
        />{" "}
        <ServiceTab
          text="Облицовка стен стеклом"
          img={service02}
          marginTop="mt-8"
        />{" "}
        <ServiceTab
          text="Облицовка стен стеклом"
          img={service02}
          marginTop="mt-8"
        />
      </main>
    </>
  );
};
