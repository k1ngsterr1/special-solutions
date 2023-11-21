import { Header } from "@features/Header/ui";
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
      <Header />
      {isMenuOpen && <Menu />}
      <div className="content-container flex flex-col items-center">
        <main className="w-full flex flex-col items-center">
          <HomeScreen />
        </main>
        <AboutScreen />
        <ServicesScreen />
        <PorfolioScreen />
        <Form />
        <Footer />
      </div>
    </>
  );
};
