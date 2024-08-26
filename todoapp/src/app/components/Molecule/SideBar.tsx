"use client"

import React from 'react';
import { CiCalendarDate } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";
import { BsCalendar2Date } from "react-icons/bs";

const SideBar = () => {

    const handleTodayClick = () => {
        alert("today")
    }
  return (
    <div className='bg-gray-200 flex flex-col w-48 h-screen p-4'>
      <div className='flex items-center space-x-2 p-2 hover:bg-gray-300 cursor-pointer'>
        <CiCalendarDate />
        <span className="p-4" onClick={handleTodayClick}>Today</span>
      </div>
      <div className='flex items-center space-x-2 p-2 hover:bg-gray-300 cursor-pointer'>
        <MdDateRange />
        <span>Yesterday</span>
      </div>
      <div className='flex items-center space-x-2 p-2 hover:bg-gray-300 cursor-pointer'>
        <BsCalendar2Date />
        <span>Upcoming</span>
      </div>
    </div>
  );
}

export default SideBar;
