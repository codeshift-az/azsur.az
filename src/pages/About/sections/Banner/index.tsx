const Banner = () => {
  return (
    <div className="about-area area-padding">
      <div className="container">
        <div className="row">
          <div className="our-about-inner">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="full-width-video-wrap embed-responsive embed-responsive-16by9">
                <iframe src="https://www.youtube.com/embed/h5FI0ioPVXY"></iframe>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="about-pic">
                <img src="https://placehold.co/555x275/webp" alt="our image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
