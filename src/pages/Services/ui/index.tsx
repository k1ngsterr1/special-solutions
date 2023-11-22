import { Footer } from "@features/Footer/ui";
import { Header } from "@features/Header/ui";
import { Form } from "@widgets/Form";
import { ServicesList } from "@widgets/Services/ui";

export const ServicePage = () => {
  return (
    <>
      <Header />
      <ServicesList />
      <div className="content-container">
        <Form />
      </div>
      <div className="content-container">
        <Footer />
      </div>
    </>
  );
};
