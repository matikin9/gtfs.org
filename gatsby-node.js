const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions;
//   if (node.internal.type === "MarkdownRemark" && node.name != "README") {
//     const slug = `${node.frontmatter.lang}` + createFilePath({ node, getNode, basePath: 'pages' });
//     createNodeField({
//       node,
//       name: 'slug',
//       value: slug
//     })
//   }
// }
//
// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions;
//   return new Promise((resolve, reject) => {
//     graphql(`
//       {
//         allMarkdownRemark {
//           edges {
//             node {
//               fields {
//                 slug
//               }
//             }
//           }
//         }
//       }
//     `).then(result => {
//       result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//         createPage({
//           path: node.fields.slug,
//           component: path.resolve('./src/templates/doc-page.js'),
//           context: {
//             //things passed here avail as graphql variables in page queries
//             slug: node.fields.slug
//           }
//         })
//       })
//       resolve()
//     })
//   })
// }
