import { Link } from "react-router-dom";

interface Props {
  image: string;
  name: string;
  position: string;
}

const MemberCard = ({ image, name, position}: Props) => {
  return (
   
      <div className="single-member">
        <div className="team-img">
          <Link to="#">
            <img src={image} alt="" />
          </Link>
          <div className="team-hover footer-icons">
            <ul>
              <li>
                <Link to="#">
                  <i className="fa fa-facebook"></i>
                </Link>
              </li>

              <li>
                <Link to="#">
                  <i className="fa fa-twitter"></i>
                </Link>
              </li>

              <li>
                <Link to="#">
                  <i className="fa fa-google"></i>
                </Link>
              </li>

              <li>
                <Link to="#">
                  <i className="fa fa-pinterest"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="team-content text-center">
          <h4>
            <Link to="#">{name}</Link>
          </h4>
          <p>{position}</p>
        </div>
      </div>
  );
};

export default MemberCard;
