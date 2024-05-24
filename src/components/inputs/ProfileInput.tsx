import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent } from "react";

type Props = {
  name: string;
  placeholder: string;
  label: string;
  value: string;
  required?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const ProfileInput = ({ name, placeholder, label, value, required = true, onChange }: Props) => {
  return (
    <div className="inline-flex items-center flex-col">
      <div className="w-full relative">
        <div className="relative">
          <input
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className="appearance-none bg-transparent border-b-2 border-b-icon-color w-full text-text-primary-color text-center text-base md:text-3xl py-1 px-10 leading-tight focus:outline-none"
            placeholder={placeholder}
          />
          <FontAwesomeIcon icon={faPencil} className="absolute right-0 top-0 bottom-0 my-auto mr-3 h-4 text-text-primary-color" />
        </div>
      </div>
      <div>
        <p className="text-sm md:text-2xl font-medium text-text-primary-color">{ label }</p>
      </div>
    </div>
  );
}
