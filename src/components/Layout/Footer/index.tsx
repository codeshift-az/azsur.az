import { Link } from 'react-router-dom';

// Assets
import { LOGO } from '@/assets/images';

// Constants
import { CONTACT_DETAILS } from '@/constants';

const Footer = () => {
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

                  <p>
                    Redug Lares dolor sit amet, consectetur adipisicing elit.
                    Minima in nostrum, veniam. Esse est assumenda inventore,
                    facere adipisci tenetur.
                  </p>

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
                  <h4>Information</h4>
                  <p>You can contact us our consectetur adipisicing elit</p>
                  <div className="footer-contacts">
                    <p>
                      <span>Tel:</span> {CONTACT_DETAILS.phone}
                    </p>
                    <p>
                      <span>Email:</span> {CONTACT_DETAILS.email}
                    </p>
                    <p>
                      <span>Address:</span> {CONTACT_DETAILS.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Flicker */}
            <div className="col-lg-3 col-md-3 col-sm-5 col-xs-12">
              <div className="footer-content">
                <div className="footer-head">
                  <h4>flicker</h4>
                  <div className="flicker-img">
                    <Link to="#">
                      <img src="/src/assets/images/footer/1.jpg" />
                    </Link>
                    <Link to="#">
                      <img src="/src/assets/images/footer/7.jpg" />
                    </Link>
                    <Link to="#">
                      <img src="/src/assets/images/footer/8.jpg" />
                    </Link>
                    <Link to="#">
                      <img src="/src/assets/images/footer/4.jpg" />
                    </Link>
                    <Link to="#">
                      <img src="/src/assets/images/footer/5.jpg" />
                    </Link>
                    <Link to="#">
                      <img src="/src/assets/images/footer/6.jpg" />
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
                    <h4>tags</h4>
                    <ul>
                      <li>
                        <Link to="#">Building</Link>
                      </li>
                      <li>
                        <Link to="#">Isolation</Link>
                      </li>
                      <li>
                        <Link to="#">Interior</Link>
                      </li>
                      <li>
                        <Link to="#">Electrical</Link>
                      </li>
                      <li>
                        <Link to="#">Energy</Link>
                      </li>
                      <li>
                        <Link to="#">floring</Link>
                      </li>
                      <li>
                        <Link to="#">painting</Link>
                      </li>
                      <li>
                        <Link to="#">Building</Link>
                      </li>
                      <li>
                        <Link to="#">Building</Link>
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
