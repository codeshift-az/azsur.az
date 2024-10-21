import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import useSWR from 'swr';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import Breadcrumb from '@/components/Breadcrumb';
import Layout from '@/components/Layout';

import { getProjectList } from '@/api/project';

import NotFound from '@/pages/NotFound';

const Projects = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'home' });

  const {
    data: Projects,
    isLoading,
    error,
  } = useSWR('projects', () => getProjectList());
  const [open, setOpen] = useState(false);
  const [currentSlides, setCurrentSlides] = useState<{ src: string }[]>([]);

  const openLightbox = (images) => {
    setCurrentSlides(images.map((src) => ({ src: src.image })));
    setOpen(true);
  };
  if (isLoading || !Projects) return <div id="preloader"></div>;

  if (error && error.status === 404) return <NotFound />;
  return (
    <Layout>
      <Breadcrumb heading="Our Project" pageName="Our Project" />
      <div className="project-area area-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="section-headline-3 text-center">
                <h3>{t('ourLatestProject')}</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {Projects.map((item, index) => (
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12" key={index}>
                <div className="single-awesome-project first-item">
                  <div className="awesome-img">
                    <Link to={`/projects/${item.slug}`}>
                      <img src={item.images[0].image} alt="" />
                    </Link>
                    <div className="add-actions">
                      <div className="project-dec">
                        <h5>
                          <Link to={`/projects/${item.slug}`}>
                            {item.title}
                          </Link>
                        </h5>
                        <span>{item.description}</span>
                      </div>
                      <ul className="project-action-btn">
                        <li>
                          <a className="vbox-overlay ">
                            <i
                              className="fa fa-search-plus"
                              onClick={() => openLightbox(item.images)}></i>
                          </a>
                        </li>
                        <li>
                          <Link to={`/projects/${item.slug}`}>
                            <i className="fa fa-link"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={currentSlides}
        />
      </div>
    </Layout>
  );
};

export default Projects;
