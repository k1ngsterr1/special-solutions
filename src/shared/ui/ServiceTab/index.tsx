import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";

interface ServiceTabProps {
  number: string;
  text: string;
  marginTop: string;
  onClick: () => void;
}

export const ServiceTab: React.FC<ServiceTabProps> = ({
  text,
  number,
  marginTop,
  onClick,
}) => {
  return (
    <div className={`service-tab ${marginTop}`} onClick={onClick}>
      <span className="service-tab__number">{number}</span>
      <span className="service-tab__text">{text}</span>
      <FontAwesomeIcon
        icon={faArrowUpRightFromSquare}
        className="service-tab__icon"
      />
    </div>
  );
};
