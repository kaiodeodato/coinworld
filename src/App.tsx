import React, { useState, useEffect } from 'react';
import { getAllCoins, getCoinHistory } from './api';
import { allCoins } from './allCoins';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Single from './pages/Single';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { MyContext } from "./MyContext";

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


function App() {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    getAllCoins()
    .then(data => setCoins(data))
  }, []);

  // console.log(coins);

  return (
    <MyContext.Provider value={{ coins, setCoins }}>
      <Router> 
      <div className='htmlclass flex flex-col h-screen items-center bg-indigo-1000 overflow-x-hidden'>
        <Navbar />
        <main className=' flex-1 text-white mt-20 z-10'>
          <Routes>
            <Route path="/coinworld/single/:id" element={<Single/>}/>
            <Route path="/coinworld" element={<Home/>}/>
          </Routes>
        </main>

        <Footer />

      </div>
      </Router>
    </MyContext.Provider>
    
  );
}

export default App;
