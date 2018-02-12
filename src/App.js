import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fruit from './Fruit';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {fruit: []};
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => 
         this.setState({
          fruit: json
         })
      )
  }

  render() {
    const { fruit } = this.state;
    return (
      <div className="App">
      <ul>
      { 
        fruit.map(
          (v, i) => 
            <Fruit key={i} name={v.name} />
        )
      }
      </ul>
      </div>
    );
  }
}

export default App;
