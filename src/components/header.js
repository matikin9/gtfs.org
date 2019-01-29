import React from 'react';
import { Link } from 'gatsby';
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
          <Navbar light={true} expand="lg" className={`${styles.bgBlue} navbar-dark`}>
            <div className="container">
              <NavbarBrand href="/">
                <img src={gtfsHeader} width="125" height="44" alt="GTFS" className={styles.headerLogo} />
              </NavbarBrand>
              <NavbarToggler onClick={() => this.toggleNavbar()} className="mr-2" />
              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav className="mr-auto" navbar>
                  {data.allNav.edges[0].node.contents.map((item, index) => (
                    <NavItem key={index}>
                      <Link
                        to={item.link}
                        className={`${styles.mainNavLink} nav-link`}
                        activeClassName="active"
                      >
                        {item.display}
                      </Link>
                    </NavItem>
                  ))}
                </Nav>
              </Collapse>
            </div>
          </Navbar>
        )}
      />
    )
  }
}

