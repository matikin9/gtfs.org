import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import rehypeReact from 'rehype-react';
import styles from './doc-page.module.css';
import SideNav from "../components/side-nav";
import Footer from '../components/footer';


const renderAst = new rehypeReact({
  createElement: React.createElement
  // components: { "nested-table": NestedTable },
}).Compiler


export default class DocPage extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.data;
    console.log('doc page props:', props);
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
    this.addAnchorAddress();
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

  addAnchorAddress(menuItem) {
    let basePath = this.props.location.pathname;
    this.pageContents.forEach((item) => {
      item.anchor = `${basePath}#` + item.name.toLowerCase().replace(/ /g, '-');
      item.children && item.children.map((firstChild) => {
        firstChild.anchor = `${basePath}#` + firstChild.name.toLowerCase().replace(/ /g, '-').replace(/\./g, '');
        firstChild.children && firstChild.children.map((secondChild) => {
          secondChild.anchor = `${basePath}#` + secondChild.name.toLowerCase().replace(/ /g, '-').replace(/\./g, '');
        })
      })
    })
  }

  sortDictionary() {
    this.pageContents.forEach((section) => {
      if (section.slug !== undefined) {
        let hast = this.nodeDictionary[section.slug]
        if (hast !== undefined) this.sortedHast.push(hast);
        if (section.children) {
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
            <SideNav content={this.pageContents} route={this.props.location.pathname}/>
          </div>
          <div className={styles.contentContainer}>
            {/* <h1>{this.data.allSideMenu.edges[0].node.sourceInstanceName}</h1> */}
            {this.state.parsingComplete && this.sortedHast.map(node => renderAst(node))}
          </div>
          <Footer/>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query($sourceInstanceName: String!) {
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

    allSideMenu(filter: {sourceInstanceName: {eq: $sourceInstanceName}}) {
      edges {

        node {
          id
          sourceInstanceName
          contents {
            name
            slug
            # anchor
            children {
              name
              slug
              children {
                name
                children
              }
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
