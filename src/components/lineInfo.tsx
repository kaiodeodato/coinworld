import React from 'react';
import { Link } from 'react-router-dom';


interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number | null;
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
  roi: null | unknown;
  last_updated: string;
}

interface LineInfoProps {
  coin: Coin;
}

const LineInfo: React.FC<LineInfoProps> = ({ coin }) => {
  return (
    <Link  to={`/single/${coin.id}`}>

        <div className='grid grid-cols-2 sm:w-full  gap-16  items-center justify-center hover:bg-indigo-800 pr-20 pl-2 sm:pl-6 py-7 rounded-lg '>
          
            <div className='grid grid-cols-2 items-center justify-between w-full gap-20 sm:gap-36'>

              <div className='flex flex-row items-center '>
                  <img className='min-w-5 w-5 sm:w-10 md:w-14'  src={coin.image} alt="nome" />
                  <h1 className='text-sm lg:text-xl ml-2'>{coin.name}</h1>
              </div>

              <h1 className='text-sm lg:text-xl'>
                {coin.current_price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
              </h1>

            </div>

            <div className='grid grid-cols-2 items-center justify-between w-full  sm:gap-36'>
              <h1 className={`${(coin.price_change_percentage_24h) < 0 ?
                  'text-red-500':
                  'text-green-500'} text-sm lg:text-xl font-bold`}

                  >{(coin.price_change_percentage_24h).toFixed(2)}%</h1>


              <h1 className='text-sm lg:text-xl'>{coin.market_cap.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h1>
            </div>

        </div>
    </Link>
  )
}
export default LineInfo;