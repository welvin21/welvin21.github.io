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
  ],
};
