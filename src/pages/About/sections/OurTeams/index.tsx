import { Link } from 'react-router-dom';

import {
  OurTeamsImg,
  OurTeamsImg2,
  OurTeamsImg3,
  OurTeamsImg4,
} from '@/assets/images';

const OurTeams = () => {
  const memberData = [
    {
      name: ' Susan Bolt',
      position: 'Cheif member',
      img: OurTeamsImg,
      id: 1,
    },
    {
      name: ' Susan Bolt',
      position: 'Cheif member',
      img: OurTeamsImg2,
      id: 2,
    },
    {
      name: ' Susan Bolt',
      position: 'Cheif member',
      img: OurTeamsImg3,
      id: 3,
    },
    {
      name: ' Susan Bolt',
      position: 'Cheif member',
      img: OurTeamsImg4,
      id: 4,
    },
  ];

  return (
    <div className="team-area area-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="section-headline-3 text-center ">
              <h3>Our teams</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="team-member">
            {memberData?.map((item) => {
              return (
                <div className="col-lg-3 col-md-3 col-sm-4" key={item.id}>
                  <div className="single-member">
                    <div className="team-img">
                      <Link to="#">
                        <img src={item.img} alt="" />
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
                              <i className="fa fa-instagram"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="team-content text-center">
                      <h4>
                        <Link to="#">{item.name}</Link>
                      </h4>
                      <p>{item.position}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeams;
