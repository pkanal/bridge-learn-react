import React, { Component } from 'react';
import $ from 'jquery';

import Houses from '../components/house-list';

export default class HousesContainer extends Component {
  constructor() {
    super();

    this.state = {
      houses: [],
      currentHouse: 'No current house',
    }

    this.selectCurrentHouse = this.selectCurrentHouse.bind(this);
  }

  selectCurrentHouse(houseName) {
    this.setState({
      currentHouse: houseName,
    });
  }

  componentDidMount() {
    $.get('http://www.anapioficeandfire.com/api/houses?pageSize=100&hasWords=true').then(response => {
      this.setState({
        houses: response
      });
    });
  }

  render() {
    return (
      <div>
        <span style={{ color: 'red', fontSize: 20}}>Current House: {this.state.currentHouse}</span>
        <Houses selectCurrentHouse={ this.selectCurrentHouse } houses={this.state.houses} />
      </div>
    );
  }
}
