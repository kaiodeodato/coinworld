
export async function getAllCoins(){
    const res =await  fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,binancecoin,cardano,xrp,dogecoin,polkadot,bitcoincash,litecoin,chainlink,stellar,filecoin,theta,vechain,tron,ethereumclassic,eos,neo,cosmos,aave,monero,maker,iota,dash,compound,synthetix,zcash,polygon,decred,yearn.finance,sushiswap,basicattentiontoken,uma,tezos,ontology,waves,ravencoin,algorand,ren,omgnetwork,0x,nem,elrond,kusama,hederahashgraph,celo,bitcoinsv,nexo,enjincoin,zilliqa,tether")
    const data = await res.json()

    return data
}

export async function getCoinHistory(id:string | undefined){
    const res =await  fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
    const data = await res.json()

    return data
}