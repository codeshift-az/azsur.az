import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import Lightbox from 'yet-another-react-lightbox';
import Inline from 'yet-another-react-lightbox/plugins/inline';

import Breadcrumb from '@/components/Breadcrumb';
import Layout from '@/components/Layout';

const service = {
  slug: 'service-1',
  title: 'Service Details',
  images: [
    { id: 1, url: 'https://placehold.co/1200x700/webp' },
    { id: 2, url: 'https://placehold.co/900x600/webp' },
    { id: 3, url: 'https://placehold.co/900x600/webp' },
  ],
  description:
    'Aliquam et metus pharetra, bibendum massa nec, fermentum odio. Nunc id leo ultrices, mollis ligula in, finibus tortor. Mauris eu dui ut lectus fermentum eleifend.Pellentesque faucibus sem ante, non malesuada odio variusnec. Suspendisse potenti. Proin consectetur aliquam odionec fringilla. Sed interdum at justo in efficitur. Vivamusgravida volutpat sodales. Fusce ornare sit amet ligulacondimentum sagittis.',
};

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
  const { t } = useTranslation('pages', { keyPrefix: 'serviceDetails' });

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const toggleOpen = (state: boolean) => () => setOpen(state);

  const updateIndex = ({ index: current }: { index: number }) =>
    setIndex(current);

  const slides = service.images.map((image) => ({ src: image.url }));

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
