import React from "react";
import "./Slider.scss";
import Planet from "../assets/slide1.png";

const Slider: React.FunctionComponent = () => {
  return (
    <div className="slider-component">
      <div className="slider-container">
        <div className="slider-mover">
          <h1>{"<"}</h1>
        </div>
        <div className="slider-content">
          <img src={Planet} alt="planet" />
        </div>
        <div className="slider-mover">
          <h1>{">"}</h1>
        </div>
      </div>
    </div>
  );
};

export default Slider;
