import { Link } from "react-scroll";
import { Link as NavigateLink } from "react-router-dom";
import "./styles.scss";

interface LinkButtonProps {
  text: string;
  url: string;
  onClick?: () => void;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  url,
  text,
  onClick,
}) => {
  return (
    <Link to={url} className="link mt-8" onClick={onClick} smooth>
      {text}
    </Link>
  );
};

export const LinkButtonPage: React.FC<LinkButtonProps> = ({
  url,
  text,
  onClick,
}) => {
  return (
    <NavigateLink to={url} onClick={onClick} className="link mt-8">
      {text}
    </NavigateLink>
  );
};
