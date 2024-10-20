interface TLinkText {
  regularText?: string;
  linkText: string;
  onLinkClick?: () => void;
}

export const Linktext = ({ regularText, linkText, onLinkClick }: TLinkText) => {
  return (
    <span>
      {regularText}{" "}
      <a
        onClick={onLinkClick}
        style={{
          cursor: "pointer",
          color: "blue",
        }}
      >
        {linkText}
      </a>
    </span>
  );
};
