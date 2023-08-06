import { useEffect, useState } from 'react';
import mockEvents from '../assets/mock.json';
import { IEvent } from '../interfaces/interfaces';
import { CardEvents } from './subComponents/CardEvents';
import { SearchEvents } from './subComponents/SearchEvents';
import { useNavigate } from 'react-router-dom';

export function Home(){
  const [listingEvents, setListingEvents] = useState<IEvent[]>([]);
  const navigate = useNavigate()

  useEffect(() => {
    setListingEvents(mockEvents.events);
  }
  , [])
  return (
    <>
      <div> 
        <h1>EVENTS</h1>
        <SearchEvents/>
        <button onClick={() => navigate('event/create')}>Create Event</button>
        <CardEvents listingEvents={listingEvents} />
      </div>
    </>
  )
}