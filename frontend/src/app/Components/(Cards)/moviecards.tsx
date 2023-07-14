import Image from "next/image";


export default function Movies({movies}) {
    return (
        <>
        <ul className="grid grid-cols-3 mx-auto max-w-[1260px] gap-10">
            {movies.map(movies => (
                <li key ={movies.uid} className="flex flex-col">
                    <Image src={movies.poster} alt={movies.name}></Image>
                    <div className="@container ">
                        <h1> {movies.name}</h1>
                        <p> {movies.stars}</p>
                    </div>
                </li>
            ))}
            </ul></>
    )
}