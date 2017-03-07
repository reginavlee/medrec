import React, { Component } from 'react';
import axios from 'axios';

class EntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      text: "",
      category: ""
    }
    this.postEntries = this.postEntries.bind(this);
    this.handleBoxChange = this.handleBoxChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);    
  }

  postEntries(incomingData) {
    axios
      .post('http://localhost:2000/entries', incomingData)
      .then((result) => {
        console.log('successful post from front end', result);
      })
      .catch((err) => {
        console.log('error in post from front end', err);
      })
    console.log('incoming data in post entries', incomingData)
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleTextChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  handleBoxChange(event) {
    this.setState({
      category: event.target.value
    });
  }

  render() {
    return(
      <form className="form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Name" onChange={this.handleNameChange}></input>
        </div>
        <div className="form-group">
          <label id="detailsbox" htmlFor="details">Details</label>
          <input type="text" className="form-control" id="details" placeholder="Details" onChange={this.handleTextChange}></input>
        </div>
        <div className="form-group">
          <label id="category" htmlFor="category">Category</label>
          <div className="checkbox"> 
            <label id="medbox" className="checkbox-inline"><input type="checkbox" name="medical" value="medical" onClick={this.handleBoxChange} />Medical</label>
            <label id="dentbox" className="checkbox-inline"><input type="checkbox" name="dental" value="dental" onClick={this.handleBoxChange} />Dental</label>
            <label id="visionbox" className="checkbox-inline"><input type="checkbox" name="vision" value="vision" onClick={this.handleBoxChange} />Vision</label>
          </div>
        </div>
        <button type="submit" className="btn btn-default" onClick={() => this.postEntries(this.state)}>Submit</button>
      </form>
    )
  }
}


export default EntryForm;
