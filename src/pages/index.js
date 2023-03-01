import * as React from 'react';

import Layout from '../components/Layout';
import GroupPhoto from '../components/GroupPhoto';
import AboutUs from '../components/AboutUs';
import OurMembers from '../components/OurMembers';
import HorizontalDivider from '../components/HorizontalDivider';
import CorgiOfTheMonth from '../components/CorgiOfTheMonth';
import BestSellers from '../components/BestSellers';

export const Head = () => (
  <>
    <title>Baltimore Corgis</title>
    <meta name='description' content="Established in 2014, we're a community of Corgi owners based in the Baltimore area and surrounding counties." />
    <meta name='author' content='Andrew' />

    <meta property='og:title' content='Baltimore Corgis' />
    <meta property='og:description' content="Established in 2014, we're a community of Corgi owners based in the Baltimore area and surrounding counties." />
    <meta property='og:image' content='https://stirring-donut-90169b.netlify.app/images/og-image.png' />
    <meta property='og:image:alt' content='A screenshot of the Baltimore Corgis website' />
    <meta property='og:locale' content='en_US' />
    <meta property='og:type' content='website' />
    <meta property='og:url' content='https://www.baltimorecorgis.com/' />

    <meta name='twitter:card' content='summary' />

    <meta name='theme-color' content='hsl(264, 36%, 31%)' />
  </>
);

const IndexPage = () => {
  return (
    <>
      <Layout>
        <GroupPhoto />
        <AboutUs />
        <HorizontalDivider />
        <OurMembers />
        <HorizontalDivider />
        <CorgiOfTheMonth />
        <HorizontalDivider />
        <BestSellers />
      </Layout>
    </>
  );
};

export default IndexPage;
