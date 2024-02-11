import React from "react";

interface ButtonWithBackgroundProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  disabled?: boolean;
}

const ButtonWithBackGround: React.FC<ButtonWithBackgroundProps> = ({
  text,
  onClick,
  disabled,
}) => {
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div
      style={{ maxWidth: "120px" }}
      className={disabled ? "disabled" : "buttonWithIcon-container"}
      onMouseDown={handleMouseDown}
      onClick={disabled ? undefined : onClick}
    >
      <button className="buttonWithIcon-main" disabled={disabled}>
        {text}
      </button>
    </div>
  );
};

export default ButtonWithBackGround;
