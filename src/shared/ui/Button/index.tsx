import "./styles.scss";

interface ButtonProps {
  type: string;
  text: string;
  marginTop: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  type,
  marginTop,
  onClick,
}) => {
  return (
    <button className={`button ${type} ${marginTop}`} onClick={onClick}>
      {text}
    </button>
  );
};
