import { useState } from "react";

// Assets
import { ProjectDetailImg, ProjectImg1, ProjectImg2 } from "@/assets/images";

// Components
import Breadcrumb from "@/components/Breadcrumb";
import Layout from "@/components/Layout";

// Reat-Light
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";

interface imageSlider {
  id: number;
  url: string;
}
interface ProjectDetail {
  slug: string;
  title: string;
  description: string;
  images: imageSlider[];
}

const ProjectDetails = () => {
  const projectData: ProjectDetail = {
    slug: "Project",
    title: "Project Details",
    images: [
      { id: 1, url: ProjectDetailImg },
      { id: 2, url: ProjectImg1 },
      { id: 3, url: ProjectImg2 },
    ],
    description:
      "Aliquam et metus pharetra, bibendum massa nec, fermentum odio. Nunc id leo ultrices, mollis ligula in, finibus tortor. Mauris eu dui ut lectus fermentum eleifend.Pellentesque faucibus sem ante, non malesuada odio variusnec. Suspendisse potenti. Proin consectetur aliquam odionec fringilla. Sed interdum at justo in efficitur. Vivamusgravida volutpat sodales. Fusce ornare sit amet ligulacondimentum sagittis.",
  };

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const toggleOpen = (state: boolean) => () => setOpen(state);

  const updateIndex = ({ index: current }: { index: number }) =>
    setIndex(current);

  const slides = projectData.images.map((image) => ({ src: image.url }));

  return (
    <Layout>
      <Breadcrumb heading={projectData.slug} pageName={projectData.title} />
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
                      imageFit: "cover",
                    }}
                    inline={{
                      style: {
                        width: "100%",
                        maxWidth: "900px",
                        aspectRatio: "3 / 2",
                        margin: "0 auto",
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
                  <h2>{projectData.title}</h2>

                  <div className="entry-content">{projectData.description}</div>
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

export default ProjectDetails;
