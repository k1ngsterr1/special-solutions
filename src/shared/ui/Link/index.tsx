import { Link } from "react-scroll";
import "./styles.scss";

interface LinkButtonProps {
  text: string;
  url: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ url, text }) => {
  return (
    <Link to={url} className="link mt-8">
      {text}
    </Link>
  );
};
