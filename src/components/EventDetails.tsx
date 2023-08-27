import { useLocation } from "react-router-dom";
import { useState } from "react";
import style from "../styles/EventDetails.module.css";
import { Modal } from "./subComponents/Modal";
export function EventDetail() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [what, setWhat] = useState<boolean>(true);
  const location = useLocation();
  const event = location.state.data;
  return (
    <div className={style.container}>
      <div className={style.container_card}>
        <section>
          <img
            src="https://i0.wp.com/northtamerton.com/wp-content/uploads/2020/03/events.jpg?resize=1024%2C357&ssl=1"
            alt={event.description}
            className={style.card_img}
          />
        </section>
        <section className={style.section_buttons}>
          <button onClick={() => setIsOpen(true)}>Register</button>
          <button
            onClick={() => {
              setIsOpen(true);
              setWhat(false);
            }}
          >
            Edit Event
          </button>
        </section>
        {isOpen ? (
          <Modal
            setIsOpen={setIsOpen}
            what={what}
            setWhat={setWhat}
            event={event}
          />
        ) : null}
        <section>
          <p className={style.titles}>Location</p>
          <p>{event.location}</p>
          <p className={style.titles}>Event</p>
          <h2>{event.name}</h2>
          <p className={style.titles}>Description</p>
          <p>{event.description}</p>
          <p className={style.titles}>Date</p>
          <p>{event.date}</p>
          <p>{event.time} hs</p>
        </section>
      </div>
    </div>
  );
}
