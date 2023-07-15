"use client"
import React, { useState } from 'react';
import './page.module.css';

const busmenu : React.FC = () => {
  const [startDestination, setStartDestination] = useState('');
  const [endDestination, setEndDestination] = useState('');

  const handleStartDestinationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStartDestination(event.target.value);
  };

  const handleEndDestinationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setEndDestination(event.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const response =await fetch(`/api/bus/path?start=${startDestination}&end=${endDestination}`)
    const movies = await response.json()
    getSearchResults(movies)

    // Handle form submission or any other logic here
  };

  return (
  <>
    <div className='py-24 '>
      <form onSubmit={handleFormSubmit} className="flex justify-center  ">
        <label className="rounded-full">
          <div className="px-2">From:</div>
          <select className="rounded-full px-2 py-2 bg-red-400" value={startDestination} onChange={handleStartDestinationChange}>
            <option value="">Select start destination</option>
            <option value="destination1">Delhi </option>
            <option value="destination2">Roorkee</option>
            <option value="destination3">Dehradun</option>
          </select>
        </label>
        
        <label className="px-4">
        <div className="px-2">To:</div>
          <select className="rounded-full px-2 py-2 bg-red-400" value={endDestination} onChange={handleEndDestinationChange} >
            <option value="">Select end destination</option>
            <option value="destination1">Delhi</option>
            <option value="destination2">Roorkee</option>
            <option value="destination3">Dehradun</option>
          </select>
        </label>
        <div className="px-2 py-6">
        <button type="submit" className="bg-black text-white rounded px-1 py-1 hover:bg-black/60">Submit</button>
        </div>
      </form>
    </div>
    </>
  );
};

export default busmenu;
