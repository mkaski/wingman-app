import React, { Component } from 'react';
import moment from 'moment';
import Pool from './Pool';
import Event from './Event';
import {processedWings as mockdata } from './data';

const API_URL = 'http://localhost:1337/api/events';

class Dashboard extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    let activeEvents = this.props.activeEvents || false;
    if (activeEvents) {
      activeEvents = activeEvents.map((e) => {
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
