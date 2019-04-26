import React from 'react';
import './reset.css';
import './App.css';

import Nav from './Nav';

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="App">
        <Nav/>
      </div>
    )
  }
}

export default App;
