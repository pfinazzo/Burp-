import React from 'react';
import './Checkout.css';
import {Link} from 'react-router-dom';


const Checkout = (props) => {
  let duplicateArray = [];
  props.cart.forEach(function(beer){
    if (!duplicateArray.includes(beer)){
      duplicateArray.push(beer);
    }
  });

  var total = calculateTotal(props.cart);
if (duplicateArray[0] === undefined) {
  return(
    <h1 class="center"> There's nothing in your cart! Return to the beers page to add beers to your cart!</h1>
  )
} 

  return (
  <div className="container table-wrap">
    <table className="table">
      <tbody>
        <tr>
        <th>Name</th>
        <th>Image</th>
        <th>Quantity</th>
        <th>Price (per gallon)</th>
        <th>Computed Price</th>
        </tr>
        {duplicateArray.map(function(beer, idx) { 
          let quantity = props.getOccurrence(props.cart, beer);
          let computedPrice = beer.price * quantity;
          props.totalPriceArray.push(computedPrice); 
          return (
            <tr key={idx}>
              <td className="cell">{beer.name}</td>
              <td className="cell img"><img src={beer.image_url} alt="beer"></img></td>
              <td className="cell">{quantity}</td>
              <td className="cell">{beer.price}</td>
              <td className="cell">{computedPrice}</td>
            </tr>
          )  
      })}
      </tbody>
    </table>
    {total ? <div><h1>Total: ${total}</h1>
              <Link to="/confirmation" class="btn btn-success">Checkout</Link></div> : <p></p>}

  </div>
  )
}

function calculateTotal (cart) {
  var total = cart.reduce((a, b) => {
      return a + b.price
  }, 0);

  return total;
}

export default Checkout