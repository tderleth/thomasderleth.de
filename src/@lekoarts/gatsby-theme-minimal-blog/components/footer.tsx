/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import useSiteMetadata from '@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata';

const Footer = () => {
  const { siteTitle } = useSiteMetadata();

  return (
    <footer
      sx={{
        a: { variant: 'links.secondary' },
        boxSizing: 'border-box',
        color: 'secondary',
        display: 'flex',
        flexDirection: ['column', 'column', 'row'],
        justifyContent: 'space-between',
        mt: [6],
        variant: 'dividers.top',
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by {siteTitle}. All rights reserved.
      </div>
      <div>
        <Link to="/imprint">Imprint </Link>
      </div>
    </footer>
  );
};

export default Footer;
