import React from 'react';
import { BsTwitter, BsDiscord, BsFacebook, BsYoutube  } from 'react-icons/bs';
import vector1 from "../assets/bg-footer.png";
import { Link, useLocation  } from 'react-router-dom';




export default function Footer() {
  const location = useLocation();
  return (
    <div className='text-slate-100 flex items-center justify-center relative w-101  translate-y-20 sm:translate-y-0 z-0 mt-10'>
      {
      location.pathname === '/coinworld' && 
        <img className='absolute' src={vector1} alt="" />
      }
      
      <div className='flex flex-col justify-center mt-32 mb-4'>
        <div className='relative flex justify-between mb-5'>
          <BsTwitter className='hover:text-red-400 transition-colors cursor-pointer' size={40} />
          <BsDiscord className='hover:text-red-400 transition-colors cursor-pointer' size={40}/>
          <BsFacebook className='hover:text-red-400 transition-colors cursor-pointer' size={40}/>
          <BsYoutube className='hover:text-red-400 transition-colors cursor-pointer' size={40}/>
        </div>
        <span className='text-sm'>Designed & Built by Kaio Deodato</span>
      </div>
    </div>
  )
}