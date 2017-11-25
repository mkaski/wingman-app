import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard';
import Wing from './Wing';
import {wings as mockdata } from './data';

import Pool from './Pool';
import Event from './Event';

const API_URL = 'http://localhost:1337/api/wings';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      error: false,
      wings: false,
      post: false
    };
    this.handleWing = this.handleWing.bind(this);
  }
  deleteWing(id) {
    delete this.state.wings[id];
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
      console.log('fetched data', data);
      this.setState({ wings: data, isLoading: false });
      let pools = this.state.wings.reduce((arrayOfCategories, wing) => {
        if (arrayOfCategories[wing.categories]) {
          arrayOfCategories[wing.categories].push(wing);
        } else {
          arrayOfCategories[wing.categories] = [];
          arrayOfCategories[wing.categories].push(wing);
        }
        return arrayOfCategories;
      }, []);
      this.setState({pools: pools});
    })
    .catch(error => this.setState({ error, isLoading: false, wings: mockdata }));
  }
  handleWing(wing, status) {
    // send wing to backend
    // refresh all wings
    const updated = Object.assign({}, wing);
    updated.status = status;
    fetch('http://localhost:1337/api/process', {method:'POST', headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, body: JSON.stringify(updated)})
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      }).then(data => {
        console.log('updated response', data);
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }
  render() {
    let wings = [];
    if (!this.state.isLoading && this.state.wings) {
      wings = this.state.wings.map((wing) => {
        return <Wing data={wing} handleWing={this.handleWing} />
      });
    }
    let pools = [];
    let externalPools = [];
    let activeEvents = [];
    if (this.state.pools) {
      pools = this.state.pools;
      externalPools = Object.keys(pools).map((key) => {
        return <Pool data={pools[key]}></Pool>
      });
    }
    return (
      <div className="App">
        <div className="Status">
          <h2>Status</h2>
          <div className="Pools">
            <div className="Lane Aircraft">
              <h5>Aircraft</h5>
              <Pool></Pool>
              <Pool></Pool>
              <Pool></Pool>
            </div>
            <div className="Lane External">
              <h5>External factors</h5>
              <Pool></Pool>
              { externalPools }
            </div>
            <div className="Lane Resources">
              <h5>Resources</h5>
              <Pool></Pool>
            </div>
            <div className="Lane Cargo">
              <h5>Cargo</h5>
              <Pool></Pool>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="Wingman">
          <header className="App-header">
  <svg version="1.1" id="Capa_1" x="0px" y="0px" className="Man"
  	 viewBox="0 0 423.371 423.371" width="100px" fill="#fff">
  <g>
  	<g>
  		<g>
  			<path d="M47.725,202.386c-2.759,0-4.997-2.234-5-4.994c-0.014-12.215,6.93-36.119,33.305-39.152
  				c2.739-0.313,5.224,1.652,5.539,4.396c0.314,2.742-1.653,5.223-4.396,5.537c-24.198,2.783-24.448,28.131-24.447,29.207
  				c0.003,2.762-2.232,5.004-4.994,5.006C47.729,202.386,47.727,202.386,47.725,202.386z"/>
  		</g>
  		<g>
  			<path d="M407.7,179.042h-8.29c-3.669-12.844-10.765-26.395-24.439-33.385c-20.198-10.324-44.331-12.49-61.02-12.49
  				c-10.375,0-20.691,0.852-30.245,2.373H139.665c-9.553-1.521-19.87-2.373-30.245-2.373c-16.688,0-40.822,2.166-61.02,12.49
  				c-13.674,6.99-20.769,20.541-24.439,33.385h-8.29C7.029,179.042,0,186.073,0,194.714c0,8.641,7.029,15.672,15.671,15.672h4.466
  				c0.352,18.456,3.644,43.151,17.094,57.918c13.051,14.328,29.099,21.9,46.411,21.9c7.522,0,15.138-1.465,22.636-4.353
  				c22.301-8.594,54.064-40.174,73.883-73.457c4.788-8.031,8.064-16.018,9.84-23.578c0.5,0.168,1.025,0.279,1.582,0.279
  				c2.762,0,5-2.238,5-5v-11.98c0.946-1.152,4.446-4.172,15.104-4.177c10.657,0.005,14.157,3.024,15.104,4.177v11.98
  				c0,2.762,2.238,5,5,5c0.557,0,1.082-0.111,1.582-0.279c1.775,7.56,5.052,15.545,9.84,23.574
  				c19.818,33.287,51.581,64.867,73.884,73.459c7.498,2.891,15.113,4.355,22.635,4.355c17.313,0,33.361-7.572,46.411-21.9
  				c13.449-14.767,16.742-39.462,17.095-57.918h4.465c8.641,0,15.671-7.031,15.671-15.672
  				C423.371,186.073,416.341,179.042,407.7,179.042z M20.338,200.386h-4.667c-3.127,0-5.671-2.545-5.671-5.672
  				s2.544-5.672,5.671-5.672h6.023C20.966,193.261,20.559,197.148,20.338,200.386z M171.569,207.274
  				c-18.503,31.074-48.761,61.49-68.888,69.244c-6.347,2.445-12.752,3.685-19.04,3.685c-14.422,0-27.915-6.443-39.019-18.635
  				c-9.145-10.041-14.16-28.092-14.504-52.205c-0.001-0.045-1.449-42.391,22.832-54.803c18.426-9.418,40.879-11.395,56.469-11.395
  				c30.943,0,57.642,7.744,65.578,15.23C184.84,167.683,183.463,187.325,171.569,207.274z M233.387,164.566
  				c-3.225-3.148-7.555-6.629-21.726-6.629c-14.171,0-18.453,3.48-21.678,6.63c-1.557-5.229-4.26-9.797-8.124-13.442
  				c-2.094-1.976-4.891-3.848-8.255-5.584h76.162c-3.365,1.736-6.162,3.608-8.256,5.584
  				C237.647,154.77,234.943,159.337,233.387,164.566z M393.253,209.364c-0.345,24.113-5.36,42.164-14.505,52.205
  				c-11.104,12.191-24.597,18.635-39.019,18.635c-6.287,0-12.692-1.24-19.039-3.685c-20.127-7.754-50.386-38.17-68.889-69.246
  				c-11.894-19.947-13.27-39.588-3.429-48.875c7.937-7.486,34.636-15.23,65.578-15.23c15.591,0,38.042,1.977,56.469,11.395
  				C394.628,166.937,393.253,209.319,393.253,209.364z M407.7,200.386h-4.667c-0.221-3.238-0.628-7.125-1.356-11.344h6.023
  				c3.127,0,5.671,2.545,5.671,5.672S410.827,200.386,407.7,200.386z"/>
  			<g>
  				<path d="M375.647,202.386c-0.002,0-0.004,0-0.006,0c-2.757-0.002-4.99-2.236-4.994-4.992
  					c-0.006-1.113-0.43-26.459-24.447-29.221c-2.743-0.314-4.711-2.795-4.396-5.537c0.316-2.742,2.785-4.717,5.538-4.396
  					c26.375,3.033,33.318,26.938,33.305,39.152C380.644,200.151,378.405,202.386,375.647,202.386z"/>
  			</g>
  		</g>
  	</g>
  </g>

  </svg>

            <h1 className="App-title">WINGMAN</h1>
            <h4>air traffic enhanching suggestions</h4>
          </header>
          <div className="error">
            {this.state.error.toString()}
          </div>

          <div className="Wings">
            {wings}
          </div>
          </div>
          <Dashboard />
        </div>
    </div>);
  }
}

export default App;
