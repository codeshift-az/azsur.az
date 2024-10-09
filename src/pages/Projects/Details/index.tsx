import { useState } from "react";

// Assets
import { ProjectDetailImg, ProjectImg1, ProjectImg2 } from "@/assets/images";

// Components
import Breadcrumb from "@/components/Breadcrumb";
import Layout from "@/components/Layout";

// Reat-Light
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
const ProjectDetails = () => {
  const projectData = {
    heading: "Project",
    pageName: "Project Details",
    date: "March 28, 2016",
    author: "admin",
    tags: ["painting", "work"],
    categories: ["tools", "Humer", "House"],
    commentsCount: 6,
    images: [
      { src: ProjectDetailImg },
      { src: ProjectImg1 },
      { src: ProjectImg2 },
    ],
  };

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const toggleOpen = (state: boolean) => () => setOpen(state);

  const updateIndex = ({ index: current }: { index: number }) =>
    setIndex(current);

  return (
    <Layout>
      <Breadcrumb
        heading={projectData.heading}
        pageName={projectData.pageName}
      />
      <div className="page-head area-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <article className="blog-post-wrapper">
                <div className="post-thumbnail">
                  <Lightbox
                    index={index}
                    slides={projectData.images}
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
                    slides={projectData.images}
                    on={{ view: updateIndex }}
                    animation={{ fade: 0 }}
                    controller={{
                      closeOnPullDown: true,
                      closeOnBackdropClick: true,
                    }}
                  />
                </div>
                <div className="post-information">
                  <h2>{projectData.pageName}</h2>
                  <div className="entry-meta">
                    <span className="author-meta">
                      <i className="fa fa-user"></i>
                      <a href="#">{projectData.author}</a>
                    </span>

                    <span>
                      <i className="fa fa-clock-o"></i> {projectData.date}
                    </span>

                    <span className="tag-meta">
                      <i className="fa fa-folder-o"></i>
                      {projectData.tags.join(", ")}
                    </span>

                    <span>
                      <i className="fa fa-tags"></i>
                      {projectData.categories.join(", ")}
                    </span>

                    <span>
                      <i className="fa fa-comments-o"></i>
                      <a href="#">{projectData.commentsCount} comments</a>
                    </span>
                  </div>
                  <div className="entry-content">
                    <p>
                      Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras
                      pretium arcu ex. Aenean posuere libero eu augue
                      condimentum rhoncus. Praesent ornare tortor ac ante
                      egestas hendrerit.
                    </p>

                    <p>
                      Aliquam et metus pharetra, bibendum massa nec, fermentum
                      odio. Nunc id leo ultrices, mollis ligula in, finibus
                      tortor. Mauris eu dui ut lectus fermentum eleifend.
                      Pellentesque faucibus sem ante, non malesuada odio varius
                      nec. Suspendisse potenti. Proin consectetur aliquam odio
                      nec fringilla. Sed interdum at justo in efficitur. Vivamus
                      gravida volutpat sodales. Fusce ornare sit amet ligula
                      condimentum sagittis.
                    </p>

                    <blockquote>
                      <p>
                        Quisque semper nunc vitae erat pellentesque, ac placerat
                        arcu consectetur. In venenatis elit ac ultrices
                        convallis. Duis est nisi, tincidunt ac urna sed, cursus
                        blandit lectus. In ullamcorper sit amet ligula ut
                        eleifend. Proin dictum tempor ligula, ac feugiat metus.
                        Sed finibus tortor eu scelerisque scelerisque.
                      </p>
                    </blockquote>

                    <p>
                      Aenean et tempor eros, vitae sollicitudin velit. Etiam
                      varius enim nec quam tempor, sed efficitur ex ultrices.
                      Phasellus pretium est vel dui vestibulum condimentum.
                      Aenean nec suscipit nibh. Phasellus nec lacus id arcu
                      facilisis elementum. Curabitur lobortis, elit ut elementum
                      congue, erat ex bibendum odio, nec iaculis lacus sem non
                      lorem. Duis suscipit metus ante, sed convallis quam
                      posuere quis. Ut tincidunt eleifend odio, ac fringilla mi
                      vehicula nec. Nunc vitae lacus eget lectus imperdiet
                      tempus sed in dui. Nam molestie magna at risus
                      consectetur, placerat suscipit justo dignissim. Sed vitae
                      fringilla enim, nec ullamcorper arcu.
                    </p>

                    <p>
                      Suspendisse turpis ipsum, tempus in nulla eu, posuere
                      pharetra nibh. In dignissim vitae lorem non mollis.
                      Praesent pretium tellus in tortor viverra condimentum.
                      Nullam dignissim facilisis nisl, accumsan placerat justo
                      ultricies vel. Vivamus finibus mi a neque pretium, ut
                      convallis dui lacinia. Morbi a rutrum velit. Curabitur
                      sagittis quam quis consectetur mattis. Aenean sit amet
                      quam vel turpis interdum sagittis et eget neque. Nunc ante
                      quam, luctus et neque a, interdum iaculis metus. Aliquam
                      vel ante mattis, placerat orci id, vehicula quam.
                      Suspendisse quis eros cursus, viverra urna sed, commodo
                      mauris. Cras diam arcu, fringilla a sem condimentum,
                      viverra facilisis nunc. Curabitur vitae orci id nulla
                      maximus maximus. Nunc pulvinar sollicitudin molestie.
                    </p>
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

export default ProjectDetails;
