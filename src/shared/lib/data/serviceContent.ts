interface ServiceInfo {
  title: string;
  description: string;
  image: string;
}

export const serviceContent: Record<string, ServiceInfo> = {
  design: {
    title: "Design Services",
    description: "We offer cutting-edge design services...",
    image: "path/to/design/image.jpg",
  },
  development: {
    title: "Development Services",
    description: "Our development team creates scalable applications...",
    image: "path/to/development/image.jpg",
  },
};
