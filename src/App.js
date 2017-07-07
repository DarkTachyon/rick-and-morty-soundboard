import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Sounds from './Sounds'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sounds />
      </div>
    );
  }
}

export default App;
