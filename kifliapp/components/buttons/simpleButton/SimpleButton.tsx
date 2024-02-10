import React from "react";
interface SimpleButtonProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}
const SimpleButton: React.FC<SimpleButtonProps> = ({ text, onClick }) => {
  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  return (
    <button onMouseDown={handleMouseDown} className="simpleButton">
      {text}
    </button>
  );
};

export default SimpleButton;
