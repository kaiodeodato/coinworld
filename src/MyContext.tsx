import React,{ createContext } from "react";
 
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

interface MyContextType {
    coins: Coin[];
    setCoins: React.Dispatch<React.SetStateAction<Coin[]>>;
  }
  
  export const MyContext = React.createContext<MyContextType>({} as MyContextType);
  