import { Header } from "@features/Header/ui";
import { Menu } from "@features/Menu/ui";
import { HomeScreen } from "@widgets/Home";
import { RootState } from "@shared/lib/redux/store";
import { useSelector } from "react-redux";
import { AboutScreen } from "@widgets/Home/ui/AboutScreen";
import { ServicesScreen } from "@widgets/Home/ui/ServicesScreen";

export const HomePage = () => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <>
      <Header />
      {isMenuOpen && <Menu />}
      <div className="container flex flex-col items-center">
        <main className="w-full">
          <HomeScreen />
        </main>
        <AboutScreen />
        <ServicesScreen />
      </div>
    </>
  );
};
