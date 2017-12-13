
import React from 'react';
import './BeerIndex.css';
import { Link } from 'react-router-dom';

const BeerIndex = (props) => {
  return (
  <table className="table">
    <tbody>
      <br />
      <br />
      <br />
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
          <td><img src={beer.image_url}/></td>
          <td>{beer.price}</td>
          <td><Link className="btn btn-success"to={`beers/${beer._id}`}>View Beer</Link></td>
          <td>
            <Link to="/checkout" className="btn btn-success">Add to Cart</Link>
          </td>
        </tr>
      )}
    </tbody>
  </table>
  )
}

export default BeerIndex