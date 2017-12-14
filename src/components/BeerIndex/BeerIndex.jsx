
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