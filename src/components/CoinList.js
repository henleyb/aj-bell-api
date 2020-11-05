import React from 'react';

export default function CoinList({ coinData, handleCoinSelect, handleAscDesc }) {
  return (
    <div className='coinList'>
      <ul className='coinList__listBox'>
        {coinData.coins.map((coin) => (
          <li
            class='coinList__listItem'
            style={{ backgroundImage: "url('" + coin.iconUrl + "')" }}
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
