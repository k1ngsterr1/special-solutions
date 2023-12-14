import { Header } from "@features/Header/ui";
import { Helmet } from "react-helmet";
import { Menu } from "@features/Menu/ui";
import { HomeScreen } from "@widgets/Home";
import { RootState } from "@shared/lib/redux/store";
import { useSelector } from "react-redux";
import { AboutScreen } from "@widgets/Home/ui/AboutScreen";
import { ServicesScreen } from "@widgets/Home/ui/ServicesScreen";
import { PorfolioScreen } from "@widgets/Home/ui/PortfolioScreen";
import { Form } from "@widgets/Form";
import { Footer } from "@features/Footer/ui";

export const HomePage = () => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Special Solutions - Проектно-строительная компания</title>
        <meta
          property="og:title"
          content="Special Solutions - Проектно-строительная компания"
        ></meta>
        <meta
          property="og:description"
          content="Special Solutions – ведущая проектно-строительная компания, предлагающая инновационные и устойчивые решения для вашего бизнеса. Специализируемся на разработке и реализации уникальных проектов коммерческого и офисного пространства. Наш подход объединяет передовые технологии, экологичность и индивидуальный дизайн, чтобы создать функциональные и визуально привлекательные здания. Откройте для себя, как Special Solutions может преобразить ваше пространство, обеспечивая эффективность и инновации."
        ></meta>
        <meta
          name="description"
          content="Special Solutions – ведущая проектно-строительная компания, предлагающая инновационные и устойчивые решения для вашего бизнеса. Специализируемся на разработке и реализации уникальных проектов коммерческого и офисного пространства. Наш подход объединяет передовые технологии, экологичность и индивидуальный дизайн, чтобы создать функциональные и визуально привлекательные здания. Откройте для себя, как Special Solutions может преобразить ваше пространство, обеспечивая эффективность и инновации."
        ></meta>
      </Helmet>
      <Header />
      {isMenuOpen && <Menu />}
      <div className="content-container flex flex-col items-center">
        <main className="w-full flex flex-col items-center">
          <HomeScreen />
        </main>
        <AboutScreen />
        {/* <StepsScreen /> */}
        <ServicesScreen />
        <PorfolioScreen />
        <Form />
      </div>
      <Footer />
    </>
  );
};
