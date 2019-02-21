import React from 'react';
import styles from './language-switcher.module.css';
import { useTranslation } from 'react-i18next';
import { navigate } from 'gatsby'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import globeIcon from '../images/globe-americas-solid.svg';

import { getPathForLanguage, langs } from '../lib/i18n'

const LanguageItem = (props) => {
  const { t, i18n } = useTranslation();
  const { location, lang } = props
  const { pathname } = location
  const changeLanguage = lang => {
    const newPath = getPathForLanguage(pathname, lang)
    
    i18n.changeLanguage(lang);
    navigate(newPath)
  };
  return <DropdownItem onClick={() => changeLanguage(lang)} key={lang}>{t(lang)}</DropdownItem>
}


export default class LanguageSwitcher extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    const { location } = this.props;
    
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle outline className={styles.languageButton} caret>
        <img src={globeIcon} width="25" height="25" alt="Language" className={styles.languageIcon} />
        </DropdownToggle>
        <DropdownMenu right>
          {langs.map(lang => (
            <LanguageItem key={lang} lang={lang} location={location} />
          ))}
        </DropdownMenu>
      </Dropdown>
    )
  }
}
