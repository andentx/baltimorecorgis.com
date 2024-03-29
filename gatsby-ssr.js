import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/GillSansCustom.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="gillSansCustomFont"
    />,
    <link
      rel="preload"
      href="/fonts/MontserratLight.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="montserratLightFont"
    />,
    <link
      rel="preload"
      href="/fonts/MontserratRegular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="montserratRegularFont"
    />,
    <link
      rel="preload"
      href="/fonts/ChunkFive.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="chunkFiveFont"
    />,
  ]);
};
