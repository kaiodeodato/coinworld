import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCoinHistory } from '../api';
import CoinSet from '../components/CoinSet';
import Loading from '../components/loading';



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

export default function Single() {
  let { id } = useParams();
  const [coin, setCoin] = useState<CoinEssencial | null>(null);

  useEffect(() => {
    getCoinHistory(id).then(data => setCoin(data));
  }, [id]);

  // console.log(coin)

  return (
    <div>
      {coin ? <CoinSet coin={coin} /> : <Loading/>}
    </div>
  );
}
