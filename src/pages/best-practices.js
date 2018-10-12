import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const BestPracticesPage = ({ data }) => {
  console.log(data);
  return(
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: data.allFile.edges[0].node.childMarkdownRemark.html }}></div>
    </Layout>
  )
}

export default BestPracticesPage

export const homeQuery = graphql`
    query {
      allFile(
          filter: {
            internal: {mediaType: {eq: "text/markdown"}},
            sourceInstanceName: {eq: "local"},
            name: {eq: "best-practices"},
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
