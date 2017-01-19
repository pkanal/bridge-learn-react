import React, { Component } from 'react';
import $ from 'jquery';

import Houses from '../components/houses';

const API_BASE_URL = 'http://www.anapioficeandfire.com/api';

export default class HousesContainer extends Component {
  constructor() {
    super();

    this.state = {
      houses: [],
    };
  }

  componentDidMount() {
    $.get(`${API_BASE_URL}/houses`).then(response => {
      this.setState({ houses: response });
    })
  }

  render() {
    return <Houses houses={this.state.houses} />
  }
}
