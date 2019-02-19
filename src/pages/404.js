import React from 'react'
import Layout from '../components/layout'
import { getPathForLanguage } from '../lib/i18n'
import { navigate } from 'gatsby'
import { useTranslation } from 'react-i18next';

const NotFoundPage = (props) => {
  const { t, i18n } = useTranslation()
  const { location } = props

  const changeLanguageToEnglish = () => {
    const englishPath = getPathForLanguage(location.pathname, 'en')
    
    i18n.changeLanguage('en');
    navigate(englishPath)
  };

  const renderNotFoundText = () => {
    if (i18n.language === 'en') {
      return (
        <p className="card-text">This page does not exist.</p>
      )
    } else {
      return (
        <div>
          <p className="card-text">{t('Not Found text')} {t(i18n.language)}.</p>
          <p className="card-text">
            <button onClick={() => changeLanguageToEnglish()}>{t('View in English')}</button>
          </p>
        </div>
      )
    }
  }

  return (
    <Layout location={location} lang={i18n.language}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 mt-5">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title">{t('Not Found')}</h1>
                {renderNotFoundText()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
