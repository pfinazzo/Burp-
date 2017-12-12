import React, {Component} from 'react';

const BeerShow = ({ beers, match }) => {
  let currentBeer = (beers && beers.length) ? beers.filter(beer => beer._id === match.params.beer_id)[0] 
                                            : false
  return (
    <div>
      { currentBeer ? 
      <div>
      <h1>{ currentBeer.name }</h1> 
      <p>{ currentBeer.tagline }</p>
      <p>ABV (alcohol level): { currentBeer.abv }</p>
      <p>IBU:(bitterness level): { currentBeer.ibu }</p>
      <p>{ currentBeer.description }</p>
      <p>Food Pairing: { currentBeer.food_pairing }</p>
      <img src={ currentBeer.image_url }/>
      </div>
      : <p>Loading</p> }
    </div>
  )

}

export default BeerShow;