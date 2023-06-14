import React from 'react';
import DOMPurify from 'dompurify';

interface ImageInter {
  large: string,
  small: string,
  thumb: string
}

interface marketInter {
  current_price: currentInter,
  market_cap_change_percentage_24h: number,
}

interface currentInter {
  bmd: number
}

interface descriptionInter {
  en: string
}


interface CoinEssencial {
  id: string,
  image: ImageInter,
  name: string,
  market_cap_rank: number,
  market_data: marketInter,
  symbol: string,
  description: descriptionInter
}

interface CoinSetProps {
  coin: CoinEssencial;
}

const CoinSet: React.FC<CoinSetProps> = ({ coin }) => {

  const sanitizedHTML = DOMPurify.sanitize(coin.description.en);
  const modifiedHTML = sanitizedHTML.replace(/<a/g, '<a class="transition-colors text-red-500 hover:text-red-300"');

  return (
    <div className='flex flex-col mt-20 sm:flex-row items-center justify-center text-center'>

        <div className='mb-20 sm:mb-0 flex flex-col'>
          <img src={coin.image.large}></img>
          <span  className='text-4xl mt-5'>{coin.name}</span>
          <span className='text-2xl mt-7'>Rank: #{coin.market_cap_rank}</span>
        </div>

        <div>
          <div className='flex flex-row items-center justify-between'>
            <div className='flex'>
              <span>24h Change:</span>
              <span className={`${(coin.market_data.market_cap_change_percentage_24h) < 0 ?
                'text-red-500' : 
                'text-green-500'}
              ml-2
              `}>{(coin.market_data.market_cap_change_percentage_24h).toFixed(2)}%</span>
            </div>

            <div className='flex'>

              <span>Price:</span>
              <span className='text-green-500 ml-2'>{coin.market_data.current_price.bmd.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
              </span>

            </div>
            <span>Symbol: {coin.symbol}</span>
          </div>
         
            <div className='w-96 sm:w-97 h-96 p-2 m-5 text-left overflow-y-scroll'>
              <code className='w-full' dangerouslySetInnerHTML={{ __html: modifiedHTML }} />
            </div>

        </div>
       
       
    </div>
  )
}
export default CoinSet;

