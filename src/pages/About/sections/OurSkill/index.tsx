// Component
import ProgressBar from "./component/progressBar";

const OurSkill = () => {
  return (
    <div className="about-skills-area area-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="section-headline-3 text-center ">
              <h3>Our skill</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="our-skill-team fix">
              <div className="skill">
                <ProgressBar progressBar={99} />
                <ProgressBar progressBar={97} />
                <ProgressBar progressBar={96} />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="our-skill-team fix">
              <div className="skill">
                <ProgressBar progressBar={97} />
                <ProgressBar progressBar={96} />
                <ProgressBar progressBar={99} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSkill;
