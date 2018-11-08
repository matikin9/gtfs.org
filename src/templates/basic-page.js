import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
// import 'semantic-ui-css/semantic.min.css';
import Footer from '../components/footer';

const IndexPage = ({ data }) => {
  return(
    <Layout>
      <div style={{
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        minHeight: '100vh'
      }}>
        <div style={{
          flex: 1,
          alignItems: 'space-around',
          width: '80vw',
          // height: '100vh',
          marginLeft: '10vw',
          // position: 'absolute',
          paddingTop: '150px',
          paddingBottom: '150px'
        }}>
          <div style={{flex: '1'}} dangerouslySetInnerHTML={{ __html: data.allFile.edges[0].node.childMarkdownRemark.html }}></div>
        </div>
        <Footer/>
      </div>
    </Layout>
  )
}

export default IndexPage

export const homeQuery = graphql`
    query($sourceInstanceName: String!) {
      allFile(
          filter: {
            internal: {mediaType: {eq: "text/markdown"}},
            sourceInstanceName: {eq: $sourceInstanceName},
            # name: {eq: "home"},
            # relativePath: {regex: "/en\//"}
          }
        ){
          edges {
            node {
              name
              relativePath
              childMarkdownRemark {
                html

              }
            }
          }
        }
    }
`
