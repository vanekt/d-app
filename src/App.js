import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import First from './components/First';
import Second from './components/Second';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/first" component={First} />
        <Route path="/second" component={Second} />
      </div>
    );
  }
}

export default App;
