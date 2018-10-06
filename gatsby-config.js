module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: 'gatsby-source-github',
      options: {
        headers: {
          Authorization: `Bearer 74fa69c63f5027d8900c485b274a171ba8fa4184`
        },
        queries: [
          `{
            repository(owner:"MobilityData", name:"gtfs-reference"){
              description
              readme: object(expression:"master:README.md"){
                ... on Blob{
                  text
                }
              }
            }
          }`,
        ],
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
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
