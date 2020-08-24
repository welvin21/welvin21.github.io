const siteConfig = require('./siteConfig');

module.exports = {
  siteMetadata: {
    url: siteConfig.url,
    siteUrl: siteConfig.url,
    description: siteConfig.description,
    title: siteConfig.title,
    menu: siteConfig.menu,
    author: siteConfig.author,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-chakra-ui`,
    `gatsby-plugin-typescript-checker`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects images`,
        path: `${__dirname}/src/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteConfig.title,
        short_name: siteConfig.title,
        start_url: `/`,
        icon: `src/images/welvin.png`,
        background_color: `#0D0D0D`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
  ],
};
