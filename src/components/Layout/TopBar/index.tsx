import { Link } from "react-router-dom";

// Constants
import { CONTACT_DETAILS } from "@/constants";

const TopBar = () => {
  return (
    <div className="topbar-area fix hidden-xs">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-7">
            <div className="topbar-left">
              <ul>
                <li>
                  <Link to="#">
                    <i className="fa fa-map-marker" /> {CONTACT_DETAILS.address}
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa fa-envelope" /> {CONTACT_DETAILS.email}
                  </Link>
                </li>
                <li className="hidden-sm">
                  <Link to="#">
                    <i className="fa fa-phone" /> {CONTACT_DETAILS.phone}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-5">
            <div className="topbar-right">
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
    </div>
  );
};

export default TopBar;
