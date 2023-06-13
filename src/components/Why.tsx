import React, { useState, useEffect, useContext } from 'react'
import { BsDiscord, BsBoxes } from 'react-icons/bs';
import { FaWallet, FaPencilRuler, FaHandHoldingUsd, FaChessKnight } from 'react-icons/fa';
import { AiFillThunderbolt } from 'react-icons/ai';
import CardWhy from './cardWhy';
import vector1 from "../assets/bitcoinhand.png";

export default function Why() {


  return (
    <div id='choose' className='container flex flex-col items-center justify-center m-auto'>
        <div className='mt-20 flex flex-col items-center justify-center '>
            <h1 className='text-3xl md:text-5xl lg:text-6xl mb-10 text-center'>
                WHY 
                 <span className='ml-2 font-bold bg-gradient-to-r from-blue-800 to-red-500 bg-clip-text text-transparent'>
                 CHOOSE US
                </span>
            </h1>
        </div>

        <div className='flex flex-row flex-wrap items-center justify-center'> 
            <div className=''>
                <CardWhy
                    title="CONNECT YOUR WALLET"
                    context="Use Trust Wallet, Metamask or to connect to the app."
                    icon={<FaWallet size={40}/>}/>
                <CardWhy
                    title="SELECT YOUR QUANTITY"
                    context="Upload your crypto and set a title, description and price."
                    icon={<FaPencilRuler size={40}/>}/>
                <CardWhy
                    title="CONFIRM TRANSACTION"
                    context="Earn by selling your crypto on our marketplace."
                    icon={<AiFillThunderbolt size={40}/>}/>

            </div>


            <div>
            <img className='w-48 sm:w-96' src={vector1} alt="" />
            </div>
            


            <div>
                <CardWhy
                    title="RECEIVE YOUR OWN NFTS"
                    context="Invest all your crypto at one place on one platform."
                    icon={<FaHandHoldingUsd size={40}/>}/>
                <CardWhy
                    title="TAKE A MARKET TO SELL"
                    context="Discover, collect the right crypto collections to buy or sell."
                    icon={<FaChessKnight size={40}/>}/>
                <CardWhy
                    title="DRIVE YOUR COLLECTION"
                    context="We make it easy to Discover, Invest and manage."
                    icon={<BsBoxes size={40}/>}/>

            </div>
        </div>

    </div>
  )
}


