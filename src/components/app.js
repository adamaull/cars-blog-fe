import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from './Home';
import About from './About';
import AddCar from './AddCar';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='header'>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />           
              <Route path="/about" component={About} />
              <Route path="/addCar" component={AddCar} />        
              <Redirect to="/" />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}
