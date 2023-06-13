import React, { useState, useEffect, useContext } from 'react'
import { MyContext } from "../MyContext"
import MiniCoin from './miniCoin';

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

export default function Hero() {
  const context = useContext(MyContext);
  if (!context) {
    // Handle the case when the context value is null
    return null;
  }
  const { coins, setCoins } = context;


  return (
    <div >
      <div  id="home">
        <div className='pt-32 flex flex-col items-center justify-center'>
          <h1 className='text-5xl md:text-6xl lg:text-7xl  text-center'>TRACK AND TRADES</h1>
          <h1 className='text-5xl md:text-6xl lg:text-7xl text-center font-bold bg-gradient-to-r from-blue-800 to-red-500 bg-clip-text text-transparent md:mt-7'>CRYPTO CURRENCIES</h1>
        </div>
        <div className='hidden sm:grid sm:grid-cols-2  lg:grid-cols-4  mt-10'>
        {coins.slice(0, 4).map((coin) => (
            <MiniCoin key={coin.id} coin={coin} />
          ))}
        </div>
        <div className='grid sm:hidden grid-cols-1 mt-16'>
          <a href="#" className='mx-auto w-44 flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-blue-500 text-xl p-3 hover:bg-gradient-to-r hover:from-blue-300 hover:to-red-200 hover:text-slate-700 transition '>See Prices</a>
        </div>
        
      </div>
    </div>
  )
}


