import React from 'react'
import Layout from '../components/layout'
import { getPathForLanguage } from '../lib/i18n'
import { useTranslation } from 'react-i18next';
import Footer from '../components/footer';

const NotFoundPage = (props) => {
  const { t, i18n } = useTranslation()
  const { location } = props

  const renderNotFoundText = () => {
    const englishPath = getPathForLanguage(location.pathname, 'en');

    if (i18n.language === 'en') {
      return (
        <p className="card-text">This page does not exist.</p>
      )
    } else {
      return (
        <div>
          <p className="card-text">{t('Not Found text')} {t(i18n.language)}.</p>
          <p className="card-text">
            <a className="btn btn-primary" href={englishPath}>{t('View in English')}</a>
          </p>
        </div>
      )
    }
  }

  return (
    <Layout location={location} lang={i18n.language}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 mt-5 mb-5">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title">{t('Not Found')}</h1>
                {renderNotFoundText()}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer className="footer" />
    </Layout>
  )
}

export default NotFoundPage
