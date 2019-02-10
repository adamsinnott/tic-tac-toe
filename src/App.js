import React, { Component } from 'react';
import './App.css';
import TicTacToeApp from "./containers/TicTacToeApp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Tic Tac Toe!</h1>
        </header>
        <main>
          <TicTacToeApp />
        </main>
      </div>
    );
  }
}

export default App;
