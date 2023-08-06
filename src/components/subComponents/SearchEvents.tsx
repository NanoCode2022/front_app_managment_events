import { ChangeEvent, FormEvent } from "react";
import { useSearch } from "../../hooks/useSearch"

export function SearchEvents(){
  const {search, updateSearch, error} = useSearch()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newSearch = event.target.value;
    updateSearch(newSearch)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(search)
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={search} placeholder="Search for an event" />
      <button>Search</button>
    </form>
    <p>{error}</p>
    </>
  )
}