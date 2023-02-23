import * as React from 'react';

import styled from 'styled-components';

const Title = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const SectionTitle = ({ children }) => {
  return (
    <>
      <Title>{children}</Title>
    </>
  );
};

export default SectionTitle;
