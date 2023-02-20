import * as React from "react";
import Layout from "../components/Layout";

import styled from "styled-components";
import { Link } from "gatsby";

export const Head = () => (
  <>
    <title>Baltimore Corgis</title>
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

    <meta name='theme-color' content='hsl(0, 0%, 0%)' />
  </>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
`;

const AboutPage = () => {
  return (
    <>
      <Layout>
        <Container>
          <h1>404</h1>
          <h2>Page not found</h2>
          <Link to='/'>Go home</Link>
        </Container>
      </Layout>
    </>
  );
};

export default AboutPage;
