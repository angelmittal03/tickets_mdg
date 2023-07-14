"use client";

import { Card, CardBody, CardFooter, Button } from "@material-tailwind/react";

import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Payment(){
    const rows = 8, cols=9 , amount= 370.98;
    const [isSelected,setIsSelected] = useState(Array(cols).fill(false).map(() => Array(rows).fill(false)))
    const axios = require("axios");
    const seats_matrix:() => any[]=()=> {
      return [...Array(rows).keys()].map(i => i+1).map((row_no) => {
        return <div className="m-2">{[...Array(cols).keys()].map(i => i+1).map((col_no) => {
          return (<Button className="p-1 rounded-none m-2" variant={isSelected[row_no][col_no]?'filled':'outlined'} onClick={()=>handleSeatSelection(row_no,col_no)}>{row_no},{col_no}</Button>)
        })}</div>
      });
    }
    const handleSeatSelection=(row:number,col:number)=>{
      let matrix = isSelected.slice().slice();
      matrix[row][col]= !matrix[row][col];
      setIsSelected(matrix)
    }
  
    const handlePayment =()=>{
      
      
      let data = JSON.stringify({
        "email": null,
        "name": "casper",
        "amount": amount,
        "phone": 8789686148
      });
  
      let config = {
        method: "put",
        maxBodyLength: Infinity,
        url: "http://127.0.0.1:8000/payment/",
        headers: {
          "Content-Type": "text/plain",
        },
        data: data,
      };
  
      axios
        .request(config)
        .then((response:any) => {
          let link = response.data["transaction_url"];
          console.log(link);
          window.open(link, "_self");
        })
        .catch((error:any) => {
          console.log(error);
        });
    };
  
    return (
      <>
        {/* <Head>Hi </Head> */}
        <main className="text-dark w-full min-h-screen mt-[10rem] text-[26px]">
          <div className="flex justify-between items-center bg-[#1D3557]/75 py-[1.5rem] ">
            <div>
              <p>Movie Name:</p>
              <p>Location:</p>
            </div>
            <div className="border px-[22px] py-[2px] rounded-[10px]">
              <p>1 Ticket</p>
            </div>
          </div>
          <div>
            <Card className="bg-[#F1FAEE]">
              <CardBody className='grid justify-around'>{seats_matrix()}</CardBody>
              <CardFooter className="pt-0 self-center">
                <Image
                  src="/screenthisway.svg"
                  alt={
                    "Screen is this way, in case you don't have internet connection"
                  }
                  width="397"
                  height="38"
                ></Image>
              </CardFooter>
            </Card>
            <div className="flex justify-center mt-6"><Button className="items-center bg-[#E63946] normal-case" onClick={handlePayment}>PAY Rs. {amount}</Button></div>
          </div>     </main></>)
}