import React, { Component } from 'react';
import { render } from 'react-dom';

import NavBar from './components/navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <NavBar />
    )
  }
}

render((<App />), document.getElementById('app'))
