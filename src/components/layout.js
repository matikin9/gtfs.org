import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
// import Headroom from 'react-headroom';

import Header from './header'
// import Footer from './footer'
import styles from './layout.css'
import './layout.css';
import './semantic-ui-css/semantic.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className={styles.siteContainer}>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-92157254-1"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-92157254-1');
            `}
          </script>
          <html lang="en" />
        </Helmet>
        <div className={styles.headerContainer}>
          {/* <Headroom> */}
            <Header siteTitle={data.site.siteMetadata.title} />
          {/* </Headroom> */}
        </div>
        <div className={styles.pageContainer}>
          {children}
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
