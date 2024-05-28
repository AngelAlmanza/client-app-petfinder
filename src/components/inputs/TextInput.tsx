import { faEnvelope, faLock, faUser, faMagnifyingGlass, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent } from "react";

type IconName = 'email' | 'password' | 'search' | 'name';

type Props = {
  name: string;
  value: string;
  placeholder: string;
  iconName: IconName;
  className?: string;
  style?: React.CSSProperties;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
}

const ICONS: Record<IconName, IconDefinition> = {
  'email': faEnvelope,
  'password': faLock,
  'search': faMagnifyingGlass,
  'name': faUser,
}

export const TextInput = ({ name, value, placeholder, iconName, className, style, onChange, onFocus }: Props) => {
  const icon = ICONS[iconName];
  const inputType = iconName === 'password' ? 'password' : 'text';

  return (
    <div className="w-full relative">
      <input
        name={name}
        value={value}
        className={`w-full bg-white px-4 py-3 outline-none rounded-3xl pr-10 text-sm md:text-lg font-medium ${className}`}
        type={inputType}
        placeholder={placeholder}
        style={style}
        onChange={onChange}
        onFocus={onFocus}
      />
      <FontAwesomeIcon color="#A3A3A3" icon={icon} className="absolute right-4 top-[14px]" />
    </div>
  )
};

