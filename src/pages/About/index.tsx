// Components
import Breadcrumb from "@/components/Breadcrumb";
import Layout from "@/components/Layout";

// Sections
import Banner from "./sections/Banner";
import AboutUs from "./sections/AboutUs";
import OurTeams from "./sections/OurTeams";
import OurSkill from "./sections/OurSkill";
import Suscribe from "./sections/Suscribe";

const About = () => {
  return (
    <Layout>
      <Breadcrumb heading="About us" pageName="About Us" />
      <Banner />
      <AboutUs />
      <OurTeams />
      <OurSkill />
      <Suscribe />
    </Layout>
  );
};

export default About;
