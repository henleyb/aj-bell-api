import React from 'react';

export default function CoinList({ coinData, handleCoinSelect }) {
  console.log('coin data!', coinData.coins);
  return (
    <div className='coinList'>
      <ul>
        {coinData.coins.map((coin) => (
          <li
            onClick={() => {
              handleCoinSelect(coin.id);
            }}
          >
            {coin.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
