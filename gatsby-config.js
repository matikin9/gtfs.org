require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'General Transit Feed Specification',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages/en`,
        name: "english"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [], // some interesting plugins available to use with
      },
    },
    // { // config for using github as remote source
    //   resolve: 'gatsby-source-github',
    //   options: {
    //     headers: {
    //       Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
    //     },
    //     queries: [
    //       `{
    //         repository(owner:"MobilityData", name:"gtfs-reference"){
    //           description
    //           readme: object(expression:"master:README.md"){
    //             ... on Blob{
    //               text
    //             }
    //           }
    //         }
    //       }`,
    //       `{
    //         repository(owner:"MobilityData", name:"gtfs-best-practices"){
    //           description
    //           readme: object(expression:"master:README.md"){
    //             ... on Blob{
    //               text
    //             }
    //           }
    //         }
    //       }`,
    //     ],
    //   },
    // },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
