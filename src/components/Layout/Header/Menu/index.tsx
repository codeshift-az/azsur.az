import { Link, useLocation } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

const Menu = () => {
  const location = useLocation();
  const { t } = useTranslation('pages', { keyPrefix: 'header' });

  return (
    <nav>
      <ul id="nav">
        <li className={location.pathname.endsWith('/') ? 'active' : ''}>
          <Link to="/">{t('nav1')}</Link>
        </li>

        <li className={location.pathname.endsWith('/projects') ? 'active' : ''}>
          <Link to="/projects">{t('nav2')}</Link>
        </li>

        <li className={location.pathname.endsWith('/services') ? 'active' : ''}>
          <Link to="/services">{t('nav3')}</Link>
        </li>

        <li className={location.pathname.endsWith('/certs') ? 'active' : ''}>
          <Link to="/certs">{t('nav4')}</Link>
        </li>

        <li className={location.pathname.endsWith('/about') ? 'active' : ''}>
          <Link to="/about">{t('nav5')}</Link>
        </li>

        <li className={location.pathname.endsWith('/contact') ? 'active' : ''}>
          <Link to="/contact">{t('nav6')}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
