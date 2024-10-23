import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import { LOGO } from '@/assets/images';

import { CONTACT_DETAILS } from '@/constants';

const Footer = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'footer' });

  return (
    <footer>
      <div className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
              <div className="footer-content">
                <div className="footer-head">
                  <div className="footer-img">
                    <Link to="/">
                      <img src={LOGO} />
                    </Link>
                  </div>

                  <p>{t('description')}</p>

                  <div className="footer-icons">
                    <ul>
                      <li>
                        <a href={CONTACT_DETAILS.facebook} target="_blank">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href={CONTACT_DETAILS.instagram} target="_blank">
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href={CONTACT_DETAILS.youtube} target="_blank">
                          <i className="fa fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Information */}
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div className="footer-content">
                <div className="footer-head">
                  <h4>{t('information.title')}</h4>
                  <p>{t('information.description')}</p>
                  <div className="footer-contacts">
                    <p>
                      <span>{t('information.tel')}:</span>{' '}
                      {CONTACT_DETAILS.phone}
                    </p>
                    <p>
                      <span>{t('information.email')}:</span>{' '}
                      {CONTACT_DETAILS.email}
                    </p>
                    <p>
                      <span>{t('information.address')}:</span>{' '}
                      {CONTACT_DETAILS.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Flicker */}
            <div className="col-lg-3 col-md-3 col-sm-5 col-xs-12">
              <div className="footer-content">
                <div className="footer-head">
                  <h4>{t('flicker')}</h4>
                  <div className="flicker-img">
                    <Link to="#">
                      <img src="https://placehold.co/80x80/Webp" />
                    </Link>
                    <Link to="#">
                      <img src="https://placehold.co/80x80/Webp" />
                    </Link>
                    <Link to="#">
                      <img src="https://placehold.co/80x80/Webp" />
                    </Link>
                    <Link to="#">
                      <img src="https://placehold.co/80x80/Webp" />
                    </Link>
                    <Link to="#">
                      <img src="https://placehold.co/80x80/Webp" />
                    </Link>
                    <Link to="#">
                      <img src="https://placehold.co/80x80/Webp" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="col-lg-3 col-md-3 hidden-sm col-xs-12">
              <div className="footer-content">
                <div className="footer-head">
                  <div className="popular-tag">
                    <h4>{t('tags.title')}</h4>
                    <ul>
                      <li>
                        <Link to="#">{t('tags.button1')}</Link>
                      </li>
                      <li>
                        <Link to="#">{t('tags.button2')}</Link>
                      </li>
                      <li>
                        <Link to="#">{t('tags.button3')}</Link>
                      </li>
                      <li>
                        <Link to="#">{t('tags.button4')}</Link>
                      </li>
                      <li>
                        <Link to="#">{t('tags.button5')}</Link>
                      </li>
                      <li>
                        <Link to="#">{t('tags.button6')}</Link>
                      </li>
                      <li>
                        <Link to="#">{t('tags.button7')}</Link>
                      </li>
                      <li>
                        <Link to="#">{t('tags.button8')}</Link>
                      </li>
                      <li>
                        <Link to="#">{t('tags.button9')}</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="copyright-text text-center">
                <p>
                  Copyright © {new Date().getFullYear()}{' '}
                  <a href="https://www.codeshift.az">CodeShift</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
