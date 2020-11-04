import React from 'react';

export default function CoinDetails({ coinData, selectedCoinID }) {
  console.log('chosen Coin Details', selectedCoinID);
  console.log('coin price', coinData);
  const coin = coinData.coins.filter((coin) => coin.id === selectedCoinID);
  console.log(coin);
  return (
    <div className='coinDetails'>
      {coin.length > 0 ? (
        <ul>
          <li className='coinName'>{coin[0].name}</li>
          <img className='coinIcon' src={coin[0].iconUrl} alt='Coin Icon'></img>
          <li>{coin[0].price}</li>
          <li>{coin[0].type} </li>
        </ul>
      ) : (
        'No Coin Selected'
      )}
    </div>
  );
}
