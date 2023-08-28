import React, { useState } from "react";
import "./Slider.scss";
import Planet1 from "../assets/slide1.png";
import Planet2 from "../assets/slide2.jpg";
import ButtonComponent from "./ButtonComponent";

const Slider: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);

  const sliderData = [
    {
      image: Planet1,
    },
    {
      image: Planet2,
    },
  ];
  const length = sliderData.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }
  return (
    <div className="slider-component">
      <div id="arrow-left" className="slider-mover" onClick={prevSlide}>
        <h1>{"<"}</h1>
      </div>
      <div className="slider-container">
        {sliderData.map((slider, index) => {
          return (
            <div className={index === current ? 'slider-container-img' : 'slider-container-deactive'}>
              {index ===current && (<img src={slider.image} alt="planet" />)}
              <div className="slider-container-img-txt">
                <h2>ENCELADUS</h2>
                <p>
                  The Saturn System <br />
                  Distance: 9.5 <br />
                  AUPopulation: 3920
                </p>
              </div>
            </div>
          );
        })}
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
              <ButtonComponent text="Purchase" width={5.551} />
            </div>
          </div>
        </div>
      </div>
      <div id="arrow-right" className="slider-mover" onClick={nextSlide}>
        <h1>{">"}</h1>
      </div>
    </div>
  );
};

export default Slider;
