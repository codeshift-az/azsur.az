import { Link } from 'react-router-dom';

import useSWR from 'swr';

import Preloader from '@/components/Preloader';

import { getServiceList } from '@/api/service';

// const services = [
//   {
//     id: 1,
//     title: 'Project Start',
//     img: 'https://placehold.co/360x261/webp',
//     description:
//       'Redug Lagre dolor sit amet, consectetur adipisicing elit. Itaque quas officiis iure aspernatur sit adipisci quaerat unde at nequeRedug Lagre dolor sit amet, consectetur adipisicing elit.',
//   },
//   {
//     id: 2,
//     title: 'Project Maintenance',
//     img: 'https://placehold.co/360x261/webp',
//     description:
//       'Redug Lagre dolor sit amet, consectetur adipisicing elit. Itaque quas officiis iure aspernatur sit adipisci quaerat unde at nequeRedug Lagre dolor sit amet, consectetur adipisicing elit.',
//   },
//   {
//     id: 3,
//     title: 'Complete Project',
//     img: 'https://placehold.co/360x261/webp',
//     description:
//       'Redug Lagre dolor sit amet, consectetur adipisicing elit. Itaque quas officiis iure aspernatur sit adipisci quaerat unde at nequeRedug Lagre dolor sit amet, consectetur adipisicing elit.',
//   },
// ];
const ServiceArea = () => {
  const {
    data: services,
    isLoading,
    error,
  } = useSWR('services', () => getServiceList());

  if (isLoading || !services) return <Preloader />;

  if (error && error.status === 404) return null;
  return (
    <div className="service-area area-padding">
      <div className="container">
        <div className="row">
          {services.map((item, index) => (
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12" key={index}>
              <div className="well-left">
                <div className="single-well">
                  <Link to={`/services/${item.slug}`}>
                    <img src={item.images[0].image} alt="" />
                    <h4 className="sec-head">{item.title}</h4>
                  </Link>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;