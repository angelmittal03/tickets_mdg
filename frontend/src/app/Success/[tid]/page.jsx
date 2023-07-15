'use client';

import { useEffect } from "react";


export default function Success(param){
    const tid= param['params'].tid
    
    useEffect(()=>{
        console.log(tid)
          fetch("http://127.0.0.1:8000/payment/"+tid.toString()+'/', {
            method: 'GET',
            redirect: 'follow'
          })
            .then(response => {response.text()})
            .then(result => {console.log(result)
            })
            .catch(error => console.log('error', error));
    },[])
    return <>hi</>
}