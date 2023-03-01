import * as React from 'react';

import styled from 'styled-components';

import { createGlobalStyle } from 'styled-components';

import Color from '../components/Color';

import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';

import GillSansCustom from '../fonts/GillSansCustom.woff2';
import MontserratRegular from '../fonts/MontserratRegular.woff2';
import MontserratLight from '../fonts/MontserratLight.woff2';

const GlobalReset = createGlobalStyle`
 html,
 body,
 button,
 header,
 main,
 menu,
 nav,
 footer,
 section,
 article,
 pre,
 div,
 h1,
 h2,
 h3,
 h4,
 h5,
 h6,
 p,
 ol,
 ul,
 li,
 a {
     box-sizing: border-box;
     margin: 0;
     padding: 0;
     border-style: none;
     font-style: normal;
     font-weight: normal;
     list-style: none;
     text-decoration: none;
     scroll-behavior: smooth;
 }

 html {
    overflow-x: hidden;

}
 `;

const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'Gill Sans Custom';
  src: url(${GillSansCustom}) format('woff2');
}
  @font-face {
  font-family: 'Montserrat Regular';
  src: url(${MontserratRegular}) format('woff2');
}
  @font-face {
  font-family: 'Montserrat Light';
  src: url(${MontserratLight}) format('woff2');
}
`;

const PageContainer = styled.div`
  min-height: 100vh;
  min-height: 100dvh;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: 'Montserrat Regular';

  h2 {
    font-family: 'Gill Sans Custom';
  }
`;

const MainContent = styled.main`
  background-color: var(--main-section-background-color);
  color: var(--text-color);

  width: 100%;
  max-width: 2000px;

  /* padding-top: min(5vw, 3rem); */

  display: flex;
  flex-direction: column;
  align-items: center;

  flex-grow: 1;
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalReset />
      <Color />
      <FontStyles />
      <PageContainer>
        <PageHeader />
        <MainContent>{children}</MainContent>
        <PageFooter />
      </PageContainer>
    </>
  );
};

export default Layout;
