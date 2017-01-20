import React, { Component } from 'react';
import $ from 'jquery';

import Houses from '../components/house-list';

export default class HousesContainer extends Component {
  constructor() {
    super();

    this.state = {
      houses: []
    }
  }

  componentDidMount() {
    $.get('http://www.anapioficeandfire.com/api/houses').then(response => {
      this.setState({
        houses: response
      });
    });
  }

  render() {
    return (
      <Houses houses={this.state.houses} />
    );
  }
}
