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
  servicesHeading: string;
  description: string;
  photos: PhotoItem[];
  serviceYear: string;
  serviceLocation: string;
  serviceSquare: string;
  service: string;
}

export const PortfolioDetails: React.FC<PortfolioDetailsProps> = ({
  title,
  description,
  photos,
  servicesHeading,
  serviceYear,
  serviceLocation,
  serviceSquare,
  service,
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
        <h2 className="text-4xl text-custom-orange text-left mt-8">
          {servicesHeading}
        </h2>
        <ul className="list-disc">
          <li className="text-xl ml-8 mt-4 text-custom-black">
            <strong>Год:</strong> {""}
            {serviceYear}
          </li>
          <li className="text-xl ml-8 mt-4 text-custom-black">
            <strong>Расположение:</strong> {""}
            {serviceLocation}
          </li>
          <li className="text-xl ml-8 mt-4 text-custom-black">
            <strong>Площадь:</strong> {""}
            {serviceSquare}
          </li>
        </ul>
      </main>
      <main className="content-container-row items-start max-[1024px]:hidden min-[2560px]:mt-[100px]">
        <section className="w-full mt-0 flex flex-col items-start">
          <h1 className="main-heading text-left">{title}</h1>
          <p className="paragraph w-[85%] mt-8">{description}</p>
          <h2 className="text-4xl text-custom-orange text-left mt-8">
            {servicesHeading}
          </h2>
          <ul className="list-disc">
            <li className="text-xl ml-8 mt-4 text-custom-black">
              <strong>Год:</strong> {""}
              {serviceYear}
            </li>
            <li className="text-xl ml-8 mt-4 text-custom-black">
              <strong>Адрес объекта:</strong> {""}
              {serviceLocation}
            </li>
            <li className="text-xl ml-8 mt-4 text-custom-black">
              <strong>Площадь:</strong> {""}
              {serviceSquare}
            </li>
            <li className="text-xl ml-8 mt-4 text-custom-black">
              <strong>Услуги:</strong> {""}
              {service}
            </li>
          </ul>
        </section>
        <ThumbnailsGallery photos={photos} />
      </main>
      <Footer />
    </>
  );
};
