import React from "react";
import { Header } from "@features/Header/ui";
import { Slide } from "react-awesome-reveal";
import { RootState } from "@shared/lib/redux/store";
import { Menu } from "@features/Menu/ui";
import { useSelector } from "react-redux";
import { Footer } from "@features/Footer/ui";
import { ThumbnailsGallery } from "@features/ThumbnailsGallery/ui";

interface PhotoItem {
  photo: string;
  thumbnail: string;
}

interface PortfolioDetailsProps {
  title: string;
  description: string;
  photos: PhotoItem[];
}

export const PortfolioDetails: React.FC<PortfolioDetailsProps> = ({
  title,
  description,
  photos,
}) => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <>
      <Header />
      {isMenuOpen && <Menu />}
      <main className="content-container mt-6 min-[1024px]:hidden">
        <Slide direction="left" triggerOnce>
          <h1>{title}</h1>
        </Slide>
        <Slide direction="right" triggerOnce>
          <p className="paragraph mt-8 mb-8 text-center">{description}</p>
        </Slide>
        <ThumbnailsGallery photos={photos} />
      </main>
      <main className="content-container-row items-start max-[1024px]:hidden min-[2560px]:mt-[100px]">
        <section className="w-full mt-0 flex flex-col items-start">
          <h2 className="main-heading text-left">{title}</h2>
          <p className="paragraph w-[85%] mt-8">{description}</p>
          <p className="paragraph w-[85%] mt-8">{description}</p>
          <p className="paragraph w-[85%] mt-8">{description}</p>
        </section>
        <ThumbnailsGallery photos={photos} />
      </main>
      <Footer />
    </>
  );
};
