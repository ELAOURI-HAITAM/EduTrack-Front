import { Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const SimpleInput = ({ label, value, icon, color, type = "text", placeholder = "", onchange, className = "" }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className={`w-full ${className}`}>
      <div className="mb-2 block">
        <Label className="text-lg" style={{ color: color }}>
          {label}
        </Label>
      </div>
      <div className="relative">
        <TextInput
          value={value}
          type={inputType}
          id="username3"
          placeholder={placeholder}
          addon={icon}
          required
          onChange={onchange}
          className="w-full pr-10"
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default SimpleInput;
