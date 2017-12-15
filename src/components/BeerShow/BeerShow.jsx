import React from 'react';
import './BeerShow.css';
import { Link } from 'react-router-dom';

const BeerShow = ({ beers, match, user, cart, handleRenderCart, cartLength, remove }) => {
  let currentBeer = (beers && beers.length) ? beers.filter(beer => beer._id === match.params.beer_id)[0] 
  : false
  return (
    <div>
    <h2 className="center">{cart ? <p>Cart: {cartLength} </p> : <p></p>}</h2>
      { currentBeer ? 
      <div className="table-wrap">
        <table className="table">
          <tbody>
          <tr>
          <th>Name</th>
          <th>Type</th>
          <th>ABV (alcohol level)</th>
          <th>IBU (bitterness level)</th>
          <th>Description</th>
          <th>Food Pairing</th>
          <th>Image</th>
          <th>Price <small>($/gallon)</small></th>
          </tr>
         <tr> 
      <td className="cell">{ currentBeer.name }</td> 
      <td className="cell">{ currentBeer.tagline }</td>
      <td className="cell">{ currentBeer.abv }</td>
      <td className="cell">{ currentBeer.ibu }</td>
      <td className="cell">{ currentBeer.description }</td>
      <td className="cell">{ currentBeer.food_pairing }</td>
      <td className="cell"><img src={ currentBeer.image_url } alt="Beer"/></td>
      <td className="cell">{ currentBeer.price}</td>
      <td className="cell">
        {user ? <div><button onClick={() => {cart.push(currentBeer); handleRenderCart()}} className="btn btn-success">Add to Cart</button><br /><br /><br /><button disabled={!(cart.includes(currentBeer))} onClick={() => {remove(cart, currentBeer); handleRenderCart()}} className="btn btn-danger">Remove from Cart</button><br /><br /><br /><Link to="/checkout"className="btn btn-success" >Go to Cart</Link></div> : <Link to="/login" className="btn btn-danger">Login First to Go to Cart</Link>}
          </td>
          
      </tr>
      </tbody>
      </table>
      <br />
      <br />
      <br />
      <br />
      <br />
      </div>
      : <p>Loading</p> }
    </div>
  )

}

export default BeerShow;