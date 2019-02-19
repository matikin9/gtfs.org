import React from 'react';
import { Link } from 'gatsby';
import LanguageSwitcher from './language-switcher';
import styles from './header.module.css';
import gtfsHeader from '../images/gtfs.png';
import { StaticQuery, graphql } from "gatsby";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem
} from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { getPathForLanguage } from '../lib/i18n'

const MenuItem = (props) => {
  const { t, i18n } = useTranslation()
  const { item } = props

  return (
    <NavItem>
      <Link
        to={getPathForLanguage(item.link, i18n.language)}
        className={`${styles.mainNavLink} nav-link`}
        activeClassName="active"
      >
        {t(`menu:${item.display}`)}
      </Link>
    </NavItem>
  )
}

const LogoLink = (props) => {
  const { i18n } = useTranslation()
  return (
    <NavbarBrand href={getPathForLanguage('/', i18n.language)}>
      <img src={gtfsHeader} width="125" height="44" alt="GTFS" className={styles.headerLogo} />
    </NavbarBrand>
  )
}

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const { location } = this.props
    return (
      <StaticQuery
        query={graphql`
          query {
            allNav {
              edges {
                node {
                  contents {
                    display
                    link
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const { allNav } = data
          return (
            <Navbar light={true} expand="lg" className={`${styles.bgBlue} navbar-dark`}>
              <div className="container">
                <LogoLink />
                <NavbarToggler onClick={() => this.toggleNavbar()} className="mr-2" />
                <Collapse isOpen={!this.state.collapsed} navbar>
                  <Nav className="mr-auto" navbar>
                    {allNav.edges[0].node.contents.map((item, index) => (
                      <MenuItem
                        item={item}
                        key={index}
                      /> 
                    ))}
                  </Nav>
                </Collapse>
                <LanguageSwitcher location={location} />
              </div>
            </Navbar>
          )
        }}
      />
    )
  }
}

