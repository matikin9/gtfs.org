import React from 'react';
import { Link } from 'gatsby';
import styles from './header.module.css';
import githubLogo from '../images/github-logo.png';
import gtfsHeader from '../images/gtfs.png';
import Headroom from 'react-headroom';
import { StaticQuery, graphql } from "gatsby"

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
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
        render={data => (
          <Headroom upTolerance={100} downTolerance={120} style={{
            WebkitTransition: 'all 1s ease-in-out',
            MozTransition: 'all 1s ease-in-out',
            OTransition: 'all 1s ease-in-out',
            transition: 'all 1s ease-in-out'
          }}>
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
                  {data.allNav.edges[0].node.contents.map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      activeClassName={styles.activePage}
                    >
                      {item.display}
                    </Link>
                  ))}
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
            </div>
          </Headroom>
        )}
      />
    )
  }
}

