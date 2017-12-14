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
          let computedPrice = beer.price * props.getOccurrence(props.cart, beer);
          props.totalPriceArray.push(computedPrice); 
          totalPrice = props.totalPriceArray.reduce((acc, curr) => acc + curr);
          // props.getTotalPrice()
          return (
            <tr key={idx}>
              <td className="cell">{beer.name}</td>
              <td className="cell img"><img src={beer.image_url}></img></td>
              <td className="cell">{props.getOccurrence(props.cart, beer)}</td>
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