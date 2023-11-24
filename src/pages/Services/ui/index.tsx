import { Footer } from "@features/Footer/ui";
import { Header } from "@features/Header/ui";
import { Form } from "@widgets/Form";
import { ServicesList } from "@widgets/Services/ui";
import { RootState } from "@shared/lib/redux/store";
import { useSelector } from "react-redux";
import { Menu } from "@features/Menu/ui";

export const ServicePage = () => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <>
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
