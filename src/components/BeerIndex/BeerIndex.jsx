import React from 'react';
import './BeerIndex.css';
import { Link } from 'react-router-dom';

const BeerIndex = (props) => {
  return (
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
          <td><img src={beer.image_url}/></td>
          <td>{beer.price}</td>
          <td><Link to={`beers/${beer._id}`}>View Beer</Link></td>
          <td>
            <form action="/checkout" method="get">
              <button className="btn btn-success" type="submit">Add to cart</button>
            </form>
          </td>
        </tr>
      )}
    </tbody>
  </table>
  )
}

export default BeerIndex