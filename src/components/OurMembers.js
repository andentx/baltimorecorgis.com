import * as React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import styled from 'styled-components';

const SectionTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const PhotoGrid = styled.section`
  /* background-color: red; */

  width: 90%;

  display: grid;
  grid-template-columns: repeat(5, 18%);
  grid-auto-rows: 1fr;
  grid-auto-flow: row;

  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(4, 24%);
  }

  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(3, 30%);
  }

  align-items: center;
  justify-content: space-evenly;

  margin-bottom: clamp(1.6rem, 0.6333rem + 7.7333vw, 4.5rem);
`;

const GridCell = styled.a`
  /* background-color: orange; */

  position: relative;

  width: 100%;
  /* aspect-ratio: 1/1.3; */

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 10%;
  margin-bottom: 10%;

  color: var(--text-color);

  a {
    color: var(--text-color);
  }

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

  :link {
    color: var(--text-color);
  }

  :visited {
    color: var(--text-color);
  }

  :hover {
    color: var(--text-color-hover);

    span {
      background: rgb(255, 216, 96);
      background: linear-gradient(142deg, rgba(255, 216, 96, 1) 0%, rgba(255, 191, 0, 1) 50%, rgba(237, 178, 0, 1) 100%);
    }
  }

  :active {
    color: var(--text-color);
    span {
      background: rgb(255, 216, 96);
      background: linear-gradient(142deg, rgba(255, 216, 96, 1) 0%, rgba(255, 191, 0, 1) 50%, rgba(237, 178, 0, 1) 100%);
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
  margin-bottom: 10%;

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

  :hover {
    opacity: 0.8;
  }

  * {
    border-radius: 10px;
  }
`;

const Name = styled.p`
  /* background-color: green; */

  text-align: center;

  width: 90%;

  font-size: 1.5rem;
  font-weight: 400;

  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  /* background-color: blue; */

  text-align: center;

  font-style: italic;

  width: 90%;

  font-weight: 200;

  margin-bottom: 0.5rem;
`;

const dogData = [
  {
    id: 1,
    name: 'Cooper',
    subtitle: 'host pup',
    photo: <StaticImage src='../images/dogs/cooper.jpg' height={220} width={220} alt={`A photo of Cooper, a Pembroke Welsh Corgi.`} />,
    url: 'https://instagram.com/coopersacorgi',
  },
  {
    id: 1,
    name: 'Cooper',
    subtitle: 'host pup',
    photo: <StaticImage src='../images/dogs/cooper.jpg' height={220} width={220} alt={`A photo of Cooper, a Pembroke Welsh Corgi.`} />,
    url: 'https://instagram.com/coopersacorgi',
  },
  {
    id: 1,
    name: 'Cooper',
    subtitle: 'host pup',
    photo: <StaticImage src='../images/dogs/cooper.jpg' height={220} width={220} alt={`A photo of Cooper, a Pembroke Welsh Corgi.`} />,
    url: 'https://instagram.com/coopersacorgi',
  },
  {
    id: 1,
    name: 'Cooper',
    subtitle: 'host pup',
    photo: <StaticImage src='../images/dogs/cooper.jpg' height={220} width={220} alt={`A photo of Cooper, a Pembroke Welsh Corgi.`} />,
    url: 'https://instagram.com/coopersacorgi',
  },
  {
    id: 1,
    name: 'Cooper',
    subtitle: 'host pup',
    photo: <StaticImage src='../images/dogs/cooper.jpg' height={220} width={220} alt={`A photo of Cooper, a Pembroke Welsh Corgi.`} />,
    url: 'https://instagram.com/coopersacorgi',
  },
  {
    id: 1,
    name: 'Cooper',
    subtitle: 'host pup',
    photo: <StaticImage src='../images/dogs/cooper.jpg' height={220} width={220} alt={`A photo of Cooper, a Pembroke Welsh Corgi.`} />,
    url: 'https://instagram.com/coopersacorgi',
  },
  {
    id: 1,
    name: 'Cooper',
    subtitle: 'host pup',
    photo: <StaticImage src='../images/dogs/cooper.jpg' height={220} width={220} alt={`A photo of Cooper, a Pembroke Welsh Corgi.`} />,
    url: 'https://instagram.com/coopersacorgi',
  },
  {
    id: 1,
    name: 'Cooper',
    subtitle: 'host pup',
    photo: <StaticImage src='../images/dogs/cooper.jpg' height={220} width={220} alt={`A photo of Cooper, a Pembroke Welsh Corgi.`} />,
    url: 'https://instagram.com/coopersacorgi',
  },
  {
    id: 1,
    name: 'Cooper',
    subtitle: 'host pup',
    photo: <StaticImage src='../images/dogs/cooper.jpg' height={220} width={220} alt={`A photo of Cooper, a Pembroke Welsh Corgi.`} />,
    url: 'https://instagram.com/coopersacorgi',
  },
  {
    id: 1,
    name: 'Cooper',
    subtitle: 'host pup',
    photo: <StaticImage src='../images/dogs/cooper.jpg' height={220} width={220} alt={`A photo of Cooper, a Pembroke Welsh Corgi.`} />,
    url: 'https://instagram.com/coopersacorgi',
  },
  {
    id: 1,
    name: 'Cooper',
    subtitle: 'host pup',
    photo: <StaticImage src='../images/dogs/cooper.jpg' height={220} width={220} alt={`A photo of Cooper, a Pembroke Welsh Corgi.`} />,
    url: 'https://instagram.com/coopersacorgi',
  },
  {
    id: 1,
    name: 'Cooper',
    subtitle: 'host pup',
    photo: <StaticImage src='../images/dogs/cooper.jpg' height={220} width={220} alt={`A photo of Cooper, a Pembroke Welsh Corgi.`} />,
    url: 'https://instagram.com/coopersacorgi',
  },
  {
    id: 1,
    name: 'Cooper',
    subtitle: 'host pup',
    photo: <StaticImage src='../images/dogs/cooper.jpg' height={220} width={220} alt={`A photo of Cooper, a Pembroke Welsh Corgi.`} />,
    url: 'https://instagram.com/coopersacorgi',
  },
  {
    id: 1,
    name: 'Cooper',
    subtitle: 'host pup',
    photo: <StaticImage src='../images/dogs/cooper.jpg' height={220} width={220} alt={`A photo of Cooper, a Pembroke Welsh Corgi.`} />,
    url: 'https://instagram.com/coopersacorgi',
  },
  {
    id: 1,
    name: 'Cooper',
    subtitle: 'host pup',
    photo: <StaticImage src='../images/dogs/cooper.jpg' height={220} width={220} alt={`A photo of Cooper, a Pembroke Welsh Corgi.`} />,
    url: 'https://instagram.com/coopersacorgi',
  },
  {
    id: 1,
    name: 'Cooper',
    subtitle: 'host pup',
    photo: <StaticImage src='../images/dogs/cooper.jpg' height={220} width={220} alt={`A photo of Cooper, a Pembroke Welsh Corgi.`} />,
    url: 'https://instagram.com/coopersacorgi',
  },
  {
    id: 1,
    name: 'Cooper',
    subtitle: 'host pup',
    photo: <StaticImage src='../images/dogs/cooper.jpg' height={220} width={220} alt={`A photo of Cooper, a Pembroke Welsh Corgi.`} />,
    url: 'https://instagram.com/coopersacorgi',
  },
  {
    id: 1,
    name: 'Cooper',
    subtitle: 'host pup',
    photo: <StaticImage src='../images/dogs/cooper.jpg' height={220} width={220} alt={`A photo of Cooper, a Pembroke Welsh Corgi.`} />,
    url: 'https://instagram.com/coopersacorgi',
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
