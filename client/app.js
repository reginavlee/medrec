import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

import NavBar from './components/navbar';
import EntryForm from './components/entryForm';
import MultiEntry from './components/multi-entry';
import Jumbo from './components/jumbotron';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: null,
      postEntries: false,
      home: true
    }
    this.getEntries = this.getEntries.bind(this);
    this.handlePostEntryClick = this.handlePostEntryClick.bind(this);
  }

  getEntries(endpoint) {
    this.setState({
      entries: false,
      postEntries:false,
      home: false
    });
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

  handlePostEntryClick() {
    this.setState({
      entries: false,
      postEntries:false,
      home: false
    });
    this.setState({postEntries: true});
  }

  render() {
    return (
      <div className="home-container">
        {this.state.home ? <Jumbo /> : null}
        <div className="container">
          <NavBar getEntries={this.getEntries} postEntries={this.handlePostEntryClick}/>
          <div>
            {this.state.entries ? <MultiEntry data={this.state.entries}/> : null}
          </div>
          <div>
            {this.state.postEntries ? <EntryForm /> : null}
          </div>
        </div>
      </div>
    )
  }
}

render((<App />), document.getElementById('app'))





//USE LATER
          // {this.state.entries ? <EntryForm /> : null }