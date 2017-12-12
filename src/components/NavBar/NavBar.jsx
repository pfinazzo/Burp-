import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'

const NavBar = (props) => {
  return (
    <header> 
      <h1 className="nav">
      <Link to="/login">Login</Link>
        <Link className="home-link" to="/beers">Burp</Link> 
        <Link className="cart-link" to="/checkout">Cart</Link>
      </h1>
    </header>
  )
}

export default NavBar
