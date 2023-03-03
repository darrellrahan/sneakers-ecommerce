import React from "react";
import logoImg from "/Users/ACER/Documents/Portofolios/e-commerce-frontendmentor/src/assets/images/logo.svg";

function LogoArea() {
  return (
    <div className="logo-area">
      <a href="/" className="logo">
        <img src={logoImg} alt="logo" />
      </a>
    </div>
  );
}

export default LogoArea;
