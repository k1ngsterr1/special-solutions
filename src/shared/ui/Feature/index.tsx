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
    <div
      className={`feature flex ${marginTop} max-[1024px]:flex-col items-center min-[1024px]:flex-row`}
    >
      <span className="feature__number">{number}</span>
      <span className="feature__text text-center">{text}</span>
    </div>
  );
};
