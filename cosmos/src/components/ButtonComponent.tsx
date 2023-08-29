import React from "react";
import "./ButtonComponent.scss";

interface ButtonComponentProps {
  text: string;
  width: number;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ text, width }) => {
  return (
    <button style={{ width: `${width}rem` }} className="button-component">
      {text}
    </button>
  );
};

export default ButtonComponent;
