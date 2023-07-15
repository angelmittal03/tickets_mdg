"use client"

import link from "next/link"
import { useState} from "react"


export default function Searchmovies({ getSearchResults})
{
    const [query, setQuery] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response =await fetch(`/api/movies/search?query=${query}`)
        const movies = await response.json()
        getSearchResults(movies)

    }
    return(
        <div className="text-center my-20">
  <form onSubmit={handleSubmit} className="flex items-center justify-center">
    <input
      className="text-black border-2 border-black rounded-full px-3 py-2 mr-2"
      type="text"
      placeholder="Search movies ..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
    <button
      className="bg-black text-white rounded-full px-3 py-2 hover:bg-black/60"
      type="submit"
    >
      Search
    </button>
  </form>
</div>

    )
}