import React, {Component} from 'react';
import './BeerShow.css'

const BeerShow = ({ beers, match }) => {
  let currentBeer = (beers && beers.length) ? beers.filter(beer => beer._id === match.params.beer_id)[0] 
                                            : false
  return (
    <div>
      { currentBeer ? 
      <div>
        <table>
          <tr>
          <th>Name</th>
          <th>Tagline</th>
          <th>ABV (alcohol level)</th>
          <th>IBU (bitterness level)</th>
          <th>Description</th>
          <th>Food Pairing</th>
          <th>Image</th>
          </tr>
         <tr> 
      <td>{ currentBeer.name }</td> 
      <td>{ currentBeer.tagline }</td>
      <td>{ currentBeer.abv }</td>
      <td>{ currentBeer.ibu }</td>
      <td className="description">{ currentBeer.description }</td>
      <td>{ currentBeer.food_pairing }</td>
      <td><img src={ currentBeer.image_url }/></td>
      </tr>
      </table>
      </div>
      : <p>Loading</p> }
    </div>
  )

}

export default BeerShow;