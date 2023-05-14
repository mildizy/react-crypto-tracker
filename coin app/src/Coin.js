import React from "react";

function Coin({ name, icon, price, symbol }) {
  return (
    <div className="coin">
      <h1><b className="aname">{name}</b></h1>
      <img src={icon}/>
      <h3><b className="asymbol"> Price: </b><b className="symbol">${price}</b></h3>
      <h3><b className="asymbol"> Symbol: </b><b className="symbol">{symbol}</b></h3>
    </div>
  );
}

export default Coin;
