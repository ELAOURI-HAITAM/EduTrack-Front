import React from "react";

const SimpleInput = ({
  value,
  label,
  icon,
  type,
  uppercase = false,
  readonly = false,
  id = "simple-input",
  onChange,
}) => {
  return (
    <div className="mb-4 w-full">
      <label
        htmlFor={id}
        className="mb-1 block text-lg font-medium text-gray-700 dark:text-black"
      >
        {label}
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center ps-3 pe-2 text-gray-400 dark:text-gray-300">
          {icon}
        </div>
        <input
        readOnly={readonly}
          onChange={onChange}
          type={type}
          id={id}
          value={value}
          className={`block ${uppercase && 'uppercase'} w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-11 text-sm text-gray-900 placeholder:text-sm focus:border-blue-500 focus:ring-blue-500 sm:text-base dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500`}
        />
      </div>
    </div>
  );
};

export { SimpleInput };
