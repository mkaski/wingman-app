import React, { Component } from 'react';
import moment from 'moment';

class Pool extends Component {
  render() {
    let pool = this.props.pool;
    console.log(pool);
    const events = pool.events.tags.map((t) => {
      console.log(e);
      return <span> {e} </span>;
    });
    return (
      <div className="Pool">
        { events }
      </div>
    );
  }
}

export default Pool;
