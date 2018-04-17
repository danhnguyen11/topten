import React, { Component } from 'react';
import NavBar from './NavBar';
import Entries from '../containers/Entries'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Entries/>
      </div>
    );
  }
}

export default App;
