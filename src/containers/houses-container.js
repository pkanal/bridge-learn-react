import React, { Component } from 'react';
import $ from 'jquery';

import Houses from '../components/house-list';

export default class HousesContainer extends Component {
  constructor() {
    super();

    this.state = {
      houses: [],
      currentHouse: 'No current house',
      form: {
        name: '',
      }
    }

    this.selectCurrentHouse = this.selectCurrentHouse.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  selectCurrentHouse(houseName) {
    this.setState({
      currentHouse: houseName,
    });
  }

  componentDidMount() {
    $.get('http://www.anapioficeandfire.com/api/houses').then(response => {
      this.setState({
        houses: response
      });
    });
  }

  handleChange(event) {
    this.setState({
      form: {
        name: event.target.value,
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      houses: [...this.state.houses, {
        name: this.state.form.name,
      }],
      form: {
        name: ''
      }
    });
  }

  render() {
    return (
      <div>
        <span style={{ color: 'red', fontSize: 20}}>Current House: {this.state.currentHouse}</span>
        <Houses selectCurrentHouse={ this.selectCurrentHouse } houses={this.state.houses} />
        <span style={{ color: 'blue', fontSize: 20}}>{ this.state.newHouse }</span>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.form.name} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
