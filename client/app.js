import React, { Component } from 'react';
import { render } from 'react-dom';

import NavBar from './components/navbar';
import EntryForm from './components/entryForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <EntryForm />
      </div>
    )
  }
}

render((<App />), document.getElementById('app'))
