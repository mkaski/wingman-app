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
      let pools = this.state.data.reduce((arrayOfCategories, wing) => {
        if (arrayOfCategories[wing.categories]) {
          arrayOfCategories[wing.categories].push(wing);
        } else {
          arrayOfCategories[wing.categories] = [];
          arrayOfCategories[wing.categories].push(wing);
        }
        return arrayOfCategories;
      }, []);
      this.setState({pools: pools});
      this.setState({activeEvents: pools['social_media']});
    })
    .catch(error => this.setState({ error, isLoading: false }));
  }
  setActivePool(data) {
    console.log('viasd', data);
  }
  render() {
    let pools = [];
    let externalPools = [];
    let activeEvents = [];
    if (this.state.pools) {
      pools = this.state.pools;
      activeEvents = this.state.activeEvents.map((e) => {
        return <Event data={e}> </Event>;
      });
      externalPools = Object.keys(pools).map((key) => {
        return <Pool data={pools[key]} onClick={this.setActivePool.bind(pools[key])}></Pool>
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
        <div className="App-header">
          <h1>Status</h1>
        </div>
        <div className="Pools">
          <div className="Lane Aircraft">
            <Pool>Mock data</Pool>
          </div>
          <div className="Lane External">
            <Pool></Pool>
            { externalPools }
          </div>
          <div className="Lane Resources">
            <Pool></Pool>
          </div>
          <div className="Lane Cargo">
            <Pool></Pool>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
