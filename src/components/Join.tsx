import React from 'react'

export default function Join() {

  return (
    <div id='join' className=''>
      <div className='mt-40 flex flex-col items-center justify-center'>
        <h1 className='text-5xl md:text-6xl lg:text-8xl font-bold text-center'>JOIN US VIA</h1>
        <h1 className='text-5xl md:text-6xl lg:text-9xl text-center font-bold bg-gradient-to-r from-blue-800 to-red-500 bg-clip-text text-transparent md:mt-7'>DISCORD</h1>
        <span className='text-base sm:text-xl mt-5'>Invest and manage all your crypto at one place.</span>
      </div>
      
      
      <div className='grid  grid-cols-1 mt-16'>
        <a href="https://discord.com/" className='mx-auto w-56 flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-blue-500 text-xl py-5 px-10 hover:bg-gradient-to-r hover:from-blue-300 hover:to-red-200 hover:text-slate-700 transition '>Join Us</a>
      </div>
      
    </div>
  )
}


