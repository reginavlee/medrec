import React, { Component } from 'react';

class EntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
  }

  render() {
    return(
      <form>
        <div className="form-group">
          <label for="name">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Name"></input>
        </div>
        <div className="form-group">
          <label id="detailsbox" for="details">Details</label>
          <input type="text" className="form-control" id="details" placeholder="Details"></input>
        </div>
        <div className="checkbox">
          <label id="medbox"><input type="checkbox" name="medical" />Medical</label>
          <label id="dentbox"><input type="checkbox" name="dental" />Dental</label>
          <label id="visionbox"><input type="checkbox" name="vision" />Vision</label>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    )
  }
}


export default EntryForm;
