import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export const allEvents = [
  {
    id: 1,
    title: 'Maryland Corgi Cup',
    date: '2022-10-22',
    month: 'OCT',
    day: '16',
    year: '2022',
    dateString: 'October 16th, 2022',
    startTime: '9:30 AM',
    endTime: '4:00 PM',
    venue: 'Maryland 5* at Fair Hill',
    city: 'Elkton',
    state: 'MD',
    admissionPrice: '$10',
    buttonText: 'BUY TICKETS',
    url: 'https://www.majorleagueeventing.com/event-details/maryland-corgi-cup-competitor-registration-1',
    photo: <StaticImage src='../images/event-photos/maryland-corgi-cup.jpg' height={180} width={180} alt={`A photo of corgis racing.`} />,
  },
  {
    id: 2,
    title: "Baltimore Corgi Races",
    date: '2023-01-29',
    month: 'JAN',
    day: '27',
    year: '2023',
    dateString: 'January 27th - 29th, 2023',
    startTime: '11:00 AM',
    endTime: '3:00 PM',
    venue: 'Maryland State Fairgrounds',
    city: 'Timonium',
    state: 'MD',
    admissionPrice: '$12',
    buttonText: 'BUY TICKETS',
    photo: <StaticImage src='../images/dogs/cooper.jpg' height={180} width={180} alt={`A photo of Cooper, a red and white Pembroke Welsh Corgi.`} />,
  },
  {
    id: 3,
    title: "Corgi Easter Party",
    date: '2023-04-16',
    month: 'APR',
    day: '16',
    year: '2023',
    dateString: 'April 16th, 2023',
    startTime: '11:30 AM',
    endTime: '1:30 PM',
    venue: 'SniffSpot - JJs Play Yard',
    city: 'Ellicott City',
    state: 'MD',
    admissionPrice: '$20',
    buttonText: 'BUY TICKETS',
    url: '/tickets',
    photo: <StaticImage src='../images/dogs/cooper.jpg' height={180} width={180} alt={`A photo of Cooper, a red and white Pembroke Welsh Corgi.`} />,
  },
  {
    id: 4,
    title: "Coopers 9th Birthday Stroll",
    date: '2023-06-11',
    month: 'JUN',
    day: '13',
    year: '2023',
    dateString: 'June 13th, 2023',
    startTime: '6:00 PM',
    endTime: '8:00 PM',
    venue: 'Double Rock Park',
    city: 'Parkville',
    state: 'MD',
    admissionPrice: 'Free',
    buttonText: 'FREE',
    photo: <StaticImage src='../images/dogs/cooper.jpg' height={180} width={180} alt={`A photo of Cooper, a red and white Pembroke Welsh Corgi.`} />,
  },
  {
    id: 5,
    title: "Corgis at the Bloom",
    date: '2023-03-26',
    month: 'MAR',
    day: '26',
    year: '2023',
    dateString: 'March 26th, 2023',
    startTime: '11:30 AM',
    endTime: '2:00 PM',
    venue: 'National Cherry Blossom Festival',
    city: 'Washington, DC',
    state: 'MD',
    admissionPrice: 'Free',
    buttonText: 'FREE',
    photo: <StaticImage src='../images/dogs/cooper.jpg' height={180} width={180} alt={`A photo of Cooper, a red and white Pembroke Welsh Corgi.`} />,
  },
];

const now = Date.now();
export const upcomingEvents = allEvents.filter((event) => new Date(event.date) >= now).sort((a, b) => new Date(a.date) - new Date(b.date));

export const pastEvents = allEvents.filter((event) => new Date(event.date) < now).sort((a, b) => new Date(b.date) - new Date(a.date));

export const nextThreeEvents = allEvents
  .filter((event) => new Date(event.date) >= now)
  .sort((a, b) => new Date(a.date) - new Date(b.date))
  .slice(0, 3);
