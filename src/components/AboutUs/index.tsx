import { useState } from 'react';

import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const [showPanel, setShowPanel] = useState<boolean[]>([
    true,
    false,
    false,
    false,
  ]);

  const [navTabs, setNavTabs] = useState<boolean[]>([true, false, false]);

  const { t } = useTranslation('pages', { keyPrefix: 'common.aboutUs' });

  const togglePanel = (index: number) => {
    setShowPanel((prev) => prev.map((item, i) => (index == i ? !item : false)));
  };

  const toggleNavTabs = (index: number) => {
    setNavTabs((prev) => prev.map((item, i) => (index == i ? !item : false)));
  };

  return (
    <div className="about-area about-page area-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="section-headline text-left">
              <h3>{t('title')}</h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="about-dec">
              <div className="about-img">
                <img src="https://placehold.co/555x361/webp" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="about-details">
              <div className="panel-group" id="accordion">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="check-title">
                      <a
                        onClick={() => togglePanel(0)}
                        className={`${
                          showPanel[0] ? 'active ' : 'collapsed'
                        } `}>
                        <span className="acc-icons"></span>Aspernatur
                      </a>
                    </h4>
                  </div>
                  <div
                    className={`panel-collapse ${showPanel[0] ? 'in' : ''}`}
                    style={{
                      maxHeight: showPanel[0] ? '500px' : '0px',
                      overflow: 'hidden',
                      transition: 'max-height 0.7s ease-out',
                    }}>
                    <div className="panel-body">
                      <p>{t('panel1_text')}</p>
                    </div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="check-title">
                      <a
                        onClick={() => togglePanel(1)}
                        className={`  ${
                          showPanel[1] ? 'active' : ' collapsed'
                        }`}>
                        <span className="acc-icons"></span>consectetur
                      </a>
                    </h4>
                  </div>
                  <div
                    className={`panel-collapse ${showPanel[1] ? 'in' : ''}`}
                    style={{
                      maxHeight: showPanel[1] ? '500px' : '0px',
                      overflow: 'hidden',
                      transition: 'max-height 0.7s ease-out',
                    }}>
                    <div className="panel-body">
                      <p>{t('panel2_text')}</p>
                    </div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="check-title">
                      <a
                        onClick={() => togglePanel(2)}
                        className={`${showPanel[2] ? 'active' : ' collapsed'}`}>
                        <span className="acc-icons"></span> Redug lerse
                      </a>
                    </h4>
                  </div>
                  <div
                    className={`panel-collapse ${showPanel[2] ? 'in' : ''}`}
                    style={{
                      maxHeight: showPanel[2] ? '500px' : '0px',
                      overflow: 'hidden',
                      transition: 'max-height 0.7s ease-out',
                    }}>
                    <div className="panel-body">
                      <p>{t('panel3_text')}</p>
                    </div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="check-title">
                      <a
                        onClick={() => togglePanel(3)}
                        className={`${showPanel[3] ? 'active' : ' collapsed'}`}>
                        <span className="acc-icons"></span> Redug lerset
                      </a>
                    </h4>
                  </div>
                  <div
                    className={`panel-collapse ${showPanel[3] ? 'in' : ''}`}
                    style={{
                      maxHeight: showPanel[3] ? '500px' : '0px',
                      overflow: 'hidden',
                      transition: 'max-height 0.7s ease-out',
                    }}>
                    <div className="panel-body">
                      <p>{t('panel4_text')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row second-row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="about-head">
              <div className="about-text">
                <h4 className="sec-head">Who we Are</h4>
                <p>{t('description')}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="tab-menu">
              <ul className="nav nav-tabs" role="tablist">
                <li
                  className={`${navTabs[0] ? 'active' : ''}`}
                  onClick={() => toggleNavTabs(0)}>
                  <a href="#p-view-1">Buliding</a>
                </li>

                <li
                  className={`${navTabs[1] ? 'active' : ''}`}
                  onClick={() => toggleNavTabs(1)}>
                  <a href="#p-view-2">Renovation</a>
                </li>

                <li
                  className={`${navTabs[2] ? 'active' : ''}`}
                  onClick={() => toggleNavTabs(2)}>
                  <a>Isolation</a>
                </li>
              </ul>
            </div>

            <div className="tab-content">
              <div className={`tab-pane ${navTabs[0] ? 'active' : ''}`}>
                <div className="tab-inner">
                  <div className="event-content head-team">
                    <h5>Building</h5>
                    <p>{t('nav1_text')}</p>
                  </div>
                </div>
              </div>
              <div className={`tab-pane ${navTabs[1] ? 'active' : ''}`}>
                <div className="tab-inner">
                  <div className="event-content head-team">
                    <h5>Renovation</h5>
                    <p>{t('nav2_text')}</p>
                  </div>
                </div>
              </div>
              <div className={`tab-pane ${navTabs[2] ? 'active' : ''}`}>
                <div className="tab-inner">
                  <div className="event-content head-team">
                    <h5>Isolation</h5>
                    <p>{t('nav3_text')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
