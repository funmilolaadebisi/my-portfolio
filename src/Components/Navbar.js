import React from "react";
import resume from "../images/FUNMILOLA ADEBISI.pdf";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <ul className="links">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href={resume} download="FUNMILOLA ADEBISI" target="_blank">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
