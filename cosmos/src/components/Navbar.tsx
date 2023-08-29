import React, { useState } from "react";
import CosmosLogo from "../assets/nav-cosmos-logo.png";
import BascketLogo from "../assets/nav-bascket-logo.png";
import HomeLogo from "../assets/nav-home-logo.png";
import MoonLogo from "../assets/nav-moon-logo.png";
import SpaceshipLogo from "../assets/nav-spaceship-logo.png";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="nav-component">
      <div className="hamburger-icon" onClick={handleMenuToggle}>
        <div className={`hamburger-line ${menuOpen ? "open-hamburger" : ""}`} />
        <div className={`hamburger-line ${menuOpen ? "open-hamburger" : ""}`} />
        <div className={`hamburger-line ${menuOpen ? "open-hamburger" : ""}`} />
      </div>
      <ul className={`nav-container ${menuOpen ? "open" : ""}`}>
        <li className="nav-content-position">
          <div className="nav-main-logo">
            <a href="">
              <img
                className="nav-cosmos-logo"
                src={CosmosLogo}
                alt="cosmos logo"
              />
            </a>
          </div>
          <div className="nav-content-position nav-content-margin">
            <img className="nav-space" src={HomeLogo} alt="home logo" />
            <a href="" className="nav-content-position">
              Home
            </a>
          </div>
          <div className="nav-content-position nav-content-margin">
            <img className="nav-space" src={MoonLogo} alt="home logo" />
            <a href="">Destintion</a>
          </div>
          <div className="nav-content-position nav-content-margin">
            <img className="nav-space" src={SpaceshipLogo} alt="home logo" />
            <a href="">Spaceship</a>
          </div>
        </li>

        <li className="nav-content-position">
          <a href="">
            <img className="nav-space" src={BascketLogo} alt="basket logo" />
          </a>
          <p>0</p>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
