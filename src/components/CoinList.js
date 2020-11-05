import React from 'react';

export default function CoinList({ coinData, handleCoinSelect, handleAscDesc }) {
  console.log('coin data!', coinData.coins);

  return (
    <div className='coinList'>
      <button onClick={() => handleAscDesc("asc")}>asc</button>
      <button onClick={() => handleAscDesc("desc")}>desc</button>
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
