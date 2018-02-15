import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import { Race } from './Race';
import './App.css';

export class App extends Component {
  state = {
    start: false,
    reset: false
  }
  
  startClick = () => {
    this.setState({start: true});
    console.log(this.start);
  }

  resetClick = () => {
    this.setState({start: false});
  }

  render() {
    const Buttons = () => (
      <div className="App-buttons">
        <button className="ui primary button" onClick={this.startClick}>Start</button>
        <button className="ui button" onClick={this.resetClick}>Reset</button>
      </div>
    );
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React.js</h1>
        </header>
        <Buttons />
        <Race start={this.state.start} reset={this.state.reset}/>
      </div>
    );
  }
}