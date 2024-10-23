import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import useSWR from 'swr';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import Breadcrumb from '@/components/Breadcrumb';
import Layout from '@/components/Layout';
import Preloader from '@/components/Preloader';

import { getProjectList } from '@/api/project';
import { getServiceList } from '@/api/service';

const Projects = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'common' });
  const {
    data: projects,
    isLoading,
    error,
  } = useSWR('projects', () => getProjectList());
  const { data: services, isLoading: serviceLoading } = useSWR('projects', () =>
    getServiceList()
  );

  const [selectedService, setSelectedService] = useState<string>('');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const [open, setOpen] = useState(false);
  const [currentSlides, setCurrentSlides] = useState<{ src: string }[]>([]);

  useEffect(() => {
    if (!projects) return;

    if (selectedService === '') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((item) => item.service.slug === selectedService)
      );
    }
  }, [selectedService, projects]);

  const openLightbox = (images) => {
    setCurrentSlides(images.map((src) => ({ src: src.image })));
    setOpen(true);
  };
  if (isLoading || !projects || serviceLoading) return <Preloader />;

  if (error && error.status === 404) return null;
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
              <div className="row ">
                <div className="awesome-project-1 fix">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="awesome-menu">
                      <ul className="project-menu">
                        <li>
                          <a
                            role="button"
                            className={selectedService === '' ? 'active' : ''}
                            onClick={() => setSelectedService('')}>
                            All
                          </a>
                        </li>
                        {services?.map((item, index) => (
                          <li key={index}>
                            <a
                              role="button"
                              className={
                                selectedService === item.slug ? 'active' : ''
                              }
                              onClick={() => setSelectedService(item.slug)}>
                              Building
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {filteredProjects?.map((item, index) => (
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
