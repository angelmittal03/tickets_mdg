import Head from 'next/head'
import Image from 'next/image'
import Opp from "../../public/Oppenheimercover.jpg"
import place from "../../public/destinations.jpeg"
export default function Home() {
  return (
    <>
    <Head>Hi </Head>
    
    <main className="flex items-centre text-dark w-full min-h-screen">
      <div className={"w-full h-full inline-block z-0 bg-dark p-32"}> 
      <div className='flex justify-between w-full'>
        <div className="w-1/2">
          <Image src={Opp} alt='Oppenheimer' className="w-5/6 h-auto rounded-md"></Image>
          <div className=" flex content-center mt-2">
          <button className =" bg-transparent hover:bg-red-500 text-red-700 
          font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">Explore movies !</button> 
          </div>
          </div>
          <div>
          <Image src={place} alt='Destination' className="w-full h-auto rounded-md"></Image>
          <div className=" flex content-center mt-2">
          <button className =" bg-transparent hover:bg-red-500 text-red-700 
          font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">Explore destinations !</button> 
          </div>
          </div></div></div>
    </main>
    </>
 

      
  )
}
