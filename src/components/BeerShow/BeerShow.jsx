import React from 'react';
import './BeerShow.css'

const BeerShow = ({ beers, match }) => {
  let currentBeer = (beers && beers.length) ? beers.filter(beer => beer._id === match.params.beer_id)[0] 
                                            : false
  return (
    <div className="container">
      { currentBeer ? 
      <div>
        <table>
          <tbody className="table-format">
          <tr>
          <th>Name</th>
          <th>Type</th>
          <th>ABV (alcohol level)</th>
          <th>IBU (bitterness level)</th>
          <th>Description</th>
          <th>Food Pairing</th>
          <th>Image</th>
          <th>Price <small>($/gallon)</small></th>
          </tr>
         <tr> 
      <td className="cell">{ currentBeer.name }</td> 
      <td className="cell">{ currentBeer.tagline }</td>
      <td className="cell">{ currentBeer.abv }</td>
      <td className="cell">{ currentBeer.ibu }</td>
      <td className="cell">{ currentBeer.description }</td>
      <td className="cell">{ currentBeer.food_pairing }</td>
      <td className="cell"><img src={ currentBeer.image_url } alt="Beer"/></td>
      <td className="cell">{ currentBeer.price}</td>
      </tr>
      </tbody>
      </table>
      <br />
      <br />
      <br />
      <br />
      <br />
      </div>
      : <p>Loading</p> }
    </div>
  )

}

export default BeerShow;