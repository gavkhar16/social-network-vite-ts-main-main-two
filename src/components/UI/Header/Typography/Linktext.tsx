// Linktext.tsx
import React from "react";

interface TLinkText {
  text: string;
  onClick: () => void; // Добавляем onClick
}

export const Linktext = ({ text, onClick }: TLinkText) => {
  return (
    <a
      onClick={onClick} // Обработчик события клика
      style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }} // Стилизация
    >
      {text}
    </a>
  );
};
