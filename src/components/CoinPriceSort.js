import React from 'react';

export default function CoinPriceSort({ handleAscDesc }) {
  return (
    <div className='coinList__priceSort'>
      <h4>Sort By Price</h4>
      <button
        className='btn btn--primary btn-Asc'
        aria-label='List by price ascending'
        onClick={() => handleAscDesc('asc')}
      >
        asc
      </button>
      <button
        className='btn btn--primary btn-desc'
        aria-label='List by price descending'
        onClick={() => handleAscDesc('desc')}
      >
        desc
      </button>
    </div>
  );
}
