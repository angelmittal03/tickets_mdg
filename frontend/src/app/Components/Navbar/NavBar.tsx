"use client"
import Link from 'next/link';
import React from 'react'

const Links = [
    {
        id: 1,
        title:"Home",
        url:"/",
    },
    {
        id: 2,
        title:"Movies",
        url:"/Movies/MoviesIndex",
    },
    {
        id: 3,
        title:"Bus",
        url:"/Bus/BusIndex",
    },
    {
        id: 4,
        title:"Movies",
        url:"/Profile",
    },
]
const Navbar: React.FC = () => {
    return (
      <div  className='fixed left-1 top-5 w-full z-4 ease-in duration-300'>

      <div className='max-w-[1240px] m-auto flex justify-between' items-center p-4>
      <Link href="/">
        <h1 className='font-bold text-4xl'>
        Tickets.mdg
        </h1>
        </Link>
      <ul  className='hidden sm:flex'>
        {Links.map((link)=> (
            <li className='p-4'><Link key={link.id} href={link.url}>
                {link.title}
            </Link></li>
        ))}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full" onClick={()=>{<link href="/LoginPage"></link>}} >Login</button>
        </ul>
        </div>
      </div>
    );
  };
  
  export default Navbar;