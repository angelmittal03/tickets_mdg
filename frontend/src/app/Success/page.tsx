import React from 'react'
import Layout from './Layout'
import Image from 'next/image'
import place from '../../../public/destinations.jpeg'


function successpage({ params }: any) {
  return (
    <>
    <head><title>Tickets Booked</title></head>
    <main className='flex items-center text-light w-full min-h-screen'> 
    <Layout className='pt-0'>
      < div className='flex items-center justify-between w-full py-8'>
        <div className='w-1/2 pt-16'>
          
          <Image src={place} alt="dummysuccess" className='w-full h-auto ' />
        
        </div>
        <div className='ml-8'>
          <h1 className='mb-4'>Your tickets have been confirmed.</h1>
            {/* Display details from API */}
            <a href="/" className ="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:ring-red-300 
            font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700
             focus:outline-none dark:focus:ring-red-800">Back to home</a>  
        </div>
      </div>
    </Layout>
    </main>
    </>
    
  )
}

export default successpage