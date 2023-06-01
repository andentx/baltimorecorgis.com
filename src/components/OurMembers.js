import * as React from 'react';

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

const GridCellLink = styled.a`
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
    border-radius: 20px;
  }

  transition: color 200ms;

  img {
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

    img {
      opacity: 0.8;
    }
  }

  :active {
    color: var(--text-color);

    img {
      opacity: 0.8;
    }
  }
`;
const GridCell = styled.div`
  /* background-color: orange; */

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 5%;
  margin-bottom: 5%;

  color: var(--text-color);
`;

const Photo = styled.img`
  /* background-color: yellow; */

  width: 90%;
  aspect-ratio: 1/1;

  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 5%;
  margin-bottom: 5%;
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
  font-family: 'Montserrat Light';

  text-align: center;

  font-style: italic;

  width: 90%;

  font-weight: 200;

  margin-bottom: 0.5rem;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const OurMembers = ({ members }) => {
  return (
    <>
      <SectionTitle>Meet some of our members...</SectionTitle>
      <PhotoGrid>
        {members.map((member) => {
          if (member.link) {
            return (
              <GridCellLink key={member._id} href={member.link}>
                <Photo src={member.photo.asset.url} alt={member.imgAlt} />
                <Name>{member.name}</Name>
                <Subtitle>{member.subtitle}</Subtitle>
              </GridCellLink>
            );
          } else {
            return (
              <GridCell key={member._id}>
                <Photo src={member.photo.asset.url} alt={member.imgAlt} />
                <Name>{member.name}</Name>
                <Subtitle>{member.subtitle}</Subtitle>
              </GridCell>
            );
          }
        })}
      </PhotoGrid>
    </>
  );
};

export default OurMembers;
