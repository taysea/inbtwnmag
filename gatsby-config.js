// const config = require("gatsby-plugin-config")

require("dotenv").config({ path: `.env` }) // load defaults
require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` }) // override if exists


module.exports = {
  siteMetadata: {
    title: `inbtwn.`,
    description: `A publication exploring the idea that we’re constantly falling into and out of ourselves. Distributed online and in print.`,
    author: `Taylor Seamans`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#f8f4ec`,
        theme_color: `#f8f4ec`,
        display: `minimal-ui`,
        icon: `src/images/inbtwn-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // plugins: [
        //   {
        //     resolve: `gatsby-remark-images-contentful`,
        //     options: {
        //       // It's important to specify the maxWidth (in pixels) of
        //       // the content container as this plugin uses this as the
        //       // base for generating different widths of each image.
        //       // maxWidth: 500,
        //       withWebp: true,
        //     },
        //   },
        // ],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "UA-158393091-1",
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
