import Layout from "@/components/Layout";
import ContactForm from "./components/ContactForm";
import Overlay from "@/components/Overlay";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Layout>
      <>
        {/* Start services Area */}
        {/* Overlay */}
        <Overlay 
          heading="Contact" 
          pageName="contact-us2" 
          bgUrl={'/src/assets/images/background/ser.jpg'}
        />
        {/* Overlay */}
        <div className="page-head area-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                {/* Map area */}
                <div className="map-area border border-danger">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24314.413278621483!2d49.8434048!3d40.3800064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da7a06b402f%3A0xd8897cf79ec36111!2zMjggQWzEscWfdmVyacWfIE1lcmtlemk!5e0!3m2!1str!2saz!4v1727339108958!5m2!1str!2saz"
                    width={"100%"}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>                
                {/* End Map area */}
              </div>
            </div>
            <div className="row">
              {/* contact info */}
              <div className="col-lg-4 col-md-4 col-sm-5 col-xs-12">
                <div className="single-page-head">
                  <div className="left-contact">
                    <Link to="#">
                      <h4 className="sec-head">Contact Information</h4>
                    </Link>
                    <div className="left-cont-info">
                      <ul>
                        <li>
                          <Link to="#">
                            <i className="fa fa-map-marker" />
                            76, Building- Avenue-16, London
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa fa-envelope" />
                            info@royalsteel.com
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa fa-phone" /> + (1800) - 354 - 586
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="footer-icons left-side-icons">
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
                            <i className="fa fa-pinterest" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* End contact info */}
              <div className="col-lg-8 col-md-8 col-sm-7 col-xs-12">
                <div className="contact-form">
                  <div className="row">
                    <ContactForm />
                  </div>
                </div>
              </div>
              {/* End contact Form */}
            </div>
          </div>
        </div>
        {/* Start Suscrive Area */}
        <div className="suscribe-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="suscribe-text text-center">
                  <h3>Wellcome to our Royalsteel construction company</h3>
                  <Link className="sus-btn" to="#">
                    Get A quate
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* End Suscrive Area */}
    </Layout>
  );
};

export default Contact;
