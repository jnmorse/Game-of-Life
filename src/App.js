import React, { Component } from 'react';
import './App.css';
import { GameOfLife } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameOfLife rows={60} cols={60} />
      </div>
    );
  }
}

export default App;
