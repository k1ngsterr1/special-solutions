import { Link } from "react-router-dom";

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
      <div className="text-container flex flex-col items-end">
        <span className="text-container__text">{text}</span>
        <Link to={url} className="text-container__sub-text">
          {subText}
        </Link>
      </div>
      <img className="photo-container__image" src={img} alt="image" />
    </div>
  );
};
