import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'


const NavBar = (props) => {
  return (
    <div>
      <h1 className="center">Burp</h1>
    <header>
      <h1 className="nav">
      <Link className="btn btn-primary big" to="/login">Login</Link>
      <Link className="btn btn-primary big" to="/signup">Sign Up</Link>
        <Link className="btn btn-primary big" to="/beers">Beers</Link> 
        <Link className="btn btn-primary big" to="/checkout">Cart</Link>
      </h1>
    </header>
    </div>
  )
}

export default NavBar
