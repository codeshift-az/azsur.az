import { useTranslation } from 'react-i18next';

import AboutUs from '@/components/AboutUs';
import Breadcrumb from '@/components/Breadcrumb';
import Layout from '@/components/Layout';

import * as Sections from './sections';

const About = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'common.aboutUs' });

  return (
    <Layout>
      <Breadcrumb heading={t('title')} pageName={t('title')} />
      <Sections.Banner />
      <AboutUs />
      <Sections.OurTeams />
      <Sections.OurSkill />
    </Layout>
  );
};

export default About;
