import React, { Component } from 'react';
import moment from 'moment';
import Pool from './Pool';
import Event from './Event';
import {processedWings as mockdata } from './data';

const API_URL = 'http://localhost:1337/api/events';

class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: false,
      error: false,
      data: false,
      activeEvents: [],
    }
    // This binding is necessary to make `this` work in the callback
    this.setActivePool = this.setActivePool.bind(this);
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
      console.log('fetched dashboard data', data);
      this.setState({ data, isLoading: false });

    })
    .catch(error => this.setState({ error, isLoading: false }));
  }
  setActivePool(data) {
    console.log('viasd', data);
  }
  render() {
    let activeEvents = [];
    if (this.state.activeEvents) {
      activeEvents = this.state.activeEvents.map((e) => {
        return <Event data={e}> </Event>;
      });
    }

    return (
        <div className="Dashboard">
          <div className="Events">
            <div className="App-header">
              <h1>Events</h1>
            </div>
            { activeEvents }
          </div>
        </div>
    );
  }
}

export default Dashboard;
