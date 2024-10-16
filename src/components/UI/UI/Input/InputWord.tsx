import { StyleInput } from "./Input.style";

export const Input = ({
  type,
  placeholder,
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <StyleInput type={type} placeholder={placeholder} />;
};
