import { Link } from "react-scroll";
import "./styles.scss";

interface ButtonProps {
  type: string;
  text: string;
  marginTop?: string;
  onClick?: () => void;
  to?: any;
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

export const ScrollButton: React.FC<ButtonProps> = ({
  text,
  type,
  marginTop,
  to,
}) => {
  return (
    <Link
      className={`button flex items-center justify-center ${type} ${marginTop}`}
      to={to}
      smooth
    >
      {text}
    </Link>
  );
};
