import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface FeatureProps {
  text: string;
  textType: string;
  marginTop?: string;
}

export const Feature: React.FC<FeatureProps> = ({
  text,
  textType,
  marginTop,
}) => {
  return (
    <div
      className={`feature flex ${marginTop} max-[1024px]:flex-col items-center min-[1024px]:flex-row`}
    >
      <FontAwesomeIcon className="feature__number" icon={faPlus} />
      <span className={`feature__text ${textType}`}>{text}</span>
    </div>
  );
};
