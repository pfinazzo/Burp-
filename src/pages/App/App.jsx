import React, { Component } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import BeerIndex from '../../components/BeerIndex/BeerIndex';
import Checkout from '../../components/Checkout/Checkout';
import Confirmation from '../../components/Confirmation/Confirmation';
import NavBar from '../../components/NavBar/NavBar';
import BeerShow from '../../components/BeerShow/BeerShow'
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import userService from '../../utils/userService';

class App extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
      user: '',
      cart: []
    }
  }


//methods


addItem(props) {
  fetch('/api/beers', {
    method: "POST",
    headers: { 'Content.type' : 'application/json'},
    body: JSON.stringify({beer: props.beer})
  })
}

getOccurrence(array, value) {
  var count = 0;
  array.forEach((elem) => (elem === value && count++));
  return count;
  this.setState({count});
}

handleLogout = () => {
  userService.logout();
  this.setState({user: null});
}

handleSignup = () => {
  this.setState({user: userService.getUser()});
}

handleLogin = () => {
  this.setState({user: userService.getUser()});
}

handleRenderCart = () => {
  this.setState({cart: this.state.cart})
}

// lifecyle methods

componentDidMount() {
  let user = userService.getUser();
  this.setState({user});
  fetch('/api/beers').then(res => res.json())
  .then(beers => {
    this.setState({
      beers
    })
  })
}
render() {
  return (
    <div>
      <NavBar checked={this.state.checked} user={this.state.user} handleLogout={this.handleLogout}/>
        <Switch>
          <Route exact path="/" render ={(props) => <BeerIndex {...props} 
                                                         beers={this.state.beers} 
                                                       addItem={this.addItem} 
                                                          user={this.state.user} 
                                                          cart={this.state.cart} 
                                                    cartLength={this.state.cart.length}
                                              handleRenderCart={this.handleRenderCart} 
                                                 getOccurrence={this.getOccurrence}
                                                 count={this.state.count}/>}/>

          <Route path="/checkout" render={(props) => this.state.user ? <Checkout cart={this.state.cart} 
                                                                           cartLength={this.state.cart.length} 
                                                                                 user={this.state.user}
                                                                        getOccurrence={this.getOccurrence}
                                                                         count={this.state.count}/> 
                                                                     : <LoginPage {...props} handleLogin={this.handleLogin}/>}/>

          <Route exact path="/login" render={(props) => <LoginPage {...props} handleLogin={this.handleLogin}/>} />

          <Route exact path="/signup" render={(props) => <SignupPage {...props} handleSignup={this.handleSignup}/>} />

          <Route exact path="/beers" render ={(props) => <BeerIndex {...props} 
                                                              beers={this.state.beers} 
                                                               user={this.state.user} 
                                                               cart={this.state.cart} 
                                                         cartLength={this.state.cart.length}
                                                   handleRenderCart={this.handleRenderCart}
                                                      getOccurrence={this.getOccurrence}
                                                      count={this.state.count}
                                                                    />}/>

          <Route path="/confirmation" render={() => <Confirmation     cart={this.state.cart} 
                                                                      user={this.state.user}/>}/>

          <Route path="/beers/:beer_id" render={(match, props) => <BeerShow beers={this.state.beers}
                                                                            {...props} 
                                                                            { ...match} 
                                                                            cart={this.state.cart} 
                                                                            user={this.state.user}
                                                                            cartLength={this.state.cart.length}
                                                                      handleRenderCart={this.handleRenderCart} 
                                                                         getOccurrence={this.getOccurrence}
                                                                         count={this.state.count}/> } />
                                                                       
              </Switch>
      </div>
    );
  }
}

export default App;