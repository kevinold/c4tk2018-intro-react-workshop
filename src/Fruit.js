import React, { Component } from 'react';

class Fruit extends Component {
  render() {
    return (
      <li>{this.props.name}</li>
    );
  }
}

export default Fruit;
