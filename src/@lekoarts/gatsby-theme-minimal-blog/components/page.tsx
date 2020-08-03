/** @jsx jsx */
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { jsx, Styled } from 'theme-ui';
import Layout from '../../../../node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/layout';
import SEO from '../../../../node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/seo';

type PageProps = {
  data: {
    page: {
      title: string;
      slug: string;
      excerpt: string;
      body: string;
    };
  };
};

const Page = ({ data: { page } }: PageProps) => (
  <Layout>
    <SEO title={page.title} description={page.excerpt} />
    <Styled.h2>{page.title}</Styled.h2>
    <section sx={{ my: 5 }}>
      <MDXRenderer>{page.body}</MDXRenderer>
    </section>
  </Layout>
);

export default Page;
