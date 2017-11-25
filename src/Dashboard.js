import React, { Component } from 'react';
import moment from 'moment';
import Pool from './Pool';
import Event from './Event';
import {processedWings as data } from './data';

class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: false,
      error: false,
      data: data,
      activeEvents: [{text:'Kuubassa ukkostaa.', impact: 1}, {text:'Kuubassa ukkostaa.', impact: 5}, {text:'Kuubassa ukkostaa.', impact: 3}],
    }
  }
  updateEvents() {
    console.log('asd');
  }
  render() {
    const pools = this.state.data.reduce((arrayOfCategories, wing) => {
      if (arrayOfCategories[wing.category]) {
        arrayOfCategories[wing.category].push(wing);
      } else {
        arrayOfCategories[wing.category] = [];
        arrayOfCategories[wing.category].push(wing);
      }
      return arrayOfCategories;
    }, []);
    console.log(pools);
    const activeEvents = this.state.activeEvents.map((e) => {
      return <Event data={e}> </Event>;
    });
    const externalPools = Object.keys(pools).map((key) => {
      return <Pool data={pools[key]}></Pool>
    });
    console.log(externalPools);

    return (
      <div className="Dashboard">
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
        <div className="Events">
          { activeEvents }
        </div>
      </div>
    );
  }
}

export default Dashboard;
