import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import styled, { createGlobalStyle } from "styled-components";
import { openIcon, closeIcon } from "./NavIcon.module.css";

const Global = createGlobalStyle`
 @media screen and (max-width: 700px) {
     html,
     body {
         max-height: ${({ isOpen }) => (isOpen ? "100vh" : "none")};
         overflow-y: ${({ isOpen }) => (isOpen ? "hidden" : "auto")};
     }
 }
 `;

const DesktopNavigation = styled.nav`
  height: 100%;

  display: flex;
  align-items: center;

  ul {
    height: 100%;

    display: flex;
    align-items: center;

    li {
      margin-left: 2px;

      display: flex;
      align-items: center;
      justify-content: center;

      line-height: 0.6;

      a {
        padding: 0.5rem;

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
          border-radius: 7.5px;
        }

        color: var(--text-color);
        transition: color 200ms;
      }
      a:hover {
        color: var(--text-color-hover);
      }
      a:active {
        color: var(--text-color-hover);
      }
      .selected {
        color: var(--text-color-hover);
      }
    }
  }

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const MobileNavigationMenuIcon = styled.button`
  height: 100%;
  width: 3.5rem;
  border: none;

  background: transparent;
  cursor: pointer;

  padding: 0.5rem;

  z-index: 1000;

  padding: 0.5rem;

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
    border-radius: 7.5px;
  }

  @media screen and (min-width: 700px) {
    display: none;
  }
`;

const MobileNavigation = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  height: 100dvh;
  width: 100vw;

  display: flex;

  z-index: 100;

  transition: transform 300ms;

  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};

  @media screen and (min-width: 700px) {
    display: none;
  }
`;

const ClosePanel = styled.div`
  height: 100%;
  width: 30%;

  z-index: 100;

  display: flex;
`;

const LinkPanel = styled.div`
  background-color: hsla(264, 36%, 22%, 0.8);

  backdrop-filter: blur(1rem);

  border-left: 2px solid var(--off-white);

  height: 100%;
  width: 70%;

  z-index: 100;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul {
  }

  li {
    margin-bottom: 2rem;
  }

  a {
    font-size: 2rem;
    color: var(--text-color);

    padding: 0.5rem;

    position: relative;

    transition: color 200ms;

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
      border-radius: 7.5px;
    }
  }
  a:hover {
    color: var(--text-color-hover);
  }
  a:active {
    color: var(--text-color-hover);
  }
  .selected {
    color: var(--text-color-hover);
  }
`;

const PageNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const bodyElementsRef = useRef(null);
  const bodyElementsSelectorRef = useRef("main *, #headerLogo, footer *");

  useEffect(() => {
    const bodyElements = document.querySelectorAll(
      bodyElementsSelectorRef.current
    );
    bodyElementsRef.current = bodyElements;
  }, []);

  useEffect(() => {
    if (bodyElementsRef.current) {
      const bodyElements = bodyElementsRef.current;
      bodyElements.forEach((element) => {
        if (isOpen) {
          element.setAttribute("tabindex", "-1");
        } else {
          element.removeAttribute("tabindex");
        }
      });
    }
  }, [isOpen]);

  const navLinks = [
    {
      id: 1,
      text: "home",
      url: "/",
    },
    {
      id: 2,
      text: "events",
      url: "/events",
    },
    {
      id: 3,
      text: "tickets",
      url: "/tickets",
    },
    {
      id: 4,
      text: "shop",
      url: "https://baltimore-corgis.creator-spring.com/",
    },
    {
      id: 5,
      text: "contact",
      url: "/#contact",
    },
  ];

  return (
    <>
      <Global isOpen={isOpen} />

      <DesktopNavigation isOpen={isOpen}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              {link.url.startsWith("/") ? (
                <Link to={link.url} activeClassName="selected">
                  {link.text}
                </Link>
              ) : (
                <a href={link.url}>{link.text}</a>
              )}
            </li>
          ))}
        </ul>
      </DesktopNavigation>

      <MobileNavigationMenuIcon
        onClick={toggleMenu}
        aria-label={`${
          isOpen ? "close navigation menu" : "open navigation menu"
        }`}
      >
        <div className={`${isOpen ? closeIcon : openIcon}`}></div>
      </MobileNavigationMenuIcon>

      <MobileNavigation isOpen={isOpen}>
        <ClosePanel onClick={toggleMenu} />
        <LinkPanel>
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                {link.url.startsWith("/") ? (
                  <Link
                    to={link.url}
                    onClick={toggleMenu}
                    activeClassName="selected"
                    tabIndex={isOpen ? 0 : -1}
                  >
                    {link.text}
                  </Link>
                ) : (
                  <a
                    href={link.url}
                    onClick={toggleMenu}
                    tabIndex={isOpen ? 0 : -1}
                  >
                    {link.text}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </LinkPanel>
      </MobileNavigation>
    </>
  );
};

export default PageNavigation;
