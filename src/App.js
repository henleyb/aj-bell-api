import React, { useState, useEffect } from 'react';
import BTCList from './components/BTCList';
import './App.css';

function App() {
  const [coinData, setCoinData] = useState({});
  const url = 'https://api.coinranking.com/v1/public/coins?base=GBP&amp;timePeriod=7d';

  // Grab the coin data from CoinRanking.com
  useEffect(() => {
    fetch(url)
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
      .catch((error) => console.log('Error:', error));
    return () => {};
  }, []);

  console.log(coinData);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>AJ Bell - BTC API</h1>
      </header>
      <section>
        <h2>BTC List</h2>
        <BTCList coinData={coinData} />
      </section>
    </div>
  );
}

export default App;
