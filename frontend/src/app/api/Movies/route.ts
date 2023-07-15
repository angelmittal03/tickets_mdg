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
    return NextResponse.json(movies);
}