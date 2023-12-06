require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    author: '@tderleth',
    siteDescription:
      "Hello, I'm Thomas Derleth. I like to read, hear, talk, think and write about code and how to improve it.",
    siteHeadline: 'Thomas Derleth',
    siteImage: '/banner.jpg',
    siteLanguage: 'en',
    siteTitle: 'Thomas Derleth',
    siteTitleAlt: 'thomas derleth | software engineer',
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
    'gatsby-plugin-netlify',
    'gatsby-plugin-offline',
    'gatsby-plugin-theme-ui',
  ],
};
