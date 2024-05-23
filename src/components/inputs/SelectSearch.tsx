import { SelectData } from "../../interfaces/AppInterfaces";

type Props = {
  data: Readonly<SelectData[]>;
  label: string;
  name: string;
  id?: string;
  value: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectSearch = ({ data, label, name, id, value, required = true, onChange }: Props) => {
  return (
    <div className="w-full mb-4">
      <label
        htmlFor={id}
        className="block text-start mb-2 text-sm font-medium text-text-primary-color">
          {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="bg-white border border-primary-color text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none"
      >
        {
          data.map((item, index) => (
            <option
              key={index}
              value={item.value}
              className="text-text-primary-color"
            >
                {item.label}
              </option>
          ))
        }
      </select>
    </div>
  )
}
