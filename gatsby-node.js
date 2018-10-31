const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const yaml = require('js-yaml');
const fs = require('fs');

try {
  var pageConfig = yaml.safeLoad(fs.readFileSync('./page-config.yaml', 'utf8'));
  console.log(pageConfig);
} catch (e) {
  console.log(e);
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark" || node.internal.type === "Json") {

    const slug = createFilePath({ node, getNode, basePath: 'pages' }); //`${node.frontmatter.lang}` + ...
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const contentDictionary = {};
  // return new Promise((resolve, reject) => {
  //   graphql(`
  //     {
  //       allMarkdownRemark {
  //         edges {
  //           node {
  //             fields {
  //               slug
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `).then(result => {
  //     // console.log(result);
  //     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
  //       createPage({
  //         path: node.fields.slug,
  //         component: path.resolve('./src/templates/doc-page.js'),
  //         context: {
  //           //things passed here avail as graphql variables in page queries
  //           slug: node.fields.slug
  //         }
  //       })
  //     })
  //     resolve()
  //   })
  // })
  pageConfig.pages.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(`./src/templates/${page.template}.js`),
      context: {
        //things passed here avail as graphql variables in page queries
        sourceInstanceName: page.title
        toc: page.toc
      }
    })
  })

}
