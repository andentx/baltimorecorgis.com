import * as React from 'react';

import styled from 'styled-components';

import PageHeaderLogo from './PageHeaderLogo';
import PageNavigation from './Navigation/PageNavigation';

const Header = styled.header`
  background-color: var(--page-header-background-color);
  color: var(--text-color);

  height: 4rem;
  width: 100%;
  /* max-width: 1200px; */

  padding: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 2px solid white;
`;

const HeaderInnerContent = styled.div`
  /* background-color: red; */
  width: 2000px;

  display: flex;
  justify-content: center;
  align-items: center;

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
