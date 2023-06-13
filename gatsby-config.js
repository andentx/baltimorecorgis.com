/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Baltimore Corgis`,
    siteUrl: `https://www.baltimorecorgis.com`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-sharp',
      options: {
        quality: 90,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        graphqlTag: 'default',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Baltimore Corgis',
        short_name: 'Baltimore Corgis',
        background_color: 'hsl(264, 36%, 31%)',
        theme_color: 'hsl(264, 36%, 31%)',
        cache_busting_mode: 'query',
        crossOrigin: `use-credentials`,
        display: 'browser',
        icon: 'src/images/favicons/icon.png',
        start_url: '/',
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en-US',
      },
    },
  ],
};
