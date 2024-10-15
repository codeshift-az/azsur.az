import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import useSWR from 'swr';
import Lightbox from 'yet-another-react-lightbox';
import Inline from 'yet-another-react-lightbox/plugins/inline';

import Breadcrumb from '@/components/Breadcrumb';
import Layout from '@/components/Layout';

import { getServiceDetails } from '@/api/service';

import NotFound from '../NotFound';

const relatedProjects = [
  {
    id: 1,
    slug: 'project-1',
    title: 'Redug Lerse dolor sit amet consect adipis elit.',
    img: 'https://placehold.co/100x70/webp',
  },
  {
    id: 2,
    slug: 'project-2',
    title: 'Redug Lerse dolor sit amet consect adipis elit.',
    img: 'https://placehold.co/100x70/webp',
  },
  {
    id: 3,
    slug: 'project-3',
    title: 'Redug Lerse dolor sit amet consect adipis elit.',
    img: 'https://placehold.co/100x70/webp',
  },
  {
    id: 4,
    slug: 'project-4',
    title: 'Redug Lerse dolor sit amet consect adipis elit.',
    img: 'https://placehold.co/100x70/webp',
  },
];

const ServiceDetails = () => {
  const { pathname } = useLocation();

  const {
    data: service,
    isLoading,
    error,
  } = useSWR(['service', pathname], () =>
    getServiceDetails(pathname.split('/').pop() as string)
  );

  const { t } = useTranslation('pages', { keyPrefix: 'serviceDetails' });

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const toggleOpen = (state: boolean) => () => setOpen(state);

  const updateIndex = ({ index: current }: { index: number }) =>
    setIndex(current);

  const slides = service?.images.map((image) => ({ src: image.image }));

  if (isLoading || !service) return <span>Loading...</span>;

  if (error && error.status === 404) return <NotFound />;

  return (
    <Layout>
      <Breadcrumb heading={service.slug} pageName={service.title} />

      <div className="page-head area-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-5 col-xs-12">
              <div className="page-head-blog">
                <div className="single-blog-page">
                  <div className="left-blog">
                    <h4>{t('related_projects')}</h4>

                    <div className="recent-post">
                      {relatedProjects?.map((item) => (
                        <div className="recent-single-post" key={item.id}>
                          <div className="post-img">
                            <Link to={`/projects/${item.slug}`}>
                              <img src={item.img} alt={item.title} />
                            </Link>
                          </div>
                          <div className="pst-content">
                            <p>
                              <Link to={`/projects/${item.slug}`}>
                                {item.title}
                              </Link>
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-8 col-sm-7 col-xs-12">
              <article className="blog-post-wrapper">
                <div className="post-thumbnail">
                  <Lightbox
                    index={index}
                    slides={slides}
                    plugins={[Inline]}
                    on={{
                      view: updateIndex,
                      click: toggleOpen(true),
                    }}
                    carousel={{
                      padding: 0,
                      spacing: 0,
                      imageFit: 'cover',
                    }}
                    inline={{
                      style: {
                        width: '100%',
                        maxWidth: '900px',
                        aspectRatio: '3 / 2',
                        margin: '0 auto',
                      },
                    }}
                  />
                </div>
                <div className="post-information">
                  <h2>{service.title}</h2>

                  <div className="entry-content">{service.description}</div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      <Lightbox
        open={open}
        close={toggleOpen(false)}
        index={index}
        slides={slides}
        on={{ view: updateIndex }}
        animation={{ fade: 0 }}
        controller={{
          closeOnPullDown: true,
          closeOnBackdropClick: true,
        }}
      />
    </Layout>
  );
};

export default ServiceDetails;
