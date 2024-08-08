import React, { useState } from 'react';
import "/src/index.css";
import Buttons from './Buttons';

export default function Navbar() {

  const links = [
    {
        "id" : "1",
        "url" : "",
        "linkTitle" : "Home"
    },
    {
        "id" : "2",
        "url" : "",
        "linkTitle" : "About us"
    },
    {
        "id" : "3",
        "url" : "",
        "linkTitle" : "certifications"
    },
    {
        "id" : "4",
        "url" : "",
        "linkTitle" : "careers"
    },
    {
        "id" : "5",
        "url" : "",
        "linkTitle" : "seminars"
    },
    {
        "id" : "6",
        "url" : "",
        "linkTitle" : "tech blogs"
    },
    {
        "id" : "7",
        "url" : "",
        "linkTitle" : "iportal login"
    },
]

  return (
    <div className='flex flex-row md:justify-evenly justify-between items-center bg-slate-100 bg-transparent md:pt-10 pt-0 border-b border-slate-300'>
      <div className="log">
        <img className='w-44' src="http://ezitech.org/wp-content/uploads/2024/07/white-1.png" alt="Logo" />
      </div>


      <div className="ham-sub-menu flex flex-col md:flex-row md:items-center gap-7 absolute md:static top-16 right-20 md:flex md:bg-transparent bg-blue-300 px-7 py-7" >
        {links.map(({ id, url, linkTitle }) => (
          <div className="links " key={id}>
            <a className='font-semibold text-white uppercase md:hover:text-blue-300 hover:text-blue-600' href={url}>{linkTitle}</a>
          </div>
        ))}
      </div>

      <div className="btns flex items-center gap-5">
      <div>
          <img className='w-7 h-7 p-1 border-2 border-black invert cursor-pointer md:hidden ham-menu' src="https://cdn-icons-png.flaticon.com/128/2976/2976215.png" alt="Search" />
        </div>
        <div>
          <img className='w-7 h-7 p-1 border-2 border-black invert cursor-pointer' src="https://cdn-icons-png.flaticon.com/128/54/54481.png" alt="Search" />
        </div>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png" className='w-7 cursor-pointer invert' alt="User" />
        </div>
      </div>
    </div>
  );
}
