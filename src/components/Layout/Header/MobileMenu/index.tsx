import { useState } from "react";
import { Link } from "react-router-dom";

// Assets
import { LOGO } from "@/assets/images";

// Related components
import Menu from "../Menu";

const MobileMenu = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <div className="hidden-lg hidden-md hidden-sm">
      <div className="mobile-header">
        <Link to="/">
          <img src={LOGO} />
        </Link>

        <button
          className="mobile-dropdown-menu-btn"
          onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? <span>x</span> : <i className="fa fa-bars" />}
        </button>
      </div>

      <div
        className={`mobile-dropdown-menu" ${
          navOpen
            ? "mobile-dropdown-menu-active"
            : "mobile-dropdown-menu-inactive"
        } bg-dark`}>
        <div className="dropdown-nav-box ">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
