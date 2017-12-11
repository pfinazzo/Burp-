import React, { Component } from 'react';
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import BeerIndex from '../../components/BeerIndex/BeerIndex';
import Checkout from '../../components/Checkout/Checkout';
import Confirmation from '../../components/Confirmation/Confirmation';
import NavBar from '../../components/NavBar/NavBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    }
  }


methods

addItem(props) {
  fetch('/beers', {
    method: "POST",
    headers: { 'Content.type' : 'application/json'},
    body: JSON.stringify({beer: props.beer})
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
          <NavBar />
            <Switch>
              <Route exact path="/" render ={() => <BeerIndex beers={this.state.beers} addItem={this.addItem}/>}/>
              <Route path="/checkout" render={() => <Checkout />}/>
              <Route path="/confirmation" render={() => <Confirmation />}/>
            </Switch>
      </div>
    );
  }
}

export default App;