import React, { useState, useEffect, useContext } from 'react'
import { MyContext } from "../MyContext"
import MiniCoin from './miniCoin';
import LineInfo from './lineInfo';



interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number | null; // Updated type to allow null
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number | null;
  max_supply: number | null;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: null | unknown; // Update the type based on the actual data type
  last_updated: string;
}

export default function Market() {

  const context = useContext(MyContext);
  const { coins, setCoins } = context;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(9);

  if (!context) {
    // Handle the case when the context value is null
    return null;
  }
 

  const handleRangeChange = (start:number, end:number) => {
    setStartIndex(start);
    setEndIndex(end);
  };


  return (
    <div id='market'>
        <div className='mt-20 flex flex-col items-center justify-center '>
            <h1 className='text-2xl md:text-3xl lg:text-5xl mt-20 mb-10 text-center'>Market Update</h1>
        </div>

        <div className='grid grid-cols-2 sm:w-full  gap-16  items-center justify-center bg-gradient-to-r from-red-500 to-blue-500 pr-20 pl-2 sm:pl-6 py-2 rounded-tl-2xl rounded-tr-2xl'>
          
          <div className='grid grid-cols-2 items-center justify-between w-full gap-20 sm:gap-36'>

            <div className='flex flex-row items-center '>
                <h1 className='text-sm lg:text-xl ml-2'>Coin</h1>
            </div>

            <h1 className='text-xs sm:text-sm lg:text-xl'>Price</h1>

          </div>

          <div className='grid grid-cols-2 items-center justify-between w-full  sm:gap-36'>
            <h1 className='text-xs sm:text-sm lg:text-xl'>24h Change</h1>
            <h1 className='text-xs sm:text-sm lg:text-xl'>Market Cap</h1>
          </div>




      </div>

    <div className='w-full flex flex-row justify-center items-center m-auto container' >
        <div className='grid grid-col-1 items-center justify-center  container overflow-x-auto'>
        {coins.slice(startIndex, endIndex).map((coin) => (
            <LineInfo key={coin.id} coin={coin} />
            ))}
        </div>
    </div>

    <div className='flex flex-row justify-center items-center'>
        <button onClick={() => handleRangeChange(0, 9)} className='cursor-pointer m-4 text-2xl px-5 py-2 rounded-full bg-gradient-to-b from-red-300 to-blue-400 text-indigo-700 transition-colors hover:from-blue-900 hover:to-red-900 hover:text-slate-100'>
            1
        </button>

        <button onClick={() => handleRangeChange(9, 18)} className='cursor-pointer m-4 text-2xl px-4 py-2 rounded-full bg-gradient-to-b from-red-300 to-blue-400 text-indigo-700 transition-colors hover:from-blue-900 hover:to-red-900 hover:text-slate-100'>
            2
        </button>

        <button onClick={() => handleRangeChange(18, 27)} className='cursor-pointer m-4 text-2xl px-4 py-2 rounded-full bg-gradient-to-b from-red-300 to-blue-400 text-indigo-700 transition-colors hover:from-blue-900 hover:to-red-900 hover:text-slate-100'>
            3
        </button>

        <button onClick={() => handleRangeChange(27, 36)} className='cursor-pointer m-4 text-2xl px-4 py-2 rounded-full bg-gradient-to-b from-red-300 to-blue-400 text-indigo-700 transition-colors hover:from-blue-900 hover:to-red-900 hover:text-slate-100'>
            4
        </button>
    </div>
      
      
    </div>
  )
}


