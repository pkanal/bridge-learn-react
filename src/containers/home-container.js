import React, { Component } from 'react';

export default class HomeContainer extends Component {
  render() {
    return (
      <div className='main-container'>
        { this.props.children }
      </div>
    );
  }
}
