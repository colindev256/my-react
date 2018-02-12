import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './App.css';

const Horses = () => (
  
  <div>
    <h1>Colin's horses need to be in state ;)</h1>
  
  </div>
  
  );

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <h2 className="App-sub-title">Kurtosys Grads</h2>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/components/App/App.js</code> and save to reload.
        </p>
      <Horses />
      </div>
      
    );
  }
}