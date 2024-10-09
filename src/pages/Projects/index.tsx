import { useState } from "react";
import { Link } from "react-router-dom";

// Light Box
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Assets
import {
  ProjectImg1,
  ProjectImg2,
  ProjectImg3,
  ProjectImg4,
  ProjectImg5,
  ProjectImg6,
} from "@/assets/images";

// Components
import Breadcrumb from "@/components/Breadcrumb";
import Layout from "@/components/Layout";
import Subscribe from "@/components/Subscribe";

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [currentSlides, setCurrentSlides] = useState<{ src: string }[]>([]);

  const [filterKey, setFilterKey] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Apartment",
      category: ["isolation", "electricity"],
      img: ProjectImg1,
      images: [ProjectImg1, ProjectImg2, ProjectImg3],
    },
    {
      id: 2,
      title: "Apartment",
      category: ["isolation", "building"],
      img: ProjectImg2,
      images: [ProjectImg2, ProjectImg4],
    },
    {
      id: 3,
      title: "Apartment",
      category: ["building", "renovate"],
      img: ProjectImg3,
      images: [ProjectImg3, ProjectImg5, ProjectImg6],
    },
    {
      id: 4,
      title: "Apartment",
      category: ["electricity", "renovate"],
      img: ProjectImg4,
      images: [ProjectImg4],
    },
    {
      id: 5,
      title: "Apartment",
      category: ["building", "electricity"],
      img: ProjectImg5,
      images: [ProjectImg5, ProjectImg1],
    },
    {
      id: 6,
      title: "Apartment",
      category: ["isolation", "renovate"],
      img: ProjectImg6,
      images: [ProjectImg6],
    },
  ];

  const filteredProjects =
    filterKey === "all"
      ? projects
      : projects.filter((project) => project.category.includes(filterKey));

  const openLightbox = (images: string[]) => {
    setCurrentSlides(images.map((src) => ({ src })));
    setOpen(true);
  };
  return (
    <Layout>
      <Breadcrumb heading="Our Project" pageName="Our Project" />
      <div className="portfolio-area area-padding fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="section-headline-3 text-center">
                <h3>Our Latest Projects</h3>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="awesome-project-1 fix">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="awesome-menu">
                  <ul className="project-menu">
                    <li>
                      <a
                        href="#"
                        className={filterKey === "all" ? "active" : ""}
                        onClick={() => setFilterKey("all")}>
                        All
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={filterKey === "building" ? "active" : ""}
                        onClick={() => setFilterKey("building")}>
                        Building
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={filterKey === "isolation" ? "active" : ""}
                        onClick={() => setFilterKey("isolation")}>
                        Isolation
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={filterKey === "electricity" ? "active" : ""}
                        onClick={() => setFilterKey("electricity")}>
                        Electricity
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={filterKey === "renovate" ? "active" : ""}
                        onClick={() => setFilterKey("renovate")}>
                        Renovate
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="awesome-project-content portfolio-2 row"
              style={{ position: "relative" }}>
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className={` single-awesome-project ${project.category.join(
                    " "
                  )} col`}>
                  <div className="awesome-img">
                    <a href="#">
                      <img src={project.img} alt={project.title} />
                    </a>
                    <div className="add-actions">
                      <div className="project-dec">
                        <h5>
                          <a href="#">{project.title}</a>
                        </h5>
                        <span>{project.category.join(", ")}</span>
                      </div>
                      <ul className="project-action-btn">
                        <li>
                          <a className="vbox-overlay ">
                            <i
                              className="fa fa-search-plus"
                              onClick={() => openLightbox(project.images)}></i>
                          </a>
                        </li>
                        <li>
                          <Link to="/projects/:slug">
                            <i className="fa fa-link"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={currentSlides}
      />
      <Subscribe />
    </Layout>
  );
};

export default Projects;
