import React from 'react';
import { Link } from 'gatsby';
import styles from './header.module.css';
import githubLogo from '../images/github-logo.png';

const Header = ({ siteTitle }) => (
  <div className={styles.container}>
    GTFS
    <div className={styles.logo}>
      <img src={githubLogo} width="40" height="40"/>
    </div>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.45rem',
      }}
    >

      <h3 style={{ margin: 0 }}>
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
          Core Reference
        </Link>
      </h3>
    </div>

  </div>
)

export default Header
