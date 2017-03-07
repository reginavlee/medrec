import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

import NavBar from './components/navbar';
import EntryForm from './components/entryForm';
import MultiEntry from './components/multi-entry';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: false
    }
    this.getEntries = this.getEntries.bind(this);
  }

  getEntries(endpoint) {
    const basepath = 'http://localhost:2000'
    axios
      .get(basepath + endpoint)
      .then((response) => {
        console.log('getting response from server from front end');
        console.log(response.data);
        this.setState({
          entries: response.data
        });
      })
      .catch((err)=> {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <NavBar getEntries={this.getEntries} />
        <div>
          {this.state.entries ? <MultiEntry data={this.state.entries}/> : null}
        </div>
      </div>
    )
  }
}

render((<App />), document.getElementById('app'))





//USE LATER
          // {this.state.entries ? <EntryForm /> : null }