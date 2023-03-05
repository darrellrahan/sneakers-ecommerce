import React from "react";
import { navLinks } from "../data";

function NavArea() {
  return (
    <div className="nav-area">
      <nav>
        <ul className="links">
          {navLinks.map((data) => (
            <li key={data.id}>
              <a href={data.url} className="nav-link">
                {data.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavArea;
