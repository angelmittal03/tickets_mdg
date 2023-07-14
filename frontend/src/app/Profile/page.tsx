import React from "react";
import Image from "next/image";
import Opp from "../../../public/Oppenheimercover.jpg"

export default function Profile() {
    return(
        <>
        <main>
        <div className="flex justify-center h-screen px-48 py-24 ">
        <div className="bg-blue-200 p-6 w-1/3 h-2/3 rounded-lg  ml-10 mx-auto">
        <div className="flex justify-center items-center mb-8">
        <Image className="rounded-full w-32 h-32" src={Opp} alt="Profile Image"></Image>
        </div>
       <div className="text-center text-xl text-inherit "> User01 </div>
       <div className="text-center text-lg text-inherit "> User01@gmail.com </div>
  </div>
</div>


            {/* <div className="@container px-15 bg-red-500 px-8 mx-auto  ">
             Weather 
            </div> */}
        </main>
        </>
    )
}
