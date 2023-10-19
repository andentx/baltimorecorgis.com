import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";

import styled from "styled-components";

const HorizontalContainer = styled.div`
  /* background-color: darkred; */

  width: 90%;
  max-width: 1100px;

  display: grid;

  margin-bottom: 5rem;

  @media screen and (max-width: 780px) {
    display: none;
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

  @media screen and (max-width: 780px) {
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

  padding-left: 3rem;
`;

const TextContainer = styled.div`
  background-color: var(--baltimore-purple);

  border-radius: 20px;

  /* width: min(100%, 1000px); */
  width: 100%;
  max-width: 952px;

  padding: 1.5rem 3rem 1.5rem 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 780px) {
    width: 90%;
    padding: 2rem;
  }
`;

const Text = styled.p`
  /* background-color: yellow; */
  color: var(--off-white);

  text-align: center;
  width: 60%;

  font-size: 1.5rem;
  line-height: 1.3;

  margin-bottom: 1.5rem;

  @media screen and (max-width: 780px) {
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
    content: "";
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
  background-color: var(--off-white);
  color: var(--baltimore-purple);

  border-radius: 10px;

  font-size: 1.2rem;

  padding: 1rem 2rem;

  transition: background-color 200ms;

  :hover {
    background-color: var(--text-color-hover);
  }
`;

const VerticalContainer = styled.div`
  width: 100%;
  min-height: 1rem;

  display: none;
  flex-direction: column;
  align-items: center;

  margin-bottom: 5rem;

  @media screen and (max-width: 780px) {
    display: flex;
  }
`;

const VerticalPhotoContainer = styled.div`
  /* background-color: orange; */
  width: 10rem;

  position: relative;
  bottom: -1rem;
`;

const CorgiOfTheMonth = () => {
  return (
    <>
      <HorizontalContainer>
        <TopFrame>
          <PhotoContainer>
            <StaticImage
              height={1125}
              width={602}
              src="../images/phone.png"
              alt="A mobile phone displaying The Baltimore Corgis Instagram page"
              placeholder="blurred"
            />
          </PhotoContainer>
        </TopFrame>
        <BottomFrame>
          <TextContainer>
            <Text>
              Do you want to be featured as Corgi of the Month on our Instagram?
            </Text>
            <Button href="https://docs.google.com/forms/d/e/1FAIpQLScuZM7H0AbcYEx2f4Nbyol46tobRUrzx5PXgQcy720ynd_RYw/viewform">
              <ButtonInnerContent>SIGN UP</ButtonInnerContent>
            </Button>
          </TextContainer>
        </BottomFrame>
      </HorizontalContainer>

      <VerticalContainer>
        <VerticalPhotoContainer>
          <StaticImage
            height={1125}
            width={602}
            src="../images/phone.png"
            alt="A mobile phone displaying The Baltimore Corgis Instagram page"
            placeholder="blurred"
          />
        </VerticalPhotoContainer>
        <TextContainer>
          <Text>
            Do you want to be featured as Corgi of the Month on our Instagram?
          </Text>
          <Button href="https://docs.google.com/forms/d/e/1FAIpQLScuZM7H0AbcYEx2f4Nbyol46tobRUrzx5PXgQcy720ynd_RYw/viewform">
            <ButtonInnerContent>SIGN UP</ButtonInnerContent>
          </Button>
        </TextContainer>
      </VerticalContainer>
    </>
  );
};

export default CorgiOfTheMonth;
