import React, { Component } from 'react';

class EntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
    this.postEntries = this.postEntries.bind(this);
  }

  postEntries(incomingData) {
    const basepath = 'http://localhost:2000';
    
  }

  handleBoxChange(event) {

  }

  render() {
    return(
      <form className="form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Name"></input>
        </div>
        <div className="form-group">
          <label id="detailsbox" htmlFor="details">Details</label>
          <input type="text" className="form-control" id="details" placeholder="Details"></input>
        </div>
        <div className="form-group">
          <label id="category" htmlFor="category">Category</label>
          <div className="checkbox"> 
            <label id="medbox" className="checkbox-inline"><input type="checkbox" name="medical" />Medical</label>
            <label id="dentbox" className="checkbox-inline"><input type="checkbox" name="dental" />Dental</label>
            <label id="visionbox" className="checkbox-inline"><input type="checkbox" name="vision" />Vision</label>
          </div>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    )
  }
}


export default EntryForm;
