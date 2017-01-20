import React, { Component } from 'react';
import { Link } from 'react-router';

export default class HomeContainer extends Component {
  render() {
    return (
      <div>
        <Link to='/houses'>
          Houses
        </Link>
        <Link to='/'>
          Home
        </Link>
        {this.props.children}
      </div>
    );
  }
}
