
import React from 'react';
import './BeerIndex.css';
import { Link } from 'react-router-dom';

const BeerIndex = (props) => {
  // if (props) {
  return (
<div className="table-wrap">
  <table className="table">
    <tbody>
      <tr>
        <th>Name</th>
        <th>Image</th>
        <th>Price <small>($/gallon)</small></th>
        <th>More info</th>
        <th>Purchase</th>
      </tr>
        {props.beers.map((beer, idx) =>
        <tr key={idx}>
          <td>{beer.name}</td>
          <td><img src={beer.image_url} alt="Beer"/></td>
          <td>{beer.price}</td>
          <td><Link className="btn btn-success"to={`beers/${beer._id}`}>More Info</Link></td>
          <td>
            {props.user ? <Link to="/checkout" className="btn btn-success">Add to Cart</Link> : <Link to="/login" className="btn btn-success">Add to Cart</Link>}
            
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>
  )
}
//   else {
//     return ( 
//       <p>Loading</p>
//     )
//   }
// // }

export default BeerIndex