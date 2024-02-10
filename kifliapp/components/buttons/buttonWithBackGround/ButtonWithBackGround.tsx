import React from "react";
interface ButtonWithBackgroundProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}
const ButtonWithBackGround: React.FC<ButtonWithBackgroundProps> = ({
  text,
  onClick,
}) => {
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  return (
    <div
      className="buttonWithIcon-container"
      onMouseDown={handleMouseDown}
      onClick={onClick}
    >
      <button className="buttonWithIcon-main">{text}</button>
    </div>
  );
};
export default ButtonWithBackGround;
