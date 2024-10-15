import Breadcrumb from '@/components/Breadcrumb';
import Layout from '@/components/Layout';
import Subscribe from '@/components/Subscribe';

import * as Sections from './sections';
import AboutUs from './sections/AboutUs';
import Banner from './sections/Banner';
import OurSkill from './sections/OurSkill';
import OurTeams from './sections/OurTeams';

const About = () => {
  return (
    <Layout>
      <Breadcrumb heading="About us" pageName="About Us" />
      <Banner />
      <AboutUs />
      <OurTeams />
      <OurSkill />
      <Sections.Banner />
      <Sections.AboutUs />
      <Sections.OurTeams />
      <Sections.OurSkill />
      <Subscribe />
    </Layout>
  );
};

export default About;
