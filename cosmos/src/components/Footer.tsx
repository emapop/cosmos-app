import React from "react";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer-component">
      <p>
        Copyright COSMOS 2022. All rights reserved.
        <br /> <br />
        All data and company references are purely fictitious and shouldn’t be
        confused with real world entities or names.
      </p>
    </footer>
  );
};

export default Footer;
