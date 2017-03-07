import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

// incoming data is an individual userdata object

class SingleEntry extends Component {
  constructor(props) {
    super(props)
    this.state={
      clicked: false
    }
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(e) {
    this.setState({
      clicked:true
    })
  }

  render() {
    return (
      <div id="single-entry">
        <span className="entry-name">Name: {this.props.entry.name}</span>
        <span className="entry-date">Date: {this.props.entry.date}</span>
        <p className="entry-details">Details: {this.props.entry.text}</p>
        <Button type="submit">Check possible symptoms</Button>
      </div>
    )
  }
}


export default SingleEntry;
