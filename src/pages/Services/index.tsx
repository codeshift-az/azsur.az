import { Link } from 'react-router-dom';

import useSWR from 'swr';

import Breadcrumb from '@/components/Breadcrumb';
import Layout from '@/components/Layout';

import { getServiceList } from '@/api/service';

import NotFound from '../NotFound';

const Services = () => {
  const {
    data: ServiceData,
    isLoading,
    error,
  } = useSWR('service', () => getServiceList());

  if (isLoading || !ServiceData) return <div id="preloader"></div>;

  if (error && error.status === 404) return <NotFound />;

  return (
    <Layout>
      <Breadcrumb heading="Services" pageName="Services" />
      <div className="page-head area-padding">
        <div className="container">
          <div className="row">
            {ServiceData?.map((item, index) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                  <div className="blog-post blog-1 ">
                    <div className="banner-box">
                      <Link
                        to={`/services/${item.slug}`}
                        className="image-blog">
                        <img src={item.images[0].image} alt="" />
                      </Link>
                      <div className="single-blog">
                        <Link to={`/services/${item.slug}`}>
                          <h4 className="sec-head">{item.title}</h4>
                        </Link>

                        <p>{item.description}</p>
                        <Link
                          to={`/services/${item.slug}`}
                          className="blog-btn">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
