import React from "react";
import { useGlobalContext } from "../context";
import { navLinks } from "../data";

function Sidebar() {
  const { isSidebar, currentWidth, setIsSidebar } = useGlobalContext();

  if (!isSidebar || currentWidth > 1000) return;

  return (
    <div className="sidebar-overlay">
      <div className="sidebar-container">
        <button className="close-sidebar" onClick={() => setIsSidebar(false)}>
          <svg
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            fill="#68707d"
          >
            <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" />
          </svg>
        </button>
        <ul className="links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
