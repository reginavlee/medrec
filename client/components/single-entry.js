import React from 'react';

// incoming data is an individual userdata object

const SingleEntry = ({entry}) => (
  <div>
    <h5>Name: {entry.author}</h5>
    <p>Details: {entry.text}</p>
  </div>
)

export default SingleEntry;

