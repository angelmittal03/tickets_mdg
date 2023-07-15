import React from 'react'
import Layout from './Layout'
import Image from 'next/image'
import Opp from "../../../../public/Oppenheimercover.jpg"

function movieshowpage({ params }: any) {
  return (
    <>
    <head><title>Book a movie</title></head>
    <main className='flex items-center text-light w-full min-h-screen'> 
    <Layout className='pt-0'>
      < div className='flex items-center justify-between w-full'>
        <div className='w-1/2'>
          <a href={"https://www.youtube.com/results?search_query="+"${params.name}"} target='_blank' rel="noopener noreferrer"> // map trailer link in json
          <Image src={Opp} alt="" className='w-full h-auto' />
          </a>
        </div>
        <div>
          <h1>{params.name}</h1>
            <p>{params.details}</p>
            <a href="#" className ="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:ring-red-300 
            font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700
             focus:outline-none dark:focus:ring-red-800">Book Now</a>  

        </div>
      </div>
    </Layout>
    </main>
    </>
    
  )
}

export default movieshowpage