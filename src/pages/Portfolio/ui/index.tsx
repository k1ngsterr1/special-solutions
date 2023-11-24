import { Footer } from "@features/Footer/ui";
import { Header } from "@features/Header/ui";
import { PortfolioList } from "@widgets/Portfolio/ui";

export const PorfolioPage = () => {
  return (
    <>
      <Header />
      <PortfolioList />
      <Footer />
    </>
  );
};
