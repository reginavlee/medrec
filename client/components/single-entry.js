import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

import Diagnoses from './diagnoses';

// incoming data is an individual userdata object

class SingleEntry extends Component {
  constructor(props) {
    super(props)
    this.state={
      clicked: false,
      symptoms: null,
    }
    this.checkSymptoms = this.checkSymptoms.bind(this);
    this.randomNum = Math.floor(Math.random() * 200) + 1;
  }

  checkSymptoms(gender, dob) {
    console.log(JSON.stringify([this.randomNum]));
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Iml0c21lcmVnaW5hbGVlLnJsQGdtYWlsLmNvbSIsInJvbGUiOiJVc2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiMTI5NSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IjIwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGltaXQiOiI5OTk5OTk5OTkiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJQcmVtaXVtIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAxNy0wMy0wNyIsImlzcyI6Imh0dHBzOi8vc2FuZGJveC1hdXRoc2VydmljZS5wcmlhaWQuY2giLCJhdWQiOiJodHRwczovL2hlYWx0aHNlcnZpY2UucHJpYWlkLmNoIiwiZXhwIjoxNDg4OTU1NTg4LCJuYmYiOjE0ODg5NDgzODh9.oSPWeGz9MmUidW5FGhITT1y0YAXv5AIIVzwJBUP8I2U";
    const url = 'https://sandbox-healthservice.priaid.ch/diagnosis'+'?symptoms=["'+this.randomNum+'"]&gender='+gender+'&year_of_birth='+dob+'&token='+token+'&language=en-gb&format=json';
    let temp = null;
    axios
      .get(url)
      .then((diagnosis) => {
        temp = diagnosis.data
        console.log('temp', temp);
        this.setState({
          clicked:true,
          symptoms: temp
        })
        console.log('successful get to apimedic');
      })
      .catch((err) => {
        console.log('error in get to apimedic');
        throw err;
      })
  }

  render() {
    return (
      <div id="single-entry">
        <span className="single-entry-span entry-name">Name: {this.props.entry.name}</span>
        <span className="single-entry-span entry-date">Date: {this.props.entry.date}</span>
        <span className="single-entry-span entry-Gender">Gender: {this.props.entry.gender}</span>
        <span className="single-entry-span entry-Gender">Category: {this.props.entry.category}</span>                
        <p className="entry-details">Details: {this.props.entry.text}</p>
        {this.state.clicked ? 
          <Diagnoses symptoms={this.state.symptoms} /> : 
          <Button type="submit" onClick={()=> this.checkSymptoms(this.props.entry.gender, this.props.entry.dob)}>Get possible diagnoses</Button> }
      </div>
    )
  }
}


export default SingleEntry;

