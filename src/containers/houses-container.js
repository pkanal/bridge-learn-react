import React, { Component } from 'react';
import $ from 'jquery';

import Houses from '../components/houses';

const API_BASE_URL = 'http://www.anapioficeandfire.com/api';

export default class HousesContainer extends Component {
  constructor() {
    super();

    this.state = {
      houses: [],
      currentHouse: null,
    };

    this.getHouse = this.getHouse.bind(this);
  }

  getHouse(house) {
    this.setState({
      currentHouse: house,
    });
  }

  componentDidMount() {
    $.get(`${API_BASE_URL}/houses?pageSize=30`).then(response => {
      this.setState({ houses: response });
    })
  }

  render() {
    return <Houses
            currentHouse={this.state.currentHouse}
            houses={this.state.houses}
            selectHouse={this.getHouse} />
  }
}
