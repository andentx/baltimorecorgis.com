import * as React from 'react';

import styled from 'styled-components';

import Layout from '../components/Layout';

import SectionTitle from '../components/SectionTitle';

export const Head = () => (
  <>
    <title>Baltimore Corgis | Rules</title>
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
    title: 'In Search of Corgi Posts',
    description:
      'ISO posts may not be allowed commenting in order to avoid publicizing the promotion of breeders. Do not use language that promotes buying, selling, or breeders in your post or it will be denied.',
  },
  {
    id: 4,
    title: 'Breeders',
    description: 'You may not publicize or promote puppies, new litters, or your business. Selling animals is against Facebook rules.',
  },
  {
    id: 5,
    title: 'Corgi Only Promotions',
    description:
      'Promotions are only allowed if they are supporting a local business and are specifically Corgi related. (i.e. Your corgis Instagram or Facebook page, Etsy for Corgi items, or Corgi-related events.)',
  },
  {
    id: 6,
    title: 'No Stud Posts',
    description: 'Posts asking where to find or in search of a breeding mate will not be permitted.',
  },
  {
    id: 7,
    title: 'Keep Political Views to Yourself',
    description: 'Please keep political views on your own page. This is not the place to discuss it.',
  },
  {
    id: 8,
    title: 'Be Kind and Courteous',
    description: 'This is self-explanatory. Just be nice!',
  },
  {
    id: 9,
    title: 'No Hate Speech or Bullying',
    description: 'Bullying of any kind is not allowed, and degrading comments about things like race, religion, culture, sexual orientation, gender, or identity will not be tolerated.',
  },
];
const eventRules = [
  {
    id: 1,
    title: 'No Food or Dog Treats',
    description: 'Please no human food or dog treats. Handing out treats may cause unnecessary conflict. Some dogs may also have allergies or diet restrictions.',
  },
  {
    id: 2,
    title: 'No Toys or Balls',
    description: 'Please refrain from playing with toys or balls. Some dogs are possessive over toys/balls and this causes unnecessary conflict.',
  },
  {
    id: 3,
    title: 'Clean Up After Your Dog',
    description: 'Please keep an eye on your dog and clean up after them. In most cases, there will be supplies such as paper towels, spray, poop bags, trash cans, etc.',
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

        {eventRules.map((rule) => (
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
