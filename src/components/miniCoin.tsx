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

interface MiniCoinProps {
  coin: Coin;
}

const MiniCoin: React.FC<MiniCoinProps> = ({ coin }) => {
  return (
    <Link className=' flex-row justify-center items-center m-auto hover:translate-y-2 transition-transform' to={`/single/${coin.id}`}>
    <div className='flex flex-col items-center justify-center text-center'>
        <img className='mt-5' width={85} src={coin.image} alt="nome" />
        <div className='mt-4'>
            <h1 className='text-2xl'>{coin.name}</h1>

            <h1 className={`${(coin.price_change_percentage_24h) < 0 ?
            'text-red-500':
            'text-green-500'} text-2xl font-bold`}

            >{(coin.price_change_percentage_24h).toFixed(2)}%</h1>
            <h1 className='text-xl'>{coin.current_price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h1>
        </div>
    </div>
    </Link>
  )
}
export default MiniCoin;