import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CoinObject } from '../functions/convertObject';
import List from "../components/Dashboard/List";
import CoinInfo from '../components/Coin/CoinInfo';
import Header from '../components/Common/Header';
import { getCoinData } from '../functions/getCoinData';
import { getCoinPrices } from '../functions/getCoinPrice';
import LineChart from '../components/Coin/LineChart';
import SelectDays from '../components/Coin/SelectDays';
import { settingChartData } from '../functions/settingsChartData';
import PriceType from '../components/Coin/priceType';

function CoinPage() {
  const { id } = useParams();
  const [coinData, setCoinData] = useState([]);

  const [days, setDays] = useState(60);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  const [chartData, setChartData] = useState({});
  const [priceType, setPriceType] = useState('prices');

  useEffect(()=>{
    if(id){
      getData();
    }
      
  },[id]);
    
    async function getData(){
      const data = await getCoinData(id);
      if(data){
        CoinObject(setCoinData, data);
        const prices = await getCoinPrices(id, days, priceType);
        if(prices.length > 0){
          console.log(prices); 
          
          settingChartData(setChartData, prices)
          setIsLoading(false);
        }
      }
     
    }
    //Handles days change
    const handleDaysChange = async (event) => {
      setIsLoading(true);
      setDays(event.target.value);
      
      const prices = await getCoinPrices(id, event.target.value, priceType);
      if(prices.length > 0){
        settingChartData(setChartData, prices)
        setIsLoading(false);
      }
      
    };

    //Handle priceType change

    const handlePriceTypeChange = async (event, newType) => {
      setIsLoading(true);
      setPriceType(newType);

      const prices = await getCoinPrices(id, days, newType);
      if(prices.length > 0){
        settingChartData(setChartData, prices)
        setIsLoading(false);
      }
      
    };

  return (
    <div>
      {
        isLoading ? <p className='loader'>Please Wait...</p> :
        <>
          <Header />
          {
            !fetchError && 
            <>
              <div className="grey-wrapper" style={{ padding:"0rem 1rem" }}>
                  <List coin={coinData} />
              </div>
              <div className="grey-wrapper">
                  <SelectDays days={days} handleDaysChange={handleDaysChange} />
                  <PriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange} />
                  <LineChart chartData={chartData} priceType={priceType} />
              </div>
              <CoinInfo heading={coinData.name} desc={coinData.desc} />
            </>

          } 
          {
            fetchError && <p className='error'>{`Error Message: ${fetchError}`}</p>
          }
        </>
      }
    </div>
  )
}

export default CoinPage
