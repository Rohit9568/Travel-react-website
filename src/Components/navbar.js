import { MenuItems } from "./MenuItems";
import "./Navbarstyle.css";
import { useState } from "react";
import {Link} from "react-router-dom";

function Navbar() {
  const [iconType, setIconType] = useState("fas fa-bars");
  const [navClass, setNavClass] = useState("nav-menu");

  const toggleMenu = () => {
    if (iconType === "fas fa-bars") {
      setIconType("fas fa-times");
      setNavClass("nav-menu active");
    } else {
      setIconType("fas fa-bars");
      setNavClass("nav-menu");
    }
  };

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">TrekTrove</h1>
      <div className="menu-icons">
        <i className={iconType} onClick={toggleMenu}></i>
      </div>
      <ul className={navClass}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
        <li>
          <button>Sign Up</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
