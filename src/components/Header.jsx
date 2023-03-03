import React from "react";
import AvatarArea from "./headerComponents/AvatarArea";
import CartArea from "./headerComponents/CartArea";
import LogoArea from "./headerComponents/LogoArea";
import NavArea from "./headerComponents/NavArea";

function Header() {
  return (
    <header>
      <div className="left">
        <LogoArea />
        <NavArea />
      </div>
      <div className="right">
        <CartArea />
        <AvatarArea />
      </div>
    </header>
  );
}

export default Header;
