import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Sounds from './Sounds'
import Footer from './Footer'
import Requests from './Requests'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sounds />
        <Requests />
        <Footer />
      </div>
    );
  }
}

export default App;
