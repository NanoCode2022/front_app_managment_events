import { Dispatch, FormEvent, SetStateAction } from "react";
import style from "../../styles/Modal.module.css";
interface Props {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setWhat: Dispatch<SetStateAction<boolean>>;
}

export function EditEvent({setIsOpen,setWhat}:Props){

  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fields = Object.fromEntries(new FormData(e.currentTarget));
    console.log(fields)
  }
  return(
    <form action="" className={style.form} onSubmit={handleSubmit}> 
    
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

      <button>Edit Event</button>
      <button onClick={()=> {
      setIsOpen(false);
      setWhat(true);
    }}>close</button>
    </form>
  )

}