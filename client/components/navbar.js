import React, { Component } from 'react';
import axios from 'axios';

class NavBar extends Component {
  render() {
    return(
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">MedRec</a>
          </div>
          <ul className="nav navbar-nav">
            <li><a href="/">Home</a></li>
            <li onClick={()=> this.props.getEntries('/entries')} ><a href="#">Entries</a></li>
            <li onClick={()=> this.props.postEntries()}><a href="#">Add New Entries</a></li>            
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Login</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar;
