import * as React from "react";

import { Link as GatsbyLink } from "gatsby";

import styled from "styled-components";

const StyledLink = styled(GatsbyLink)`
  position: relative;

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
    border-radius: 12px;
  }
`;

const LogoContainer = styled.div`
  padding: 0.5rem;

  height: 100%;

  display: flex;

  cursor: pointer;
  z-index: 1000;

  :hover {
    div:first-of-type {
      border-bottom-color: var(--text-color-hover);
    }
    div:last-of-type {
      border-right-color: var(--text-color-hover);
    }
  }
`;

const PageHeaderLogo = () => {
  return (
    <>
      <StyledLink to='/' aria-label='home'>
        <LogoContainer>Logo</LogoContainer>
      </StyledLink>
    </>
  );
};

export default PageHeaderLogo;
