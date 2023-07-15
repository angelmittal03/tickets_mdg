import React from "react";
import Image from "next/image";
import Opp from "../../../public/Oppenheimercover.jpg"

export default function Profile() {
    return(
        <div >
            <div className="flex mx-28 mt-48 w-4/5 h-96 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg">
                <div className="mt-12 mb-8 ">
                <div className="mx-48">
                <Image className="rounded-full w-52 h-48" src={Opp} alt="Profile Image"></Image> 
                </div>
                <div className="flex h-8 mx-48 mt-8">
                  <div><h1 className=" text-xl font-semibold px-4">Harshit Singh</h1></div>
                </div>
                <div className="flex h-8 mx-48 mt-2">
                  <div><h1 className=" text-lg px-4">Sample@abc.com</h1></div>
                </div>
                </div>
                <a href="/Ticketsdisplay" className="flex items-center mt-36 ml-18 text-2xl text-black-500">
  <h1 className="mr-2">Your Transactions</h1>
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
  </svg>
</a>

            </div>
            
        </div>
  
    )
}

{/* <Image className="rounded-full w-32 h-32" src={Opp} alt="Profile Image"></Image> */}