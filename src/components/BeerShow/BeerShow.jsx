import React from 'react';

const BeerShow = (props) => {
  
      let currentBeer = props.beers[props.match.params._id]
      console.log(currentBeer);
  
      return (
          <div>
            <ul>
              <li></li>
            </ul>
          </div>
      ) 
  }

  export default BeerShow;