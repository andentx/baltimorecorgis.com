import * as React from 'react';

import styled from 'styled-components';

import Layout from '../components/Layout';

import SectionTitle from '../components/SectionTItle';

export const Head = () => (
  <>
    <title>Baltimore Corgis | Rules</title>
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

const Rule = styled.a`
  /* background-color: darkred; */
  color: var(--text-color);

  width: min(90%, 650px);

  display: flex;
  justify-content: flex-start;

  margin-bottom: 2rem;
`;

const NumberContainer = styled.div`
  /* background-color: orange; */

  flex-shrink: 0;

  height: 6rem;
  width: 4rem;

  display: flex;
  align-items: flex-end;

  justify-content: center;

  font-size: 6rem;
`;

const TextContainer = styled.div`
  /* background-color: darkgoldenrod; */

  display: flex;
  flex-direction: column;

  padding-left: 20px;

  h3 {
    /* background-color: lightgray; */
    font-size: clamp(0.9rem, 0.3rem + 3.2vw, 1.3rem);
    font-weight: 400;
    margin-bottom: 10px;
  }

  p {
    /* background-color: grey; */
    font-size: clamp(0.8rem, 0.5rem + 1.6vw, 1rem);
    font-weight: 200;
    word-wrap: break-word;
  }
`;

const VerticalSpacer = styled.div`
  /* background-color: red; */
  height: 2rem;
  width: 100%;
`;

const groupRules = [
  {
    id: 1,
    title: 'Membership Questions Require Answers',
    description: "If questions are left blank, you will not be approved. If you're inviting friends, let them know to visit the group page to answer the questions.",
  },
  {
    id: 2,
    title: 'No Corgi for Sale Posts',
    description: '"For Sale" or "Selling" posts will not be permitted. Posts may only permit re-homing or adoption',
  },
  {
    id: 3,
    title: 'No Corgi for Sale Posts',
    description: '"For Sale" or "Selling" posts will not be permitted. Posts may only permit re-homing or adoption',
  },
  {
    id: 4,
    title: 'No Corgi for Sale Posts',
    description: '"For Sale" or "Selling" posts will not be permitted. Posts may only permit re-homing or adoption',
  },
];

const RulesPage = () => {
  return (
    <>
      <Layout>
        <SectionTitle>Group Rules</SectionTitle>
        <VerticalSpacer />

        {groupRules.map((rule) => (
          <Rule key={rule.id}>
            <NumberContainer>
              <p>{rule.id}</p>
            </NumberContainer>

            <TextContainer>
              <h3>{rule.title}</h3>
              <p>{rule.description}</p>
            </TextContainer>
          </Rule>
        ))}

        <VerticalSpacer />
        <SectionTitle>Event Rules</SectionTitle>
        <VerticalSpacer />

        {groupRules.map((rule) => (
          <Rule key={rule.id}>
            <NumberContainer>
              <p>{rule.id}</p>
            </NumberContainer>

            <TextContainer>
              <h3>{rule.title}</h3>
              <p>{rule.description}</p>
            </TextContainer>
          </Rule>
        ))}
      </Layout>
    </>
  );
};

export default RulesPage;
