import * as React from 'react';

import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';

export const Head = () => (
  <>
    <title>Baltimore Corgis | Tickets</title>
    <meta name='description' content='Baltimore Corgis' />
    <meta name='author' content='Andrew' />

    <meta property='og:title' content='Baltimore Corgis' />
    <meta property='og:description' content='Baltimore Corgis' />
    <meta property='og:image' content='' />
    <meta property='og:image:alt' content='A screenshot of the Baltimore Corgis website' />
    <meta property='og:locale' content='en_US' />
    <meta property='og:type' content='website' />
    <meta property='og:url' content='https://www.baltimorecorgis.com/' />

    <meta name='twitter:card' content='summary' />

    <meta name='theme-color' content='hsl(264, 36%, 31%)' />
  </>
);

const TicketsPage = () => {
  return (
    <>
      <Layout>
        <SectionTitle>Tickets</SectionTitle>
        <p>Coming soon!</p>
      </Layout>
    </>
  );
};

export default TicketsPage;
