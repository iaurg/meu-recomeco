module.exports = {
  pathPrefix: `/mini-gatsbyv2-material-kit-react`,
  siteMetadata: {
    title: 'Meu Recomeço',
    siteUrl: 'https://meurecomecotattoo.com.br',
    description: `Esse projeto consiste em fazer tatuagens totalmente gratuitas em
    pessoas que têm marcas de um passado não muito bom em suas vidas`,
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'Meu Recomeço',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/img/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        type: `hashtag`,
        hashtag: `italox`,
      },
    },
  ],
}