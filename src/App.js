// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import TableRow from "./components/TableRow"; 
import './App.css';

const App = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")  
      .then((response) => {
        setCryptoData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Cryptocurrency Prices</h1>
      <table>
        <thead>
          <tr>
            
            <th>Symbol</th>
            <th>Name</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>Volume</th>
            <th>24h Change</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((crypto) => (
            <TableRow key={crypto.id} data={crypto} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;

/*

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableRow from './components/TableRow';
import './App.css';

const App = () => {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false') // Replace with actual API URL
      .then((response) => {
        setCryptos(response.data); // Assuming the response is an array of cryptocurrencies
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Cryptocurrency Data</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price (USD)</th>
            <th>Market Cap (USD)</th>
            <th>24h Change (%)</th>
          </tr>
        </thead>
        <tbody>
          {cryptos.map((crypto) => (
            <TableRow key={crypto.id} crypto={crypto} /> // Use unique ID as key
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
*/