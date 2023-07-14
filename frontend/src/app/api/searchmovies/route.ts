import { NextResponse } from "next/server";

async function fetchMovies() {
    const response = await fetch({url}, {
        "method": "GET",
        "headers" :{}, }
        )
        const movies = await response.json()
        return movies;
    }

export async function GET(request) {
    const coins = await fetchMovies();
    const { searchParams } = new URL(request.url);
    console.log(request.url)
    const query = searchParams.get('query');

    const filteredmovies = movies.name.filter((movies) => {
        return movies.name.toLowerCase().include(query.toLowerCase())

    })
    return NextResponse.json(filteredmovies);
}

