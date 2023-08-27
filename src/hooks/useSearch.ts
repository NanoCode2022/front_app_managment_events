import { useEffect, useRef, useState } from "react";

export function useSearch() {
  const [search, updateSearch] = useState('');
  const [error, setError] = useState<string | null>();
  const isFirsInput = useRef(true)

  useEffect(() => {
    if (isFirsInput.current) {
      isFirsInput.current = search === ''
      return
    }

    if (search === '') {
      setError('Cannot search for an empty event')
      return
    }


    if (search.match(/^\d+$/)) {
      setError(`Can't search for a movie with a number`)
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}
