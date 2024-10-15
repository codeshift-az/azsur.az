import { useTranslation } from 'react-i18next';

// Helmet
import { Helmet } from 'react-helmet-async';

// Components
import Layout from '@/components/Layout';

// Helpers
import { getPageTitle } from '@/helpers';

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

      <h1>{t('title')}</h1>
    </Layout>
  );
};

export default Home;
