import React, { Component } from 'react';
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import './App.css';
import BeerIndex from '../../components/BeerIndex/BeerIndex';
import Checkout from '../../components/Checkout/Checkout';
import Confirmation from '../../components/Confirmation/Confirmation';
import NavBar from '../../components/NavBar/NavBar';
import BeerShow from '../../components/BeerShow/BeerShow'
import Login from '../../components/Login/Login'

class App extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
      checked: false
    }
  }


//methods

addItem(props) {
  fetch('/beers', {
    method: "POST",
    headers: { 'Content.type' : 'application/json'},
    body: JSON.stringify({beer: props.beer})
  })
}

loggedIn = () => {
  this.setState({
      checked: !this.state.checked
  })
}


// lifecyle methods

componentDidMount() {
  fetch('/beers').then(res => res.json())
  .then(beers => {
    this.setState({
      beers
    })
  })
}
render() {
    return (
      <div>
          <NavBar checked={this.state.checked}/>
            <Switch>
              <Route exact path="/" render ={(props) => this.state.checked ? <BeerIndex beers={this.state.beers}/> : <Login beers={this.state.beers} loggedIn={this.loggedIn} checked={this.state.checked}/>} />
              <Route exact path="/beers" render ={() => <BeerIndex beers={this.state.beers} addItem={this.addItem}/>}/>
              <Route path="/checkout" render={() => <Checkout />}/>
              <Route path="/confirmation" render={() => <Confirmation />}/>
              <Route path="/beers/:beer_id" render={(props) => <BeerShow {...props} beers={this.state.beers} checked={this.state.checked} /> } />
            </Switch>
      </div>
    );
  }
}

export default App;