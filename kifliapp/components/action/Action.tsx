import React from "react";
import ButtonWithBackGround from "../buttons/buttonWithBackGround/ButtonWithBackGround";
import localeData from "../../locales/descriptions.json";
import Input from "../input/Input";
interface ActionProps {
  title: string;
  description: string;
  placeholder: string;
}
const Action: React.FC<ActionProps> = ({ title, description, placeholder }) => {
  const handleIconClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  return (
    <div className="action-container">
      <h1>{title}</h1>
      <p style={{ width: "40%" }}>{description}</p>
      <Input placeholder={placeholder} />
      <ButtonWithBackGround
        text={localeData.actionButton}
        onClick={handleIconClick}
      />
    </div>
  );
};
export default Action;
