/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Learn`,
    welcome: `Welcome Learner`,
    description: "Subject by experience",
    author: `Nikhil Rustagi`,
    copyright: "© 2024",
    siteUrl: `https://www.github.io/nikhilrstg18/learn`,
    logo: "/android-chrome-192x192.png",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: "blurred",
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-remark-markmap",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-markmap",
          {
            resolve:"gatsby-remark-highlight-code",
            options:{
              lineNumbers:true,
              terminal:'carbon',
              theme:'dracula'
            }
          },
          "gatsby-remark-gifs",
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs-copy-button`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
              withWebp: true,
              showCaptions: true,
              quality: 50,
            },
          }
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "static",
        path: "./static/",
      },
      __key: "static",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: "./content",
      },
      __key: "content",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        // useAutoGen: required 'true' to use autogen
        useAutoGen: true,
        // autoGenHomeLabel: optional 'Home' is default
        autoGenHomeLabel: `Root`,
        // exclude: optional, include this array to exclude paths you don't want to
        // generate breadcrumbs for (see below for details).
        exclude: [
          `**/dev-404-page/**`,
          `**/404/**`,
          `**/404.html`,
          `**/offline-plugin-app-shell-fallback/**`,
        ],
        // isMatchOptions: optional, include this object to configure the wildcard-match library.
        excludeOptions: {
          separator: ".",
        },
        // crumbLabelUpdates: optional, update specific crumbLabels in the path
        crumbLabelUpdates: [
          {
            pathname: "/learn",
            crumbLabel: "Learn",
          },
        ],
        // trailingSlashes: optional, will add trailing slashes to the end
        // of crumb pathnames. default is false
        trailingSlashes: true,
        // usePathPrefix: optional, if you are using pathPrefix above
        usePathPrefix: "/learn",
      },
    },
  ],
};
