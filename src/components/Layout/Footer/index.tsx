import { LOGO } from "@/assets/images";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
<>
{/* Start footer Area */}
<footer>
  <div className="footer-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
          <div className="footer-content">
            <div className="footer-head">
              <div className="footer-img">
                <Link to="#"><img src={LOGO}/></Link>
              </div>
              <p> Redug Lares dolor sit amet, consectetur adipisicing elit. Minima in nostrum, veniam. Esse est assumenda inventore, facere adipisci tenetur.</p>
              <div className="footer-icons">
                <ul>
                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li><a href="#"><i className="fa fa-google" /></a></li>
                  <li><a href="#"><i className="fa fa-pinterest" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* end single footer */}
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
          <div className="footer-content">
            <div className="footer-head">
              <h4>information</h4>
              <p>You can contact us our consectetur adipisicing elit</p>
              <div className="footer-contacts">
                <p><span>Tel:</span> +123 564 543</p>
                <p><span>Email:</span> admin@royalsteel.com</p>
                <p><span>Working Hours:</span> 10am-5pm</p>
              </div>
            </div>
          </div>
        </div>
        {/* end single footer */}
        <div className="col-lg-3 col-md-3 col-sm-5 col-xs-12">
          <div className="footer-content">
            <div className="footer-head">
              <h4>flicker</h4>
              <div className="flicker-img">
                <a href="#"><img src="/src/assets/images/footer/1.jpg" /></a>
                <a href="#"><img src="/src/assets/images/footer/7.jpg" /></a>
                <a href="#"><img src="/src/assets/images/footer/8.jpg" /></a>
                <a href="#"><img src="/src/assets/images/footer/4.jpg" /></a>
                <a href="#"><img src="/src/assets/images/footer/5.jpg" /></a>
                <a href="#"><img src="/src/assets/images/footer/6.jpg" /></a>
              </div>
            </div>
          </div>
        </div>
        {/* end single footer */}
        <div className="col-lg-3 col-md-3 hidden-sm col-xs-12">
          <div className="footer-content">
            <div className="footer-head">
              <div className="popular-tag">
                <h4>tags</h4>
                <ul>
                  <li><a href="#">Building</a></li>
                  <li><a href="#">Isolation</a></li>
                  <li><a href="#">Interior</a></li>
                  <li><a href="#">Electrical</a></li>
                  <li><a href="#">Energy</a></li>
                  <li><a href="#">floring</a></li>
                  <li><a href="#">painting</a></li>
                  <li><a href="#">Building</a></li>
                  <li><a href="#">Building</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* end single footer */}
      </div>
    </div>
  </div>
  <div className="footer-bottom-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="copyright-text text-center">
            <p>Copyright © 2016 <a href="#"> usdtheme</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
{/* end footer Area */}
</>
  );
};

export default Footer;
