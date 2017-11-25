import React, { Component } from 'react';

class Pool extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: false,
      status: 0,
    };
  }
  updateEvents() {

  }
  render() {
    // 0,1,2 map to colors
    const statusClass = 'green';
    return (
      <div className={`Pool Button ${statusClass}`} onClick={this.props.updateEvents}>
      </div>
    );
  }
}

export default Pool;
