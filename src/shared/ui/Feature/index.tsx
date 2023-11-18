import "./styles.scss";

interface FeatureProps {
  number: string;
  text: string;
  marginTop?: string;
}

export const Feature: React.FC<FeatureProps> = ({
  number,
  text,
  marginTop,
}) => {
  return (
    <div className={`feature flex flex-col items-center ${marginTop}`}>
      <span className="feature__number">{number}</span>
      <span className="feature__text text-center">{text}</span>
    </div>
  );
};
