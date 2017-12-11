import React from 'react';

const BeerShow = (props) => {
  
      let currentBeer = props.beers[props.match.params.id]
  
      return (
          <div>
            BeerShow
          </div>
      ) 
  }

  export default BeerShow;