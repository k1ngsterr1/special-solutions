import React from "react";
import { Header } from "@features/Header/ui";
import { Slide } from "react-awesome-reveal";
import { Gallery } from "@features/Gallery/ui";

import gallery01 from "@assets/design_gallery_01.webp";

interface ServiceDetailsProps {
  title: string;
  description: string;
  image: string;
}

export const ServiceDetails: React.FC<ServiceDetailsProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <>
      <Header />
      <main className="content-container min-[1024px]:hidden">
        <Slide direction="left" triggerOnce>
          <h1>{title}</h1>
        </Slide>
        <Slide direction="right" triggerOnce>
          <p>{description}</p>
        </Slide>
        <Gallery
          image={gallery01}
          image2={gallery01}
          image3={gallery01}
          image4={gallery01}
        />
      </main>
    </>
  );
};
