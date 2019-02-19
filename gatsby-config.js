require('dotenv').config();
const languages = require('./src/data/languages');

module.exports = {
  siteMetadata: {
    title: 'General Transit Feed Specification',
    languages
  },
  plugins: [
    {
      resolve: 'gatsby-transformer-json',
      options: {
        typeName: 'Json'
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     path: `${__dirname}/src/pages/reference/v2/gtfs/spec/en`,
    //     name: "Static Reference"
    //   }
    // },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     path: `${__dirname}/src/pages/reference/v2/gtfs-realtime/spec/en`,
    //     name: "Realtime Reference v2"
    //   }
    // },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     path: `${__dirname}/src/pages/reference/v1/gtfs-realtime/spec/en`,
    //     name: "Realtime Reference v1"
    //   }
    // },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     path: `${__dirname}/src/pages/reference/v2/gtfs/CHANGES.md`,
    //     name: "Change Process"
    //   }
    // },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     path: `${__dirname}/src/pages/reference/v2/gtfs-realtime/CHANGES.md`,
    //     name: "Realtime Change Process"
    //   }
    // },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: "gatsby-transformer-remark",
      options: {
        pedantic: false,
        plugins: [ // some interesting plugins available to use with
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 250,
            }
          },
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              offsetY: 150,
            }
          },
          'gatsby-remark-copy-linked-files'
        ]
      },
    },
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
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-force-trailing-slashes',
    'gatsby-plugin-offline',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-meta-redirect',
  ],
}
