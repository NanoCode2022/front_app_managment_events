import { ChangeEvent, FormEvent } from "react";
import styles from "../../styles/Home.module.css"
interface Props{
  search: string;
  updateSearch: (search: string) => void,
  error: string | null | undefined;

}
export function SearchEvents({search, updateSearch, error}:Props){

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newSearch = event.target.value;
    updateSearch(newSearch)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateSearch(search)
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} className={styles.search_box} value={search} placeholder="Search for an event" />
      <button>Search</button>
    </form>
    <p>{error}</p>
    </>
  )
}
