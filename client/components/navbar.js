import React, { Component } from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <nav className="navbar navbar-default navbar-left">
        <div className="container">
          <div clasName="navbar-header">
            <a className="navbar-brand" href="#">MedRec</a>
          </div>
          <ul className="nav navbar-nav">
            <li><a href="../home/home.html">Home</a></li>
            <li><a href="#">Get Entries</a></li>
            <li><a href="#">Add Entries</a></li>            
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar;
