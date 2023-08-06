import { FormEvent } from "react";

export function CreateEvent(){
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fields = Object.fromEntries(new FormData(e.currentTarget));
    console.log(fields)
  }
  return(
   <div>
     <form action="" onSubmit={handleSubmit}> 
    
    <label htmlFor="">Location Event</label>
    <input type="text" name="location" required/>

    <label htmlFor="">Name Event</label>
    <input type="text" name="name" required/>

    <label htmlFor="">Description Event</label>
    <input type="text" name="description" required/>

    <label htmlFor="">Date Event</label>
    <input type="text" name="date" required/>

    <label htmlFor="">Time Event</label>
    <input type="text" name="time" required/>

    <button>Create Event</button>
  </form>
   </div>
  )
}