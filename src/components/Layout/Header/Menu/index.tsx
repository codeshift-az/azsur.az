import { Link, useLocation } from 'react-router-dom';

const Menu = () => {
  const location = useLocation();

  return (
    <nav>
      <ul id="nav">
        <li className={location.pathname.endsWith('/') ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>

        <li className={location.pathname.endsWith('/projects') ? 'active' : ''}>
          <Link to="/projects">Projects</Link>
        </li>

        <li className={location.pathname.endsWith('/services') ? 'active' : ''}>
          <Link to="/services">Services</Link>
        </li>

        <li className={location.pathname.endsWith('/certs') ? 'active' : ''}>
          <Link to="/certs">Certificates</Link>
        </li>

        <li className={location.pathname.endsWith('/about') ? 'active' : ''}>
          <Link to="/about">About</Link>
        </li>

        <li className={location.pathname.endsWith('/contact') ? 'active' : ''}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
