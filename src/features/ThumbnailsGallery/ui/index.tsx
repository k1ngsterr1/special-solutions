import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ImageGallery from "react-image-gallery";
import { turnOffLoading, turnOnLoading } from "@shared/lib/redux/loaderSlice";

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(turnOnLoading());
    let loadedImages = 0;
    let totalImage = photos.length;

    photos.forEach((photo: any) => {
      const img = new Image();
      img.src = photo.photo;
      img.onload = () => {
        loadedImages++;
        if (loadedImages === totalImage) {
          setTimeout(() => {
            dispatch(turnOffLoading());
          }, 2000);
        }
      };
      img.onerror = () => {
        loadedImages++;
        if (loadedImages === totalImage) {
          console.log("error");
        }
      };
    });
  }, [photos]);

  const images = photos.map((photo) => ({
    original: photo.photo,
    thumbnail: photo.thumbnail,
  }));

  return <ImageGallery items={images} />;
};
