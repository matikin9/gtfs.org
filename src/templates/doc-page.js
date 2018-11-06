import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import rehypeReact from 'rehype-react';
import styles from './doc-page.module.css';
import SideNav from "../components/side-nav";


const renderAst = new rehypeReact({
  createElement: React.createElement
  // components: { "nested-table": NestedTable },
}).Compiler


export default class DocPage extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.data;
    console.log(this.data);
    this.pageContents = this.data.allSideMenu.edges[0].node.contents;
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
  }

  sortDictionary() {
    this.pageContents.forEach((section) => {
      if (section.slug !== undefined) {
        let hast = this.nodeDictionary[section.slug]
        if (hast !== undefined) this.sortedHast.push(hast);
        if (section.children.length > 0) {
          section.children.forEach((child) => {
            let childHast = this.nodeDictionary[child.slug];
            if (childHast !== undefined) this.sortedHast.push(childHast);
          });
        }
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
            <SideNav content={this.pageContents}/>
          </div>
          <div className={styles.contentContainer}>
            {this.state.parsingComplete && this.sortedHast.map(node => renderAst(node))}
          </div>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query($sourceInstanceName: String!, $toc: String!) {
    # allJson(filter: {fields: {slug: {eq: $toc}}}) {
    #   edges {
    #     node {
    #       fields {
    #         slug
    #       }
    #       sections {
    #         name
    #         slug
    #         anchor
    #         children {
    #           name
    #           slug
    #           anchor
    #         }
    #       }
    #     }
    #   }
    # }

    allSideMenu(filter: {toc: {eq: $toc}}) {
      edges {

        node {
          id
          contents {
            name
            slug
            anchor
            children {
              name
              slug
            }
          }
        }
      }
    }

    allFile(filter: {sourceInstanceName: {eq: $sourceInstanceName}}) {
      edges {
        node {
          internal {
            mediaType
          }
          name
          childMarkdownRemark {
            htmlAst
          }
        }
      }
    }
  }
`
