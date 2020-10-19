import React, { Component } from 'react';

import { Navbar, NavbarBrand } from 'reactstrap';

import MainComponent from './components/MainComponent'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {



  render() {
    return (
      <BrowserRouter>

        <div className="App">

          <MainComponent />
        </div>
      </BrowserRouter>

    )
  }

}

export default App;
