import React from "react";

import { Header } from "@features/Header/ui";
import { useParams } from "react-router-dom";

interface ServiceDetailsProps {
  title: string;
  description: string;
  image: string;
}

export const ServiceDetails: React.FC<ServiceDetailsProps> = () => {
  return (
    <>
      <Header />
    </>
  );
};
