import React from 'react';
import './Checkout.css';


const Checkout = (props) => {
  let duplicateArray = [];
  props.cart.forEach(function(beer){
    if (!duplicateArray.includes(beer)){
      duplicateArray.push(beer);
    }
  });

    var totalPrice;

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
          totalPrice = props.totalPriceArray.reduce(function(a, b) { return a + b; }, 0);
          // props.getTotalPrice()
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
    {totalPrice ? <h1>Total: ${totalPrice}</h1> : <p></p>}

  </div>
  )


}

export default Checkout