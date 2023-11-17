import { Header } from "@features/Header/ui";
import { Menu } from "@features/Menu/ui";
import { HomeScreen } from "@widgets/Home";
import { RootState } from "@shared/lib/redux/store";
import { useSelector } from "react-redux";

export const HomePage = () => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <>
      <Header />
      {isMenuOpen && <Menu />}
      <HomeScreen />
    </>
  );
};
