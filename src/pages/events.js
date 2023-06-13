import * as React from 'react';

import { graphql } from 'gatsby';

import { isAfter, isBefore } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';

import Layout from '../components/Layout';
import VerticalSpacer from '../components/VerticalSpacer';
import EventsSection from '../components/EventsSection';

export const Head = () => (
  <>
    <title>Baltimore Corgis | Events</title>
    <meta name='description' content="Established in 2014, we're a community of Corgi owners based in the Baltimore area and surrounding counties." />
    <meta name='author' content='Andrew' />

    <meta property='og:title' content='Baltimore Corgis' />
    <meta property='og:description' content="Established in 2014, we're a community of Corgi owners based in the Baltimore area and surrounding counties." />
    <meta property='og:image' content='https://baltimorecorgis.com/images/og-image.png' />
    <meta property='og:image:alt' content='A screenshot of the Baltimore Corgis website' />
    <meta property='og:locale' content='en_US' />
    <meta property='og:type' content='website' />
    <meta property='og:url' content='https://baltimorecorgis.com/' />

    <meta name='twitter:card' content='summary_large_image' />

    <meta name='theme-color' content='hsl(264, 36%, 31%)' />
  </>
);

const EventsPage = ({ data }) => {
  const timezone = 'America/New_York';
  const now = zonedTimeToUtc(new Date(), timezone);

  const allSanityEvents = data.allSanityEvent.nodes;

  allSanityEvents.sort((a, b) => new Date(a.startTime) - new Date(b.startTime));

  const upcomingEvents = allSanityEvents.filter((event) => isAfter(zonedTimeToUtc(new Date(event.endTime), timezone), now));

  const pastEvents = allSanityEvents.filter((event) => isBefore(zonedTimeToUtc(new Date(event.endTime), timezone), now)).reverse();

  return (
    <>
      <Layout>
        <VerticalSpacer />
        <EventsSection events={upcomingEvents} title='Upcoming Events' />
        <EventsSection events={pastEvents} title='Past Events' />
      </Layout>
    </>
  );
};

export default EventsPage;

export const query = graphql`
  query {
    allSanityEvent {
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
  }
`;
