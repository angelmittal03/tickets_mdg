import Image from "next/image";

export default function Movies({movies}) {
  return (
    <>
      <ul className="grid grid-cols-3 mx-auto max-w-[1260px] gap-10">
        {movies?.map((movie) => (
          <li className="flex flex-col">
            {/* <Image src={movies.poster} alt={movie.name}></Image> */}
            <div className="@container ">
              <h1> {movie.name}</h1>
              <p> {movie.date}</p>
              <p> {movie.time}</p>
              <p> {movie.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
