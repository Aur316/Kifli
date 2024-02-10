import React, { ReactNode } from "react";

interface ButtonWithIconProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  icon: ReactNode;
}

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
  text,
  onClick,
  icon,
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
      <div className="buttonWithIcon-icon">
        <span>{icon}</span>
      </div>
    </div>
  );
};

export default ButtonWithIcon;
