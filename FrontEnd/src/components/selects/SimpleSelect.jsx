import { Label, Select } from "flowbite-react";

const SimpleSelect = ({disabled=false, label,text ,options, value, onchange, id = "select" }) => {
  return (
    <div className="w-full">
      <div className="mb-2 block">
        <Label htmlFor={id}>{label}</Label>
      </div>
      <Select disabled={disabled}  id={id} value={value} onChange={onchange} required className="w-full">
                <option defaultValue={text}>{text}</option>

        {options?.map((option, index) => (
          <option key={index} value={option.value}>
            {option.value}
          </option>
        ))}
      </Select>
    </div>
  );
};
export default SimpleSelect;