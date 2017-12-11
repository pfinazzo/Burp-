import React from 'react';
import './BeerIndex.css';
import { Link } from 'react-router-dom';

const BeerIndex = (props) => {
  return (
  <table>
    <tbody>
      <tr>
        <th>Name</th>
        <th>Image</th>
      </tr>
        {props.beers.map((beer, idx) => 
        <tr key={idx}>
          <td>{beer.name}</td>
          <td><img src={beer.image_url}/></td>
          <td><Link to={'beers/' + beer.id}>View Beer</Link></td>
        </tr>
      )}
    </tbody>
  </table>
  )
}

export default BeerIndex