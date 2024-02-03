import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ImageGallery from "react-image-gallery";
import { turnOffLoading, turnOnLoading } from "@shared/lib/redux/loaderSlice";
import { PhotoItem } from "@shared/lib/data/portfolioContent";

interface ThumbnailsGalleryProps {
  photos: PhotoItem[];
}
export const ThumbnailsGallery: React.FC<ThumbnailsGalleryProps> = ({
  photos,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(turnOnLoading());
    let loadedItems = 0;
    let totalItems = photos.length;

    photos.forEach((item: any) => {
      if (item.type === "image") {
        const img = new Image();
        img.src = item.photo;
        console.log("image source:", img.src, "photos:", photos);
        img.onload = () => {
          loadedItems++;
          if (loadedItems === totalItems) {
            dispatch(turnOffLoading());
          }
        };
        img.onerror = () => {
          loadedItems++;
          if (loadedItems === totalItems) {
            console.log("error loading image");
          }
        };
      } else {
        loadedItems++;
        if (loadedItems === totalItems) {
          dispatch(turnOffLoading());
        }
      }
    });
  }, [photos]);

  const renderItem = (item: PhotoItem) => {
    if (item.type === "video" && item.source) {
      return (
        <iframe
          width="100%"
          height="420px"
          src={item.source}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    } else {
      return (
        <div className="image-gallery-image">
          <img src={item.photo} alt="" />
        </div>
      );
    }
  };

  const images = photos.map((photo) => ({
    ...photo,
    original: photo.photo,
    thumbnail: photo.thumbnail,
    renderItem: renderItem.bind(null, photo),
  }));

  console.log("images all:", images);

  return <ImageGallery items={images} />;
};
