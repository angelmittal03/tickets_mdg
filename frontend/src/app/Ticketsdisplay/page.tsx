import React from 'react'

function tickethistory() {
  return (
    <div>
        <div className="flex mt-28 w-full h-12 bg-blue-200 ">
        <h1 className="px-3 py-2.5">Your Tickets</h1>
        </div>
        <div className="mt-12">
            <div className="grid grid-cols-2">
            <div className="flex w-full h-auto bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg">
               <div className="grid grid-cols-2 gap-48 mb-4">
                <div className="flex items-stretch place-content-start">
                    <h1 className="text-white text-xl mx-4 mt-2">Ticket 1</h1>
                </div>
                <div className="flex items-stretch place-content-end">
                    <ul className="text-white text-base mx-4 mt-2">
                        <li className="font-semibold">Movie name </li>
                        <li className="font-light">Hall</li>
                        <li className="font-light">Time</li>
                        <li className="font-light">Price</li>                  
                    </ul>
                </div>
                </div>
               </div>
                
            </div>
        </div>
    </div>
  )
}

export default tickethistory