import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export const allEvents = [
  {
    id: 1,
    title: 'Maryland Corgi Cup',
    date: '2022-10-16',
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
    photo: <StaticImage src='../images/event-photos/2022/2022-maryland-corgi-cup.jpg' height={180} width={180} alt={`A photo of corgis racing.`} />,
  },
  {
    id: 2,
    title: 'Howl-O-Ween Corgi Party',
    date: '2022-10-22',
    month: 'OCT',
    day: '22',
    year: '2022',
    dateString: 'October 22nd, 2022',
    startTime: '11:00 AM',
    endTime: '1:00 PM',
    venue: 'Broadneck Dog Park',
    city: 'Annapolis',
    state: 'MD',
    admissionPrice: 'Free',
    buttonText: 'FREE',
    photo: <StaticImage src='../images/event-photos/2022/2022-howloween-party.jpg' height={180} width={180} alt={`A photo of a red and white corgi dressed up as Mario, a corgi with a bandana of pink shades and a corgi face in the background.`} />,
  },
  {
    id: 3,
    title: 'Corgis in the Maize',
    date: '2022-11-6',
    month: 'NOV',
    day: '06',
    year: '2022',
    dateString: 'November 6th, 2022',
    startTime: '10:00 AM',
    endTime: '5:00 PM',
    venue: 'Local Homestead Farm',
    city: 'New Windsor',
    state: 'MD',
    admissionPrice: '$0-15',
    buttonText: 'BUY TICKETS',
    url: 'http://www.lhp.farm/pumpkin-patch.html',
    photo: <StaticImage src='../images/event-photos/2022/2022-corgis-in-the-maize.jpg' height={180} width={180} alt={`A photo of Lilo the corgi outside of a corn maze.`} />,
  },
  {
    id: 4,
    title: 'Corgis at Tail Lights',
    date: '2022-12-13',
    month: 'DEC',
    day: '13',
    year: '2022',
    dateString: 'December 13th, 2022',
    startTime: '5:30 PM',
    endTime: '8:00 PM',
    venue: 'Merriweather Symphony of Lights',
    city: 'Columbia',
    state: 'MD',
    admissionPrice: '$10',
    buttonText: 'BUY TICKETS',
    url: 'https://www.merriweatherlights.com/walk-thru',
    photo: <StaticImage src='../images/event-photos/2022/2022-corgis-at-tail-lights.jpg' height={180} width={180} alt={`A photo of corgis on leash walking through a lights display outdoors.`} />,
  },
  {
    id: 5,
    title: 'Corgi Christmas Sweater Party',
    date: '2022-12-18',
    month: 'DEC',
    day: '18',
    year: '2022',
    dateString: 'December 18th, 2022',
    startTime: '11:30 AM',
    endTime: '1:30 PM',
    venue: 'Carroll Indoor Sports Center',
    city: 'Westminster',
    state: 'MD',
    admissionPrice: '$10',
    buttonText: 'BUY TICKETS',
    url: '/tickets',
    photo: <StaticImage src='../images/event-photos/2022/2022-christmas-party.jpg' height={180} width={180} alt={`A photo of corgis on leash walking through a lights display outdoors.`} />,
  },
  {
    id: 6,
    title: 'Pre-Race Corgi Party',
    date: '2023-01-22',
    month: 'JAN',
    day: '22',
    year: '2023',
    dateString: 'January 22nd, 2023',
    startTime: '2:00 PM',
    endTime: '4:00 PM',
    venue: 'Bark Social',
    city: 'Baltimore',
    state: 'MD',
    admissionPrice: '$0-15',
    buttonText: 'BUY TICKETS',
    url: 'https://barksocial.portal.gingrapp.com/#/public/new_customer',
    photo: <StaticImage src='../images/event-photos/2023/2023-pre-race-party.jpg' height={180} width={180} alt={`A photo of a group of corgis and their owners at Bark Social Baltimore.`} />,
  },
  {
    id: 7,
    title: 'Baltimore Corgi Races',
    date: '2023-01-28',
    month: 'JAN',
    day: '27',
    year: '2023',
    dateString: 'January 27th - 29th, 2023',
    startTime: '11:30 AM',
    endTime: '4:00 PM',
    venue: 'Maryland State Fairgrounds',
    city: 'Timonium',
    state: 'MD',
    admissionPrice: '$12',
    buttonText: 'BUY TICKETS',
    url: 'https://www.worldofpets.org/maryland-world-of-pets-tickets.php',
    photo: <StaticImage src='../images/event-photos/2023/2023-baltimore-corgi-races.jpg' height={180} width={180} alt={`A photo of a red and white corgi with a lavender bandana on in mid-jump.`} />,
  },
  {
    id: 8,
    title: 'Corgi Valentines Day Party',
    date: '2023-02-12',
    month: 'FEB',
    day: '12',
    year: '2023',
    dateString: 'February 12th, 2023',
    startTime: '11:30 AM',
    endTime: '1:30 PM',
    venue: 'Carroll Indoor Sports Center',
    city: 'Westminster',
    state: 'MD',
    admissionPrice: '$10',
    buttonText: 'BUY TICKETS',
    url: '/tickets',
    photo: <StaticImage src='../images/event-photos/2023/2023-valentines-day.jpg' height={180} width={180} alt={`A photo of a bunch of corgis running across a basketball court during a party.`} />,
  },
  {
    id: 9,
    title: 'SniffSpot with the Lure',
    date: '2023-03-04',
    month: 'MAR',
    day: '04',
    year: '2023',
    dateString: 'March 4th, 2023',
    startTime: '1:00 PM',
    endTime: '3:00 PM',
    venue: 'SniffSpot Location',
    city: 'Monkton',
    state: 'MD',
    admissionPrice: '$10',
    buttonText: 'BUY TICKETS',
    url: '/tickets',
    photo: <StaticImage src='../images/event-photos/2023/2023-monkton-lure-event.jpg' height={180} width={180} alt={`A photo of four corgis playing with a dog lure.`} />,
  },
  {
    id: 10,
    title: 'Corgis at the Bloom',
    date: '2023-03-26',
    month: 'MAR',
    day: '26',
    year: '2023',
    dateString: 'March 26th, 2023',
    startTime: '11:30 AM',
    endTime: '2:00 PM',
    venue: 'National Cherry Blossom Festival',
    city: 'Washington',
    state: 'DC',
    admissionPrice: 'Free',
    buttonText: 'FREE',
    photo: <StaticImage src='../images/event-photos/2023/2023-corgis-at-the-bloom.jpg' height={180} width={180} alt={`A photo of a large group of corgis with their owners in front of the Jefferson Memorial.`} />,
  },
  {
    id: 11,
    title: 'Corgi Easter Party',
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
    photo: <StaticImage src='../images/event-photos/2023/2023-corgi-easter-party.jpg' height={180} width={180} alt={`A photo of Cooper, a red and white Pembroke Welsh Corgi.`} />,
  },
  {
    id: 12,
    title: 'Corgis & Snoballs',
    date: '2023-05-06',
    month: 'MAY',
    day: '06',
    year: '2023',
    dateString: 'May 6th, 2023',
    startTime: '1:00 PM',
    endTime: '2:00 PM',
    venue: 'Snoasis',
    city: 'Timonium',
    state: 'MD',
    admissionPrice: 'Free',
    buttonText: 'FREE',
    photo: <StaticImage src='../images/event-photos/2023/2023-corgis-and-snoballs.jpg' height={180} width={180} alt={`A photo of a tricolor corgi puppy eating a plain snoball from a Snoasis cup.`} />,
  },
  {
    id: 13,
    title: 'Corgi Pool Party, Pt 1',
    date: '2023-06-04',
    month: 'JUN',
    day: '04',
    year: '2023',
    dateString: 'June 4th, 2023',
    startTime: '4:00 PM',
    endTime: '6:00 PM',
    venue: 'Dogwood Acres Pet Retreat',
    city: 'Davidsonville',
    state: 'MD',
    admissionPrice: 'TBA',
    buttonText: 'UPCOMING',
    photo: <StaticImage src='../images/event-photos/2023/2023-corgi-pool-party-1.jpg' height={180} width={180} alt={`A photo of a two corgis hanging out by a bone shaped pool at a dog resort.`} />,
  },
  {
    id: 14,
    title: 'Coopers 9th Birthday Stroll',
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
    photo: <StaticImage src='../images/event-photos/2023/2023-coopers-9th-birthday-stroll.jpg' height={180} width={180} alt={`A photo of Cooper, a red and white Pembroke Welsh Corgi, with his tongue hanging out.`} />,
  },
  {
    id: 15,
    title: 'PWCCP Corgi Fun Fair',
    date: '2023-06-24',
    month: 'JUN',
    day: '24',
    year: '2023',
    dateString: 'June 24th, 2023',
    startTime: 'TBA',
    endTime: '',
    venue: 'Johnsville Ruritan Club',
    city: 'Union Bridge',
    state: 'MD',
    admissionPrice: 'Free',
    buttonText: 'FREE',
    photo: <StaticImage src='../images/event-photos/2023/2023-pwccp-corgi-fun-fair.jpg' height={180} width={180} alt={`A photo of corgis lined up during a hot dog eating contest at the Corgi Fun Fair.`} />,
  },
  {
    id: 16,
    title: 'Corgi Pool Party, Pt 2',
    date: '2023-07-01',
    month: 'JUL',
    day: '??',
    year: '2023',
    dateString: 'July TBA, 2023',
    startTime: '4:00 PM',
    endTime: '6:00 PM',
    venue: 'Dogwood Acres Pet Retreat',
    city: 'Davidsonville',
    state: 'MD',
    admissionPrice: 'TBA',
    buttonText: 'UPCOMING',
    photo: <StaticImage src='../images/event-photos/2023/2023-corgi-pool-party-2.jpg' height={180} width={180} alt={`A photo of a corgis by a pool at a dog resort.`} />,
  },
  {
    id: 17,
    title: 'Test Event',
    date: '2023-03-07',
    month: 'MAR',
    day: '08',
    year: '2023',
    dateString: 'March 8th, 2023',
    startTime: '6:00 PM',
    endTime: '9:00 PM',
    venue: 'Test',
    city: 'Test',
    state: 'MD',
    admissionPrice: 'Free',
    buttonText: 'FREE',
    photo: <StaticImage src='../images/event-photos/2023/2023-coopers-9th-birthday-stroll.jpg' height={180} width={180} alt={`A photo of a corgi.`} />,
  },
];

const now = Date.now();
export const upcomingEvents = allEvents.filter((event) => new Date(event.date) >= now).sort((a, b) => new Date(a.date) - new Date(b.date));

export const pastEvents = allEvents.filter((event) => new Date(event.date) < now).sort((a, b) => new Date(b.date) - new Date(a.date));

export const nextThreeEvents = allEvents
  .filter((event) => new Date(event.date) >= now)
  .sort((a, b) => new Date(a.date) - new Date(b.date))
  .slice(0, 3);
