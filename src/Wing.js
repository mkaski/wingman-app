import React, { Component } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
class Wing extends Component {
  componentWillMount() {
    this.setState({score: this.props.data.impact})
  }
  render() {
    let wing = this.props.data;
    console.log('wing',wing);
    return (
      <div className="Wing-wrapper">
        <div className="Wing">
          <h2>{wing.heading}</h2>
          <div className="Info">
            {wing.story}
          </div>
          <div className="Score">
            <InputRange
              maxValue={3}
              minValue={0}
              value={this.state.score}
              onChange={score => this.setState({ score })} />
            <span className="desc">Impact</span>
          </div>
          <div className="Votes">
                <div className="votes-container">
                  <div className="downvote-wrap">
                    <div className="downvote">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                      <path class="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
                      </svg>
                    </div>
                  </div>
                  <div className="upvote-wrap">
                    <div className="upvote">
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
  <path fill="#000000" d="M19.354 10.146l-6-6c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l5.146 5.146h-16.293c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h16.293l-5.146 5.146c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l6-6c0.195-0.195 0.195-0.512 0-0.707z"></path>
  </svg>

                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
    );
  }
}

export default Wing;
