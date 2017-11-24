import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard';

class App extends Component {
  render() {
    let wings = this.state.props.forEach((wing) => {
      <Wing data={wing} />
    })

    return (
      <div className="App">
        <div className="Wingman">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          { wings }
        </div>
        <Dashboard></Dashboard>
      </div>
    );
  }
}

export default App;
