import { useEffect, useState } from 'react';
import { IEvent } from '../interfaces/interfaces';
import { CardEvents } from './subComponents/CardEvents';
import { SearchEvents } from './subComponents/SearchEvents';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../hooks/useSearch';

export function Home(){
  const [listingEvents, setListingEvents] = useState<IEvent[]>([]);
  const {search, updateSearch, error} = useSearch()
  const navigate = useNavigate()

 useEffect(() => {
    fetch(`http://localhost:3000/api/events?name=${search}`)
    .then(response => response.json())
    .then((data:IEvent[]) => { 
      console.log(data)
      setListingEvents(data)
    })
    console.log('render')
  }
  , [search])
  return (
    <>
      <div> 
        <h1>EVENTS</h1>
        <SearchEvents search={search} updateSearch={updateSearch} error={error} />
        <button onClick={() => navigate('event/create')}>Create Event</button>
        {search}
        <CardEvents listingEvents={listingEvents} />
      </div>
    </>
  )
}