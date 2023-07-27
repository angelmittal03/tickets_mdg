"use client"
import Movies from "@/app/components/(Cards)/moviecards";
import Searchmovies from "@/app/components/SearchBar/Searchmoviesbar";
import { useState, useEffect } from "react"


export default function MoviesIndex() {
    const [movies, setmovies] = useState<any[]>([]);

    useEffect (()=> {
        const getmovies = async () => {
            const response = await fetch('/api/Movies');
            const movies : any[]= await response.json();
            console.log(movies);
            
            setmovies(movies);
        }
        // movies.pop()
        // setmovies(movies)
        getmovies();
    }, []); //add dependency if any 
    return (
        <div className="text-center">
            <h1 className="font-bold text- 6xl mt-14"></h1>
            <Searchmovies getSearchResults={(results:any) => setmovies(results)} />

            {
                movies.length>0?<Movies movies={movies} />:<div></div>}
        </div>
    )
}