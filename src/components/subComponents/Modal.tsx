import { Dispatch, FormEvent, SetStateAction } from 'react';
import style from '../../styles/Modal.module.css'
import { EditEvent } from './EditEvent';
interface Props {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  what: boolean;
  setWhat: Dispatch<SetStateAction<boolean>>;
}


export function Modal({ setIsOpen, setWhat, what }: Props) {

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fields = Object.fromEntries(new FormData(e.currentTarget));
    console.log(fields)
  }
  return <div className={style.container}>
    {what ? <form className={style.form} onSubmit={handleSubmit}>
      <label htmlFor="">Name</label>
      <input type="text" name='name' required/>
      <label htmlFor="" >Surname</label>
      <input type="text"  name='surname' required/>
      <button>Register</button>
      <button onClick={() => setIsOpen(false)}>Close</button>
    </form> : <EditEvent setIsOpen={setIsOpen} setWhat={setWhat}/>}
  </div>
}
