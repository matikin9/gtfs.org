import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      {data.allFile.edges.map(({ node }) => (
        <div
          key={node.id}
          dangerouslySetInnerHTML={{__html: node.childMarkdownRemark.html}}></div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(
      filter: {
        internal: {mediaType: {eq: "text/markdown"}},
        name: {ne: "README"},
        relativePath: {regex: "/en\//"}
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
