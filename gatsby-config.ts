import type { GatsbyConfig } from 'gatsby';
import netlifyAdapter from 'gatsby-adapter-netlify';

const netlify = netlifyAdapter();

const config: GatsbyConfig = {
  // Netlify's adapter restores its own cache after `gatsby clean`, potentially
  // resurrecting plugin state from an earlier deploy.
  ...(process.env.NETLIFY ? { adapter: { ...netlify, cache: undefined } } : {}),
  siteMetadata: {
    author: '@tderleth',
    siteDescription:
      'Thomas Derleth is an Engineering Lead building software for urban mobility, with a focus on product-centric engineering.',
    siteHeadline: 'Thomas Derleth',
    siteImage: '/banner.jpg',
    siteLanguage: 'en',
    siteTitle: 'Thomas Derleth',
    siteTitleAlt: 'Thomas Derleth | Engineering Lead',
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
      resolve: 'gatsby-plugin-gdpr-cookies',
      options: {
        googleAnalytics: {
          trackingId: 'G-HB3YBV9E0T',
          allowAdFeatures: false,
        },
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify',
    'gatsby-plugin-offline',
    'gatsby-plugin-theme-ui',
  ],
};

export default config;
