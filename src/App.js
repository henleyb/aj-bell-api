import React, { useState, useEffect } from 'react';
import CoinList from './components/CoinList';
import CoinDetails from './components/CoinDetails';
import './App.css';

function App() {
  const [coinData, setCoinData] = useState(null);
  const [selectedCoinID, setSelectedCoinID] = useState(null);
  const [refreshCoins, setRefreshCoins] = useState(true);
  const [ascDescOrder, setAscDescOrder] = useState('desc');

  const url = 'https://api.coinranking.com/v1/public/coins?base=GBP&amp;timePeriod=7d';
  const refreshTime = 60000;

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
        console.log('JSON!', json);
        setCoinData(json.data);
      })
      .finally(() => {
        // After calling API we set a timeout to fire it again in the future
        setTimeout(() => {
          setRefreshCoins(!refreshCoins);
          console.log('Coins Refreshed');
          console.log('APP!', coinData);
        }, refreshTime);
      })
      .catch((error) => console.log('Error:', error));
    return () => {};
  }, [refreshCoins]);

  // Handlers
  function handleCoinSelect(id) {
    console.log('coin clicked!', id);
    setSelectedCoinID(id);
  }

  function handleAscDesc(direction) {
    console.log('ASCDESC!', direction);
    setAscDescOrder(direction);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>AJ Bell - BTC API</h1>
      </header>
      <h2>Bitcoin and Altcoin List</h2>

      <section className='coinResults'>
        {coinData ? (
          <CoinList coinData={coinData} handleCoinSelect={handleCoinSelect} handleAscDesc={handleAscDesc} />
        ) : (
          <p>"No Data"</p>
        )}
        {coinData ? <CoinDetails coinData={coinData} selectedCoinID={selectedCoinID} /> : <p>"No Data"</p>}
      </section>
    </div>
  );
}

export default App;
