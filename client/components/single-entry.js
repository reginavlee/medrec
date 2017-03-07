import React from 'react';

// incoming data is an individual userdata object

const SingleEntry = ({entry}) => (
  <div>
    <p>{entry.text}</p>
  </div>
)

export default SingleEntry;

