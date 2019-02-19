import React from 'react';
import Layout from '../components/layout';
import { graphql, navigate } from 'gatsby';
import rehypeReact from 'rehype-react';
import styles from './doc-page.module.css';
import SideNav from "../components/side-nav";
import Footer from '../components/footer';

const renderAst = new rehypeReact({
  createElement: React.createElement
}).Compiler


function throttled(delay, fn) {
  let lastCall = 0;
  return (...args) => {
    const now = (new Date()).getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  }
}

export default class DocPage extends React.Component {
  constructor(props) {
    super(props);
    this.pageContents = props.data.allSideMenu.edges[0].node.contents;
    this.pageTitle = props.data.allSideMenu.edges[0].node.title;
    this.anchors = [];
    this.state = {
      pageYOffset: 0
    }
    this.trackScrollLocation = this.trackScrollLocation.bind(this);
    this.logOffset = this.logOffset.bind(this);
    this.throttledLogOffset = throttled(500, this.logOffset);
    this.lang = props.data.markdownRemark.frontmatter.lang;

    this.hast = props.data.markdownRemark.htmlAst.children.reduce((memo, hast) => {
      if (hast.tagName === 'table') {
        hast = this.formatTable(hast);
      }
      if (hast.children) {
        hast.children.forEach(hast => {
          if (hast.tagName === 'table') {
            hast = this.formatTable(hast);
          }
        });
      }

      if (hast.type !== 'text') {
        memo.push(hast);
      }
      
      return memo;
    }, []);
  }

  componentDidMount() {
    this.grabAnchors();
    this.trackScrollLocation();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.throttledLogOffset);
  }

  grabAnchors() {
    this.anchors = document.getElementsByClassName('anchor');
  }

  logOffset() {
    const newOffset = window.pageYOffset;
    this.setState({
      pageYOffset: newOffset
    });
  }

  trackScrollLocation() {
    window.addEventListener('scroll', this.throttledLogOffset);
  }

  formatTable(hast) {
    hast.properties.className = ['table'];
    return {
      children: [hast],
      properties: {
        className: ['table-responsive']
      },
      tagName: 'div',
      type: 'element'
    };
  }

  renderVersionControl() {
    console.log(this.lang)
    const langPrefix = this.lang === 'en' ? '' : `/${this.lang}`;
    return (
      <div className="card mb-4 mt-3">
        <div className="card-body">
          <form className={styles.versionSelectForm}>
            <label htmlFor="versionSelect">Version</label>
            <select 
              id="versionSelect"
              value={this.props.location.pathname}
              onChange={(event) => navigate(event.target.value)}
            >
              <option value={`${langPrefix}/reference/realtime/v2/`}>2.0 (Latest)</option>
              <option value={`${langPrefix}/reference/realtime/v1/`}>1.0</option>
            </select>
          </form>
        </div>
      </div>
    )
  }

  render() {
    const showTitle = this.props.location.pathname.includes('/reference/realtime/');
    const showVersionControl = this.props.location.pathname.includes('/reference/realtime/');
    const pageYOffset = this.state.pageYOffset;

    return (
      <Layout>
        <div className={styles.container}>
          <div className={styles.navContainer}>
            <SideNav
              content={this.pageContents}
              route={this.props.location.pathname}
              currentOffset={pageYOffset}
              pageAnchors={this.anchors}
            />
          </div>
          <div className={styles.docContainer}>
            {showTitle && <h1>{this.pageTitle}</h1>}
            {showVersionControl && this.renderVersionControl()}
            {renderAst({
              children: this.hast,
              type: 'root'
            })}
          </div>
          <Footer className="footerDocPage" />
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      htmlAst
      frontmatter {
        path,
        lang
      }
    }
    
    allSideMenu(filter: {sourceInstancePath: {eq: $path}}) {
      edges {

        node {
          id
          sourceInstancePath
          title
          contents {
            name
            slug
            anchor
            children {
              name
              slug
              anchor
              children {
                name
                anchor
                children {
                  name
                  anchor
                }
              }
            }
          }
        }
      }
    }
  }
`
