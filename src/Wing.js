import React, { Component } from 'react';
import moment from 'moment';

class Wing extends Component {
  renderRelease() {
    if (this.props.post.release) {
      return (
        <p></p>
      )
    }
    return;
  }
  render() {
    let wing = this.props.wing;
    console.log(wing);
    const tags = wing.tags.map((t) => {
      console.log(t);
      return <span> {t} </span>;
    });
    return (
      <div className="Wing">
        <div className="Info">
        </div>
        <div className="Ratings">
        </div>
      </div>
    );
  }
}

export default Wing;
