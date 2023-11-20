import { Link } from "react-scroll";

import "./styles.scss";

interface LinkButtonProps {
  to: string;
  type: string;
  text: string;
  marginTop?: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  to,
  type,
  text,
  marginTop,
}) => {
  return (
    <Link to={to} className={`button-link ${type} ${marginTop}`}>
      {text}
    </Link>
  );
};
