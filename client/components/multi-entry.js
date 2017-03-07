import React from 'react';
import SingleEntry from './single-entry';

// incoming props is an array of userdata objects

const MultiEntry = ({data}) => (
  <div className="multi-entry">
    {data.map((entry, i) => (
      <SingleEntry entry={entry} key={i} />
    ))}
  </div>
)

export default MultiEntry;
