import React, { useState } from "react";
import { Select } from "antd";

const { Option } = Select;

const Input = ({
  label,
  placeholder,
  type,
  options = [],
  className,
  value,
  onChange,
  error,
}) => {
  //   const handleSearch = (value) => {
  //     console.log("Search:", value);
  //   };
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <div
      className={`flex flex-col gap-2 justify-start items-center w-full ${className}`}
    >
      <label className="font-semibold text-lg text-left w-full">{label}</label>

      {type === "dropdown" ? (
        <Select
          showSearch
          placeholder={placeholder}
          optionFilterProp="children"
          //   onChange={handleChange}
          //   onSearch={handleSearch}
          onFocus={() => handleFocus()}
          onBlur={() => handleBlur()}
          value={value || undefined}
          onChange={onChange}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          className={`w-full custom-select cust-placeholder-gray ${
            focused ? "focused" : ""
          } transition-all duration-300 ease-in-out`}
          dropdownStyle={{ background: "#512DA7", color: "white" }}
          popupClassName="custom-dropdown"
        >
          {options.map((option, index) => (
            <Option
              key={index}
              value={option}
              style={{
                color: "white",
                padding: "12px",
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              {option}
            </Option>
          ))}
        </Select>
      ) : type === "textarea" ? (
        <textarea
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full p-3 border-2 ${
            error ? "border-red-500" : "border-white"
          } border-white rounded-xl bg-cust-purple focus:bg-white text-white focus:text-black focus:outline-none ring-0 placeholder-gray-400 transition-all duration-300 ease-in-out`}
        />
      ) : (
        <input
          type={type || "text"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full p-3 border-2 ${
            error ? "border-red-500" : "border-white"
          } border-white rounded-xl bg-cust-purple focus:bg-white text-white focus:text-black focus:outline-none ring-0 placeholder-gray-400 transition-all duration-300 ease-in-out`}
        />
      )}

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default Input;
