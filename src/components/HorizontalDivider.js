import * as React from 'react';

import styled from 'styled-components';

const Line = styled.div`
  height: 3px;
  width: 50%;
  background-color: var(--baltimore-purple);

  margin-bottom: 5rem;
`;

const HorizontalDivider = () => {
  return (
    <>
      <Line />
    </>
  );
};

export default HorizontalDivider;
