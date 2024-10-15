import { useState } from 'react';

// Reat-Light
import Lightbox from 'yet-another-react-lightbox';
import Inline from 'yet-another-react-lightbox/plugins/inline';

// Assets
import {
  ProjectDetailImg,
  ProjectImg1,
  ProjectImg2,
  ServiceDetailImg,
  ServiceDetailImg1,
  ServiceDetailImg2,
  ServiceDetailImg3,
} from '@/assets/images';

// Components
import Breadcrumb from '@/components/Breadcrumb';
import Layout from '@/components/Layout';

interface imageSlider {
  id: number;
  url: string;
}
interface ServiceDetail {
  slug: string;
  title: string;
  description: string;
  images: imageSlider[];
}

const ServiceDetails = () => {
  const servicetData: ServiceDetail = {
    slug: 'Services',
    title: 'Service Details',
    images: [
      { id: 1, url: ProjectDetailImg },
      { id: 2, url: ProjectImg1 },
      { id: 3, url: ProjectImg2 },
    ],
    description:
      'Aliquam et metus pharetra, bibendum massa nec, fermentum odio. Nunc id leo ultrices, mollis ligula in, finibus tortor. Mauris eu dui ut lectus fermentum eleifend.Pellentesque faucibus sem ante, non malesuada odio variusnec. Suspendisse potenti. Proin consectetur aliquam odionec fringilla. Sed interdum at justo in efficitur. Vivamusgravida volutpat sodales. Fusce ornare sit amet ligulacondimentum sagittis.',
  };

  const relatedProjects = [
    {
      id: 1,
      title: 'Redug Lerse dolor sit amet consect adipis elit.',
      img: ServiceDetailImg,
    },
    {
      id: 2,
      title: 'Redug Lerse dolor sit amet consect adipis elit.',
      img: ServiceDetailImg1,
    },
    {
      id: 3,
      title: 'Redug Lerse dolor sit amet consect adipis elit.',
      img: ServiceDetailImg2,
    },
    {
      id: 4,
      title: 'Redug Lerse dolor sit amet consect adipis elit.',
      img: ServiceDetailImg3,
    },
  ];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const toggleOpen = (state: boolean) => () => setOpen(state);

  const updateIndex = ({ index: current }: { index: number }) =>
    setIndex(current);

  const slides = servicetData.images.map((image) => ({ src: image.url }));
  return (
    <Layout>
      <Breadcrumb heading={servicetData.slug} pageName={servicetData.title} />
      <div className="page-head area-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-5 col-xs-12">
              <div className="page-head-blog">
                <div className="single-blog-page">
                  <div className="left-blog">
                    <h4>recent post</h4>
                    <div className="recent-post">
                      {relatedProjects?.map((item) => {
                        return (
                          <div className="recent-single-post" key={item.id}>
                            <div className="post-img">
                              <a href="#">
                                <img src={item.img} alt="" />
                              </a>
                            </div>
                            <div className="pst-content">
                              <p>
                                <a href="#">{item.title} </a>
                              </p>
                            </div>
                          </div>
                        );
                      })}
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
                </div>
                <div className="post-information">
                  <h2>{servicetData.title}</h2>

                  <div className="entry-content">
                    {servicetData.description}
                  </div>
                </div>
              </article>
              <div className="clear"></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceDetails;
