import React from 'react';
import './styles/reset.css';
import './styles/App.css';

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
