import * as React from "react";

import styled from "styled-components";

import PageHeaderLogo from "./PageHeaderLogo";
import PageNavigation from "./Navigation/PageNavigation";

const Header = styled.header`
  background-color: var(--page-header-background-color);
  color: var(--text-color);

  height: 4rem;
  width: 100%;
  /* max-width: 1200px; */

  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PageHeader = () => {
  return (
    <Header>
      <PageHeaderLogo />
      <PageNavigation />
    </Header>
  );
};

export default PageHeader;
