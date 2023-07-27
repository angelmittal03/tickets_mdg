import { NextResponse } from "next/server";

async function fetchMovies(noofmovies:number) {
    const url :string= 'http://localhost:8000/movies/'
    let movies= []
    for (let index = 0; index <= noofmovies; index++) {
        const response = await fetch(url+index, {
            "method": "GET",}
            )
            const movie = await response.json()
            movies.push(movie)
        
    }
    return movies
    }
async function fetchNoOfMovies() {

    const url :string= 'http://localhost:8000/movies/'
    const response = await fetch(url+'0', {
        "method": "GET",}
        )
        const movies = await response.json()
        return movies;
    
}
export async function GET(request) {
    const noofmovies = await fetchNoOfMovies();
    const movies = await fetchMovies(noofmovies)
    return NextResponse.json(movies);
}