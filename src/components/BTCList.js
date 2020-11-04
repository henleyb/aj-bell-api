import React from 'react';

export default function BTCList({ coinData }) {
  console.log('coin data!', coinData);
  return <p>{coinData.coins.map((coin) => `<p>${coin.name}</p>`)}</p>;
}
