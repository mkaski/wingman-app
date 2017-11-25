import React, { Component } from 'react';

class Pool extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: this.props.data
    };
  }
  updateEvents() {

  }
  render() {
    // 0,1,2 map to colors
    let statusClass = 'green';
    let impact = 1;
    if (this.props.data) {
      this.props.data.forEach((w) => {
        console.log('w',w.impact);
        switch (w.impact) {
          case 0:
          case 1:
            statusClass = 'green';
            break;
          case 2:
            statusClass = 'yellow';
            break;
          case 3:
            statusClass = 'red'
            break;
          default:
            statusClass = 'green'
            break;
        }
      });
    }
    return (
      <div className={`Pool Button ${statusClass}`} onClick={this.props.updateEvents}>

      </div>
    );
  }
}

export default Pool;
