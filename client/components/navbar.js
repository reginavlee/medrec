import React, { Component } from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <nav className="navbar navbar-default">
        <div className="container">
          <div clasName="navbar-header">
            <a className="navbar-brand" href="#">MedRec</a>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar;
