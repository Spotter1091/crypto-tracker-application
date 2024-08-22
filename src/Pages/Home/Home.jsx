import React, { useContext, useEffect, useState } from 'react';
import './Home.css'
import { CoinContext } from '../../Context/CoinContext';
import {Link} from 'react-router-dom'

export default function Home() {

  const {allCoin, currency } = useContext(CoinContext);
  const [displayCoin, SetDisplayCoin] = useState([])
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
    if(e.target.value === "") {
      SetDisplayCoin(allCoin)
    }
}

 const searchHandler = async (e) => {
  event.preventDefault();
  const coins = await allCoin.filter((item) => {
    return item.name.toLowerCase().includes(input.toLowerCase())
  })
  SetDisplayCoin(coins)
 }

  useEffect(() => {
    SetDisplayCoin(allCoin)
  }, [allCoin])


  return (
    <div className="home">
      <div className="hero">
        <h1>
          Track Your Crypto Safely
        </h1>
        <p>
          Welcome to the world's largest cryptocurrency marketplace.
        </p>
        <form onSubmit={searchHandler}>
          <input type="text"  onChange={inputHandler} list='coinlist' value={input} placeholder="Search here..." required />

        <datalist id='coinlist'>
          {allCoin.map((item, index) =>(<option key={index} value={item.name} />)
          
          )}
        </datalist>


          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p className="two-hr-change">24H Change</p>
          <p className="market-cap">Market Cap</p>
        </div>
        {displayCoin.slice(0, 10).map((item, index) => (
          <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
            <p>{item.market_cap_rank}</p>
            <div>
              <img src={item.image} alt="Bitcoin" />
              <p>{item.name + "_" + item.symbol}</p>
            </div>
            <p>
              {currency.symbol} {item.current_price.toLocaleString()}
            </p>
            <p className={item.price_percentage_24h> 0 ?"green":"red"}>
              {Math.floor(item.price_change_percentage_24h * 100) / 100}</p>
            <p className="market-cap">
              {currency.symbol}
              {item.market_cap.toLocaleString()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
