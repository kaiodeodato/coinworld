import React,{ ReactNode } from 'react';




interface CardWhyProps {
  title: string;
  context: string;
  icon: ReactNode;
}



const CardWhy: React.FC<CardWhyProps> = ({ title, context, icon }) => {
  return (
    <div className='cursor-default lg:w-96a flex flex-row items-center justify-between p-4 m-2 bg-indigo-950 border border-slate-600 rounded-3xl hover:bg-indigo-1000 transition-colors'>
        <div className='flex flex-row items-center w-18 rounded-xl justify-center m-2 p-4 bg-gradient-to-r from-red-500 to-blue-500'>
            {icon}
        </div>

        <div className='pl-8 p-4'>
            <h1 className='text-lg md:text-xl font-bold'>
                {title}
            </h1>
            <span className='text-sm lg:text-base'>
                {context}
            </span>
        </div>
    </div>
 
  )
}
export default CardWhy;