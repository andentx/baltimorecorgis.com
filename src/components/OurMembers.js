import * as React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import styled from 'styled-components';

import SectionTitle from './SectionTitle';

const PhotoGrid = styled.section`
  /* background-color: red; */

  width: 95%;
  max-width: 1500px;

  display: grid;
  grid-template-columns: repeat(5, 18%);
  grid-auto-rows: 1fr;
  grid-auto-flow: row;

  @media screen and (max-width: 1170px) {
    grid-template-columns: repeat(3, 30%);
  }

  align-items: flex-start;
  justify-content: space-evenly;

  margin-bottom: clamp(1.6rem, 0.6333rem + 7.7333vw, 4.5rem);
`;

const GridCell = styled.a`
  /* background-color: orange; */

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 5%;
  margin-bottom: 5%;

  color: var(--text-color);

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
    border-radius: 15px;
  }

  transition: color 200ms;

  div {
    transition: opacity 200ms;
  }

  :link {
    color: var(--text-color);
  }

  :visited {
    color: var(--text-color);
  }

  :hover {
    color: hsl(0, 0%, 70%);

    div {
      opacity: 0.8;
    }
  }

  :active {
    color: var(--text-color);

    div {
      opacity: 0.8;
    }
  }
`;

const Photo = styled.div`
  /* background-color: yellow; */

  width: 90%;
  aspect-ratio: 1/1;

  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 5%;
  margin-bottom: 5%;

  a {
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    fill: var(--link-icon-color);

    height: 75%;
    width: 75%;
  }

  * {
    border-radius: 10px;
  }
`;

const Name = styled.h3`
  /* background-color: green; */

  text-align: center;

  width: 90%;
  max-height: 3.5rem;

  /* font-size: 1.5rem; */
  font-size: clamp(1rem, 0.5rem + 2.67vw, 1.5rem);

  font-weight: 400;

  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  /* background-color: blue; */

  font-size: 1rem;
  font-family: 'Montserrat Light', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  text-align: center;

  font-style: italic;

  width: 90%;

  font-weight: 200;

  margin-bottom: 0.5rem;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const dogData = [
  {
    id: 1,
    name: 'Cooper',
    subtitle: 'Host pup',
    photo: <StaticImage src='../images/dogs/cooper.jpg' height={500} width={500} alt={`A photo of Cooper, a red and white Pembroke Welsh Corgi.`} />,
    url: 'https://instagram.com/coopersacorgi',
  },
  {
    id: 2,
    name: 'Tillamook & London',
    subtitle: 'Member since 2021',
    photo: <StaticImage src='../images/dogs/tillamook-and-london.jpg' height={500} width={500} alt={`A photo of Tillamook and London, a red and white and tricolor Pembroke Welsh Corgi.`} />,
    url: 'https://www.instagram.com/tillamook.london',
  },
  {
    id: 3,
    name: 'Lucy',
    subtitle: 'Member since 2016',
    photo: <StaticImage src='../images/dogs/lucy.jpg' height={500} width={500} alt={`A photo of Lucy, a tricolor Pembroke Welsh Corgi.`} />,
    url: '',
  },
  {
    id: 4,
    name: 'Hercules',
    subtitle: 'Member since 2021',
    photo: <StaticImage src='../images/dogs/hercules.jpg' height={500} width={500} alt={`A photo of Hercules, a red and white Pembroke Welsh Corgi with a tail.`} />,
    url: 'https://www.instagram.com/tailofhercules',
  },
  {
    id: 5,
    name: 'Olive',
    subtitle: 'Member since 2020',
    photo: <StaticImage src='../images/dogs/olive.jpg' height={500} width={500} alt={`A photo of Olive, a sable Pembroke Welsh Corgi.`} />,
    url: 'https://instagram.com/olive_bmoreloaf',
  },
  {
    id: 6,
    name: 'Georgi',
    subtitle: 'Member since 2022',
    photo: <StaticImage src='../images/dogs/georgi.jpg' height={500} width={500} alt={`A photo of Georgi, a red and white Pembroke Welsh Corgi.`} />,
    url: 'https://instagram.com/georgi_thecorgi_md',
  },
  {
    id: 7,
    name: 'Comet & Rocket',
    subtitle: 'Member since 2020',
    photo: <StaticImage src='../images/dogs/rocket-and-comet.jpg' height={500} width={500} alt={`A photo of Comet and Rocket, a Cardigan Welsh Corgi and Pembroke Welsh Corgi.`} />,
    url: '',
  },
  {
    id: 8,
    name: 'Sophie',
    subtitle: 'Member since 2014',
    photo: <StaticImage src='../images/dogs/sophie.jpg' height={500} width={500} alt={`A photo of Sophie, a tricolor Pembroke Welsh Corgi.`} />,
    url: '',
  },
  {
    id: 9,
    name: 'Dewi',
    subtitle: 'Member since 2020',
    photo: <StaticImage src='../images/dogs/dewi.jpg' height={500} width={500} alt={`A photo of Dewi, a red and white, fluffy, Pembroke Welsh Corgi.`} />,
    url: 'https://instagram.com/dewi.the.fluffy.corgi',
  },
  {
    id: 10,
    name: 'Holly & Ace',
    subtitle: 'Member since 2014',
    photo: <StaticImage src='../images/dogs/holly-and-ace.jpg' height={500} width={500} alt={`A photo of Holly and Ace, a red and white Pembroke Welsh Corgi and a corgi mix.`} />,
    url: '',
  },
  {
    id: 11,
    name: 'Fox & Terry',
    subtitle: 'Member since 2020',
    photo: <StaticImage src='../images/dogs/fox-and-terry.jpg' height={500} width={500} alt={`A photo of Fox and Terry, red and white Pembroke Welsh Corgis.`} />,
    url: 'https://instagram.com/foxnterrycorgis',
  },
  {
    id: 12,
    name: 'Maisy',
    subtitle: 'Member since 2020',
    photo: <StaticImage src='../images/dogs/maisy.jpg' height={500} width={500} alt={`A photo of Maisy, a sable Pembroke Welsh Corgi.`} />,
    url: 'https://instagram.com/maisythecrazy_corgi',
  },
  {
    id: 13,
    name: 'Gemma',
    subtitle: 'Member since 2015',
    photo: <StaticImage src='../images/dogs/gemma.jpg' height={500} width={500} alt={`A photo of Gemma, a tricolor Pembroke Welsh Corgi.`} />,
    url: '',
  },
  {
    id: 14,
    name: 'Cheddar',
    subtitle: 'Member since 2022',
    photo: <StaticImage src='../images/dogs/cheddar.jpg' height={500} width={500} alt={`An upclose photo of Cheddar, a red and white Pembroke Welsh Corgi named after cheese.`} />,
    url: 'https://instagram.com/corgi.cheddar1',
  },
  {
    id: 15,
    name: 'Tucker',
    subtitle: 'Member since 2020',
    photo: <StaticImage src='../images/dogs/tucker.jpg' height={500} width={500} alt={`A photo of Tucker, a tricolor Pembroke Welsh Corgi that looks like a majestic mermaid.`} />,
    url: 'https://instagram.com/thepawsoftucker',
  },
];

const OurMembers = () => {
  return (
    <>
      <SectionTitle>Meet some of our members...</SectionTitle>
      <PhotoGrid>
        {dogData.map((dog) => (
          <GridCell key={dog.id} href={dog.url} aria-label={dog.text}>
            <Photo>{dog.photo}</Photo>
            <Name>{dog.name}</Name>
            <Subtitle>{dog.subtitle}</Subtitle>
          </GridCell>
        ))}
      </PhotoGrid>
    </>
  );
};

export default OurMembers;
