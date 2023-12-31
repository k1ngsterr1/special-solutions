import { Link } from "react-router-dom";

import "./styles.scss";

interface GalleryPhotoProps {
  img: string;
  text: string;
  subText: string;
  url: string;
}

export const GalleryPhoto: React.FC<GalleryPhotoProps> = ({
  img,
  text,
  subText,
  url,
}) => {
  return (
    <div className="photo-container">
      <div className="photo-container__text-container flex flex-col items-start">
        <span className="photo-container__text-container__text">{text}</span>
        <Link to={url} className="photo-container__text-container__sub-text">
          {subText}
        </Link>
      </div>
      <img className="photo-container__image" src={img} alt="image" />
    </div>
  );
};
