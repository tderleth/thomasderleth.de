/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import { useEffect, useState } from 'react';
import useSiteMetadata from '@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata';

const Footer = () => {
  const { siteTitle } = useSiteMetadata();
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    setShowConsent(
      !/(?:^|;\s*)gatsby-gdpr-google-analytics=(?:true|false)(?:;|$)/.test(document.cookie),
    );
  }, []);

  const chooseAnalytics = (accepted: boolean) => {
    document.cookie = `gatsby-gdpr-google-analytics=${accepted}; Path=/; Max-Age=31536000; SameSite=Lax`;
    if (!accepted) {
      (window as any)['ga-disable-G-HB3YBV9E0T'] = true;
      document.cookie.split(';').forEach((cookie) => {
        const name = cookie.trim().split('=')[0];
        if (name === '_ga' || name.startsWith('_ga_')) {
          document.cookie = `${name}=; Path=/; Max-Age=0; SameSite=Lax`;
          document.cookie = `${name}=; Domain=${window.location.hostname}; Path=/; Max-Age=0; SameSite=Lax`;
        }
      });
    }
    window.location.reload();
  };

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
        {' · '}
        <button type="button" onClick={() => setShowConsent(true)}>
          Analytics settings
        </button>
      </div>
      {showConsent && (
        <div
          role="dialog"
          aria-label="Analytics settings"
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            p: 3,
            bg: 'background',
            color: 'text',
            boxShadow: '0 -2px 8px rgba(0,0,0,.2)',
            zIndex: 1000,
          }}
        >
          <p>
            This site uses Google Analytics to measure visits and usage. With your consent, Google
            receives usage data and stores analytics cookies. You can change your choice at any time
            via Analytics settings. See the <Link to="/imprint">privacy information</Link>.
          </p>
          <button type="button" onClick={() => chooseAnalytics(true)}>
            Accept analytics
          </button>{' '}
          <button type="button" onClick={() => chooseAnalytics(false)}>
            Reject analytics
          </button>
        </div>
      )}
    </footer>
  );
};

export default Footer;
