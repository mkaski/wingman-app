import React, { Component } from 'react';

class Event extends Component {
  render() {
    // 0,1,2 map to colors
    let statusClass = 'green';
    switch (this.props.data.impact) {
      case 1:
      case 2:
        statusClass = 'green';
        break;
      case 3:
        statusClass = 'yellow';
        break;
      case 4:
      case 5:
        statusClass = 'red'
        break;
      default:
        statusClass = 'green'
        break;
    }
    return (
      <div className={`Event ${statusClass}-event`}>
        <span> {this.props.data.story} </span>
      </div>
    );
  }
}

export default Event;
