require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    author: '@tderleth',
    siteDescription:
      "Hello, I'm Thomas Derleth. I like to read, hear, talk, think and write about code as well as life and how to improve it.",
    siteHeadline: 'Thomas Derleth',
    siteImage: '/banner.jpg',
    siteLanguage: 'en',
    siteTitle: 'Thomas Derleth',
    siteTitleAlt: 'thomas derleth | software engineer',
    siteUrl: 'https://thomasderleth.de',
  },
  plugins: [
    {
      resolve: '@lekoarts/gatsby-theme-minimal-blog',
      options: {
        navigation: [
          { title: 'Blog', slug: '/blog' },
          { title: 'About', slug: '/about' },
        ],
        externalLinks: [
          { name: 'CV', url: '/files/curriculum-vitae.pdf' },
          { name: 'GitHub', url: 'https://github.com/tderleth' },
          { name: 'LinkedIn', url: 'https://www.linkedin.com/in/thomasderleth' },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: { trackingId: 'UA-66897931-1' },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        background_color: '#fff',
        description:
          "Hello, I'm Thomas Derleth. I like to read, hear, talk, think and write about code as well as life and how to improve it",
        display: 'standalone',
        icons: [
          { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
        ],
        name: 'thomasderleth.de',
        short_name: 'thomasderleth.de',
        start_url: '/',
        theme_color: '#2ecc71',
      },
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-offline',
    'gatsby-plugin-theme-ui',
  ],
};
