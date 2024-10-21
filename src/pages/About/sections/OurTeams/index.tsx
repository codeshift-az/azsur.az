import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

const membersData = [
  {
    name: ' Susan Bolt',
    position: 'Cheif member',
    img: 'https://placehold.co/262x344/webp',
    id: 1,
  },
  {
    name: ' Susan Bolt',
    position: 'Cheif member',
    img: 'https://placehold.co/262x344/webp',
    id: 2,
  },
  {
    name: ' Susan Bolt',
    position: 'Cheif member',
    img: 'https://placehold.co/262x344/webp',
    id: 3,
  },
  {
    name: ' Susan Bolt',
    position: 'Cheif member',
    img: 'https://placehold.co/262x344/webp',
    id: 4,
  },
];
const OurTeams = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'about' });

  return (
    <div className="team-area area-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="section-headline-3 text-center ">
              <h3>{t('ourTeams')}</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="team-member">
            {membersData.map((item) => {
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
