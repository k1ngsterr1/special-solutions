// src/features/serviceDetails/ServiceDetails.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { serviceContent } from "@shared/lib/data/serviceContent";
import { Header } from "@features/Header/ui";

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
  const { serviceType } = useParams<{ serviceType?: string }>();

  if (!serviceType || !serviceContent[serviceType]) {
    return <div>Service not found</div>;
  }

  //   const service = serviceContent[serviceType];
  return (
    <>
      <Header />
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={image} alt={title} />
      </div>
    </>
  );
};
