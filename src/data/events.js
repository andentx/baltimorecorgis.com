import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export const allEvents = [
  {
    id: 1,
    title: 'Valentines Day Party',
    date: '2023-02-14',
    month: 'FEB',
    day: '14',
    year: '2023',
    dateString: 'February 14th, 2023',
    startTime: '1:00 PM',
    endTime: '2:00 PM',
    venue: 'Venue Name',
    city: 'Westminster',
    state: 'MD',
    admissionPrice: '$15',
    buttonText: 'BUY TICKETS',
    url: '/tickets',
    photo: <StaticImage src='../images/dogs/cooper.jpg' height={180} width={180} alt={`A photo of Cooper, a red and white Pembroke Welsh Corgi.`} />,
  },
  {
    id: 2,
    title: "Cooper's Ugly Sweater Birthday",
    date: '2023-06-13',
    month: 'JUN',
    day: '13',
    year: '2023',
    dateString: 'June 13th, 2023',
    startTime: '11:30 AM',
    endTime: '12:00 PM',
    venue: 'A Very Extremely Long Venue Name',
    city: 'Havre de Grace',
    state: 'MD',
    admissionPrice: 'Free',
    buttonText: 'FREE',
    photo: <StaticImage src='../images/dogs/cooper.jpg' height={180} width={180} alt={`A photo of Cooper, a red and white Pembroke Welsh Corgi.`} />,
  },
  {
    id: 3,
    title: "Cooper's Ugly Sweater Birthday",
    date: '2023-06-15',
    month: 'JUN',
    day: '15',
    year: '2023',
    dateString: 'June 13th, 2023',
    startTime: '11:30 AM',
    endTime: '12:00 PM',
    venue: 'A Very Extremely Long Venue Name',
    city: 'Havre de Grace',
    state: 'MD',
    admissionPrice: 'Free',
    buttonText: 'FREE',
    photo: <StaticImage src='../images/dogs/cooper.jpg' height={180} width={180} alt={`A photo of Cooper, a red and white Pembroke Welsh Corgi.`} />,
  },
  {
    id: 4,
    title: "Cooper's Ugly Sweater Birthday",
    date: '2023-08-01',
    month: 'AUG',
    day: '01',
    year: '2023',
    dateString: 'June 13th, 2023',
    startTime: '11:30 AM',
    endTime: '12:00 PM',
    venue: 'A Very Extremely Long Venue Name',
    city: 'Havre de Grace',
    state: 'MD',
    admissionPrice: 'Free',
    buttonText: 'FREE',
    photo: <StaticImage src='../images/dogs/cooper.jpg' height={180} width={180} alt={`A photo of Cooper, a red and white Pembroke Welsh Corgi.`} />,
  },
  {
    id: 5,
    title: "Cooper's Ugly Sweater Birthday",
    date: '2023-01-13',
    month: 'JAN',
    day: '13',
    year: '2023',
    dateString: 'June 13th, 2023',
    startTime: '11:30 AM',
    endTime: '12:00 PM',
    venue: 'A Very Extremely Long Venue Name',
    city: 'Havre de Grace',
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
