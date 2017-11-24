import React, { Component } from 'react';
import moment from 'moment';

class Dashboard extends Component {
  fetchData() {

  }
  render() {
    const pools = this.props.pools.map((pool) => {
      return <Pool pool={pool}> </Pool>;
    });
    console.log(pools);
    return (
      <div className="Dashboard">
        { pools }
      </div>
    );
  }
}

export default Dashboard;
