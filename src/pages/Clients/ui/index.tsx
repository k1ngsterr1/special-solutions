import { Header } from "@features/Header/ui";
import { Menu } from "@features/Menu/ui";
import { useSelector } from "react-redux";
import { RootState } from "@shared/lib/redux/store";
import { ClientScreen } from "@widgets/Clients/ui";
import { Footer } from "@features/Footer/ui";
import { Helmet } from "react-helmet";

export const ClientsPage = () => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Special Solutions - Наши клиенты</title>
        <meta
          property="og:title"
          content="Special Solutions - Проектно-строительная компания"
        ></meta>
        <meta
          property="og:description"
          content="Откройте для себя наших уважаемых клиентов на странице 'Наши Клиенты' компании. Здесь представлены успешные проекты, отзывы и истории сотрудничества с различными отраслями, отражающие нашу приверженность качеству и инновациям. Узнайте, как мы воплощаем в жизнь уникальные проекты и способствуем росту бизнеса наших клиентов."
        ></meta>
        <meta
          name="description"
          content="Откройте для себя наших уважаемых клиентов на странице 'Наши Клиенты' компании. Здесь представлены успешные проекты, отзывы и истории сотрудничества с различными отраслями, отражающие нашу приверженность качеству и инновациям. Узнайте, как мы воплощаем в жизнь уникальные проекты и способствуем росту бизнеса наших клиентов."
        ></meta>
      </Helmet>
      <Header />
      {isMenuOpen && <Menu />}
      <ClientScreen />
      <Footer />
    </>
  );
};
