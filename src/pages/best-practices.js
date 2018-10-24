import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import rehypeReact from 'rehype-react';
import pageContents from '../../best-practices-contents.json';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  // components: { "accordion": Accordion },
}).Compiler

class BestPracticesPage extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.data;
    this.nodeDictionary = {};
    this.state = {
      consolidatedHast: this.data.allFile.edges[0].node.childMarkdownRemark.htmlAst,
      testNode: {},
      parsingComplete: false
    }
    console.log('starter hast node', this.data.allFile.edges[0].node.childMarkdownRemark.htmlAst)
  }

  componentDidMount() {
    this.mapDataToDictionary();
  }

  mapDataToDictionary() {
    this.data.allFile.edges.forEach(({node}) => {
      let key = node.name;
      let content = node.childMarkdownRemark.htmlAst;
      let pair = {};
      pair[key] = content;
      Object.assign(this.nodeDictionary, pair)
    });
    console.log('complete dictionary', this.nodeDictionary);
    this.setState({parsingComplete: true});
    // this.consolidateHastNodes();
  }

  consolidateHastNodes() {
    let newConsolidatedHast = this.nodeDictionary[pageContents.sections[0].slug]; //make first section hast root, all following nodes will be added as children
    for (let i = 1; i < pageContents.sections.length; i ++) {
      let thisNode = this.nodeDictionary[pageContents.sections[i].slug];
      console.log('current node', thisNode);
      if (thisNode !== undefined) {
        if (thisNode.type === "root") {
          newConsolidatedHast.children.concat(thisNode.children);
        } else {
          newConsolidatedHast.children.push(thisNode);
        }
        if (pageContents.sections[i].children.length > 0) {
          pageContents.sections[i].children.forEach((child) => {
            let thisChildNode = this.nodeDictionary[child.slug];
            if (thisChildNode !== undefined) {
              if (thisChildNode.type === "root") {
                newConsolidatedHast.children.concat(thisChildNode.children);
              } else {
                newConsolidatedHast.children.push(thisChildNode);
              }
            }
          });
        }
      }
    }
    console.log('consolidated node', newConsolidatedHast);
    this.setState({
      consolidatedHast: newConsolidatedHast,
      testNode: this.data.allFile.edges[3].node.childMarkdownRemark.htmlAst,
      parsingComplete: true
    });
    // console.log(this.consolidatedHast);
    // console.log(this.data.allFile.edges[0].node.childMarkdownRemark.htmlAst);
  }




  render() {
    // const nodes = this.state.consolidatedHast;
    // console.log('nodes in render', nodes);

      return(
        <Layout>
          <h2>Hi</h2>
          {this.state.parsingComplete && Object.entries(this.nodeDictionary).map(pairArray => renderAst(pairArray[1]))}
          {/* {renderAst(this.data.allFile.edges[0].node.childMarkdownRemark.htmlAst)} */}
          {/* {this.state.parsingComplete && renderAst(nodes)} */}
          {/* {(nodes.children.length === 21) ? renderAst(nodes) : null} */}

        </Layout>
      )
    // return(
    //
    //   <Layout>
    //     {/* <div dangerouslySetInnerHTML={{ __html: data.allFile.edges[0].node.childMarkdownRemark.html }}></div> */}
    //
    //   </Layout>
    // )
  }

}

export default BestPracticesPage

export const homeQuery = graphql`
    query {
      allFile(
          filter: {
            # internal: {mediaType: {eq: "text/markdown"}},
            sourceInstanceName: {eq: "content"},
            # name: {eq: "best-practices"},
            # relativePath: {regex: "/en\//"}
          }
        ){
          edges {
            node {
              name
              relativePath
              childMarkdownRemark {
                htmlAst

              }
            }
          }
        }
    }
`
