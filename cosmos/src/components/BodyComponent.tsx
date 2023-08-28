import React from "react";
import "./BodyComponent.scss";
import Slider from "./Slider";
import Packages from "./Packages";
import PFLDescription from "./PFLDescription";

const BodyComponent: React.FC = () => {
  return (
    <div className="body-component">
      <Slider />
      <Packages />
      <PFLDescription />
    </div>
  );
};

export default BodyComponent;
