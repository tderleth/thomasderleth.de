/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import Layout from '../../../../node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/layout';
// @ts-ignore
import Hero from '../texts/hero';
// @ts-ignore
import Bottom from '../texts/bottom';
import Title from '../../../../node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/title';
import Listing from '../../../../node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/listing';
import List from '../../../../node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/list';
import useMinimalBlogConfig from '../../../../node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config';
import replaceSlashes from '../../../../node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes';

type PostsProps = {
  posts: {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    description: string;
    timeToRead: number;
    tags?: {
      name: string;
      slug: string;
    }[];
  }[];
};

const Homepage = ({ posts }: PostsProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig();

  return (
    <Layout>
      <section sx={{ mb: [5, 6, 7], p: { fontSize: [1, 2, 3], mt: 2 } }}>
        <Hero />
      </section>
      <Title text="Latest Posts">
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>Read all posts</Link>
      </Title>
      <Listing posts={posts} showTags={false} />
      <List>
        <Bottom />
      </List>
    </Layout>
  );
};

export default Homepage;
