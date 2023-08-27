import React from "react";
import "./Slider.scss";
import Planet from "../assets/slide1.png";

const Slider: React.FunctionComponent = () => {
  return (
    <div className="slider-component">
      <div className="slider-mover">
        <h1>{"<"}</h1>
      </div>
      <div className="slider-container">
        <div className="slider-container-img">
          <img src={Planet} alt="planet" />
          <div className="slider-container-img-txt">
            <h2>ENCELADUS</h2>
            <p>
              The Saturn System <br />
              Distance: 9.5 <br />
              AUPopulation: 3920
            </p>
          </div>
        </div>
        <div className="slider-content1">
          <div className="slider-content2">
            <div className="slider-content-description">
              <h1>
                <span>E</span>nceladus
              </h1>
              <p>
                Is the sixth-large moon of saturn. It is about a tenth of
                Saturn's largest moon, Titan.
                <br />
                <br />
                Explore this amazing cosmic marvel in a safe and fast trip in
                our aerospace company.
              </p>
            </div>
            <div className="slider-content-shopping">
              <div className="slider-content-price">
                <h1>999.990 €</h1>
                <p>one way ticket</p>
              </div>
              <button>Purchase</button>
            </div>
          </div>
        </div>
      </div>
      <div className="slider-mover">
        <h1>{">"}</h1>
      </div>
    </div>
  );
};

export default Slider;
