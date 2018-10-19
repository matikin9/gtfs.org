import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SideNav from "../components/side-nav";
import pageContents from "../../ref-contents.json";
import styles from "./reference.module.css";
import rehypeReact from 'rehype-react';
import Accordion from 'semantic-ui-react';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "accordion": Accordion },
}).Compiler

export default class ReferencePage extends React.Component {
  constructor(props) {
    super(props);
    this.parseNodes();

  }

  parseNodes() {

    let nodes = this.props.data.allFile.edges[0].node.childMarkdownRemark.htmlAst.children;
    for(var i = 0; i < nodes.length; i++) {
      if (nodes[i].tagName === "h3") {
        nodes[i].tagName = "Accordion";
      }
    }
    console.log(this.props.data);
  }

  render() {
    const htmlAst = this.props.data.allFile.edges[0].node.childMarkdownRemark.htmlAst;

    return (
      <Layout>
        <div className={styles.container}>
          <div className={styles.navContainer}>
            <SideNav content={pageContents}/>
          </div>
          <div className={styles.contentContainer}>
            {/* {
              this.data.allFile.edges.map(({ node }) => {
                if (node.name !== "README") {
                  return(
                    <div
                      key={node.id}
                      dangerouslySetInnerHTML={{__html: node.childMarkdownRemark.html}}>
                    </div>
                  )
                }
              })
            } */}
            {renderAst(htmlAst)}
          </div>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    allFile(
      filter: {
        internal: {mediaType: {eq: "text/markdown"}},
        sourceInstanceName: {eq: "remote"},
        relativePath: {regex: "/gtfs\/spec\/en/"},
        name: {eq: "reference"}
      }
    ){
      edges {
        node {
          name
          relativePath
          childMarkdownRemark {
            html
            htmlAst
          }
        }
      }
    }
  }
`
