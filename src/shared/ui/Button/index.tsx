import { Link } from "react-scroll";
import "./styles.scss";
import { CSSProperties } from "react";

interface ButtonProps {
  type: string;
  text: string;
  buttonType?: string | any;
  marginTop?: string;
  onClick?: () => void;
  style?: CSSProperties;
  to?: any;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  type,
  style,
  buttonType,
  marginTop,
  onClick,
}) => {
  return (
    <button
      className={`button ${type} ${marginTop}`}
      type={buttonType}
      onClick={onClick}
      style={style}
    >
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
      type={type}
    >
      {text}
    </Link>
  );
};
