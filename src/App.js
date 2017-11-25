import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard';
import Wing from './Wing';
import {wings as mockdata } from './data';

const API_URL = 'http://localhost:1337/api/wings';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      error: false,
      wings: false,
      post: false
    };
  }
  deleteWing(id) {
    delete this.state.wings[id];
  }
  componentDidMount() {
  // fetch data from db
  this.setState({
    isLoading: true
  });
  fetch(API_URL)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong ...');
      }
    }).then(data => {
      console.log('fetched data', data);
      this.setState({ wings: data, isLoading: false })
    })
    .catch(error => this.setState({ error, isLoading: false, wings: mockdata }));
  }
  render() {
    let wings = [];
    if (!this.state.isLoading && this.state.wings) {
      wings = this.state.wings.map((wing) => {
        return <Wing data={wing} />
      });
    }
    return (
      <div className="App">
        <div className="Wingman">
        <header className="App-header">
          <h1 className="App-title">WINGMAN</h1>
          <h4>suggestions</h4>
        </header>
        <div className="error">
          {this.state.error.toString()}
        </div>
        <div className="Wings">
          {wings}
        </div>
        </div>
        <Dashboard />
    </div>);
  }
}

export default App;
