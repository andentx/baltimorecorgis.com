import * as React from 'react';

import { Link as GatsbyLink } from 'gatsby';

import styled from 'styled-components';

const Footer = styled.footer`
  background-color: var(--page-footer-background-color);
  /* background-color: red; */
  color: var(--text-color);

  width: 100%;

  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TopContainer = styled.div`
  /* background-color: orange; */
  display: flex;
  justify-content: space-between;

  flex-direction: row;
  align-items: flex-start;

  width: 100%;
  max-width: 1200px;

  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const FooterSectionTitle = styled.h4`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ContactContainer = styled.div`
  /* background-color: green; */
  width: 20rem;

  display: flex;
  flex-direction: column;

  align-items: center;

  padding: 1rem;

  @media screen and (max-width: 700px) {
    margin-bottom: 3rem;
  }
`;

const EmailLink = styled.a`
  /* background-color: pink; */
  color: white;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 10px;

  margin-bottom: 0.5rem;
`;

const LinksContainer = styled.div`
  /* background-color: blue; */
  width: 20rem;

  display: flex;
  flex-direction: column;

  align-items: center;

  padding: 1rem;

  @media screen and (max-width: 700px) {
    margin-bottom: 3rem;
  }
`;

const SocialLinks = styled.div`
  /* background-color: #222; */
  display: flex;
  justify-content: space-evenly;
  width: 85%;
`;
const Link1 = styled.a`
  /* background-color: #444; */

  height: 5rem;
  width: 5rem;

  border-radius: 10px;

  padding: 0.7rem;

  * {
    width: 100%;
    height: 100%;
  }
`;
const Link2 = styled.a`
  /* background-color: #555; */

  height: 5rem;
  width: 5rem;

  border-radius: 10px;

  padding: 0.7rem;

  * {
    width: 100%;
    height: 100%;
  }
`;

const FooterLink = styled(GatsbyLink)`
  /* background-color: red; */
  font-size: 1.2rem;

  color: white;

  padding: 0.5rem 1rem;
  border-radius: 10px;

  margin-bottom: 0.5rem;

  :hover {
    color: var(--text-color-hover);
  }
  :active {
    color: var(--text-color-hover);
  }
  .selected {
    color: var(--text-color-hover);
  }
`;

const BottomContainer = styled.div`
  /* background-color: yellow; */
  /* color: black; */

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  max-width: 1200px;
  height: 3rem;

  font-size: 1.2rem;
`;

const PageFooter = () => {
  return (
    <Footer>
      <TopContainer>
        <ContactContainer>
          <FooterSectionTitle>contact</FooterSectionTitle>
          <EmailLink href='mailto:baltimorecorgis@gmail.com'>baltimorecorgis@gmail.com</EmailLink>
          <SocialLinks>
            <Link1 href=''>
              <svg xmlns='http://www.w3.org/2000/svg' width='1800' zoomAndPan='magnify' viewBox='0 0 1350 1349.999938' height='1800' preserveAspectRatio='xMidYMid meet' version='1.0'>
                <path
                  fill='#fefefe'
                  d='M 1011.429688 0 L 337.5 0 C 152.144531 0 0 152.144531 0 338.570312 L 0 1012.5 C 0 1197.855469 152.144531 1350 337.5 1350 L 1011.429688 1350 C 1197.855469 1350 1350 1197.855469 1350 1011.429688 L 1350 338.570312 C 1350 152.144531 1197.855469 0 1011.429688 0 Z M 856.070312 675 L 728.570312 675 L 728.570312 1092.855469 L 567.855469 1092.855469 L 567.855469 675 L 482.144531 675 L 482.144531 503.570312 L 557.144531 503.570312 L 557.144531 430.714844 C 557.144531 362.144531 591.429688 253.929688 736.070312 253.929688 L 867.855469 253.929688 L 867.855469 396.429688 L 774.644531 396.429688 C 759.644531 396.429688 739.285156 406.070312 739.285156 439.285156 L 739.285156 503.570312 L 871.070312 503.570312 Z M 856.070312 675 '
                  fillOpacity='1'
                  fillRule='nonzero'
                />
              </svg>
            </Link1>
            <Link1 href=''>
              <svg xmlns='http://www.w3.org/2000/svg' width='1800' zoomAndPan='magnify' viewBox='0 0 1350 1349.999938' height='1800' preserveAspectRatio='xMidYMid meet' version='1.0'>
                <path
                  fill='#fefefe'
                  d='M 1011.429688 0 L 337.5 0 C 152.144531 0 0 152.144531 0 338.570312 L 0 1012.5 C 0 1197.855469 152.144531 1350 337.5 1350 L 1011.429688 1350 C 1197.855469 1350 1350 1197.855469 1350 1011.429688 L 1350 338.570312 C 1350 152.144531 1197.855469 0 1011.429688 0 Z M 856.070312 675 L 728.570312 675 L 728.570312 1092.855469 L 567.855469 1092.855469 L 567.855469 675 L 482.144531 675 L 482.144531 503.570312 L 557.144531 503.570312 L 557.144531 430.714844 C 557.144531 362.144531 591.429688 253.929688 736.070312 253.929688 L 867.855469 253.929688 L 867.855469 396.429688 L 774.644531 396.429688 C 759.644531 396.429688 739.285156 406.070312 739.285156 439.285156 L 739.285156 503.570312 L 871.070312 503.570312 Z M 856.070312 675 '
                  fillOpacity='1'
                  fillRule='nonzero'
                />
              </svg>
            </Link1>
            <Link2 href=''>
              <svg xmlns='http://www.w3.org/2000/svg' width='1800' zoomAndPan='magnify' viewBox='0 0 1350 1349.999938' height='1800' preserveAspectRatio='xMidYMid meet' version='1.0'>
                <path
                  fill='#fefefe'
                  d='M 674.464844 822.738281 C 755.828125 822.738281 822.203125 756.363281 822.203125 675 C 822.203125 642.882812 811.5 612.90625 794.371094 588.28125 C 767.605469 550.8125 723.710938 526.191406 674.464844 526.191406 C 625.21875 526.191406 581.324219 550.8125 554.558594 588.28125 C 537.429688 612.90625 526.726562 642.882812 526.726562 675 C 526.726562 756.363281 593.101562 822.738281 674.464844 822.738281 Z M 674.464844 822.738281 '
                  fillOpacity='1'
                  fillRule='nonzero'
                />
                <path
                  fill='#fefefe'
                  d='M 904.640625 675 C 904.640625 802.398438 801.863281 905.175781 674.464844 905.175781 C 547.066406 905.175781 444.289062 802.398438 444.289062 675 C 444.289062 643.953125 450.714844 610.765625 461.417969 589.355469 L 331.878906 589.355469 L 331.878906 933.007812 C 331.878906 977.972656 371.492188 1017.585938 416.457031 1017.585938 L 932.472656 1017.585938 C 977.4375 1017.585938 1017.050781 977.972656 1017.050781 933.007812 L 1017.050781 589.355469 L 887.511719 589.355469 C 898.214844 610.765625 904.640625 645.023438 904.640625 675 Z M 904.640625 675 '
                  fillOpacity='1'
                  fillRule='nonzero'
                />
                <path
                  fill='#fefefe'
                  d='M 995.636719 494.070312 L 995.636719 350.613281 L 978.507812 351.683594 L 854.320312 351.683594 L 854.320312 494.070312 Z M 995.636719 494.070312 '
                  fillOpacity='1'
                  fillRule='nonzero'
                />
                <path
                  fill='#fefefe'
                  d='M 1010.625 0.535156 L 338.304688 0.535156 C 152.023438 0.535156 0 152.558594 0 338.839844 L 0 1012.230469 C 0 1197.441406 152.023438 1349.464844 338.304688 1349.464844 L 1011.695312 1349.464844 C 1197.976562 1349.464844 1350 1197.441406 1350 1011.160156 L 1350 338.839844 C 1348.929688 152.558594 1196.90625 0.535156 1010.625 0.535156 Z M 1091.992188 588.28125 L 1091.992188 933.007812 C 1091.992188 1022.9375 1022.402344 1092.527344 932.472656 1092.527344 L 416.457031 1092.527344 C 326.527344 1092.527344 256.9375 1022.9375 256.9375 933.007812 L 256.9375 416.992188 C 256.9375 327.0625 326.527344 257.472656 416.457031 257.472656 L 932.472656 257.472656 C 1022.402344 257.472656 1091.992188 327.0625 1091.992188 416.992188 Z M 1091.992188 588.28125 '
                  fillOpacity='1'
                  fillRule='nonzero'
                />
              </svg>
            </Link2>
          </SocialLinks>
        </ContactContainer>
        <LinksContainer>
          <FooterSectionTitle>links</FooterSectionTitle>
          <FooterLink to='/events'>Upcoming Events</FooterLink>
          <FooterLink to='/rules'>Group Rules</FooterLink>
          <FooterLink to='/tickets'>Tickets</FooterLink>
        </LinksContainer>
      </TopContainer>
      <BottomContainer>
        <p>© Baltimore Corgis 2023</p>
      </BottomContainer>
    </Footer>
  );
};

export default PageFooter;
