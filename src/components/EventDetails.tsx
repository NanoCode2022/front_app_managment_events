import { useLocation } from "react-router-dom";
import { useState } from "react";
import style from '../styles/EventDetails.module.css'
import { Modal } from "./subComponents/Modal";
export function EventDetail() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [ what, setWhat ] = useState<boolean>(true)
  const location = useLocation();
  const event = location.state.data;
  console.log({ event })
  return (
    <div className={style.container}>
      <div className={style.container_card}>
        <section>
          <img src="https://img.freepik.com/premium-photo/backgrounds-night-sky-with-stars-clouds_180633-4011.jpg" alt={event.description} className={style.card_img} />
        </section>
        <section className={style.section_buttons}>
          <button onClick={() => setIsOpen(true)}>Register</button>
          <button onClick={() => {
            setIsOpen(true)
            setWhat(false)
          } }>Edit Event</button>
        </section>
        {isOpen ? <Modal setIsOpen={setIsOpen} what={what} setWhat={setWhat}/> : null}
        <section>
          <p>{event.location}</p>
          <h2>{event.name}</h2>
          <p>{event.description}</p>
          <p>{event.date}</p>
          <p>{event.time}</p>
        </section>
      </div>
    </div>
  )
}
