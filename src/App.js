import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard';
import Wing from './Wing';
import {wings as data } from './data';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      error: false,
      wings: data,
      post: false
    };
  }
  render() {
    console.log(this.state.wings);
    let wings = this.state.wings.map((wing) => {
      console.log(wing);
      return <Wing data={wing} />
    });
    return (
      <div className="App">
        <div className="Wingman">
        <header className="App-header">
          <h1 className="App-title">WINGMAN</h1>
        </header>
        <div className="Wings">
          {wings}
        </div>
        </div>
        <Dashboard />
    </div>);
  }
}

export default App;
