import * as React from 'react';
import Layout from '../components/Layout';

import styled from 'styled-components';
import { Link } from 'gatsby';

import SectionTitle from '../components/SectionTitle.js';

export const Head = () => (
  <>
    <title>Baltimore Corgis</title>
    <meta name='description' content="Established in 2014, we're a community of Corgi owners based in the Baltimore area and surrounding counties." />
    <meta name='author' content='Andrew' />

    <meta property='og:title' content='Baltimore Corgis' />
    <meta property='og:description' content="Established in 2014, we're a community of Corgi owners based in the Baltimore area and surrounding counties." />
    <meta property='og:image' content='https://www.baltimorecorgis.com/images/og-image.png' />
    <meta property='og:image:alt' content='A screenshot of the Baltimore Corgis website' />
    <meta property='og:locale' content='en_US' />
    <meta property='og:type' content='website' />
    <meta property='og:url' content='https://www.baltimorecorgis.com/' />

    <meta name='twitter:card' content='summary' />

    <meta name='theme-color' content='hsl(264, 36%, 31%)' />
  </>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  color: var(--text-color);

  transition: color 200ms;

  a {
    color: var(--text-color);

    :link {
      color: var(--text-color);
    }

    :visited {
      color: var(--text-color);
    }

    :hover {
      color: hsl(0, 0%, 70%);
    }

    :active {
      color: var(--text-color);
    }

    padding: 0.5rem 1rem;
    position: relative;

    :focus-visible {
      outline: none;
    }

    :focus-visible::before {
      content: '';
      position: absolute;
      top: -2px;
      right: -2px;
      bottom: -2px;
      left: -2px;
      border: 2px solid var(--focus-color);
      border-radius: 10px;
    }
  }

  h2 {
    margin-bottom: 2rem;
  }
`;

const AboutPage = () => {
  return (
    <>
      <Layout>
        <Container>
          <SectionTitle>404</SectionTitle>
          <h2>Page not found</h2>
          <Link to='/'>Click to here go to Home page</Link>
        </Container>
      </Layout>
    </>
  );
};

export default AboutPage;
