'use client';

import { useEffect, useState } from "react";


export default function Success(param){
    const tid= param['params'].tid
    const [somedata,setsomedata] = useState([])
    useEffect(()=>{
      const fetchData = async ()=>{
        try
        {const url = "http://127.0.0.1:8000/payment/"+tid.toString()+'/'
        console.log(url)
        const response = await fetch(url)
        const data= await response.json()
        console.log(data)
      setsomedata(data)}
        catch(e){
          console.log(e)
        }
      }
      fetchData()
        // console.log(tid)
          // fetch("http://127.0.0.1:8000/payment/"+tid.toString()+'/', {
          //   method: 'GET',
          //   redirect: 'follow'
          // })
          //   .then(response => {response.text()})
          //   .then(result => {console.log(result)
          //   })
          //   .catch(error => console.log('error', error));
    },[])
    return <>{JSON.stringify(somedata)}</>
}