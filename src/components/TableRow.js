// src/TableRow.js

import React from "react";

const TableRow = ({ data }) => {
  return (
    <tr>
      <td><img src={data.image} alt={data.name} width="30" height="30" /></td>
      <td>{data.name}</td>
      <td>{data.symbol.toUpperCase()}</td>
      <td>{data.current_price}</td>
      <td>{data.market_cap}</td>
      <td>{data.price_change_percentage_24h.toFixed(2)}%</td>
    </tr>
  );
};

export default TableRow;
