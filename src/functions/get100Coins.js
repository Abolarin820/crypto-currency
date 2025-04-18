import axios from 'axios';

export const get100Coins = ()=>{
   const myCoins = axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response)=>{
        console.log("Response>>>>", response);

        return response.data;
        // setFetchError(null);
      }) 
      .catch((error)=>{
        // setFetchError(error.message);
    });

    return myCoins;
}