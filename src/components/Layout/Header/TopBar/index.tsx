import { Link } from "react-router-dom";

interface Props {
  location: string;
  mail: string;
  phone: string;
}

const TopBar = ({ location, mail, phone }: Props) => {
  return (
    <div className="topbar-area fix hidden-xs">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-7">
            <div className="topbar-left">
              <ul>
                <li>
                  <Link to="#" style={{ fontSize: 10 }}>
                    <i className="fa fa-map-marker" /> {location}
                  </Link>
                </li>
                <li>
                  <Link to="#" style={{ fontSize: 10 }}>
                    <i className="fa fa-envelope" /> {mail}
                  </Link>
                </li>
                <li className="hidden-sm">
                  <Link to="#" style={{ fontSize: 10 }}>
                    <i className="fa fa-phone" /> {phone}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-5">
            <div className="topbar-right">
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
                    <i className="fa fa-skype" />
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
    </div>
  );
};

export default TopBar;
