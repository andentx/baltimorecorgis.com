import * as React from 'react';

import { allEvents } from '../data/events';

import styled from 'styled-components';

import SectionTitle from './SectionTitle';

const EventList = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EventContainer = styled.div`
  background-color: var(--off-white);
  color: var(--off-black);

  width: min(90%, 1000px);

  border-radius: 20px;

  display: flex;

  padding: 1rem 0.5rem 1rem 1rem;

  @media screen and (max-width: 800px) {
    padding: 1rem 1rem 1rem 1rem;

    display: grid;
    grid-template-columns: 7rem 1fr;
    grid-template-rows: 1fr 7rem;
    grid-auto-flow: row;
    grid-template-areas:
      'date info info'
      'button button button';
  }

  margin-bottom: 2rem;
`;

const PhotoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  flex-shrink: 0;

  div:first-of-type {
    border: 3px solid var(--baltimore-purple);
    border-radius: 10px;
  }

  * {
    height: 180px;
    width: 180px;
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const DateContainer = styled.div`
  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 800px) {
    grid-area: date;
    padding: 0rem;
  }
`;

const Day = styled.div`
  color: var(--baltimore-purple);

  font-family: 'Chunk Five';
  font-size: 4rem;

  text-align: center;

  margin-bottom: 0.5rem;
`;

const Month = styled.div`
  text-align: center;

  font-size: 1rem;
`;

const InfoContainer = styled.div`
  grid-area: info;

  flex-grow: 1;

  padding-right: 1rem;

  p {
    font-size: 1rem;
    line-height: 1.3;
    margin-bottom: 0.5rem;
    font-family: 'Montserrat Light';
  }

  p:last-of-type {
    margin-bottom: 0;
  }

  @media screen and (max-width: 800px) {
    padding-right: 0rem;
  }
`;

const Title = styled.h3`
  color: var(--baltimore-purple);

  font-size: 1.5rem;
  line-height: 1.3;

  margin-bottom: 0.5rem;
`;
const DateString = styled.p``;
const Time = styled.p``;
const Venue = styled.p``;
const Location = styled.p``;
const Admission = styled.p``;

const ButtonContainer = styled.div`
  grid-area: button;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;
`;

const ButtonUpcoming = styled.a`
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
    content: '';
    position: absolute;
    top: -2px;
    right: -2px;
    bottom: -2px;
    left: -2px;
    border: 2px solid var(--focus-color);
    border-radius: 18px;
  }

  p {
    background-color: var(--baltimore-purple);
    color: var(--off-white);

    border-radius: 10px;

    width: 12rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.2rem;

    padding: 1rem 2rem;

    transition: background-color 200ms;

    :hover {
      background-color: hsl(264, 36%, 36%);
    }
  }
`;

const ButtonPast = styled.div`
  background: none;

  display: flex;

  border-radius: 18px;

  padding: 0.5rem;

  p {
    background-color: grey;
    color: var(--off-white);

    border-radius: 10px;

    width: 12rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.2rem;

    padding: 1rem 2rem;
  }
`;

const EventsSection = ({ events, title }) => {
  return (
    <>
      <SectionTitle>{title}</SectionTitle>

      <EventList>
        {events.map((event) => {
          return (
            <EventContainer key={event.id}>
              <PhotoContainer>{event.photo}</PhotoContainer>
              <DateContainer>
                <Day>{event.day}</Day>
                <Month>{event.month}</Month>
              </DateContainer>
              <InfoContainer>
                <Title>{event.title}</Title>
                <DateString>{event.dateString}</DateString>
                <Time>
                  {event.startTime} - {event.endTime}
                </Time>
                <Venue>{event.venue}</Venue>
                <Location>
                  {event.city}, {event.state}
                </Location>
                <Admission>Admission: {event.admissionPrice}</Admission>
              </InfoContainer>
              <ButtonContainer>
                {title === 'Past Events' ? (
                  <ButtonPast>
                    <p>PAST</p>
                  </ButtonPast>
                ) : (
                  <ButtonUpcoming href={event.url}>
                    <p>{event.buttonText}</p>
                  </ButtonUpcoming>
                )}
              </ButtonContainer>
            </EventContainer>
          );
        })}
      </EventList>
    </>
  );
};

export default EventsSection;
