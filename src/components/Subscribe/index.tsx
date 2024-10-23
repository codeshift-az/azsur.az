import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

const Subscribe = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'common' });

  return (
    <div className="suscribe-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="suscribe-text text-center">
              <h3>{t('subscribe')}</h3>
              <Link className="sus-btn" to="/contact">
                {t('buttons.getQuate')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
