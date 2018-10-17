import React from 'react';
import { Link } from 'gatsby';
import Dropdown from './dropdown';
import styles from './header.module.css';
import githubLogo from '../images/github-logo.png';

const docDropdown = {
  items: [
    {
      id: 0,
      title: 'Static',
      link: '/reference'
    },
    {
      id: 1,
      title: 'Realtime',
      link: '/realtime'
    },
    {
      id: 1,
      title: 'Best Practices',
      link: '/best-practices'
    }
  ]
}

const Header = ({ siteTitle }) => (
  <div className={styles.container}>
    <div className={styles.logo}>
      <h2>GTFS.org</h2>
    </div>

    <div className={styles.links}>
        <Link
          to="/"
          activeClassName={styles.activePage}
        >
          Home
        </Link>
        <Dropdown title="Docs" list={docDropdown.items}></Dropdown>
        <Link
          to="/examples"
          activeClassName={styles.activePage}
        >
          Examples
        </Link>
        <Link
          to="/testing"
          activeClassName={styles.activePage}

        >
          Testing Feeds
        </Link>


    </div>
    <div className={styles.spacer}></div>
    <div className={styles.github}>

      <img src={githubLogo} width="40" height="40"/>
    </div>

  </div>
)

export default Header
