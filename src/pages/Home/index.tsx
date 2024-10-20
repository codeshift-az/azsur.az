import { useTranslation } from 'react-i18next';

// Helmet
import { Helmet } from 'react-helmet-async';

// Components
import Layout from '@/components/Layout';
import Subscribe from '@/components/Subscribe';

// Helpers
import { getPageTitle } from '@/helpers';

import { AboutUs } from '../About/sections';
import * as Sections from './sections';

const Home = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'home' });

  const pageTitle = getPageTitle(t('title'));

  return (
    <Layout>
      <Helmet>
        <title>{pageTitle}</title>

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={t('description')} />
        <meta name="description" content={t('description')} />
      </Helmet>
      <Sections.Banner />
      <Subscribe />
      <Sections.ServiceArea />
      <Sections.LatestProjects />
      <AboutUs />
      <Sections.ReviewArea />
      <Sections.BrandArea />
    </Layout>
  );
};

export default Home;
