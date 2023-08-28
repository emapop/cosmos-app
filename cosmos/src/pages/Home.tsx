import React from "react";
import Navbar from "../components/Navbar";
import BodyComponent from "../components/BodyComponent";
import Footer from "../components/Footer";
import "./Home.scss";

const Home: React.FC = () => {
  return (
    <div className="home-component">
      <Navbar />
      <BodyComponent />
      <Footer />
    </div>
  );
};

export default Home;
