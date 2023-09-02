import { FormEvent } from "react";
import style from "../styles/Create.module.css";
import { useNavigate } from "react-router-dom";
import { callApi } from "../services/services";

export function CreateEvent() {
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fields = Object.fromEntries(new FormData(e.currentTarget));
    callApi("https://backevents-nanocode2022.vercel.app/api/events", fields, "POST").then(() =>
      navigate('/')
    );
  };
  return (
    <div className={style.container}>
      <form action="" onSubmit={handleSubmit} className={style.form}>
        <label htmlFor="">Location Event</label>
        <input type="text" name="location" required />

        <label htmlFor="">Name Event</label>
        <input type="text" name="name" required />

        <label htmlFor="">Description Event</label>
        <input type="text" name="description" required />

        <label htmlFor="">Date Event</label>
        <input type="date" name="date" required />

        <label htmlFor="">Time Event</label>
        <input type="time" name="time" required />

        <button>Create Event</button>
      </form>
    </div>
  );
}
