import React, { Component } from 'react';

import { Navbar, NavbarBrand } from 'reactstrap';

import MainComponent from './components/MainComponent'
import './App.css';

class App extends Component {



  render() {
    return (
      <div className="App">

        <MainComponent />
      </div>

    )
  }

}

export default App;
