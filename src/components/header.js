import React from 'react';
import { Link } from 'gatsby';
import styles from './header.module.css';
import githubLogo from '../images/github-logo.png';

const Header = ({ siteTitle }) => (
  <div className={styles.container}>
    <div className={styles.logo}>
      <h1>GTFS</h1>
    </div>

    <div className={styles.links}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Home
        </Link>
        <Link
          to="/reference"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Docs
        </Link>
        <Link
          to="/reference"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Examples
        </Link>
        <Link
          to="/reference"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
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
