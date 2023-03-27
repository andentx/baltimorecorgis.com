import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export const allEvents = [
  {
    id: 1,
    title: 'Maryland Corgi Cup',
    startTime: new Date('2022-10-16T09:30:00'),
    endTime: new Date('2022-10-16T16:00:00'),
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
    startTime: new Date('2022-10-22T11:00:00'),
    endTime: new Date('2022-10-22T13:00:00'),
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
    startTime: new Date('2022-11-06T10:00:00'),
    endTime: new Date('2022-11-06T17:00:00'),
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
    startTime: new Date('2022-12-13T17:30:00'),
    endTime: new Date('2022-12-13T20:00:00'),
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
    startTime: new Date('2022-12-18T11:30:00'),
    endTime: new Date('2022-12-18T13:30:00'),
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
    startTime: new Date('2023-01-22T14:00:00'),
    endTime: new Date('2023-01-22T16:00:00'),
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
    startTime: new Date('2023-01-27T11:30:00'),
    endTime: new Date('2023-01-29T16:00:00'),
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
    startTime: new Date('2023-02-12T11:30:00'),
    endTime: new Date('2023-02-12T13:30:00'),
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
    startTime: new Date('2023-03-04T13:00:00'),
    endTime: new Date('2023-03-04T15:00:00'),
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
    startTime: new Date('2023-03-26T11:30:00'),
    endTime: new Date('2023-03-26T14:00:00'),
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
    startTime: new Date('2023-04-16T11:30:00'),
    endTime: new Date('2023-04-16T13:30:00'),
    venue: 'SniffSpot - JJs Play Yard',
    city: 'Ellicott City',
    state: 'MD',
    admissionPrice: '$20 per Corgi',
    buttonText: 'BUY TICKETS',
    url: '/tickets',
    photo: <StaticImage src='../images/event-photos/2023/2023-corgi-easter-party.jpg' height={180} width={180} alt={`A photo of Cooper, a red and white Pembroke Welsh Corgi.`} />,
  },
  {
    id: 12,
    title: 'Sniffspot with the Lure',
    startTime: new Date('2023-04-29T13:00:00'),
    endTime: new Date('2023-04-29T15:00:00'),
    venue: 'SniffSpot - Stable Dog Park',
    city: 'Monkton',
    state: 'MD',
    admissionPrice: '$15 per Corgi',
    buttonText: 'BUY TICKETS',
    url: '/tickets',
    photo: <StaticImage src='../images/event-photos/2023/2023-monkton-lure-event2.jpg' height={180} width={180} alt={`A photo of Cooper, a red and white Pembroke Welsh Corgi.`} />,
  },
  {
    id: 13,
    title: 'Corgis & Snoballs',
    startTime: new Date('2023-05-06T13:00:00'),
    endTime: new Date('2023-05-06T14:00:00'),
    venue: 'Snoasis',
    city: 'Timonium',
    state: 'MD',
    admissionPrice: 'Free',
    buttonText: 'FREE',
    photo: <StaticImage src='../images/event-photos/2023/2023-corgis-and-snoballs.jpg' height={180} width={180} alt={`A photo of a tricolor corgi puppy eating a plain snoball from a Snoasis cup.`} />,
  },
  {
    id: 14,
    title: 'Corgi Pool Party, Pt 1',
    startTime: new Date('2023-06-04T16:00:00'),
    endTime: new Date('2023-06-04T18:00:00'),
    venue: 'Dogwood Acres Pet Retreat',
    city: 'Davidsonville',
    state: 'MD',
    admissionPrice: '$28 per Corgi',
    buttonText: 'UPCOMING',
    photo: <StaticImage src='../images/event-photos/2023/2023-corgi-pool-party-1.jpg' height={180} width={180} alt={`A photo of a two corgis hanging out by a bone shaped pool at a dog resort.`} />,
  },
  {
    id: 15,
    title: 'Coopers 9th Birthday Stroll',
    startTime: new Date('2023-06-11T18:00:00'),
    endTime: new Date('2023-06-11T20:00:00'),
    venue: 'Double Rock Park',
    city: 'Parkville',
    state: 'MD',
    admissionPrice: 'Free',
    buttonText: 'FREE',
    photo: <StaticImage src='../images/event-photos/2023/2023-coopers-9th-birthday-stroll.jpg' height={180} width={180} alt={`A photo of Cooper, a red and white Pembroke Welsh Corgi, with his tongue hanging out.`} />,
  },
  // {
  //   id: 16,
  //   title: 'PWCCP Corgi Fun Fair',
  //   startTime: new Date('2023-06-24T00:00:00'),
  //   endTime: new Date('2023-06-24T23:59:00'),
  //   venue: 'Johnsville Ruritan Club',
  //   city: 'Union Bridge',
  //   state: 'MD',
  //   admissionPrice: 'Free',
  //   buttonText: 'FREE',
  //   photo: <StaticImage src='../images/event-photos/2023/2023-pwccp-corgi-fun-fair.jpg' height={180} width={180} alt={`A photo of corgis lined up during a hot dog eating contest at the Corgi Fun Fair.`} />,
  // },
  // {
  //   id: 17,
  //   title: 'Corgi Pool Party, Pt 2',
  //   startTime: new Date('2023-07-01T16:00:00'),
  //   endTime: new Date('2023-07-01T18:00:00'),
  //   venue: 'Dogwood Acres Pet Retreat',
  //   city: 'Davidsonville',
  //   state: 'MD',
  //   admissionPrice: 'TBA',
  //   buttonText: 'UPCOMING',
  //   photo: <StaticImage src='../images/event-photos/2023/2023-corgi-pool-party-2.jpg' height={180} width={180} alt={`A photo of a corgis by a pool at a dog resort.`} />,
  // },
];
const now = new Date();

export const upcomingEvents = [...allEvents.filter((event) => event.endTime >= now)].sort((a, b) => new Date(a.startTime) - new Date(b.startTime));

export const pastEvents = [...allEvents.filter((event) => event.endTime < now)].sort((a, b) => new Date(b.startTime) - new Date(a.startTime));

export const nextThreeEvents = upcomingEvents.slice(0, 3);
