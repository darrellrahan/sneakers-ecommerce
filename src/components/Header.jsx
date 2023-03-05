import React from "react";
import AvatarArea from "./AvatarArea";
import CartArea from "./CartArea";
import LogoArea from "./LogoArea";
import NavArea from "./NavArea";

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
