module.exports = {
  siteMetadata: {
    title: 'Gatsby + WordPress Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: '', // The base url to your WP site.
        hostingWPCOM: false, // WP.com sites set to true, WP.org set to false
        protocol: 'http', // The protocol. This can be http or https.
        useACF: false, // Use 'Advanced Custom Fields' Wordpress plugin
        auth: {}, // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: true,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
