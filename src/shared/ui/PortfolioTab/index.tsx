import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";

interface PortfolioTabProps {
  text: string;
  subText: string;
  image: string;
  marginTop: string;
}

export const PortfolioTab: React.FC<PortfolioTabProps> = ({
  text,
  image,
  subText,
  marginTop,
}) => {
  return (
    <div className={`portfolio-tab ${marginTop}`}>
      <FontAwesomeIcon
        icon={faArrowUpRightFromSquare}
        className="portfolio-tab__icon"
      />
      <div className="portfolio-tab__text-container flex flex-col items">
        <span className="portfolio-tab__text-container__text">{text}</span>
        <span className="portfolio-tab__text-container__sub-text mt-2">
          {subText}
        </span>
      </div>
      <img src={image} alt="portfolio-image" className="portfolio-tab__image" />
    </div>
  );
};
