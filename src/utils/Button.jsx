import React from "react"; // adjust this import path to match your project

const Button = ({ onClick, children, className }) => {
  return (
    <button
      size="lg"
      variant="ghost"
      className={`text-base px-8 h-14 flex items-center justify-center font-medium rounded-full hover:bg-gray-50 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
