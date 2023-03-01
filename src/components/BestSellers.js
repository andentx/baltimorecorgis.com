import * as React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import SectionTitle from './SectionTitle';

import styled from 'styled-components';

const ProductGrid = styled.div`
  /* background-color: var(--baltimore-purple); */
  /* background-color: red; */

  width: 95%;
  max-width: 1500px;

  display: grid;
  grid-template-columns: repeat(4, 23%);
  grid-auto-rows: 1fr;
  grid-auto-flow: row;

  align-items: flex-start;
  justify-content: space-evenly;

  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(2, 48%);
  }

  margin-bottom: 2rem;
`;

const GridCell = styled.a`
  /* background-color: orange; */

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: var(--text-color);

  position: relative;

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

  margin-bottom: 1rem;
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

  :hover {
    opacity: 0.8;
  }

  * {
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }
`;

const Name = styled.h3`
  /* background-color: green; */

  text-align: center;

  width: 90%;
  padding: 0 1rem;

  /* 0.9rem at 900px, 1.5rem at 1600px */
  font-size: clamp(0.9rem, 0.13rem + 1.37vw, 1.5rem);

  @media screen and (max-width: 820px) {
    /* 0.9rem at 375px, 1.6rem at 820px */
    font-size: clamp(0.9rem, 0.31rem + 2.52vw, 1.6rem);
  }

  font-weight: 400;
  line-height: 1.4;

  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  /* background-color: blue; */

  text-align: center;

  font-style: italic;

  font-family: 'Montserrat Light';

  width: 90%;
  padding: 0.5rem;

  /* 0.8rem at 900px, 1.2rem at 1600px */
  font-size: clamp(0.8rem, 0.29rem + 0.91vw, 1.2rem);

  @media screen and (max-width: 820px) {
    /* 0.8rem at 300px, 1.0rem at 820px */
    font-size: clamp(0.8rem, 0.68rem + 0.62vw, 1rem);
  }

  font-weight: 200;
  line-height: 1.3;

  margin-bottom: 0.5rem;
`;

const Button = styled.a`
  /* background-color: red; */
  background: none;

  display: flex;

  border-radius: 18px;

  padding: 0.5rem;

  position: relative;

  outline: none;

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
    border-radius: 18px;
  }

  margin-bottom: 15rem;
`;

const ButtonInnerContent = styled.p`
  background-color: var(--baltimore-purple);
  color: white;

  border-radius: 10px;

  font-size: 1.2rem;

  padding: 1rem 2rem;

  transition: background-color 200ms;

  :hover {
    background-color: hsl(264, 36%, 36%);
  }
`;

const productData = [
  {
    id: 1,
    name: 'BaltiMore Corgis (White Logo)',
    subtitle: 'Classic Pullover Hoodie',
    photo: <StaticImage src='../images/products/black-baltimore-corgis-hoodie.jpg' height={220} width={220} alt={`A black hoodie that has a white Baltimore Corgis logo.`} />,
    url: 'https://baltimore-corgis.creator-spring.com/listing/baltimore-corgis-white?product=212',
  },
  {
    id: 2,
    name: 'Maryland Flag Corgi',
    subtitle: 'Die Cut Sticker',
    photo: (
      <StaticImage
        src='../images/products/baltimore-corgis-maryland-flag-sticker.jpg'
        height={220}
        width={220}
        alt={`A sticker in the shape of a corgi sitting down with the Maryland flag silhouette.`}
      />
    ),
    url: 'https://baltimore-corgis.creator-spring.com/listing/maryland-flag-corgi?product=794',
  },
  {
    id: 3,
    name: 'Baltimore Cityscape Corgis (Day)',
    subtitle: 'Classic Tank Top',
    photo: (
      <StaticImage src='../images/products/white-baltimore-corgis-tank-top-cityscape.jpg' height={220} width={220} alt={`A photo of white tank top with cartoon corgis and the Baltimore cityscape.`} />
    ),
    url: 'https://baltimore-corgis.creator-spring.com/listing/baltimore-cityscape-day?product=14',
  },
  {
    id: 4,
    name: 'BaltiMore Corgis (White Logo)',
    subtitle: 'Comfort Tee',
    photo: <StaticImage src='../images/products/black-baltimore-corgis-tshirt.jpg' height={220} width={220} alt={`A photo of black tee shirt that has a white Baltimore Corgis logo.`} />,
    url: 'https://baltimore-corgis.creator-spring.com/listing/baltimore-corgis-white?product=369',
  },
];

const BestSellers = () => {
  return (
    <>
      <SectionTitle>Best Sellers</SectionTitle>

      <ProductGrid>
        {productData.map((product) => (
          <GridCell key={product.id} href={product.url} aria-label={product.text}>
            <Photo>{product.photo}</Photo>
            <Name>{product.name}</Name>
            <Subtitle>{product.subtitle}</Subtitle>
          </GridCell>
        ))}
      </ProductGrid>

      <Button href='https://baltimore-corgis.creator-spring.com'>
        <ButtonInnerContent>SHOP NOW</ButtonInnerContent>
      </Button>
    </>
  );
};

export default BestSellers;
