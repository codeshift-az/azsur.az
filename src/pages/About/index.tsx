import Breadcrumb from '@/components/Breadcrumb';
import Layout from '@/components/Layout';

import * as Sections from './sections';

const About = () => {
  return (
    <Layout>
      <Breadcrumb heading="About us" pageName="About Us" />
      <Sections.Banner />
      <Sections.AboutUs />
      <Sections.OurTeams />
      <Sections.OurSkill />
    </Layout>
  );
};

export default About;
