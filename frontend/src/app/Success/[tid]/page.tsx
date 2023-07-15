
'use client';

import React from 'react'
import Layout from '../Layout'
import Image from 'next/image'
import place from '../../../../public/destinations.jpeg'


import { useEffect, useState } from "react";


export default function Success(param:any){
    const tid= param['params'].tid
    let [data,setData] = useState({
      seats:"1",
      rows: 0,
      cols: 0
    })
    // const [somedata,setsomedata] = useState([])
    useEffect(()=>{
      const fetchData = async ()=>{
        try
        {
          const url = "http://127.0.0.1:8000/payment/"+tid.toString()+'/'
        console.log(url)
        const response = await fetch(url)
        const datas= await response.json()
        console.log(datas['seats'])
        data.seats = datas['seats']
        setData(data)
        console.log(data)
        try{
          var myHeaders = new Headers();
          const url = "http://127.0.0.1:8000/movies/2/"
          myHeaders.append("Content-Type", "application/json");
          console.log(url)
          var raw = JSON.stringify({
            "availibility": data.seats
          });
          var requestOptions = {
            headers: myHeaders,
            method: 'PATCH',
            body: raw,
          };
          const response = await fetch(url,requestOptions)
          const datas= await response.json()
          console.log(datas)
          data.cols = datas['cols']
          data.rows = datas['rows']
          setData(data)
        }
        catch(e){
          console.log(e)
        }
      // setsomedata(data)
    }
        catch(e){
          console.log(e)
        }
      }
      fetchData()
    },[])
    const seat =()=>{
      let arr= data.seats.split(',')
      return arr.map((id:string)=>{
        console.log(parseInt(id))
        let row = Math.floor(parseInt(id)/data.cols) 
        console.log(row)
        let col = parseInt(id)-(row*data.cols)
        console.log(col)
        return <div className='text-white'>Your Seat No is : {row},{col}</div>
      })
    }
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
            <h1 className='mb-4'>{seat()} </h1>
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
// function Success({ params }: any) {
//   return (
//     <>
//     <head><title>Tickets Booked</title></head>
//     <main className='flex items-center text-light w-full min-h-screen'> 
//     <Layout className='pt-0'>
//       < div className='flex items-center justify-between w-full py-8'>
//         <div className='w-1/2 pt-16'>
          
//           <Image src={place} alt="dummysuccess" className='w-full h-auto ' />
        
//         </div>
//         <div className='ml-8'>
//           <h1 className='mb-4'>Your tickets have been confirmed.</h1>
//             {/* Display details from API */}
//             <a href="/" className ="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:ring-red-300 
//             font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700
//              focus:outline-none dark:focus:ring-red-800">Back to home</a>  
//         </div>
//       </div>
//     </Layout>
//     </main>
//     </>
    
//   )
// }

// export default Success;