import React from 'react';

export default function CoinList({ coinData, handleCoinSelect, handleAscDesc }) {
  console.log('coin data!', coinData.coins);

  return (
    <div className='coinList'>
      <div className='coinList__priceSort'>
        <h4>Sort By Price</h4>
        <button className="btn btn--primary btn-Asc" aria-label='List by price ascending' onClick={() => handleAscDesc('asc')}>
          asc
        </button>
        <button className="btn btn--primary btn-desc" aria-label='List by price descending' onClick={() => handleAscDesc('desc')}>
          desc
        </button>
      </div>
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
