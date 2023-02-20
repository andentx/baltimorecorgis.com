import * as React from 'react';

import styled from 'styled-components';

const SectionTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const PhotoGrid = styled.section`
  background-color: red;

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
  background-color: orange;

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

const LinkIcon = styled.div`
  background-color: yellow;

  width: 90%;
  aspect-ratio: 1/1;

  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 5%;
  margin-bottom: 10%;

  a {
    border-radius: 10px;

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
`;

const LinkName = styled.p`
  background-color: green;

  text-align: center;

  width: 90%;

  font-weight: 200;

  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  background-color: blue;

  text-align: center;

  width: 90%;

  font-weight: 200;

  margin-bottom: 0.5rem;
`;

const linkData = [
  {
    id: 1,
    text: 'GitHub',
    subtitle: 'Member since 2000',
    icon: (
      <svg viewBox='0 0 24 24'>
        <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
      </svg>
    ),
    url: 'https://github.com/andentx',
  },
  {
    id: 2,
    text: 'LinkedIn',
    subtitle: 'Member since 2000',
    icon: (
      <svg viewBox='0 0 24 24'>
        <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
      </svg>
    ),
    url: 'https://www.linkedin.com/in/andrewdentdev/',
  },
  {
    id: 3,
    text: 'Twitter',
    subtitle: 'Member since 2000',
    icon: (
      <svg viewBox='0 0 24 24'>
        <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
      </svg>
    ),
    url: 'https://twitter.com/andentx',
  },
  {
    id: 4,
    text: 'YouTube',
    subtitle: 'Member since 2000',
    icon: (
      <svg viewBox='0 0 24 24'>
        <path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z' />
      </svg>
    ),
    url: 'https://www.youtube.com/channel/UC-3KA2s_MxayI3RyUYyZuwg',
  },
  {
    id: 5,
    text: 'YouTube',
    subtitle: 'Member since 2000',
    icon: (
      <svg viewBox='0 0 24 24'>
        <path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z' />
      </svg>
    ),
    url: 'https://www.youtube.com/channel/UC-3KA2s_MxayI3RyUYyZuwg',
  },
  {
    id: 6,
    text: 'YouTube',
    subtitle: 'Member since 2000',
    icon: (
      <svg viewBox='0 0 24 24'>
        <path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z' />
      </svg>
    ),
    url: 'https://www.youtube.com/channel/UC-3KA2s_MxayI3RyUYyZuwg',
  },
  {
    id: 7,
    text: 'YouTube',
    subtitle: 'Member since 2000',
    icon: (
      <svg viewBox='0 0 24 24'>
        <path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z' />
      </svg>
    ),
    url: 'https://www.youtube.com/channel/UC-3KA2s_MxayI3RyUYyZuwg',
  },
];

const OurMembers = () => {
  return (
    <>
      <SectionTitle>Meet some of our members...</SectionTitle>
      <PhotoGrid>
        {linkData.map((link) => (
          <GridCell key={link.id} href={link.url} aria-label={link.text}>
            <LinkIcon></LinkIcon>
            <LinkName>{link.text}</LinkName>
            <Subtitle>{link.subtitle}</Subtitle>
          </GridCell>
        ))}
      </PhotoGrid>
    </>
  );
};

export default OurMembers;
