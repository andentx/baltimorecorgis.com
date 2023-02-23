import * as React from 'react';

import styled from 'styled-components';

import PageHeaderLogo from './PageHeaderLogo';
import PageNavigation from './Navigation/PageNavigation';

const Header = styled.header`
  background-color: var(--page-header-background-color);

  height: 4rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 2px solid white;
`;

const HeaderInnerContent = styled.div`
  width: 2000px;

  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PageHeader = () => {
  return (
    <Header>
      <HeaderInnerContent>
        <PageHeaderLogo />
        <PageNavigation />
      </HeaderInnerContent>
    </Header>
  );
};

export default PageHeader;
