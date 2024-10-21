import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import useSWR from 'swr';
import Lightbox from 'yet-another-react-lightbox';
import Inline from 'yet-another-react-lightbox/plugins/inline';

import Breadcrumb from '@/components/Breadcrumb';
import Layout from '@/components/Layout';

import { getProjectDetails } from '@/api/project';

import NotFound from '../NotFound';

const ProjectDetails = () => {
  const { pathname } = useLocation();

  const {
    data: project,
    isLoading,
    error,
  } = useSWR(['project', pathname], () =>
    getProjectDetails(pathname.split('/').pop() as string)
  );

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const toggleOpen = (state: boolean) => () => setOpen(state);

  const updateIndex = ({ index: current }: { index: number }) =>
    setIndex(current);

  const slides = project?.images.map((image) => ({ src: image?.image }));

  if (isLoading || !project) return <div id="preloader"></div>;

  if (error && error.status === 404) return <NotFound />;
  return (
    <Layout>
      <Breadcrumb heading={project.slug} pageName={project.title} />
      <div className="page-head area-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
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
                  <h2>{project.title}</h2>

                  <div className="entry-content">{project.description}</div>
                </div>
              </article>
              <div className="clear"></div>
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

export default ProjectDetails;
