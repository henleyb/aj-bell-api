import React from 'react';

export default function CoinDetails({ coinData, selectedCoinID }) {
  const coin = coinData.coins.filter((coin) => coin.id === selectedCoinID);
  console.log('Selected Coin Data', coin);
  return (
    <div className='coinDetails'>
      {coin.length > 0 ? (
        <div>
          <div className='coinDetails__Header'>
            <div className='coinDetails__coinName'>
              <img className='coinDetails__coinIcon' src={coin[0].iconUrl} alt='Coin Icon'></img>
              {coin[0].name}
            </div>
          </div>
          <ul className='coinDetails__listBox'>
            <li>Rank: {coin[0].rank} </li>
            <li>Change: {coin[0].change} </li>
            <li>Price: {coin[0].price}</li>
            <li>Listed At: {coin[0].listedAt}</li>
            <li>Symbol: {coin[0].symbol}</li>
            <li>
              Website URL:
              <a href={coin[0].websiteUrl} target='_blank' rel='noreferrer'>
                {coin[0].websiteUrl ? coin[0].websiteUrl : ' No Website'}
              </a>
            </li>
            <li>Total Supply: {coin[0].totalSupply}</li>
            <li>All Time High: {coin[0].allTimeHigh.price}</li>
          </ul>
        </div>
      ) : (
        'No Coin Selected'
      )}
    </div>
  );
}
