import React from "react";

const Button = ({
  variation,
  type,
  children,
  onClick,
  className,
  path,
  disabled = false,
}) => {
  const getButtonVariation = (variation, path) => {
    switch (variation) {
      case "primary":
        return "bg-cust-black hover:bg-white hover:text-cust-black";
      case "secondary":
        return "bg-cust-purple-light hover:bg-cust-purple-lighter"
        default:
        return "";
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${getButtonVariation(variation, path)}
       text-lg md:text-xl text-white px-7 py-3 rounded-lg transition-all duration-500 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
