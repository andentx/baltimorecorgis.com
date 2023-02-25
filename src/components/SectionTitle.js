import * as React from 'react';

import styled from 'styled-components';

const Title = styled.h2`
  font-size: clamp(2.5rem, 2.13rem + 2vw, 3rem);
  text-align: center;

  margin: 0 1.5rem 1rem 1.5rem;

  font-family: 'Gill Sans Custom';
`;

const SectionTitle = ({ children }) => {
  return (
    <>
      <Title>{children}</Title>
    </>
  );
};

export default SectionTitle;
