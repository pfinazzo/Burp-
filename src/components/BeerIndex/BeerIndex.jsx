
import React from 'react';
import './BeerIndex.css';
import { Link } from 'react-router-dom';

const BeerIndex = (props) => {
  return (
    <div>
  <h2 className="center">{props.cart ? <p>Cart: {props.cartLength} </p> : <p></p>}</h2>
<div className="table-wrap">
  <table className="table">
    <tbody>
      <tr>
        <th className="cell">Name</th>
        <th className="cell">Image</th>
        <th className="cell">Price <small>($/gallon)</small></th>
        <th className="cell">More info</th>
        <th className="cell">Purchase</th>
      </tr>
        {props.beers.map((beer, idx) =>
        <tr key={idx}>
          <td className="cell">{beer.name}</td>
          <td className="cell"><img src={beer.image_url} alt="Beer"/></td>
          <td className="cell">{beer.price}</td>
          <td className="cell"><Link className="btn btn-success"to={`beers/${beer._id}`}>More Info</Link></td>
          <td className="cell">
{props.user ? <div>
            <button onClick={() => {props.cart.push(beer); props.handleRenderCart()}} className="btn btn-success">Add to Cart</button>
              <br /><br /><br />
              <button disabled={!(props.cart.includes(beer))} onClick={() => {props.remove(props.cart, beer); console.log(props.cart); props.handleRenderCart()}} className="btn btn-danger">Remove from Cart</button>
              </div>  
              : 
              <Link to="/login" className="btn btn-danger">Login</Link>}
            
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>
<div className="center">
{props.user ? <Link to="/checkout"className="btn btn-success">Go to Cart</Link> : <Link to="/login" className="btn btn-danger">Login First to Go to Cart</Link>}
</div>
<br/>
<br/>
<br/>
</div>
  )
}


export default BeerIndex