import React, { useState, useEffect } from "react";
import ButtonWithBackGround from "../buttons/buttonWithBackGround/ButtonWithBackGround";
import localeData from "../../locales/descriptions.json";
import Input from "../input/Input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ActionProps {
  title: string;
  description: string;
  placeholder: string;
}
const Action: React.FC<ActionProps> = ({ title, description, placeholder }) => {
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(!isValidEmail(email));
  }, [email]);

  const isValidEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const newsletter = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error(
          `An error occurred during data submission: ${response.status} ${response.statusText}`
        );
      }

      setEmail("");
      toast.success(localeData.successMessage);
    } catch (error: any) {
      toast.error(`Failed to submit data: ${error.message}`);
    }
  };

  return (
    <div className="action-container">
      <ToastContainer />
      <img
        src="/action/action.png"
        alt="Háttérkép"
        className="background-image"
      />
      <div className="content">
        <h1>{title}</h1>
        <p className="actionDescription">{description}</p>
        <div className="inputButton">
          <Input placeholder={placeholder} value={email} onChange={setEmail} />
          <ButtonWithBackGround
            text={localeData.actionButton}
            onClick={newsletter}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
};
export default Action;
