
import React, {Component} from 'react';
import './BeerIndex.css';
import { Link } from 'react-router-dom';


class BeerIndex extends Component {
  render(props){
  return (
    <div>
  <h2 className="center">{this.props.cart ? <p>Cart: {this.props.cartLength} </p> : <p></p>}</h2>
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
        {this.props.beers.map((beer, idx) =>
        <tr key={idx}>
          <td className="cell">{beer.name}</td>
          <td className="cell"><img src={beer.image_url} alt="Beer"/></td>
          <td className="cell">{beer.price}</td>
          <td className="cell"><Link className="btn btn-success"to={`beers/${beer._id}`}>More Info</Link></td>
          <td className="cell">
{this.props.user ? <div>
            <button onClick={() => {this.props.cart.push(beer); this.props.handleRenderCart()}} className="btn btn-success">Add to Cart</button>
              <br /><br /><br />
              <button disabled={!(this.props.cart.includes(beer))} onClick={() => {this.props.remove(this.props.cart, beer); console.log(this.props.cart); this.props.handleRenderCart()}} className="btn btn-danger">Remove from Cart</button>
              </div>  
              : 
              <Link to="/login" className="btn btn-danger">Login</Link>}
            
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>
<div className="center">
{this.props.user ? <Link to="/checkout"className="btn btn-success">Go to Cart</Link> : <Link to="/login" className="btn btn-danger">Login First to Go to Cart</Link>}
</div>
<br/>
<br/>
<br/>
</div>
  )
}
}


export default BeerIndex