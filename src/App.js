import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import Houses from './containers/houses-container';


class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/houses" component={Houses}/>
      </Router>
    );
  }
}

export default App;
