import React from 'react';
import { Link } from 'gatsby';
import styles from './header.module.css';
import { Dropdown, Transition, Icon } from 'semantic-ui-react';
import DocsOption from './docs-option';
import githubLogo from '../images/github-logo.png';
import gtfsHeader from '../images/gtfs.png';
import Headroom from 'react-headroom';


const languageOptions = [{ key: 'English', text: 'English', value: 'English' }];

const docsOptions = {
  items: [
    {
      id: 0,
      title: 'Static',
      blurb: 'Reference for core comma-separated values specification to describe stops, routes, schedules, and fares',
      link: '/reference'
    },
    {
      id: 1,
      title: 'Realtime',
      blurb: 'Reference for protobuf-based GTFS extension to provide arrival estimates, vehicle positions, and service alerts',
      link: '/realtime'
    },
    {
      id: 2,
      title: 'Best Practices',
      blurb: 'Recommendations to support quality user experiences in GTFS-consuming applications',
      link: '/best-practices'
    }
  ]
};


export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }

  toggleDocs() {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }

  render() {
    const {open} = this.state;
    return(
      <Headroom>
        <div className={styles.container}>
          <div className={styles.upperRow}>
            <div className={styles.mobilityData}>
                <h5>
                  <a style={{color: '#61b5d9'}} href="https://mobilitydata.org">Mobility<strong>Data</strong></a>
                </h5>
            </div>
            <div className={styles.github} onClick={() => window.location = "https://github.com/MobilityData"}>
              <span>GitHub</span>
              <img src={githubLogo} alt="Github Logo" width="20" height="20"/>
            </div>
          </div>
          <div className={styles.lowerRow}>
            <div className={styles.logo}>
              {/* <h1>GTFS</h1> */}
              <img src={gtfsHeader} alt="GTFS" style={{marginLeft: '-12px', marginTop: '5px'}} width="125" height="62.5"/>
            </div>
            <div className={styles.links}>
              <Link
                to="/"
                activeClassName={styles.activePage}
                >
                Home
              </Link>
              <Link
                to="/getting-started"
                activeClassName={styles.activePage}
                >
                Getting Started
              </Link>
              <div className={open ? styles.docsOpen : styles.docsClosed} onClick={() => this.toggleDocs()}>
                <span className={styles.fakeLink}>Docs</span>
                {open ?
                  <Icon className={styles.up} size="small" name="chevron up"/>
                  : <Icon size="small" name="chevron down"/>}
              </div>
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
            {/* <div className={styles.language}>
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
            </div> */}
            </div>
            <Transition.Group animation='slide down' duration='150'>
              {open &&
                <div className={styles.docsOptions}>
                  {docsOptions.items.map((option) => (
                    <DocsOption key={option.id} content={option}></DocsOption>
                  ))}

                </div>
              }
            </Transition.Group>
          </div>
        </Headroom>
      )
  }

}
