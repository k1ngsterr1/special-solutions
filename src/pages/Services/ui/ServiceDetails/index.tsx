import React from "react";
import { Header } from "@features/Header/ui";
import { Slide } from "react-awesome-reveal";
import { RootState } from "@shared/lib/redux/store";
import { Menu } from "@features/Menu/ui";
import { useSelector } from "react-redux";
import { Form } from "@widgets/Form";
import { Footer } from "@features/Footer/ui";
import { ThumbnailsGallery } from "@features/ThumbnailsGallery/ui";

interface PhotoItem {
  photo: string;
  thumbnail: string;
}

interface ServiceDetailsProps {
  title: string;
  description: string;
  photos: PhotoItem[];
}

export const ServiceDetails: React.FC<ServiceDetailsProps> = ({
  title,
  description,
  photos,
}) => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <>
      <Header />
      {isMenuOpen && <Menu />}
      <main className="content-container min-[1024px]:hidden">
        <Slide direction="left" triggerOnce>
          <h1>{title}</h1>
        </Slide>
        <Slide direction="right" triggerOnce>
          <p className="paragraph mt-8 mb-8 text-center">{description}</p>
        </Slide>
        <ThumbnailsGallery photos={photos} />
        <Form />
      </main>
      <main className="content-container-row items-start max-[1024px]:hidden">
        <section className="w-full mt-0 flex flex-col items-start">
          <h1 className="main-heading text-left">{title}</h1>
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
