import React from "react";
import ButtonWithIcon from "../buttons/buttonWithIcon/ButtonWithIcon";
import SimpleButton from "../buttons/simpleButton/SimpleButton";
import localeData from "../../locales/descriptions.json";
interface HeadLineProps {
  title: string;

  description: string;
  img: string;
}
const HeadLine: React.FC<HeadLineProps> = ({ title, description, img }) => {
  const handleIconClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  return (
    <div className="headline-container">
      <h1 className="headline">{title} </h1>
      <p className="headlineDescripton">{description}</p>
      <br />
      <br />
      <div className="headline-buttonGroup">
        <ButtonWithIcon
          text={localeData.headLineBtn1}
          onClick={handleIconClick}
          icon={"+"}
        />
        <SimpleButton
          text={localeData.headlineBtn2}
          onClick={handleIconClick}
        />
      </div>
      <br />
      <br />
      <img className="headlineImg" src={img} alt="asd" />
    </div>
  );
};
export default HeadLine;
