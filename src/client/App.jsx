import React, { Component } from 'react';
import { GameOfLife } from './components';

import '../styles/index.css';

class App extends Component {
  render() {
    return (
      <div>
        <GameOfLife rows={70} cols={70} />
      </div>
    );
  }
}

export default App;
