import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";

interface ServiceTabProps {
  img: string;
  text: string;
  marginTop: string;
}

export const ServiceTab: React.FC<ServiceTabProps> = ({
  img,
  text,
  marginTop,
}) => {
  return (
    <div className={`service-tab ${marginTop}`}>
      <FontAwesomeIcon
        icon={faArrowUpRightFromSquare}
        className="service-tab__icon"
      />
      <span className="service-tab__text">{text}</span>
      <img src={img} alt="service-image" className="service-tab__image" />
    </div>
  );
};
