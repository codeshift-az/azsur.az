// components
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
// components

import { LOGO } from "@/assets/images";

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
              <li><a href="#" style={{fontSize:10}}><i className="fa fa-map-marker" />  76, Building- Avenue-16, London </a></li>
              <li><a href="#" style={{fontSize:10}}><i className="fa fa-envelope" /> info@royalsteel.com</a></li>
              <li className="hidden-sm" ><a href="#" style={{fontSize:10}}><i className="fa fa-phone" /> + (1800) - 354 - 586</a></li>
            </ul>  
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-5">
          <div className="topbar-right">
            <ul>
              <li><a href="#"><i className="fa fa-facebook" /></a></li>
              <li><a href="#"><i className="fa fa-twitter" /></a></li>
              <li><a href="#"><i className="fa fa-google" /></a></li>
              <li><a href="#"><i className="fa fa-skype" /></a></li>
              <li><a href="#"><i className="fa fa-pinterest" /></a></li>
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
              <Link to="/"><img src={LOGO}/></Link>
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
                  <li className="active"><a href="index-2.html">Home</a>
                    <ul className="sub-menu">
                      <li><a href="index-2.html">Homepage Version 1</a></li>
                      <li><a href="index-3.html">Homepage Version 2</a></li>
                      <li><a href="index-4.html">Homepage Version 3</a></li>
                      <li><a href="index-5.html">Homepage Version 4</a></li>
                      <li><a href="index-6.html">Homepage Version 5</a></li>
                      <li><a href="index-6.html">Homepage Version 6</a></li>
                    </ul>
                  </li>
                  <li><a href="about.html">About</a></li>
                  <li><a href="project.html">Projects</a>
                    <ul className="sub-menu">
                      <li><a href="project-2.html">Single project</a></li>
                      <li><a href="project-1.html">project 3 colum</a></li>
                      <li><a href="project-3.html">project 4 colum</a></li>
                    </ul>
                  </li>
                  <li><a href="services.html">Services</a>
                    <ul className="sub-menu">
                      <li><a href="construction.html">construction</a></li>
                      <li><a href="isolation.html">Isolation</a></li>
                      <li><a href="painting.html">Painting</a></li>
                      <li><a href="electrcity.html">Electricity</a></li>
                      <li><a href="building.html">Building</a></li>
                      <li><a href="planning.html">Planning</a></li>
                    </ul>
                  </li>
                  <li><a href="blog.html">blog</a>
                    <ul className="sub-menu">
                      <li><a href="Blog-1.html">blog 1</a></li>
                      <li><a href="Blog-2.html">blog 2</a></li>
                      <li><a href="Blog-3.html">blog 3</a></li>
                      <li><a href="Blog-details.html">blog details</a></li>
                    </ul>
                  </li>									
                  <li><a href="contact-us.html">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
          {/* mainmenu end */}
        </div>
      </div>
      {/* header-area end */}
      {/* mobile-menu-area start */}
      <div className="mobile-menu-area hidden-lg hidden-md hidden-sm">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mobile-menu">
                <div className="logo">
                  <a href="index-2.html"><img src={LOGO} /></a>
                </div>
                <nav id="dropdown">
                  <ul>
                    <li><a href="index-2.html">Home</a>
                      <ul className="sub-menu">
                        <li><a href="index-2.html">Homepage Version 1</a></li>
                        <li><a href="index-3.html">Homepage Version 2</a></li>
                        <li><a href="index-4.html">Homepage Version 3</a></li>
                        <li><a href="index-5.html">Homepage Version 4</a></li>
                        <li><a href="index-6.html">Homepage Version 5</a></li>
                        <li><a href="index-6.html">Homepage Version 6</a></li>
                      </ul>
                    </li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="project.html">Projects</a>
                      <ul className="sub-menu">
                        <li><a href="project-2.html">Single project</a></li>
                        <li><a href="project-1.html">project 3 colum</a></li>
                        <li><a href="project-3.html">project 4 colum</a></li>
                      </ul>
                    </li>
                    <li><a href="services.html">Services</a>
                      <ul className="sub-menu">
                        <li><a href="construction.html">construction</a></li>
                        <li><a href="isolation.html">Isolation</a></li>
                        <li><a href="painting.html">Painting</a></li>
                        <li><a href="electrcity.html">Electricity</a></li>
                        <li><a href="building.html">Building</a></li>
                        <li><a href="planning.html">Planning</a></li>
                      </ul>
                    </li>
                    <li><a href="blog.html">blog</a>
                      <ul className="sub-menu">
                        <li><a href="Blog-1.html">blog 1</a></li>
                        <li><a href="Blog-2.html">blog 2</a></li>
                        <li><a href="Blog-3.html">blog 3</a></li>
                        <li><a href="Blog-details.html">blog details</a></li>
                      </ul>
                    </li>									
                    <li><a href="contact-us.html">Contact</a></li>
                  </ul>
                </nav>
              </div>					
            </div>
          </div>
        </div>
      </div>
      {/* mobile-menu-area end */}
    </div>
  </header>
  {/* End header Area */}

  </>
  );
};

export default Header;
