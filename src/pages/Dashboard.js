import React, { useEffect, useState } from 'react'
import TabsComponent from '../components/Dashboard/Tabs'
import Search from '../components/Dashboard/Search';
import PaginationComponent from '../components/Dashboard/Pagination';
import BackToTop from '../components/Common/BackToTop';
import Header from '../components/Common/Header';
import { get100Coins } from '../functions/get100Coins';


function DashboardPage() {
  const [coin, setCoin] = useState([]);
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  //Pagination
  const [paginatedCoin, setPaginatedCoin] = useState([]);
  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
    let previousIndex = (value - 1) * 5;
    setPaginatedCoin(coin.slice(previousIndex, previousIndex + 20));
  };

  const onSearchChange = (e)=>{ 
    setSearch(e.target.value);
  }

  let filteredCoins = coin.filter(
    (item)=>item.name.toLowerCase().includes(search.toLowerCase())
    || item.symbol.toLowerCase().includes(search.toLowerCase())
  );


  useEffect(()=>{
    // const fetchCoin = ()=>{
    //     axios.get(
    //     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    //   )
    //   .then((response)=>{
    //     console.log("Response>>>>", response);
    //     setCoin(response.data);
    //     setPaginatedCoin(coin.slice(0, 20));
    //     setIsLoading(false);
    //     setFetchError(null);
    //   }) 
    //   .catch((error)=>{
    //     setFetchError(error.message);
    //     setIsLoading(false);
    //   });
    // }


    setTimeout(()=>{
      // fetchCoin();
      getData();
    }, 2000)

  },[]);

  const getData = async ()=>{
    const myCoins = await get100Coins();
    if(myCoins){
      setCoin(myCoins);
      setPaginatedCoin(myCoins.slice(0, 20));
      setIsLoading(false);
      setFetchError(null);
    }
  } 

  return (
    <main>
      {isLoading ? <p className='loader'>Please wait....</p> :
      <>
        <Header />
        { !fetchError && 
          <>
            <BackToTop />
            <Search  search={search} onSearchChange={onSearchChange} />
            <TabsComponent coin={search ? filteredCoins : paginatedCoin} />
            {!search && (<PaginationComponent page={page} handlePageChange={handlePageChange} />) }
          </>
        }

        {
          fetchError && <p className='error'>{`Error Message: ${fetchError}`}</p>
        }
      </>
      }
    </main>   
    
  )
}

export default DashboardPage
