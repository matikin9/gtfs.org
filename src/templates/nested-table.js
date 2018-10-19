import React from "react";
import { graphql } from "gatsby";


const NestedTablesPage = ({ data }) => {
  return (
    <div>
      {
        data.allFile.edges.map((node, i) => {
          return <p key={i}>test</p>
        })
      }
    </div>
  )
}

export default NestedTablesPage

// export const pageQuery = graphql`
//   query NestedTablesPageQuery {
//     allFile {
//       edges {
//         node {
//           sourceInstanceName
//           childMarkdownRemark {
//             html
//           }
//         }
//       }
//     }
//   }
//   `
