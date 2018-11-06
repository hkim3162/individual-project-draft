
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';



import './App.css';
// import AppNav from './components/AppNav/AppNav';

import HomePage from './pages/HomePage.js';

require('dotenv').config()

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
         <Route exact path="/v1/photos" component={HomePage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
