import React from "react";
import { Header } from "@features/Header/ui";
import { Slide } from "react-awesome-reveal";
import { Gallery } from "@features/Gallery/ui";
import { RootState } from "@shared/lib/redux/store";
import { Menu } from "@features/Menu/ui";
import { useSelector } from "react-redux";
import { Form } from "@widgets/Form";
import { Footer } from "@features/Footer/ui";

interface PortfolioDetailsProps {
  title: string;
  description: string;
  image: string;
  image2: string;
  image3: string;
  image4: string;
}

export const PortfolioDetails: React.FC<PortfolioDetailsProps> = ({
  title,
  description,
  image,
  image2,
  image3,
  image4,
}) => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <>
      {" "}
      <Header />
      {isMenuOpen && <Menu />}
      <main className="content-container min-[1024px]:hidden">
        <Slide direction="left" triggerOnce>
          <h1>{title}</h1>
        </Slide>
        <Slide direction="right" triggerOnce>
          <p className="paragraph mt-8 mb-8 text-center">{description}</p>
        </Slide>
        <Gallery
          image={image}
          image2={image2}
          image3={image3}
          image4={image4}
        />
        <Form />
      </main>
      <main className="content-container max-[1024px]:hidden">
        <Slide direction="left" triggerOnce>
          <h1>{title}</h1>
        </Slide>
        <Slide direction="right" triggerOnce>
          <p className="paragraph w-[50%] m-auto mt-8 mb-8 text-center ">
            {description}
          </p>
        </Slide>
        <Gallery
          image={image}
          image2={image2}
          image3={image3}
          image4={image4}
        />
        <Form />
      </main>
      <Footer />
    </>
  );
};
