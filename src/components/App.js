import React, { useState, useEffect } from 'react';
import CoinList from './CoinList';
import CoinDetails from './CoinDetails';
import CoinPriceSort from './CoinPriceSort';
import Header from './Header';
import '../css/App.css';

function App() {
  const [coinData, setCoinData] = useState(null);
  const [selectedCoinID, setSelectedCoinID] = useState(null);
  const [refreshCoins, setRefreshCoins] = useState(true);
  const [ascDescOrder, setAscDescOrder] = useState('desc');

  const url = 'https://api.coinranking.com/v1/public/coins?base=GBP&amp;timePeriod=7d&sort=price';
  const refreshTime = 3000;

  // Grab the coin data from CoinRanking.com
  useEffect(() => {
    fetch(url + '&order=' + ascDescOrder)
      .then((res) => {
        if (res.ok) {
          console.log('Success');
        } else {
          console.log('Unsuccessful');
        }
        return res.json();
      })
      .then((json) => {
        setCoinData(json.data);
      })
      .finally(() => {
        // After calling API we set a timeout to fire it again in the future
        setTimeout(() => {
          setRefreshCoins(!refreshCoins);
        }, refreshTime);
      })
      .catch((error) => console.log('Error:', error));
    return () => {};
  }, [refreshCoins, ascDescOrder]);

  // Handlers
  function handleCoinSelect(id) {
    setSelectedCoinID(id);
  }

  function handleAscDesc(direction) {
    setAscDescOrder(direction);
  }

  return (
    <div className='App'>
      <Header />
      <CoinPriceSort handleAscDesc={handleAscDesc} />

      <section className='coinResults'>
        {coinData ? <CoinList coinData={coinData} handleCoinSelect={handleCoinSelect} /> : <p>"No Data"</p>}
        {coinData ? <CoinDetails coinData={coinData} selectedCoinID={selectedCoinID} /> : <p>"No Data"</p>}
      </section>
    </div>
  );
}

export default App;
