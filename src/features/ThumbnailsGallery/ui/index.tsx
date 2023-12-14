import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@shared/lib/redux/store";
import ImageGallery from "react-image-gallery";
import { turnOffLoading, turnOnLoading } from "@shared/lib/redux/loaderSlice";
import { Loader } from "@shared/ui/Loader";

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
        console.log(loadedImages);
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
