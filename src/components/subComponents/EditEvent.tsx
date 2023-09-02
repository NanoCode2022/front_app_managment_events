import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from "react";
import style from "../../styles/Modal.module.css";
import { IEvent } from "../../interfaces/interfaces";
import { callApi } from "../../services/services";
import { useNavigate } from "react-router-dom";
interface Props {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setWhat: Dispatch<SetStateAction<boolean>>;
  event: IEvent
}

export function EditEvent({ setIsOpen, setWhat, event }: Props) {
  const [valuesEvent, setValueEvent] = useState({ name: event.name, date: event.date, time: event.time, location: event.location, description: event.description, assist: event.assist })
  const navigate = useNavigate()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValueEvent({ [e.currentTarget]: newValue })
  }


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fields = Object.fromEntries(new FormData(e.currentTarget));
    callApi(`https://backevents-nanocode2022.vercel.app/api/events/edit/${fields.name}`,fields,'PUT')
    .then(() => navigate('/'))
  }
  return (
    <form action="" className={style.form} onSubmit={handleSubmit}>

      <label htmlFor="">Location Event</label>
      <input type="text" name="location" value={valuesEvent.location} onChange={handleChange} />

      <label htmlFor="">Name Event</label>
      <input type="text" name="name" value={valuesEvent.name} onChange={handleChange} />

      <label htmlFor="">Description Event</label>
      <input type="text" name="description" value={valuesEvent.description} onChange={handleChange} />

      <label htmlFor="">Date Event</label>
      <input type="date" name="date" value={valuesEvent.date} onChange={handleChange} />

      <label htmlFor="">Time Event</label>
      <input type="time" name="time" value={valuesEvent.time} onChange={handleChange} />

      <button>Edit Event</button>
      <button onClick={() => {
        setIsOpen(false);
        setWhat(true);
      }}>close</button>
    </form>
  )

}
