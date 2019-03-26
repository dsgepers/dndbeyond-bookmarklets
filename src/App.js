import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Player from "./Player";

class App extends Component {
  render() {
    console.log(this.props.links);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
          {this.props.links.map((link, i) => {
              // Return the element. Also pass key
              return (<Player key={i} link={link} />)
          })}
      </div>
    );
  }
}

export default App;
