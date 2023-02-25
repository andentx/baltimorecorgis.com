import * as React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import SectionTitle from './SectionTitle';

import styled from 'styled-components';

const ProductGrid = styled.div`
  /* background-color: var(--baltimore-purple); */
  /* background-color: red; */

  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 24%);
  grid-auto-rows: 1fr;
  grid-auto-flow: row;

  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(2, 48%);
  }

  align-items: center;
  justify-content: space-evenly;

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

  :link {
    color: var(--text-color);
  }

  :visited {
    color: var(--text-color);
  }

  :hover {
    color: var(--text-color-hover);
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

const ShopButton = styled.a`
  background-color: var(--baltimore-purple);

  border-radius: 10px;

  color: white;

  font-size: 1.5rem;

  padding: 1rem 2rem;

  margin-bottom: 15rem;

  :hover {
    color: lightgrey;
    opacity: 0.9;
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
    photo: <StaticImage src='../images/products/baltimore-corgis-maryland-flag-sticker.jpg' height={220} width={220} alt={`A sticker in the shape of a corgi sitting down with the Maryland flag silhouette.`} />,
    url: 'https://baltimore-corgis.creator-spring.com/listing/maryland-flag-corgi?product=794',
  },
  {
    id: 3,
    name: 'Baltimore Cityscape Corgis (Day)',
    subtitle: 'Classic Tank Top',
    photo: <StaticImage src='../images/products/white-baltimore-corgis-tank-top-cityscape.jpg' height={220} width={220} alt={`A photo of white tank top with cartoon corgis and the Baltimore cityscape.`} />,
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

      <ShopButton href='https://baltimore-corgis.creator-spring.com/'>SHOP</ShopButton>
    </>
  );
};

export default BestSellers;
