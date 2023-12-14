import { Footer } from "@features/Footer/ui";
import { Header } from "@features/Header/ui";
import { Form } from "@widgets/Form";
import { ServicesList } from "@widgets/Services/ui";
import { RootState } from "@shared/lib/redux/store";
import { useSelector } from "react-redux";
import { Menu } from "@features/Menu/ui";
import { Helmet } from "react-helmet";

export const ServicePage = () => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Special Solutions - Наши услуги</title>
        <meta
          property="og:title"
          content="Special Solutions - Наши проекты"
        ></meta>
        <meta
          property="og:description"
          content="Ознакомьтесь с нашим полным спектром услуг в области архитектуры, дизайна и строительства. Мы предлагаем индивидуальные решения, включая концептуальный дизайн, проектирование, строительство и управление проектами. Наша команда профессионалов готова реализовать проекты любой сложности, обеспечивая высокое качество и эффективность. Узнайте больше о наших услугах и том, как мы можем помочь воплотить ваши идеи в жизнь, создавая функциональные и эстетически привлекательные пространства."
        ></meta>
        <meta
          name="description"
          content="Ознакомьтесь с нашим полным спектром услуг в области архитектуры, дизайна и строительства. Мы предлагаем индивидуальные решения, включая концептуальный дизайн, проектирование, строительство и управление проектами. Наша команда профессионалов готова реализовать проекты любой сложности, обеспечивая высокое качество и эффективность. Узнайте больше о наших услугах и том, как мы можем помочь воплотить ваши идеи в жизнь, создавая функциональные и эстетически привлекательные пространства."
        ></meta>
      </Helmet>
      <Header />
      {isMenuOpen && <Menu />}
      <ServicesList />
      <div className="content-container">
        <Form />
      </div>
      <Footer />
    </>
  );
};
