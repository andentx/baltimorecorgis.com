import * as React from 'react';

import { Link as GatsbyLink } from 'gatsby';

import styled from 'styled-components';

const StyledLink = styled(GatsbyLink)`
  position: relative;

  :focus-visible {
    outline: none;
  }

  :focus-visible::before {
    content: '';
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
  height: 100%;
  width: min(316px, 75vw);

  display: flex;

  margin: 0rem 0.25rem;

  cursor: pointer;

  z-index: 1000;

  svg {
    /* background-color: orange; */
  }

  :hover {
    svg {
      path {
        fill: var(--text-color-hover);
      }
    }
  }
`;

const PageHeaderLogo = () => {
  return (
    <>
      <StyledLink to='/' aria-label='home'>
        <LogoContainer>
          <svg xmlns='http://www.w3.org/2000/svg' width='316' zoomAndPan='magnify' viewBox='0 0 450 48' height='48' preserveAspectRatio='xMidYMid meet' version='1.0'>
            <defs>
              <clipPath id='56cea824e0'>
                <path d='M 5.449219 5 L 36 5 L 36 44 L 5.449219 44 Z M 5.449219 5 ' clipRule='nonzero' />
              </clipPath>
              <clipPath id='f4f9bfc088'>
                <path d='M 173 4 L 203 4 L 203 44.628906 L 173 44.628906 Z M 173 4 ' clipRule='nonzero' />
              </clipPath>
              <clipPath id='349aea2ab3'>
                <path d='M 418 3 L 444.796875 3 L 444.796875 43 L 418 43 Z M 418 3 ' clipRule='nonzero' />
              </clipPath>
            </defs>
            <g clipPath='url(#56cea824e0)'>
              <path
                fill='#ffffff'
                d='M 33.871094 27.65625 C 33.109375 26.265625 32.007812 25.066406 30.542969 24.015625 C 33.007812 22.125 34.238281 19.371094 34.238281 15.761719 C 34.238281 12.460938 33.316406 9.84375 31.453125 7.921875 C 29.601562 5.996094 26.84375 5.035156 23.21875 5.035156 L 5.449219 5.035156 L 5.449219 43.441406 L 25.273438 43.441406 C 28.355469 43.441406 30.746094 42.480469 32.449219 40.542969 C 34.152344 38.621094 35.003906 36.03125 35.003906 32.820312 C 35.003906 30.761719 34.621094 29.03125 33.871094 27.640625 Z M 18.039062 12.773438 L 18.804688 12.773438 C 21.019531 12.773438 22.121094 14.015625 22.121094 16.5 C 22.121094 17.878906 21.839844 18.855469 21.269531 19.402344 C 20.695312 19.964844 19.726562 20.246094 18.363281 20.246094 L 18.039062 20.246094 Z M 21.519531 34.105469 C 20.902344 34.699219 19.875 34.996094 18.4375 34.996094 L 18.039062 34.996094 L 18.039062 26.695312 L 18.921875 26.695312 C 21.269531 26.695312 22.441406 28.144531 22.441406 31.03125 C 22.441406 32.496094 22.132812 33.515625 21.519531 34.105469 Z M 21.519531 34.105469 '
                fillOpacity='1'
                fillRule='nonzero'
              />
            </g>
            <path
              fill='#ffffff'
              d='M 59.492188 43.457031 L 72.054688 43.457031 L 62.191406 5.035156 L 44.261719 5.035156 L 34.402344 43.441406 L 46.992188 43.441406 L 48.632812 36.949219 L 57.863281 36.949219 L 59.507812 43.441406 Z M 50.910156 27.90625 L 53.242188 18.367188 L 55.574219 27.90625 Z M 50.910156 27.90625 '
              fillOpacity='1'
              fillRule='nonzero'
            />
            <path
              fill='#ffffff'
              d='M 96.734375 33.8125 L 85.714844 33.8125 L 85.714844 5.035156 L 73.140625 5.035156 L 73.140625 43.457031 L 96.734375 43.457031 Z M 96.734375 33.8125 '
              fillOpacity='1'
              fillRule='nonzero'
            />
            <path
              fill='#ffffff'
              d='M 98.890625 43.457031 L 111.484375 43.457031 L 111.484375 22.050781 L 117.808594 22.050781 L 117.808594 5.035156 L 92.566406 5.035156 L 92.566406 22.050781 L 98.890625 22.050781 Z M 98.890625 43.457031 '
              fillOpacity='1'
              fillRule='nonzero'
            />
            <path fill='#ffffff' d='M 119.65625 5.035156 L 132.214844 5.035156 L 132.214844 43.441406 L 119.65625 43.441406 Z M 119.65625 5.035156 ' fillOpacity='1' fillRule='nonzero' />
            <path
              fill='#ffffff'
              d='M 142.972656 42.925781 C 143.015625 42.820312 143.191406 42.96875 143.207031 42.894531 C 143.238281 42.808594 143.015625 42.511719 143.03125 42.464844 C 143.03125 42.4375 143.132812 42.570312 143.179688 42.496094 C 143.238281 42.421875 143.179688 42.183594 143.222656 42.113281 C 143.308594 41.964844 143.632812 42.464844 143.660156 42.390625 C 143.691406 42.304688 143.441406 42.023438 143.484375 41.636719 C 143.515625 41.3125 143.734375 41.296875 143.824219 40.929688 C 143.941406 40.453125 143.765625 39.804688 143.617188 39.492188 C 143.472656 39.152344 143.339844 39.152344 143.324219 38.886719 C 143.308594 38.515625 143.542969 38.25 143.484375 38.011719 C 143.441406 37.761719 143.164062 37.878906 143.148438 37.703125 C 143.117188 37.464844 143.558594 37.125 143.542969 36.949219 C 143.53125 36.769531 143.117188 36.890625 143.117188 36.769531 C 143.117188 36.667969 143.457031 36.546875 143.472656 36.355469 C 143.5 36.015625 142.503906 36.03125 142.355469 35.097656 C 142.28125 34.65625 142.488281 34.507812 142.429688 33.707031 C 142.386719 33.128906 142.238281 32.554688 142.195312 32.363281 C 142.121094 32.050781 142.105469 32.082031 142.078125 31.917969 C 141.972656 31.339844 142.105469 31.042969 142.0625 30.511719 C 142.046875 30.261719 141.945312 29.980469 141.726562 29.417969 C 141.488281 28.78125 141.417969 28.75 141.300781 28.277344 C 141.253906 28.085938 141.195312 27.773438 141.136719 27.492188 C 141.09375 27.257812 141.066406 27.066406 141.050781 27.003906 C 140.949219 26.324219 140.785156 25.613281 140.710938 25.246094 C 140.535156 24.3125 140.507812 23.46875 140.476562 22.980469 C 140.433594 21.695312 140.550781 20.703125 140.640625 19.976562 C 140.769531 18.839844 140.902344 18.335938 141.007812 18.011719 C 141.136719 17.597656 141.328125 17.195312 141.402344 17.046875 C 141.59375 16.648438 141.679688 16.457031 141.796875 16.292969 C 142.09375 15.925781 142.398438 15.910156 142.605469 15.910156 C 142.855469 15.910156 143.058594 16.011719 143.441406 16.21875 C 144.132812 16.605469 144.46875 16.796875 144.484375 16.8125 C 144.835938 17.109375 144.746094 17.195312 145.671875 18.46875 C 146.128906 19.105469 146.289062 19.28125 146.582031 19.816406 C 146.773438 20.183594 146.890625 20.378906 147.023438 20.6875 C 147.34375 21.441406 147.449219 21.945312 147.710938 21.988281 C 147.769531 21.988281 147.886719 21.988281 147.992188 22.125 C 148.0625 22.210938 148.078125 22.285156 148.167969 22.433594 C 148.253906 22.597656 148.3125 22.625 148.417969 22.746094 C 148.636719 22.996094 148.59375 23.113281 148.769531 23.320312 C 149.03125 23.648438 149.222656 23.453125 149.324219 23.765625 C 149.371094 23.882812 149.324219 23.882812 149.355469 24.355469 C 149.398438 24.949219 149.457031 24.859375 149.503906 25.46875 C 149.503906 25.554688 149.515625 25.628906 149.546875 25.703125 L 149.648438 25.867188 C 149.648438 25.867188 149.796875 25.867188 149.824219 25.867188 C 150.367188 25.644531 151.835938 25.15625 152.203125 25.140625 C 152.640625 25.125 152.847656 25.171875 153.375 25.066406 C 154.066406 24.933594 154.257812 24.710938 154.917969 24.652344 C 155.402344 24.609375 155.371094 24.710938 155.855469 24.652344 C 156.382812 24.578125 156.488281 24.445312 157.042969 24.355469 C 157.5 24.296875 157.734375 24.253906 157.984375 24.355469 C 158.011719 24.355469 158.027344 24.371094 158.058594 24.386719 L 158.144531 24.253906 L 158.144531 24.417969 C 158.4375 24.5625 158.601562 24.773438 158.9375 24.699219 C 159.097656 24.667969 159.289062 24.625 159.421875 24.355469 C 159.65625 23.941406 159.523438 23.425781 159.6875 22.757812 C 159.832031 22.136719 160.125 21.84375 160.359375 21.546875 C 161.09375 20.613281 160.976562 20.140625 162.035156 18.261719 C 162.707031 17.0625 162.664062 17.433594 163.898438 15.4375 C 164.441406 14.5625 164.585938 14.265625 164.984375 13.808594 C 165.394531 13.335938 165.953125 12.699219 166.65625 12.742188 C 166.859375 12.742188 167.332031 12.773438 167.652344 13.394531 C 167.785156 13.644531 167.84375 13.941406 167.960938 14.519531 C 168.050781 14.960938 168.167969 15.539062 168.253906 16.457031 C 168.417969 18.113281 168.34375 19.503906 168.328125 19.84375 C 168.242188 21.5 168.167969 22.894531 167.667969 24.222656 C 167.476562 24.742188 167.273438 25.097656 167.039062 25.957031 C 166.847656 26.679688 166.742188 27.332031 166.671875 27.773438 C 166.480469 29.003906 166.597656 29.003906 166.449219 29.742188 C 166.1875 31.191406 165.597656 32.214844 165.570312 32.257812 C 165.171875 32.953125 164.851562 33.101562 164.808594 33.605469 C 164.777344 34.035156 165.160156 34.34375 165.085938 34.582031 C 165.085938 34.609375 165.054688 34.625 165.042969 34.65625 C 164.851562 34.875 164.570312 34.625 164.558594 34.65625 C 164.558594 34.683594 165.011719 34.996094 164.984375 35.128906 C 164.96875 35.246094 164.617188 35.171875 164.601562 35.289062 C 164.585938 35.425781 164.984375 35.632812 164.953125 35.75 C 164.9375 35.839844 164.675781 35.765625 164.644531 35.914062 C 164.617188 36.046875 164.835938 36.222656 164.808594 36.402344 C 164.777344 36.609375 164.441406 36.546875 164.394531 36.785156 C 164.335938 37.050781 164.734375 37.304688 164.71875 37.761719 C 164.71875 38 164.585938 38.132812 164.292969 38.574219 C 163.867188 39.210938 163.648438 39.523438 163.617188 39.640625 C 163.339844 40.558594 163.941406 41.683594 163.664062 42.257812 C 163.515625 42.554688 163.238281 42.527344 163.222656 42.703125 C 163.222656 42.867188 163.457031 42.910156 163.457031 43.117188 C 163.457031 43.234375 163.382812 43.339844 163.308594 43.429688 L 170.691406 43.429688 L 170.691406 5.035156 L 158.496094 5.035156 L 153.347656 13.039062 L 148.210938 5.035156 L 136.003906 5.035156 L 136.003906 43.441406 L 143.046875 43.441406 C 143.03125 43.175781 142.898438 43.015625 142.941406 42.925781 Z M 142.972656 42.925781 '
              fillOpacity='1'
              fillRule='nonzero'
            />
            <g clipPath='url(#f4f9bfc088)'>
              <path
                fill='#ffffff'
                d='M 198.335938 38.308594 C 201.152344 34.460938 202.578125 29.757812 202.578125 24.222656 C 202.578125 18.691406 201.167969 14.03125 198.335938 10.199219 C 195.519531 6.367188 192.070312 4.441406 187.992188 4.441406 C 183.910156 4.441406 180.492188 6.367188 177.675781 10.199219 C 174.859375 14.03125 173.433594 18.707031 173.433594 24.222656 C 173.433594 29.742188 174.84375 34.460938 177.675781 38.308594 C 180.492188 42.15625 183.941406 44.078125 187.992188 44.078125 C 192.042969 44.078125 195.503906 42.15625 198.335938 38.308594 Z M 190.03125 26.074219 C 189.503906 26.84375 188.828125 27.210938 188.007812 27.210938 C 187.183594 27.210938 186.523438 26.828125 185.996094 26.074219 C 185.46875 25.304688 185.1875 24.34375 185.1875 23.1875 C 185.1875 22.035156 185.453125 21.074219 185.996094 20.304688 C 186.523438 19.535156 187.199219 19.164062 188.007812 19.164062 C 188.8125 19.164062 189.503906 19.550781 190.03125 20.304688 C 190.558594 21.074219 190.839844 22.035156 190.839844 23.1875 C 190.839844 24.34375 190.574219 25.304688 190.03125 26.074219 Z M 190.03125 26.074219 '
                fillOpacity='1'
                fillRule='nonzero'
              />
            </g>
            <path
              fill='#ffffff'
              d='M 234.242188 16.546875 C 234.242188 13.261719 233.320312 10.523438 231.484375 8.335938 C 229.648438 6.144531 227.125 5.050781 223.914062 5.050781 L 205.351562 5.050781 L 205.351562 43.457031 L 217.910156 43.457031 L 217.910156 29.238281 C 219.6875 29.238281 220.992188 30.394531 221.828125 32.714844 C 222.664062 35.039062 223.207031 38.621094 223.441406 43.457031 L 236.488281 43.457031 C 235.886719 35.925781 234.066406 29.785156 231 25.050781 C 233.15625 23.011719 234.242188 20.171875 234.242188 16.546875 Z M 218.261719 20.347656 L 217.910156 20.347656 L 217.910156 12.949219 L 218.675781 12.949219 C 219.746094 12.949219 220.507812 13.335938 220.964844 14.089844 C 221.417969 14.859375 221.652344 15.730469 221.652344 16.738281 C 221.652344 19.132812 220.523438 20.332031 218.261719 20.332031 Z M 218.261719 20.347656 '
              fillOpacity='1'
              fillRule='nonzero'
            />
            <path
              fill='#ffffff'
              d='M 261.390625 14.679688 L 261.390625 5.035156 L 237.808594 5.035156 L 237.808594 43.457031 L 261.390625 43.457031 L 261.390625 33.8125 L 250.371094 33.8125 L 250.371094 29.078125 L 258.042969 29.078125 L 258.042969 19.445312 L 250.371094 19.445312 L 250.371094 14.679688 Z M 261.390625 14.679688 '
              fillOpacity='1'
              fillRule='nonzero'
            />
            <path
              fill='#ffffff'
              d='M 297.824219 19.84375 C 299.6875 19.84375 301.390625 20.199219 302.929688 20.925781 L 308.199219 7.359375 C 306.789062 6.113281 305.015625 5.125 302.902344 4.398438 C 300.789062 3.671875 298.734375 3.304688 296.753906 3.304688 C 292.160156 3.304688 288.375 5.199219 285.394531 8.984375 C 282.417969 12.773438 280.933594 17.566406 280.933594 23.394531 C 280.933594 28.898438 282.359375 33.53125 285.21875 37.304688 C 288.082031 41.074219 291.925781 42.953125 296.753906 42.953125 C 298.675781 42.953125 300.699219 42.601562 302.800781 41.875 C 304.910156 41.148438 306.703125 40.1875 308.199219 38.976562 L 302.929688 24.429688 C 301.59375 25.332031 299.996094 25.792969 298.132812 25.792969 C 296.753906 25.792969 295.695312 25.527344 294.949219 24.992188 C 294.199219 24.460938 293.832031 23.734375 293.832031 22.789062 C 293.832031 20.820312 295.167969 19.84375 297.839844 19.84375 Z M 297.824219 19.84375 '
              fillOpacity='1'
              fillRule='nonzero'
            />
            <path
              fill='#ffffff'
              d='M 323.269531 3.304688 C 319.203125 3.304688 315.769531 5.226562 312.953125 9.058594 C 310.136719 12.890625 308.710938 17.566406 308.710938 23.085938 C 308.710938 28.601562 310.121094 33.324219 312.953125 37.167969 C 315.769531 41.015625 319.21875 42.941406 323.269531 42.941406 C 327.320312 42.941406 330.78125 41.015625 333.613281 37.167969 C 336.429688 33.324219 337.855469 28.617188 337.855469 23.085938 C 337.855469 17.550781 336.445312 12.890625 333.613281 9.058594 C 330.796875 5.226562 327.347656 3.304688 323.269531 3.304688 Z M 325.292969 24.933594 C 324.765625 25.703125 324.089844 26.074219 323.269531 26.074219 C 322.445312 26.074219 321.785156 25.6875 321.257812 24.933594 C 320.730469 24.164062 320.453125 23.203125 320.453125 22.050781 C 320.453125 20.894531 320.714844 19.933594 321.257812 19.164062 C 321.785156 18.394531 322.460938 18.023438 323.269531 18.023438 C 324.074219 18.023438 324.765625 18.410156 325.292969 19.164062 C 325.820312 19.933594 326.101562 20.894531 326.101562 22.050781 C 326.101562 23.203125 325.835938 24.164062 325.292969 24.933594 Z M 325.292969 24.933594 '
              fillOpacity='1'
              fillRule='nonzero'
            />
            <path
              fill='#ffffff'
              d='M 369.535156 15.40625 C 369.535156 12.121094 368.609375 9.382812 366.777344 7.195312 C 364.941406 5.003906 362.417969 3.910156 359.203125 3.910156 L 340.640625 3.910156 L 340.640625 42.320312 L 353.203125 42.320312 L 353.203125 28.101562 C 354.980469 28.101562 356.285156 29.253906 357.121094 31.578125 C 357.957031 33.898438 358.5 37.480469 358.734375 42.320312 L 371.78125 42.320312 C 371.179688 34.789062 369.359375 28.648438 366.292969 23.914062 C 368.449219 21.871094 369.535156 19.03125 369.535156 15.40625 Z M 353.554688 19.207031 L 353.203125 19.207031 L 353.203125 11.8125 L 353.964844 11.8125 C 355.039062 11.8125 355.800781 12.195312 356.253906 12.949219 C 356.710938 13.71875 356.945312 14.59375 356.945312 15.597656 C 356.945312 17.996094 355.816406 19.195312 353.554688 19.195312 Z M 353.554688 19.207031 '
              fillOpacity='1'
              fillRule='nonzero'
            />
            <path
              fill='#ffffff'
              d='M 388.714844 17.523438 C 390.855469 17.523438 393.203125 18.351562 395.726562 19.992188 L 401.800781 8.4375 C 399.792969 6.808594 397.5625 5.550781 395.125 4.648438 C 392.675781 3.746094 390.3125 3.304688 388.039062 3.304688 C 384.78125 3.304688 381.976562 4.148438 379.601562 5.820312 C 377.222656 7.492188 375.40625 9.859375 374.144531 12.921875 C 372.878906 15.96875 372.25 19.328125 372.25 22.996094 C 372.25 28.324219 373.601562 32.96875 376.3125 36.960938 C 379.015625 40.957031 383.84375 42.953125 390.796875 42.953125 C 392.601562 42.953125 396.035156 42.761719 401.128906 42.378906 L 401.128906 21.664062 L 388.539062 21.664062 L 388.539062 27.6875 C 385.515625 27.6875 383.988281 26.132812 383.988281 23.011719 C 383.988281 21.367188 384.414062 20.050781 385.28125 19.046875 C 386.144531 18.054688 387.289062 17.550781 388.714844 17.550781 Z M 388.714844 17.523438 '
              fillOpacity='1'
              fillRule='nonzero'
            />
            <path fill='#ffffff' d='M 404.003906 3.910156 L 416.566406 3.910156 L 416.566406 42.320312 L 404.003906 42.320312 Z M 404.003906 3.910156 ' fillOpacity='1' fillRule='nonzero' />
            <g clipPath='url(#349aea2ab3)'>
              <path
                fill='#ffffff'
                d='M 441.289062 21.515625 C 440.117188 20.570312 438.441406 19.519531 436.269531 18.351562 C 434.304688 17.316406 433.074219 16.546875 432.617188 16.058594 C 432.164062 15.570312 431.914062 15.09375 431.914062 14.621094 C 431.914062 13.113281 432.648438 12.359375 434.128906 12.359375 C 436.785156 12.359375 439.132812 14.222656 441.1875 17.964844 L 444.3125 5.863281 C 440.820312 4.148438 437.035156 3.289062 432.941406 3.289062 C 428.464844 3.289062 425.074219 4.367188 422.769531 6.527344 C 420.480469 8.6875 419.324219 11.914062 419.324219 16.175781 C 419.324219 18.378906 419.691406 20.199219 420.421875 21.636719 C 421.15625 23.085938 422.023438 24.195312 423.007812 24.964844 C 424.003906 25.746094 425.25 26.546875 426.761719 27.359375 C 428.4375 28.277344 429.476562 29.003906 429.859375 29.519531 C 430.253906 30.039062 430.445312 30.585938 430.445312 31.164062 C 430.445312 31.769531 430.242188 32.273438 429.84375 32.703125 C 429.433594 33.117188 428.933594 33.339844 428.347656 33.339844 C 427.128906 33.339844 425.867188 32.789062 424.546875 31.679688 C 423.226562 30.570312 422.109375 29.078125 421.230469 27.199219 L 418.164062 40.039062 C 421.804688 41.964844 426.132812 42.941406 431.164062 42.941406 C 435.640625 42.941406 439.042969 41.859375 441.347656 39.699219 C 443.652344 37.539062 444.8125 34.402344 444.8125 30.304688 C 444.8125 28.335938 444.519531 26.621094 443.929688 25.140625 C 443.34375 23.660156 442.464844 22.449219 441.289062 21.5 Z M 441.289062 21.515625 '
                fillOpacity='1'
                fillRule='nonzero'
              />
            </g>
          </svg>
        </LogoContainer>
      </StyledLink>
    </>
  );
};

export default PageHeaderLogo;
