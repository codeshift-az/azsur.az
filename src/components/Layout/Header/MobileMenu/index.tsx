import { LOGO } from "@/assets/images";
import { useState } from "react";
import { Link } from "react-router-dom";
// icons
import { FaBars } from "react-icons/fa";
// style/css
import "./mobilemenu.css";

const MobileMenu = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <>
      <div className="hidden-lg hidden-md hidden-sm">
        <div className="mobile-header">
          <Link to="/">
            <img src={LOGO} />
          </Link>
          <button
            className="mobile-dropdown-menu-btn"
            onClick={() => setNavOpen(!navOpen)}
          >
            {
              navOpen?
              <span>x</span>
              :
              <FaBars size={30} color="white" />
            }
          </button>
        </div>
        <div
          className={`mobile-dropdown-menu" ${
            navOpen ? "mobile-dropdown-menu-active" : "mobile-dropdown-menu-inactive"
          } bg-dark`}
        >
          <div className="dropdown-nav-box ">
            <nav>
              <ul id="nav">
                <li className="active">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="">About</Link>
                </li>
                <li>
                  <Link to="">Projects</Link>
                </li>
                <li>
                  <Link to="">Services</Link>
                </li>
                <li>
                  <Link to="">blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;

