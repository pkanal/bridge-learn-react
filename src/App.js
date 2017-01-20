import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Home from './containers/home-container';
import Houses from './containers/houses-container';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Home}>
          <Route path='houses' component={Houses} />
        </Route>
      </Router>
    );
  }
}

export default App;
