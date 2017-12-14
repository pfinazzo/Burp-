import React from 'react';
import './Checkout.css';

const Checkout = (props) => {
  return (
  <div className="container nav">
    <table>
      <tbody>
        <tr>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price (per gallon)</th>
        <th>Computed Price</th>
        </tr>
        {props.cart.map(function(beer, idx) { 
          // if (props.getOccurrence(props.cart, beer) === 1) {
          return (
        <tr key={idx}>
          <td className="cell">{beer.name}</td>
          <td className="cell">{props.getOccurrence(props.cart, beer)}</td>
          <td className="cell">{beer.price}</td>
          <td className="cell">{beer.price * props.getOccurrence(props.cart, beer)}</td>
        </tr>
                )
              // }
            }
          )}
      </tbody>
    </table>
  </div>
  )
}

export default Checkout