import * as React from 'react';

import { createGlobalStyle } from 'styled-components';

const GlobalColor = createGlobalStyle`

  :root {
    /* primary color */
    --baltimore-purple: hsl(264, 36%, 31%);
    --baltimore-purple-darker: hsl(264, 36%, 27%);
    
    /* black */
    --off-black: hsl(180, 2%, 8%);

    /* white */
    --off-white: hsl(0, 0%, 99%);
    --off-white-darker: hsl(0, 0%, 70%);

    /* color roles */
    --site-background-color: var(--off-black);
    
    --text-color: var(--off-white);
    --text-color-hover: var(--off-white-darker);
    --text-color-hover: hsl(264, 36%, 81%);

    --focus-color: var(--off-white-darker);
    
    /* color assignments */
    --page-header-background-color: var(--baltimore-purple);

    --nav-menu-open-icon-color: var(--off-white);
    --nav-menu-close-icon-color: var(--off-white);

    --main-section-background-color: var(--off-black);

    --page-footer-background-color: var(--baltimore-purple);
  }

  html {
    background-color: var(--baltimore-purple);
  }
  body {
    background-color: var(--site-background-color);
  }

 `;

const Color = () => {
  return (
    <>
      <GlobalColor />
    </>
  );
};

export default Color;
