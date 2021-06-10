/** @jsx jsx */
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { jsx, Heading } from 'theme-ui';
import ItemTags from '../../../../node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags';
import Layout from '../../../../node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/layout';
import Seo from '../../../../node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/seo';

type PostProps = {
  data: {
    post: {
      banner?: { childImageSharp: { resize: { src: string } } };
      body: string;
      canonicalUrl?: string;
      date: string;
      description?: string;
      excerpt: string;
      slug: string;
      tags?: { name: string; slug: string }[];
      timeToRead?: number;
      title: string;
    };
  };
};

const px = [`32px`, `16px`, `8px`, `4px`];
const shadow = px.map((v) => `rgba(0, 0, 0, 0.15) 0px ${v} ${v} 0px`);

const Post = ({ data: { post } }: PostProps) => (
  <Layout>
    <Seo
      title={post.title}
      description={post.description ? post.description : post.excerpt}
      image={post.banner ? post.banner.childImageSharp.resize.src : undefined}
      pathname={post.slug}
      canonicalUrl={post.canonicalUrl}
    />
    <Heading as="h1" variant="styles.h1">
      {post.title}
    </Heading>
    <p sx={{ color: `secondary`, mt: 3, a: { color: `secondary` }, fontSize: [1, 1, 2] }}>
      <time>{post.date}</time>
      {post.tags && (
        <React.Fragment>
          {` — `}
          <ItemTags tags={post.tags} />
        </React.Fragment>
      )}
      {post.timeToRead && ` — `}
      {post.timeToRead && <span>{post.timeToRead} min read</span>}
    </p>
    <section
      sx={{
        my: 5,
        '.gatsby-resp-image-wrapper': { my: [4, 4, 5], boxShadow: shadow.join(`, `) },
        variant: `layout.content`,
      }}
    >
      <MDXRenderer>{post.body}</MDXRenderer>
    </section>
  </Layout>
);

export default Post;
