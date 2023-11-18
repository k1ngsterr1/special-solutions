import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

interface PortfolioTabProps {
  text: string;
  subText: string;
  image: string;
}

export const PortfolioTab: React.FC<PortfolioTabProps> = ({
  text,
  image,
  subText,
}) => {
  return (
    <div className="portfolio-tab">
      <FontAwesomeIcon
        icon={faArrowUpRightFromSquare}
        className="portfolio-tab__icon"
      />
      <span className="portfolio-tab__text">{text}</span>
      <span className="portfolio-tab__sub-text">{subText}</span>
      <img src={image} alt="portfolio-image" className="portfolio-tab__image" />
    </div>
  );
};
