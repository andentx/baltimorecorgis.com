import * as React from "react";

import styled from "styled-components";

import { graphql } from "gatsby";

import { isAfter, isBefore } from "date-fns";
import { zonedTimeToUtc } from "date-fns-tz";

import { Link as GatsbyLink } from "gatsby";

import Layout from "../components/Layout";
import GroupPhoto from "../components/GroupPhoto";
import AboutUs from "../components/AboutUs";
import OurMembers from "../components/OurMembers";
import HorizontalDivider from "../components/HorizontalDivider";
import CorgiOfTheMonth from "../components/CorgiOfTheMonth";
import BestSellers from "../components/BestSellers";
import EventsSection from "../components/EventsSection";

export const Head = () => (
  <>
    <title>Baltimore Corgis</title>
    <meta
      name="description"
      content="Established in 2014, we're a community of Corgi owners based in the Baltimore area and surrounding counties."
    />
    <meta name="author" content="Andrew" />

    <meta property="og:title" content="Baltimore Corgis" />
    <meta
      property="og:description"
      content="Established in 2014, we're a community of Corgi owners based in the Baltimore area and surrounding counties."
    />
    <meta
      property="og:image"
      content="https://baltimorecorgis.com/images/og-image.png"
    />
    <meta
      property="og:image:alt"
      content="A screenshot of the Baltimore Corgis website"
    />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://baltimorecorgis.com/" />

    <meta name="twitter:card" content="summary_large_image" />

    <meta name="theme-color" content="hsl(264, 36%, 31%)" />
  </>
);

const Button = styled(GatsbyLink)`
  background: none;

  display: flex;

  border-radius: 18px;

  padding: 0.5rem;

  position: relative;

  outline: none;

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
    border-radius: 18px;
  }

  margin-bottom: 5rem;
`;

const ButtonInnerContent = styled.p`
  background-color: var(--baltimore-purple);
  color: var(--off-white);

  border-radius: 10px;

  font-size: 1.2rem;

  padding: 1rem 2rem;

  transition: background-color 200ms;

  :hover {
    background-color: hsl(264, 36%, 36%);
  }
`;

const IndexPage = ({ data }) => {
  const timezone = "America/New_York";
  const now = zonedTimeToUtc(new Date(), timezone);

  const allSanityEvents = data.allSanityEvent.nodes;
  const allSanityMembers = data.allSanityMember.nodes;

  const upcomingEvents = allSanityEvents.filter((event) =>
    isAfter(zonedTimeToUtc(new Date(event.endTime), timezone), now)
  );

  const nextThreeEvents = upcomingEvents.slice(0, 3);

  const members = allSanityMembers;

  return (
    <>
      <Layout>
        <GroupPhoto />
        <AboutUs />
        <HorizontalDivider />
        <OurMembers members={members} />
        <HorizontalDivider />
        <CorgiOfTheMonth />
        <HorizontalDivider />
        <EventsSection events={nextThreeEvents} title="Upcoming Events" />
        <Button to="/events">
          <ButtonInnerContent>VIEW ALL EVENTS</ButtonInnerContent>
        </Button>
        <HorizontalDivider />
        <BestSellers />
      </Layout>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allSanityEvent(sort: { startTime: ASC }) {
      nodes {
        _id
        title
        startTime
        endTime
        dateNumbers
        monthAbbreviation
        fullDate
        eventTime
        venue
        city
        state
        admissionPrice
        buttonText
        eventImage {
          asset {
            url
          }
        }
        eventUrl
        eventImageAltText
      }
    }
    allSanityMember(sort: { position: ASC }) {
      nodes {
        _id
        position
        name
        subtitle
        imgAlt
        link
        photo {
          asset {
            url
          }
        }
      }
    }
  }
`;
