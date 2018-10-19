import React from 'react';
import { Link } from 'gatsby';
import NavDropdown from './dropdown';
import styles from './header.module.css';
import githubLogo from '../images/github-logo.png';
import { Dropdown } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';

const languageOptions = [{ key: 'English', text: 'English', value: 'English' }];

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
};

const Header = ({ siteTitle }) => (
  <div className={styles.container}>
    <div className={styles.logo}>
      <h2>GTFS</h2>
    </div>

    <div className={styles.links}>
        <Link
          to="/"
          activeClassName={styles.activePage}
          style={{ textDecoration: 'none' }}
        >
          <div className={styles.linkText}>Home</div>
        </Link>
        <NavDropdown title="Docs" list={docDropdown.items}></NavDropdown>
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
    <div className={styles.language}>
      <Dropdown
        button
        className='icon'
        floating
        labeled
        icon='world'
        options={languageOptions}
        search
        text='Select Language'
      />
    </div>

    <div className={styles.github}>

      <img src={githubLogo} width="40" height="40"/>
    </div>

  </div>
)

export default Header
