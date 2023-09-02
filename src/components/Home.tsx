import { useEffect, useState } from "react";
import { IEvent } from "../interfaces/interfaces";
import { CardEvents } from "./subComponents/CardEvents";
import { SearchEvents } from "./subComponents/SearchEvents";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../hooks/useSearch";
import styles from "../styles/Home.module.css";
export function Home() {
  const [listingEvents, setListingEvents] = useState<IEvent[]>([]);
  const { search, updateSearch, error } = useSearch();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://backevents-nanocode2022.vercel.app/api/events?name=${search}`)
      .then((response) => response.json())
      .then((data: IEvent[]) => {
        setListingEvents(data);
      });
    console.log("render");
  }, [search]);
  return (
    <>
      <div>
        <div className={styles.container}>
          <h1 className={styles.title_web}>EVENTS</h1>
          <SearchEvents
            search={search}
            updateSearch={updateSearch}
            error={error}
          />
          <button onClick={() => navigate("event/create")}>Create Event</button>
        </div>
        <CardEvents listingEvents={listingEvents} />
      </div>
    </>
  );
}
