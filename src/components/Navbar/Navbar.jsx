import { useContext } from 'react'
import logo from "../../assets/img/new-logo1.png"
import './Navbar.css'
import { CoinContext } from '../../Context/CoinContext'
import { Link } from "react-router-dom";




export default function Navbar() {

  const { setCurrency } = useContext(CoinContext)

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  }

    return (
      <div className='navbar'>
        <Link to={'/'}>
          <img src={logo} className="logo" alt="logo" />
          </Link>
        <div className='nav-right'>
          <select onChange={currencyHandler}>
            <option value="usd">USD</option>
            <option value="eur">eur</option>
            <option value="inr">inr</option>
          </select>
          
        </div>    
        </div>
    )
  }
