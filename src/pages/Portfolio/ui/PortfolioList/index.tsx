import React from "react";
import { Header } from "@features/Header/ui";
import { Slide } from "react-awesome-reveal";
import { RootState } from "@shared/lib/redux/store";
import { Menu } from "@features/Menu/ui";
import { useSelector } from "react-redux";
import { Footer } from "@features/Footer/ui";
import { ThumbnailsGallery } from "@features/ThumbnailsGallery/ui";
import { Loader } from "@shared/ui/Loader";
import { Helmet } from "react-helmet";

interface PhotoItem {
  photo: string;
  thumbnail: string;
}

interface AdressItem {
  adress: string;
}

interface PortfolioDetailsProps {
  title: string;
  servicesHeading: string;
  objectAddress: string;
  description: string;
  adresses: AdressItem[];
  photos: PhotoItem[];
  serviceYear: string;
  serviceLocation: string;
  serviceSquare: string;
  service: string;
  officeName: string;
}

export const PortfolioDetails: React.FC<PortfolioDetailsProps> = ({
  title,
  description,
  photos,
  objectAddress,
  adresses,
  servicesHeading,
  serviceYear,
  serviceLocation,
  serviceSquare,
  service,
  officeName,
}) => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);
  const isLoading = useSelector((state: RootState) => state.loader.isLoading);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`Special Solutions - Офис ${officeName}`}</title>
        <meta
          property="og:title"
          content="Special Solutions - Наши проекты"
        ></meta>
        <meta
          property="og:description"
          content="Ознакомьтесь с нашим полным спектром услуг в области архитектуры, дизайна и строительства. Мы предлагаем индивидуальные решения, включая концептуальный дизайн, проектирование, строительство и управление проектами. Наша команда профессионалов готова реализовать проекты любой сложности, обеспечивая высокое качество и эффективность. Узнайте больше о наших услугах и том, как мы можем помочь воплотить ваши идеи в жизнь, создавая функциональные и эстетически привлекательные пространства."
        ></meta>
        <meta
          name="description"
          content="Ознакомьтесь с нашим полным спектром услуг в области архитектуры, дизайна и строительства. Мы предлагаем индивидуальные решения, включая концептуальный дизайн, проектирование, строительство и управление проектами. Наша команда профессионалов готова реализовать проекты любой сложности, обеспечивая высокое качество и эффективность. Узнайте больше о наших услугах и том, как мы можем помочь воплотить ваши идеи в жизнь, создавая функциональные и эстетически привлекательные пространства."
        ></meta>
      </Helmet>
      {isLoading && <Loader />}
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
        <h2 className="text-3xl text-custom-orange mt-8 text-center">
          {servicesHeading}
        </h2>
        <ul className="list-none text-center mt-2">
          <li className="text-xl  mt-4 text-custom-black">
            <strong>Год:</strong> {""}
            {serviceYear}
          </li>
          <li className="text-xl  mt-4 text-custom-black">
            <strong>Расположение:</strong> {""}
            {serviceLocation}
          </li>
          <li className="text-xl  mt-4 text-custom-black">
            <strong>Площадь:</strong> {""}
            {serviceSquare}
          </li>
        </ul>
        <h2 className="text-3xl text-custom-orange  mt-12 text-center">
          {objectAddress}
        </h2>
        <ul className="list-none">
          {adresses.map((addressItem, index) => (
            <li key={index} className="text-xl  mt-4 text-custom-black">
              {addressItem.adress}
            </li>
          ))}
        </ul>
      </main>
      <main className="content-container-row items-start max-[1024px]:hidden min-[2560px]:mt-[100px]">
        <section className="w-full mt-0 flex flex-col items-start">
          <h1 className="main-heading text-left">{title}</h1>
          <p className="paragraph w-[85%] mt-8">{description}</p>

          <h2 className="text-3xl text-custom-orange text-left mt-8">
            {servicesHeading}
          </h2>
          <ul className="list-disc">
            <li className="text-xl ml-8 mt-4 text-custom-black">
              <strong>Год:</strong> {""}
              {serviceYear}
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
          <h2 className="text-3xl text-custom-orange text-left mt-12">
            {objectAddress}
          </h2>
          <ul className="list-disc">
            {adresses.map((addressItem, index) => (
              <li key={index} className="text-xl ml-8 mt-4 text-custom-black">
                {addressItem.adress}
              </li>
            ))}
          </ul>
        </section>
        <div className="w-full sticky top-28">
          <ThumbnailsGallery photos={photos} />
        </div>
      </main>
      <Footer />
    </>
  );
};
