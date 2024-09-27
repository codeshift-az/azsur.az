// components
import SearchBar from "./SearchBar";
import { LOGO } from "@/assets/images";
import MobileMenu from "./MobileMenu";
import TopBar from "./TopBar";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const Header = () => {
  const headerRef=useRef<HTMLElement>(null)


    useEffect(()=>{
      window.addEventListener('scroll',()=>{
        if(headerRef.current){
          if(window.scrollY>160){
            headerRef.current.classList.add('headeropacityeffect')
          }else{
            headerRef.current.classList.remove('headeropacityeffect')
          }
        }
      } 
    )
  },[])
  
  return (
    <>
      {/* Start top bar */}
      <TopBar
        location={"76, Building-Avenue-16, London"}
        mail={"info@royalsteel.com"}
        phone={"+ (1800) - 354 - 586"}
      />
      <header >
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
