import { useState } from "react";

// Assets
import { AboutUsImg } from "@/assets/images";

const AboutUs = () => {
  const [showPanel, setShowPanel] = useState<boolean[]>([
    true,
    false,
    false,
    false,
  ]);

  const [navTabs, setNavTabs] = useState<boolean[]>([true, false, false]);

  const togglePanel = (index: number) => {
    setShowPanel((prev) => prev.map((item, i) => (index == i ? !item : false)));
  };

  const toggleNavTabs = (index: number) => {
    setNavTabs((prev) => prev.map((item, i) => (index == i ? !item : false)));
  };

  return (
    <div className="about-area about-page area-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="section-headline text-left">
              <h3>about us</h3>
            </div>
          </div>
        </div>
      
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="about-dec">
              <div className="about-img">
                <img src={AboutUsImg} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="about-details">
              <div className="panel-group" id="accordion">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="check-title">
                      <a
                        onClick={() => togglePanel(0)}
                        className={`${
                          showPanel[0] ? "active " : "collapsed"
                        } `}>
                        <span className="acc-icons"></span>Aspernatur
                      </a>
                    </h4>
                  </div>
                  <div
                    className={`panel-collapse ${showPanel[0] ? "in" : ""}`}
                    style={{
                      maxHeight: showPanel[0] ? "500px" : "0px",
                      overflow: "hidden",
                      transition: "max-height 0.7s ease-out",
                    }}>
                    <div className="panel-body">
                      <p>
                        Redug lerse dolor sit amet, consectetur adipisicing
                        elit. Aspernatur, tempore, commodi quas mollitia dolore
                        magnam quidem repellat, culpa voluptates laboriosam
                        maiores alias accusamus recusandae vero{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="check-title">
                      <a
                        onClick={() => togglePanel(1)}
                        className={`  ${
                          showPanel[1] ? "active" : " collapsed"
                        }`}>
                        <span className="acc-icons"></span>consectetur
                      </a>
                    </h4>
                  </div>
                  <div
                    className={`panel-collapse ${showPanel[1] ? "in" : ""}`}
                    style={{
                      maxHeight: showPanel[1] ? "500px" : "0px",
                      overflow: "hidden",
                      transition: "max-height 0.7s ease-out",
                    }}>
                    <div className="panel-body">
                      <p>
                        Redug lerse dolor sit amet, consectetur adipisicing
                        elit. Aspernatur, tempore, commodi quas mollitia dolore
                        magnam quidem repellat, culpa voluptates laboriosam
                        maiores alias accusamus recusandae vero aperiam sint
                        nulla beatae eos. ipsum dolor sit amet, consectetur
                        adipisicing elit. Repellendus nulla praesentium
                        cupiditate, eos sequi ullam nesciunt enim id, distinctio{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="check-title">
                      <a
                        onClick={() => togglePanel(2)}
                        className={`${showPanel[2] ? "active" : " collapsed"}`}>
                        <span className="acc-icons"></span> Redug lerse
                      </a>
                    </h4>
                  </div>
                  <div
                    className={`panel-collapse ${showPanel[2] ? "in" : ""}`}
                    style={{
                      maxHeight: showPanel[2] ? "500px" : "0px",
                      overflow: "hidden",
                      transition: "max-height 0.7s ease-out",
                    }}>
                    <div className="panel-body">
                      <p>
                        Redug lerse dolor sit amet, consectetur adipisicing
                        elit. Aspernatur, tempore, commodi quas mollitia dolore
                        magnam quidem repellat, culpa voluptates laboriosam
                        maiores alias accusamus recusandae vero aperiam sint
                        nulla beatae eos. ipsum dolor sit amet, consectetur
                        adipisicing elit. Repellendus nulla praesentium
                        cupiditate, eos sequi ullam nesciunt enim id, distinctio{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="check-title">
                      <a
                        onClick={() => togglePanel(3)}
                        className={`${showPanel[3] ? "active" : " collapsed"}`}>
                        <span className="acc-icons"></span> Redug lerset
                      </a>
                    </h4>
                  </div>
                  <div
                    className={`panel-collapse ${showPanel[3] ? "in" : ""}`}
                    style={{
                      maxHeight: showPanel[3] ? "500px" : "0px",
                      overflow: "hidden",
                      transition: "max-height 0.7s ease-out",
                    }}>
                    <div className="panel-body">
                      <p>
                        Redug lerse dolor sit amet, consectetur adipisicing
                        elit. Aspernatur, tempore, commodi quas mollitia dolore
                        magnam quidem repellat, culpa voluptates laboriosam
                        maiores alias accusamus recusandae vero aperiam sint
                        nulla beatae eos. ipsum dolor sit amet, consectetur
                        adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row second-row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="about-head">
              <div className="about-text">
                <h4 className="sec-head">Who we Are</h4>
                <p>
                  Redug lerse dolor sit amet, consectetur adipisicing elit. Quae
                  facilis, pariatur. Expedita nihil, tenetur neque aliquid animi
                  impedit molestias reiciendis sint quis. Consectetur molestias
                  dolore rem, eaque adipisci consequuntur placeat! Redug lerse
                  dolor sit amet,
                  <br /> consectetur adipisicing elit. Natus id repellat
                  consequatur numquam accusantium minus eligendi veniam eaque
                  est enim praesentium architecto maiores nihil debitis eius,
                  eos, vel minima. Laudantium accusantium minus eligendi veniam
                  eaque est enim praesentium architecto maiores nihil debitis
                  eius, eos,accusantium minus eligendi veniam eaque est enim
                  praesentium architecto
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="tab-menu">
              <ul className="nav nav-tabs" role="tablist">
                <li
                  className={`${navTabs[0] ? "active" : ""}`}
                  onClick={() => toggleNavTabs(0)}>
                  <a href="#p-view-1">Buliding</a>
                </li>

                <li
                  className={`${navTabs[1] ? "active" : ""}`}
                  onClick={() => toggleNavTabs(1)}>
                  <a href="#p-view-2">Renovation</a>
                </li>

                <li
                  className={`${navTabs[2] ? "active" : ""}`}
                  onClick={() => toggleNavTabs(2)}>
                  <a>Isolation</a>
                </li>
              </ul>
            </div>

            <div className="tab-content">
              <div className={`tab-pane ${navTabs[0] ? "active" : ""}`}>
                <div className="tab-inner">
                  <div className="event-content head-team">
                    <h5>Building</h5>
                    <p>
                      Redug lerse dolor sit amet, consectetur adipisicing elit.
                      Animi vero excepturi magnam ducimus adipisci voluptas,
                      praesentium maxime necessitatibus in dolor dolores unde
                      ab, libero quo. Aut, laborum sequi ipsam nobis! Redug
                      lerse dolor sit amet, consectetur adipisicing elit.
                      Expedita hic maxime commodi cum fugiat, architecto
                      ducimus, doloribus fuga itaque omnis placeat, optio
                      recusandae saepe porro dolore error voluptatibus ipsam
                      tempora.
                    </p>
                  </div>
                </div>
              </div>
              <div className={`tab-pane ${navTabs[1] ? "active" : ""}`}>
                <div className="tab-inner">
                  <div className="event-content head-team">
                    <h5>Renovation</h5>
                    <p>
                      hic quis repellat cum ullam, fuga deleniti illum nemo!
                      olores fugiat necessitatibus, magni voluptatibus hic quis
                      repellat cum ullam, fuga deleniti illum nemo! Redug lerse
                      dolor sit amet, consectetur adipisicing elit. Cumque
                      deseruntmagni voluptatibus hic quis repellat cum ullam,
                      fuga deleniti illum nemo!dolores fugiat necessitatibus,
                      magni voluptatibus beatae mollitia. Eaque mollitia,
                      incidunt voluptates dolores fugiat necessitatibus,
                    </p>
                  </div>
                </div>
              </div>
              <div className={`tab-pane ${navTabs[2] ? "active" : ""}`}>
                <div className="tab-inner">
                  <div className="event-content head-team">
                    <h5>Isolation</h5>
                    <p>
                      nemo!dolores fugiat necessitatibus, magni voluptatibus hic
                      quis repellat cum ullam, fuga deleniti illum nemo! olores
                      fugiat necessitatibus, magni voluptatibus hic quis
                      repellat cum ullam, fuga deleniti illum nemo! Redug lerse
                      dolor sit amet, consectetur adipisicing elit. Cumque
                      deserunt beatae mollitia. Eaque mollitia, incidunt
                      voluptates dolores fugiat necessitatibus, magni
                      voluptatibus hic quis repellat cum ullam, fuga deleniti
                      illum
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
