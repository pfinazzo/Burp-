import React from 'react';
import './BeerIndex.css'

const BeerIndex = (props) => {
  return (
  <table>
    <tbody>
      <tr>
        <th>Name</th>
        <th>Price</th> 
        <th>ABV (alcohol-level)</th>
        <th>IBU (bitterness)</th>
        <th>Food Pairing</th>
        <th>Image</th>
        <th>Description</th>
      </tr>
        {props.beers.map((beer, idx) => 
        <tr key={idx}>
          <td>{beer.name}</td>
          <td>{beer.price}</td>
          <td>{beer.abv}</td>
          <td>{beer.ibu}</td>
          <td>{beer.food_pairing}</td>
          <td><img src={beer.image_url}/></td>
          <td>{beer.description}</td>
          <td><button onClick={()=>props.addItem(beer)}>+</button></td>
        </tr>
      )}
    </tbody>
  </table>
  )
}

export default BeerIndex