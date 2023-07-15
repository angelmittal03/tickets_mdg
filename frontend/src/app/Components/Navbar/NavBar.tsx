"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { stringify } from 'querystring';
import { Anybody } from 'next/font/google';

import { useState } from 'react';
import AuthDialogBox from '../AuthForm/auth';


const Links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Movies",
    url: "/Movies/MoviesIndex",
  },
  {
    id: 3,
    title: "Bus",
    url: "/Bus/BusIndex",
  }
  
];

const Navbar: React.FC = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const router = useRouter();
  const handleLinkClick = (url: string) => {
    router.push(url);
  
  };

  return (
    <div className='fixed left-1 top-5 w-full z-4 ease-in duration-300'>
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4'>
        <h1 className='font-bold text-4xl' onClick={() => handleLinkClick('/')}>
          Tickets.mdg
        </h1>
        <ul className='hidden sm:flex'>
          {Links.map((link) => (
            <li className='p-4' key={link.id} onClick={() => handleLinkClick(link.url)}>
              {link.title}
            </li>
          ))}
           {/* {isSignedIn ? ( */}
           <li className='p-4' onClick={() => handleLinkClick('/Profile')}>
              Profile
            </li>
            <li className='p-4' onClick={()=> {setIsSignedIn(true)}}>
           <AuthDialogBox isLog={isSignedIn} />
            </li> 
        </ul>
      </div>
    </div>
  );
};

export default Navbar;




