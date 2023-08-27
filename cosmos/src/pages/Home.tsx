import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Packages from "../components/Packages";
import "./Home.scss";

const Home: React.FunctionComponent = () => {
  return (
    <div className="home-component">
      <Navbar />
      <Slider />
      <Packages />
    </div>
  );
};

export default Home;
