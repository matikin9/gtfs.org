import React from 'react';
import styles from './language-switcher.module.css';
import { useTranslation } from 'react-i18next';
import { navigate } from 'gatsby'

import { getPathForLanguage, langs } from '../lib/i18n'


const LanguageSwitcher = (props) => {
  const { i18n } = useTranslation();
  const { location } = props
  const { pathname } = location

  const changeLanguage = lang => {
    const newPath = getPathForLanguage(pathname, lang)
    
    i18n.changeLanguage(lang);
    navigate(newPath)
  };

  return (
    <div>
      {langs.map(lang => (
        <button onClick={() => changeLanguage(lang)} key={lang}>{lang}</button>
      ))}
    </div>
  )
}

export default LanguageSwitcher;
