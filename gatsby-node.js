const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const yaml = require('js-yaml');
const fs = require('fs');

try {
  var pageConfig = yaml.safeLoad(fs.readFileSync('./page-config.yaml', 'utf8'));
  console.log('page config file loaded');
} catch (e) {
  console.log(e);
}

//add slugs to all markdown file nodes
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  // console.log(node);
  if (node.internal.type === "MarkdownRemark" || node.internal.type === "Json") {

    const slug = createFilePath({ node, getNode, basePath: 'pages' }); //`${node.frontmatter.lang}` + ...
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

//create a node containing the table of contents for each page from page-config
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;
  let i = 0;
  pageConfig.pages.forEach((page) => {
    // console.log(page)
    // console.log('\n')
    if (page.sidemenu !== undefined) {
      console.log('creating sidemenu node from:', page.sidemenu)
      const nodeData = {
        key: i,
        contents: page.sidemenu
      }
      const nodeContent = JSON.stringify(nodeData)
      const nodeMeta = {
        id: createNodeId(`menu-contents-${nodeData.key}`),
        sourceInstanceName: page.title,
        parent: null,
        children: [],
        internal: {
          type: 'SideMenu',
          content: nodeContent,
          contentDigest: createContentDigest(nodeData)
        }
      }
      const node = Object.assign({}, nodeData, nodeMeta)
      createNode(node);
      i++;
    }
  })
  // const contents = {
  //   key:
  // }
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
    console.log('making page with toc: ', page.toc);
    createPage({
      path: page.url,
      component: path.resolve(`./src/templates/${page.template}.js`),
      context: {
        //things passed here avail as graphql variables in page queries
        sourceInstanceName: page.title,
      }
    })
  })

}
