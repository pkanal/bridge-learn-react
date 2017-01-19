import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import Houses from './containers/houses-container';
import Home from './containers/home-container';


class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}>
          <Route path="/houses" component={Houses}/>
        </Route>
      </Router>
    );
  }
}

export default App;
