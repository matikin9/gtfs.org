import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = ({ data }) => {
  console.log(data);
  return(
    <Layout>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80vw',
        marginLeft: '10vw',
        position: 'absolute',
        top: '150px'
      }}>
        <div dangerouslySetInnerHTML={{ __html: data.allFile.edges[0].node.childMarkdownRemark.html }}></div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const homeQuery = graphql`
    query {
      allFile(
          filter: {
            internal: {mediaType: {eq: "text/markdown"}},
            # sourceInstanceName: {eq: "reference"},
            name: {eq: "home"},
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
