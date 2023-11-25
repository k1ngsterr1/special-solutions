import React from "react";
import ImageGallery from "react-image-gallery";

interface PhotoItem {
  photo: string;
  thumbnail: string;
}

interface ThumbnailsGalleryProps {
  photos: PhotoItem[];
}
export const ThumbnailsGallery: React.FC<ThumbnailsGalleryProps> = ({
  photos,
}) => {
  const images = photos.map((photo) => ({
    original: photo.photo,
    thumbnail: photo.thumbnail,
  }));

  return <ImageGallery items={images} />;
};
