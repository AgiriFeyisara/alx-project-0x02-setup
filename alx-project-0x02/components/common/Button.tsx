import type { ButtonProps } from "../../interfaces";

const Button = ({ title, size, shape, onClick }: ButtonProps) => {
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const shapeClasses = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md",
    "rounded-full": "rounded-full",
  };

  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white ${sizeClasses[size]} ${shapeClasses[shape]}`}
    >
      {title}
    </button>
  );
};

export default Button;
