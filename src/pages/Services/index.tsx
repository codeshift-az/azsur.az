import {
  ServicesImg,
  ServicesImg2,
  ServicesImg3,
  ServicesImg4,
} from '@/assets/images';

import Breadcrumb from '@/components/Breadcrumb';
import Layout from '@/components/Layout';
import Subscribe from '@/components/Subscribe';

interface imgService {
  id: number;
  url: string;
}
interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  images: imgService[];
}

const Services = () => {
  const ServiceData: Service[] = [
    {
      id: 1,
      title: 'Beguiled and demo',
      slug: 'Beguiled and demo',
      description:
        'Redug Lerse dolor sit amet, consectetur adipisicing elit. Dignissimos, culpa nobis at perspiciatis sit sint, adipisci neque illum. Adipisci dolores, vitae! Voluptatem consequatur.',
      images: [{ id: 1, url: ServicesImg }],
    },

    {
      id: 2,
      title: 'Another blog post',
      slug: 'Another blog post',
      images: [{ id: 1, url: ServicesImg2 }],
      description:
        'Redug Lerse dolor sit amet, consectetur adipisicing elit. Dignissimos, culpa nobis at perspiciatis sit sint, adipisci neque illum. Adipisci dolores, vitae! Voluptatem consequatur.',
    },
    {
      id: 3,
      title: 'Third blog post',
      slug: 'Another blog post',
      images: [{ id: 1, url: ServicesImg3 }],
      description:
        'Redug Lerse dolor sit amet, consectetur adipisicing elit. Dignissimos, culpa nobis at perspiciatis sit sint, adipisci neque illum. Adipisci dolores, vitae! Voluptatem consequatur.',
    },
    {
      id: 4,
      title: 'Fourth blog post',
      slug: 'Another blog post',
      images: [{ id: 1, url: ServicesImg4 }],
      description:
        'Redug Lerse dolor sit amet, consectetur adipisicing elit. Dignissimos, culpa nobis at perspiciatis sit sint, adipisci neque illum. Adipisci dolores, vitae! Voluptatem consequatur.',
    },
    {
      id: 5,
      title: 'Fifth blog post',
      slug: 'Another blog post',
      images: [{ id: 1, url: ServicesImg }],
      description:
        'Redug Lerse dolor sit amet, consectetur adipisicing elit. Dignissimos, culpa nobis at perspiciatis sit sint, adipisci neque illum. Adipisci dolores, vitae! Voluptatem consequatur.',
    },
    {
      id: 6,
      title: 'Sixth blog post',
      slug: 'Another blog post',
      images: [{ id: 1, url: ServicesImg4 }],
      description:
        'Redug Lerse dolor sit amet, consectetur adipisicing elit. Dignissimos, culpa nobis at perspiciatis sit sint, adipisci neque illum. Adipisci dolores, vitae! Voluptatem consequatur.',
    },
  ];

  return (
    <Layout>
      <Breadcrumb heading="Services" pageName="Services" />
      <div className="page-head area-padding">
        <div className="container">
          <div className="row">
            {ServiceData?.map((item) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-12" key={item.id}>
                  <div className="blog-post blog-1 ">
                    <div className="banner-box">
                      <a href="#" className="image-blog">
                        <img src={item.images[0].url} alt="" />
                      </a>
                      <div className="single-blog">
                        <a href="#">
                          <h4 className="sec-head">Beguiled and demo</h4>
                        </a>

                        <p>{item.description}</p>
                        <a className="blog-btn" href="#">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Subscribe />
    </Layout>
  );
};

export default Services;
