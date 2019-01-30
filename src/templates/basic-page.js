import React from 'react';
import { graphql } from 'gatsby';
import styles from './basic-page.module.css';
import Layout from '../components/layout';
import Footer from '../components/footer';

const IndexPage = ({ data }) => {
  return(
    <Layout>
      <div className={`${styles.basicPageContainer} container`}>
        <div className="row">
          <div 
            className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1"
            dangerouslySetInnerHTML={{ __html: data.allFile.edges[0].node.childMarkdownRemark.html }}
          >
          </div>
        </div> 
      </div>
      <Footer className="footer" />
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
