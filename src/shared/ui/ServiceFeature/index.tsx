import React from "react";

interface ServiceFeatureProps {
  text: string;
}

export const ServiceFeature: React.FC<ServiceFeatureProps> = ({ text }) => {
  return <div>{text}</div>;
};
