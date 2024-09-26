// components
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { LOGO } from "@/assets/images";
import { FaBars } from "react-icons/fa";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <>
      {/* Start top bar */}
      <div className="topbar-area fix hidden-xs">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-7">
              <div className="topbar-left">
                <ul>
                  <li>
                    <Link to="#" style={{ fontSize: 10 }}>
                      <i className="fa fa-map-marker" /> 76, Building-
                      Avenue-16, London{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="#" style={{ fontSize: 10 }}>
                      <i className="fa fa-envelope" /> info@royalsteel.com
                    </Link>
                  </li>
                  <li className="hidden-sm">
                    <Link to="#" style={{ fontSize: 10 }}>
                      <i className="fa fa-phone" /> + (1800) - 354 - 586
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-5">
              <div className="topbar-right">
                <ul>
                  <li>
                    <Link to="#">
                      <i className="fa fa-facebook" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-google" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-skype" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-pinterest" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header>
        <div id="sticker" className="header-area">
          <div className="container">
            <div className="row">
              {/* logo start */}
              <div className="col-md-3 col-lg-3 col-sm-3 hidden-xs">
                <div className="logo">
                  <Link to="/">
                    <img src={LOGO} />
                  </Link>
                </div>
              </div>
              {/* logo end */}
              {/* mainmenu start */}
              <div className="col-md-9 col-lg-9 col-sm-9 hidden-xs">
                <div className="header-right-link">
                  {/* search option start */}
                  <SearchBar />
                  {/* search option end */}
                </div>
                <div className="mainmenu">
                  <nav>
                    <ul id="nav">
                      <li className="active">
                        <Link to="">Home</Link>
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
              {/* mainmenu end */}
            </div>
          </div>
          {/* header-area end */}
          {/* mobile-menu-area start */}
          <MobileMenu />
          {/* mobile-menu-area end */}
        </div>
      </header>
      {/* End header Area */}

    </>
  );
};

export default Header;
