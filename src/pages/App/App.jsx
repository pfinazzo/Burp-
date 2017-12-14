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



// lifecyle methods

componentDidMount() {
  fetch('/api/beers').then(res => res.json())
  .then(beers => {
    this.setState({
      beers
    })
  })
  let user = userService.getUser();
  this.setState({user});
}
render() {
    return (
      <div>
          <NavBar checked={this.state.checked}/>
            <Switch>
              <Route exact path="/" render ={(props) => <LoginPage beers={this.state.beers} {...props}
                handleLogin={this.handleLogin}/>} />
              <Route exact path="/login" render={(props) => <LoginPage {...props} handleLogin={this.handleLogin}/>} />
              <Route exact path="/signup" render={(props) => <SignupPage {...props} handleSignup={this.handleSignup}/>} />
              <Route exact path="/beers" render ={(props) => <BeerIndex {...props} beers={this.state.beers} addItem={this.addItem}/>}/>
              <Route path="/checkout" render={() => <Checkout />}/>
              <Route path="/confirmation" render={() => <Confirmation />}/>
              <Route path="/beers/:beer_id" render={ (match) => <BeerShow beers={this.state.beers} { ...match} /> } />
            </Switch>
      </div>
    );
  }
}

export default App;