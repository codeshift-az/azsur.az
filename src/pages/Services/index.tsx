// Components
import Breadcrumb from "@/components/Breadcrumb";
import Layout from "@/components/Layout";
import Subscribe from "@/components/Subscribe";

// Assets
import {
  ServicesImg,
  ServicesImg2,
  ServicesImg3,
  ServicesImg4,
} from "@/assets/images";
const Services = () => {
  const ServiceData = [
    {
      id: 1,
      img: ServicesImg,
      title: "Beguiled and demo",
      author: "UsdTheme",
      comments: 0,
      date: { day: "09", month: "Jan" },
      description:
        "Redug Lerse dolor sit amet, consectetur adipisicing elit. Dignissimos, culpa nobis at perspiciatis sit sint, adipisci neque illum. Adipisci dolores, vitae! Voluptatem consequatur.",
    },
    {
      id: 2,
      img: ServicesImg2,
      title: "Another blog post",
      author: "UsdTheme",
      comments: 1,
      date: { day: "15", month: "Feb" },
      description:
        "Redug Lerse dolor sit amet, consectetur adipisicing elit. Dignissimos, culpa nobis at perspiciatis sit sint, adipisci neque illum. Adipisci dolores, vitae! Voluptatem consequatur.",
    },
    {
      id: 3,
      img: ServicesImg3,
      title: "Third blog post",
      author: "UsdTheme",
      comments: 2,
      date: { day: "22", month: "Mar" },
      description:
        "Redug Lerse dolor sit amet, consectetur adipisicing elit. Dignissimos, culpa nobis at perspiciatis sit sint, adipisci neque illum. Adipisci dolores, vitae! Voluptatem consequatur.",
    },
    {
      id: 4,
      img: ServicesImg4,
      title: "Fourth blog post",
      author: "UsdTheme",
      comments: 3,
      date: { day: "01", month: "Apr" },
      description:
        "Redug Lerse dolor sit amet, consectetur adipisicing elit. Dignissimos, culpa nobis at perspiciatis sit sint, adipisci neque illum. Adipisci dolores, vitae! Voluptatem consequatur.",
    },
    {
      id: 5,
      img: ServicesImg,
      title: "Fifth blog post",
      author: "UsdTheme",
      comments: 0,
      date: { day: "10", month: "May" },
      description:
        "Redug Lerse dolor sit amet, consectetur adipisicing elit. Dignissimos, culpa nobis at perspiciatis sit sint, adipisci neque illum. Adipisci dolores, vitae! Voluptatem consequatur.",
    },
    {
      id: 6,
      img: ServicesImg4,
      title: "Sixth blog post",
      author: "UsdTheme",
      comments: 4,
      date: { day: "18", month: "Jun" },
      description:
        "Redug Lerse dolor sit amet, consectetur adipisicing elit. Dignissimos, culpa nobis at perspiciatis sit sint, adipisci neque illum. Adipisci dolores, vitae! Voluptatem consequatur.",
    },
  ];
  return (
    <Layout>
      <Breadcrumb heading="Services" pageName="Services" />
      <div className="page-head area-padding">
        <div className="container">
          <div className="row">
            {ServiceData?.map((item) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="blog-post blog-1 ">
                    <div className="banner-box">
                      <a href="#" className="image-blog">
                        <img src={item.img} alt="" />
                        <span className="date-time">
                          <span className="days">09</span>
                          <span className="months">Jan</span>
                        </span>
                      </a>
                      <div className="single-blog">
                        <a href="#">
                          <h4 className="sec-head">Beguiled and demo</h4>
                        </a>
                        <p className="author">
                          By UsdTheme<span> ( 0 comments )</span>
                        </p>
                        <p>{item.description}</p>
                        <a className="blog-btn" href="#">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Subscribe />
    </Layout>
  );
};

export default Services;
