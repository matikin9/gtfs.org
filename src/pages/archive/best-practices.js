import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import rehypeReact from 'rehype-react';
import pageContents from '../../best-practices-contents.json';
import styles from './reference.module.css';
import SideNav from "../components/side-nav";

const renderAst = new rehypeReact({
  createElement: React.createElement,
  // components: { "accordion": Accordion },
}).Compiler

class BestPracticesPage extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.data;
    this.nodeDictionary = {};
    this.sortedHast = [];
    this.state = {
      parsingComplete: false
    }
  }

  componentDidMount() {
    this.mapDataToDictionary();
  }

  mapDataToDictionary() {
    this.data.allFile.edges.forEach(({node}) => {
      if (node.internal.mediaType === "text/markdown") { //ignore photo nodes
        let key = node.name;
        let content = node.childMarkdownRemark.htmlAst;
        let pair = {};
        pair[key] = content;
        Object.assign(this.nodeDictionary, pair)
      }
    });
    console.log('complete dictionary', this.nodeDictionary);
    this.sortDictionary()
    // this.consolidateHastNodes();
  }

  sortDictionary() {
    pageContents.sections.forEach((section) => {
      let hast = this.nodeDictionary[section.slug]
      if (hast !== undefined) this.sortedHast.push(hast);
      if (section.children.length > 0) {
        section.children.forEach((child) => {
          let childHast = this.nodeDictionary[child.slug];
          if (childHast !== undefined) this.sortedHast.push(childHast);
        });
      }
    });
    console.log('sorted hast nodes', this.sortedHast);
    this.setState({parsingComplete: true});
  }

  render() {
    return(
      <Layout>
        <div className={styles.container}>
          <div className={styles.navContainer}>
            <SideNav content={pageContents}/>
          </div>
          <div className={styles.contentContainer}>
            {this.state.parsingComplete && this.sortedHast.map(node => renderAst(node))}
          </div>
        </div>
      </Layout>
    )
  }
}

export default BestPracticesPage

export const homeQuery = graphql`
    query {
      allFile(
          filter: {
            sourceInstanceName: {eq: "content"}
          }
        ){
          edges {
            node {
              name
              relativePath
              internal {
                mediaType
              }
              childMarkdownRemark {
                htmlAst

              }
            }
          }
        }
    }
`
