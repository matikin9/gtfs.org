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
    <div className={styles.upperRow}>
      <div className={styles.mobilityData}>
        <a href="https://www.mobilitydata.org">
          <h5>Mobility<strong>Data</strong></h5>
        </a>
      </div>
      <div style={{flex: '2', color: '#61b5d9', marginLeft: '25px'}}>
        Travelers need mobility apps. <strong>Mobility apps need high-quality data</strong>
      </div>

      <div className={styles.github} onClick={() => window.location = "https://github.com/MobilityData"}>
        <span>Data specs on GitHub</span>
        <img src={githubLogo} width="20" height="20"/>
      </div>
    </div>
    <div className={styles.lowerRow}>
      <div className={styles.logo}>
        <h1>GTFS</h1>
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



          </div>

    </div>
)

export default Header
