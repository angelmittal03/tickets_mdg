

import Head from "next/head";
import Image from "next/image";
// import Opp from "../../public/Oppenheimercover.jpg";
// import place from "../../public/destinations.jpeg";
export default function Home() {
  

  return (
    <>
      <Head>Hi </Head>
      
        <main className="flex items-centre text-dark w-full min-h-screen">
      <div className={"w-full h-full inline-block z-0 bg-dark p-32"}> 
      <div className='flex justify-between w-full'>
        <div className="w-1/2">
          <img src="/Oppenheimercover.jpg" alt='Oppenheimer' className="w-5/6 h-auto rounded-md" width='19rem'></img>
          <div className=" flex content-center mt-2">
          <a href="./Movies/MoviesIndex" className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">Explore movies !</a>

          </div>
          </div>
          <div>
          <img src='/destinations.jpeg' alt='Destination' className="w-5/6 h-auto rounded-md" ></img>
          <div className=" flex content-center mt-2">
          <a href="./Bus/BusIndex" className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 
          px-4 border border-red-500 hover:border-transparent rounded">Explore destinations !</a> 
          </div>
          </div></div></div>
      </main>
    </>
  );
}

