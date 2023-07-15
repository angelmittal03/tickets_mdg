"use client"
import Movies from "@/app/Components/(Cards)/moviecards";
import Searchmovies from "@/app/Components/SearchBar/Searchmoviesbar";
import { useState, useEffect } from "react"


export default function MoviesIndex() {
    const [movies, setmovies] = useState([]);

    useEffect (()=> {
        const getmovies = async () => {
            const response = await fetch('/api/Movies');
            const movies = await response.json();
            setmovies(movies.data);
        }

        getmovies();
    }, ['dependencies']); //add dependency if any 
    return (
        <div className="text-center">
            <h1 className="font-bold text- 6xl mt-14"></h1>
            <Searchmovies getSearchResults={(results) => setmovies(results)} />
            <Movies movies={movies} />
        </div>
    )
}