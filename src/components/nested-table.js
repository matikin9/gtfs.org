import React from "react";
import { StaticQuery, graphql } from "gatsby";


const NestedTable = (props) => {
  console.log(props);
  return(

    <StaticQuery
      query={graphql`
        query {
          allFile(filter: {relativePath: {eq: "reference-examples/parent-station-example.md"}})
          {
            edges {
              node {
                sourceInstanceName
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
        `}
        render={(data) => (
          <div dangerouslySetInnerHTML={{ __html: data.allFile.edges[0].node.childMarkdownRemark.html }}></div>
        )}
      />

  )

}

export default NestedTable
