import * as Sections from "./sections";

// Components
import Breadcrumb from "@/components/Breadcrumb";
import Layout from "@/components/Layout";

// Sections
import Subscribe from "@/components/Subscribe";

const About = () => {
  return (
    <Layout>
      <Breadcrumb heading="About us" pageName="About Us" />
      <Sections.Banner />
      <Sections.AboutUs />
      <Sections.OurTeams />
      <Sections.OurSkill />
      <Subscribe />
    </Layout>
  );
};

export default About;
