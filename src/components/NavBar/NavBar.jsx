import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'


const NavBar = (props) => {
  let nav = props.user ?
  
    <div className="container">
      <h1 className="center nav">Burp</h1>
      <span className="center nav">WELCOME, {props.user.name}</span>
    <header>
      <h1 className="center nav">
      <Link to='' className='btn btn-primary big' onClick={props.handleLogout}>Log Out</Link>
      <Link className="btn btn-primary big" to="/beers">Beers</Link> 
        <Link className="btn btn-primary big" to="/checkout">Cart</Link>
        </h1>
        </header>
        </div>
                      :
    <div className="center nav">
      <header className="center nav">
      <h1 className="center nav">
      <Link className="btn btn-primary big" to="/login">Login</Link>
        <Link className="btn btn-primary big" to="/beers">Beers</Link>
        <Link className="btn btn-primary big" to="/signup">Sign Up</Link> 
      </h1>
    </header>
    </div>;
  return (<div className="center nav">
  {nav}
  </div>
  );
}

export default NavBar
