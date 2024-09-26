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
                  <li><Link to="#"><i className="fa fa-facebook" /></Link></li>
                  <li><Link to="#"><i className="fa fa-twitter" /></Link></li>
                  <li><Link to="#"><i className="fa fa-google" /></Link></li>
                  <li><Link to="#"><i className="fa fa-pinterest" /></Link></li>
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
                <Link to="#"><img src="/src/assets/images/footer/1.jpg" /></Link>
                <Link to="#"><img src="/src/assets/images/footer/7.jpg" /></Link>
                <Link to="#"><img src="/src/assets/images/footer/8.jpg" /></Link>
                <Link to="#"><img src="/src/assets/images/footer/4.jpg" /></Link>
                <Link to="#"><img src="/src/assets/images/footer/5.jpg" /></Link>
                <Link to="#"><img src="/src/assets/images/footer/6.jpg" /></Link>
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
                  <li><Link to="#">Building</Link></li>
                  <li><Link to="#">Isolation</Link></li>
                  <li><Link to="#">Interior</Link></li>
                  <li><Link to="#">Electrical</Link></li>
                  <li><Link to="#">Energy</Link></li>
                  <li><Link to="#">floring</Link></li>
                  <li><Link to="#">painting</Link></li>
                  <li><Link to="#">Building</Link></li>
                  <li><Link to="#">Building</Link></li>
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
