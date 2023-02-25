import * as React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import styled from 'styled-components';

const Container = styled.div`
  /* background-color: darkred; */

  width: 90%;
  max-width: 1200px;

  display: grid;

  margin-bottom: 3rem;

  @media screen and (max-width: 700px) {
    margin-top: 15rem;
  }
`;

const TopFrame = styled.div`
  /* border: 2px solid blue; */

  grid-column: 1;
  grid-row: 1;

  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 700px) {
    justify-content: center;
    position: relative;
    bottom: 235px;
  }
  @media screen and (max-width: 600px) {
    bottom: 245px;
  }
  @media screen and (max-width: 452px) {
    bottom: 255px;
  }
  @media screen and (max-width: 350px) {
    bottom: 275px;
  }
`;

const PhotoContainer = styled.div`
  /* border: 2px solid hotpink; */

  width: 10rem;

  display: flex;
  justify-content: center;

  flex-shrink: 0;

  * {
    width: 100%;
  }
`;

const BottomFrame = styled.div`
  /* border: 2px solid yellow; */

  grid-column: 1;
  grid-row: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.div`
  background-color: var(--baltimore-purple);

  border-radius: 20px;

  width: 80%;

  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  /* background-color: yellow; */
  color: white;

  text-align: center;
  width: 60%;

  font-size: 1.5rem;
  line-height: 1.3;

  margin-bottom: 1.5rem;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

const Button = styled.a`
  /* background-color: red; */
  background: none;

  display: flex;

  border-radius: 18px;

  padding: 0.5rem;

  position: relative;

  z-index: 2000;

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
`;

const ButtonInnerContent = styled.p`
  background-color: white;
  color: var(--baltimore-purple);

  border-radius: 10px;

  font-size: 1.2rem;

  padding: 1rem 2rem;

  transition: background-color 200ms;

  :hover {
    background-color: var(--text-color-hover);
  }
`;

const CorgiOfTheMonth = () => {
  return (
    <>
      <Container>
        <TopFrame>
          <PhotoContainer>
            <StaticImage height={1125} width={602} src='../images/phone.png' alt='A phone' placeholder='blurred' />
          </PhotoContainer>
        </TopFrame>
        <BottomFrame>
          <TextContainer>
            <Text>Do you want to be featured as Corgi of the Month on our Instagram?</Text>
            <Button href='https://www.wikipedia.org'>
              <ButtonInnerContent>SIGN UP</ButtonInnerContent>
            </Button>
          </TextContainer>
        </BottomFrame>
      </Container>
    </>
  );
};

export default CorgiOfTheMonth;
