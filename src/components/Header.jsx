import React from "react";
import { useGlobalContext } from "../context";
import AvatarArea from "./AvatarArea";
import CartArea from "./CartArea";
import LogoArea from "./LogoArea";
import NavArea from "./NavArea";
import { AiOutlineMenu } from "react-icons/ai";

function Header() {
  const { currentWidth, setIsSidebar } = useGlobalContext();

  return (
    <header>
      <div className="left">
        <LogoArea />
        {currentWidth < 1000 ? (
          <button className="menu-icon" onClick={() => setIsSidebar(true)}>
            <AiOutlineMenu />
          </button>
        ) : (
          <NavArea />
        )}
      </div>
      <div className="right">
        <CartArea />
        <AvatarArea />
      </div>
    </header>
  );
}

export default Header;
