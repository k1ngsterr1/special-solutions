import "./styles.scss";

interface ContactLinkProps {
  text: string;
  event: any;
  marginTop: string;
}

export const ContactLink: React.FC<ContactLinkProps> = ({
  text,
  event,
  marginTop,
}) => {
  return (
    <a className={`contact-link ${marginTop}`} href={event}>
      {text}
    </a>
  );
};
