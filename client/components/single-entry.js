import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

import Diagnoses from './diagnoses';

// incoming data is an individual userdata object

class SingleEntry extends Component {
  constructor(props) {
    super(props)
    this.state={
      clicked: false
    }
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.setState({
      clicked:true
    })
  }

  checkSymptoms() {
    var baseUrl = 'https://sandbox-healthservice.priaid.ch/';
    axios
      .get(baseUrl+'diagnosis')
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        res.status(404);
        throw err;
      })
  }

  render() {
    return (
      <div id="single-entry">
        <span className="entry-name">Name: {this.props.entry.name}</span>
        <span className="entry-date">Date: {this.props.entry.date}</span>
        <p className="entry-details">Details: {this.props.entry.text}</p>
        {this.state.clicked ? <Diagnoses /> : <Button type="submit" onClick={()=> this.handleButtonClick()}>Get possible diagnoses</Button> }
      </div>
    )
  }
}


export default SingleEntry;
