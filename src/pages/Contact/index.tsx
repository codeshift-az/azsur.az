import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import Breadcrumb from '@/components/Breadcrumb';
import Layout from '@/components/Layout';

import { CONTACT_DETAILS } from '@/constants';

import ContactForm from './components/ContactForm';

const Contact = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'contact' });

  return (
    <Layout>
      <Breadcrumb heading="Contact" pageName="contact-us2" />

      <div className="page-head area-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="map-area border border-danger">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24314.413278621483!2d49.8434048!3d40.3800064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da7a06b402f%3A0xd8897cf79ec36111!2zMjggQWzEscWfdmVyacWfIE1lcmtlemk!5e0!3m2!1str!2saz!4v1727339108958!5m2!1str!2saz"
                  width={'100%'}
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-5 col-xs-12">
              <div className="single-page-head">
                <div className="left-contact">
                  <Link to="#">
                    <h4 className="sec-head">{t('title')}</h4>
                  </Link>
                  <div className="left-cont-info">
                    <ul>
                      <li>
                        <a role="button">
                          <i className="fa fa-map-marker" />
                          {CONTACT_DETAILS.address}
                        </a>
                      </li>
                      <li>
                        <a href={`mailto:${CONTACT_DETAILS.email}`}>
                          <i className="fa fa-envelope" />
                          {CONTACT_DETAILS.email}
                        </a>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa fa-phone" /> {CONTACT_DETAILS.phone}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-icons left-side-icons">
                    <ul>
                      <li>
                        <Link to={CONTACT_DETAILS.facebook}>
                          <i className="fa fa-facebook" />
                        </Link>
                      </li>
                      <li>
                        <Link to={CONTACT_DETAILS.instagram}>
                          <i className="fa fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link to={CONTACT_DETAILS.youtube}>
                          <i className="fa fa-youtube" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
