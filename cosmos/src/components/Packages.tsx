import React from "react";
import SuiteLogo from "../assets/suite-logo.png";
import RocketLogo from "../assets/rocket-logo.png";
import LeafeLogo from "../assets/leaf-logo.png";

import "./Packages.scss";

const Packages: React.FC = () => {
  return (
    <div className="packages-component">
      <div className="packages-logo-container">
        <img src={SuiteLogo} alt="suite logo" />
        <h2>
          <span>p</span>ack
        </h2>
      </div>
      <div className="packages-arrow">
        <h1>{">"}</h1>
      </div>
      <div className="packages-logo-container">
        <img src={RocketLogo} alt="suite logo" />
        <h2>
          <span>f</span>ly
        </h2>
      </div>
      <div className="packages-arrow">
        <h1>{">"}</h1>
      </div>
      <div className="packages-logo-container">
        <img src={LeafeLogo} alt="suite logo" />
        <h2>
          <span>l</span>ive
        </h2>
      </div>
      <div className="packages-arrow">
        <h1>{">"}</h1>
      </div>
      <div className="packages-text">
        <h1>
          <span>ENJOY</span>
          <br />A NEW WORLD
        </h1>
      </div>
    </div>
  );
};

export default Packages;
