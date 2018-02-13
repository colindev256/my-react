import React, { Component } from 'react';
import Progress from 'react-progressbar';

export class Jockey extends Component {
    constructor(props){
      super(props);
      this.state = {
        avatar: "https://avatars1.githubusercontent.com/u/3757315?v=4",
        interval: Math.floor(Math.random() * 500),
        progress: 0,
      }
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick = () => {
      // const that = this;
      this.interval = setInterval(() => {
        this.setState((previousState) => {
          if(previousState.progress >= 99){
             return { progress:100 }
          }
          return { progress: previousState.progress + 1 }
        });
      }, this.state.interval);
    }
  
    render() {
      const Buttons = () => (
        <div className="App-buttons">
          <button className="ui primary button" onClick={this.handleClick}>Start</button>
          <button className="ui button">Reset</button>
        </div>
      );
  
      return (
        <div>
          <Buttons />
          <div className="App-field">
            <h1>Race Track</h1>
            <img src={this.state.avatar} alt=""/>
            <Progress className="App-progress" completed={this.state.progress}/>
          </div>
        </div>
      );
    }  
}
