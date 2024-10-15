import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Assets
import { LOGO } from '@/assets/images';

import Menu from './Menu';
// Related components
import MobileMenu from './MobileMenu';

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (headerRef.current) {
        if (window.scrollY > 160) {
          headerRef.current.classList.add('headeropacityeffect');
        } else {
          headerRef.current.classList.remove('headeropacityeffect');
        }
      }
    });
  }, []);

  return (
    <header>
      <div id="sticker" className="header-area">
        <div className="container">
          <div className="row">
            {/* Logo */}
            <div className="col-md-3 col-lg-3 col-sm-3 hidden-xs">
              <div className="logo">
                <Link to="/">
                  <img src={LOGO} />
                </Link>
              </div>
            </div>

            {/* Main Menu */}
            <div className="col-md-9 col-lg-9 col-sm-9 hidden-xs">
              <div className="header-right-link"></div>

              <div className="mainmenu">
                <Menu />
              </div>
            </div>
          </div>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
