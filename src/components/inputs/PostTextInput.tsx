import { ChangeEvent } from "react";

type Props = {
  name: string;
  placeholder: string;
  style?: React.CSSProperties;
  value: string;
  required?: boolean;
  type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const PostTextInput = ({name, placeholder, style, value, type = 'text', required = true, onChange }: Props) => {
  return (
    <input
      className="w-full bg-white px-4 py-3 outline-none rounded-3xl text-sm md:text-xl font-medium border border-icon-color mb-4 shadow-md"
      type={type}
      name={name}
      placeholder={placeholder}
      style={style}
      value={value}
      onChange={onChange}
      required={required}
    />
  )
}
